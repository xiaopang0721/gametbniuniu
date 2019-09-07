/**
* name 牛牛剧情
*/
module gametbniuniu.story {
	const enum MAP_STATUS {
		PLAY_STATUS_NONE = 0, // 准备阶段
		PLAY_STATUS_GAMESTART = 1, // 游戏开始
		PLAY_STATUS_BET = 2, // 下注阶段
		PLAY_STATUS_PUSH_CARD = 3, // 发牌阶段
		PLAY_STATUS_SHOW_CARDS = 4,// 摊牌阶段
		PLAY_STATUS_COMPARE = 5, // 比牌阶段
		PLAY_STATUS_SETTLE = 6, // 结算阶段
		PLAY_STATUS_SHOW_GAME = 7, // 本局展示阶段
	}
	const MAX_SEATS_COUNT = 6 // 最大座位数

	export class TbniuniuStory extends gamecomponent.story.StoryNormalBase {
		private _niuMgr: TbNiuNiuMgr;
		private _isFaPai: number;
		private _isFanPai: boolean;
		private _winnerIndex: number;
		private _niuMapInfo: TbniuniuMapInfo;
		private _curStatus: number;
		private _infoList: Array<any> = [];

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this._last_maplv = maplv;
			this.init();
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		get niuMgr() {
			return this._niuMgr;
		}

		get isFaPai() {
			return this._isFaPai;
		}

		init() {
			super.init();
			if (!this._niuMgr) {
				this._niuMgr = new TbNiuNiuMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
			this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();

		}

		private createObj() {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, TbNiuNiuData) as TbNiuNiuData;
			card.pos = new Vector2(825, 220);
			return card;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;
			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(TbniuniuPageDef.PAGE_TBNIUNIU_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._niuMapInfo = mapinfo as TbniuniuMapInfo;
			if (mapinfo) {
				this.onUpdateBattle();
				this.onUpdateState();
				this.onUpdateCardInfo();
				this.onUpdateFanPai();
			} else {
				this._niuMgr.offlineUnit = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			if (!this._niuMapInfo) return;
			let mapStatus = this._niuMapInfo.GetMapState();
			if (this._curStatus == mapStatus) return;
			this._curStatus = mapStatus;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit || !mainUnit.GetIndex()) return;
			switch (this._curStatus) {
				case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段

					break;
				case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始

					break;
				case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段

					break;
				case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
					this.cardsDeal();
					break;
				case MAP_STATUS.PLAY_STATUS_SHOW_CARDS:// 摊牌阶段
					break;
				case MAP_STATUS.PLAY_STATUS_COMPARE:// 比牌阶段
					this._niuMgr.gaipai();
					break;
				case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
					break;
				case MAP_STATUS.PLAY_STATUS_SHOW_GAME:// 本局展示阶段
					this._isFaPai = 0;
					this._index = 0;
					this._niuMgr.resetCardsIndex();
					break;
			}
		}

		//正常游戏发牌
		private cardsDeal(): void {
			if (!this._game.sceneObjectMgr.mainUnit) return;
			if (this._isFaPai) return;
			let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let max = MAX_SEATS_COUNT;
			let cards = [];
			for (let index = 0; index < max; index++) {
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				let mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
				if (unit) {
					if (unit.GetIndex() == idx) {
						cards = cards.concat(mainCards);
					} else {
						cards = cards.concat([0, 0, 0, 0, 0]);
					}
					this._niuMgr.setCardsIndex(unit.GetIndex());
				}
			}
			let handle = new Handler(this, this.createObj);
			this._niuMgr.Init(cards, handle);
			this._niuMgr.sort();
			this._niuMgr.fapai();
			this._niuMgr.fanpai();
			this._isFaPai = 1;
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!this._niuMapInfo) return;
			if (!mainUnit || !mainUnit.GetIndex()) return;
			if (this._isFaPai) return;
			let status = this._niuMapInfo.GetMapState();
			if (status >= MAP_STATUS.PLAY_STATUS_PUSH_CARD && status < MAP_STATUS.PLAY_STATUS_SHOW_GAME) {
				let idx = mainUnit.GetIndex();
				let max = MAX_SEATS_COUNT;
				let cards = [];
				for (let index = 0; index < max; index++) {
					let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
					let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
					let mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
					if (unit) {
						if (unit.GetIndex() == idx) {
							cards = cards.concat(mainCards);
						} else {
							cards = cards.concat([0, 0, 0, 0, 0]);
						}
						this._niuMgr.setCardsIndex(unit.GetIndex());
					}
				}
				let handle = new Handler(this, this.createObj);
				this._niuMgr.Init(cards, handle);
				this._niuMgr.sort();
				if (status > MAP_STATUS.PLAY_STATUS_SHOW_CARDS) {
					this._niuMgr.regaipai();
				} else {
					this._niuMgr.refapai();
				}
				this._niuMgr.reloadFanpai();
				this._isFaPai = 2;
			}
		}

		//战斗结构体 出牌
		private _index: number = 0;
		private onUpdateBattle(): void {
			if (!this._niuMapInfo) return;
			let battleInfoMgr = this._niuMapInfo.battleInfoMgr;
			let unitNum = this.getPlayerOnSeat();
			for (let i: number = 0; i < battleInfoMgr.info.length; i++) {
				let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (info instanceof gamecomponent.object.BattleInfoPlayCard) {
					if (i > this._index) {
						this._infoList.push(info);
						this._niuMgr.setValue(info);
						this._index = i;
					}
				}
			}
		}

		//断线重连,重发翻牌
		private onUpdateFanPai(): void {
			if (!this.isReConnected) return;
			if (!this._infoList.length) return;
			if (this._isFanPai) return;
			for (let i = 0; i < this._infoList.length; i++) {
				this._niuMgr.setValue(this._infoList[i]);
			}
			this._isFanPai = true;
		}

		private getPlayerOnSeat(): number {
			let unitNum = 0
			for (let index = 0; index < MAX_SEATS_COUNT; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index + 1)
				if (unit) {
					unitNum++;
				}
			}
			return unitNum;
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			if (this._niuMgr) {
				this._niuMgr.clear();
				this._niuMgr = null;
			}
			this._niuMapInfo = null;
		}
	}
}