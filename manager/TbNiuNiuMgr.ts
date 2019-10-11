/**
* name 
*/
module gametbniuniu.manager {
	const enum CARD_TYPE {
		NOT_NIU = 0, //没牛
		NIU_1 = 1, //牛一
		NIU_2 = 2, //牛二
		NIU_3 = 3, //牛三
		NIU_4 = 4, //牛四
		NIU_5 = 5, //牛五
		NIU_6 = 6, //牛六
		NIU_7 = 7, //牛七
		NIU_8 = 8, //牛八
		NIU_9 = 9, //牛九
		NIU_NIU = 10, //牛牛
		SILVER_NIU = 11, //银牛
		GOLD_NIU = 12, //金牛
		BOMB = 13, //炸弹
		SMALL_NIU = 14 //五小牛
	}

	const enum MULTIPLE {
		RATE_1 = 1, //没牛——牛六	1倍
		RATE_2 = 2, //牛七——牛八	2倍
		RATE_3 = 3, //牛九		  3倍
		RATE_4 = 4, //牛牛以上		4倍
	}

	const MAX_SEATS_COUNT = 6; //最大座位数
	const MAX_CARDS_COUNT = 5; //最大手牌数

	export class TbNiuNiuMgr extends gamecomponent.managers.PlayingCardMgrBase<TbNiuNiuData>{
		static readonly MAPINFO_OFFLINE: string = "TbNiuNiuMgr.MAPINFO_OFFLINE";//假精灵
		static readonly TUOGUAN_GAME: string = "TbNiuNiuMgr.TUOGUAN_GAME";//托管游戏
		static readonly DEAL_OVER: string = "TbNiuNiuMgr.DEAL_OVER";//发牌结束

		private _winnerIndex: number;//赢家位置
		private _offlineUnit: UnitOffline;//假精灵信息
		private _isGaiPai: boolean = false;
		private _isTuoGuan: number = 0;
		private _cardsIndex: Array<number> = [];//牌的归属位置

		constructor(game: Game) {
			super(game)
		}

		get offlineUnit() {
			return this._offlineUnit;
		}

		set offlineUnit(v) {
			this._offlineUnit = v;
			this.event(TbNiuNiuMgr.MAPINFO_OFFLINE)
		}

		get isTuoGuan() {
			return this._isTuoGuan;
		}

		set isTuoGuan(v) {
			this._isTuoGuan = v;
			this.event(TbNiuNiuMgr.TUOGUAN_GAME);
		}

		//对牌进行排序
		SortCards(cards: any[]) {
			if (!cards) return;
			cards.sort((a: TbNiuNiuData, b: TbNiuNiuData) => {
				return a.Compare(b, true);
			});
		}

		// 根据牌获取牌型
		// 获得牛数
		private getNiubyCards(cards): number {
			let lave: number = 0; //余数
			for (let i = 0; i < cards.length; i++) {
				lave = lave + cards[i].GetCount();
			}
			lave = lave % 10;
			for (let i = 0; i < cards.length - 1; i++) {
				for (let j = i + 1; j < cards.length; j++) {
					if ((cards[i].GetCount() + cards[j].GetCount()) % 10 == lave) {
						if (lave == 0) {
							return 10;
						} else {
							return lave;
						}
					}
				}
			}
			return 0;
		}

		public checkCardsRate(cardtype): number {
			let cardRate = MULTIPLE.RATE_1;
			if (cardtype >= 10) {
				cardRate = MULTIPLE.RATE_4;
				return cardRate;
			}
			if (cardtype == 9) {
				cardRate = MULTIPLE.RATE_3;
				return cardRate;
			}
			if (cardtype > 6 && cardtype < 9) {
				cardRate = MULTIPLE.RATE_2;
				return cardRate;
			}
			return cardRate;
		}

		public checkCardsType(cards): number {
			this.SortCards(cards);
			let cardtype = CARD_TYPE.NOT_NIU;
			if (this.is_small_niu(cards)) {
				cardtype = CARD_TYPE.SMALL_NIU;
				return cardtype
			}
			else if (this.is_bomb(cards)) {
				cardtype = CARD_TYPE.BOMB;
				return cardtype
			}
			else if (this.is_gold_niu(cards)) {
				cardtype = CARD_TYPE.GOLD_NIU;
				return cardtype
			}
			else if (this.is_silver_niu(cards)) {
				cardtype = CARD_TYPE.SILVER_NIU;
				return cardtype
			}
			cardtype = this.getNiubyCards(cards)
			return cardtype;
		}
		// 是否五小牛
		private is_small_niu(cards): boolean {
			let sum = 0;
			for (let i = 0; i < cards.length; i++) {
				sum = sum + cards[i].GetCount();
			}
			if (sum <= 10)
				return true
			else
				return false
		}
		// 是否炸弹
		private is_bomb(cards): boolean {
			if (cards[0].GetCardVal() == cards[3].GetCardVal())
				return true;
			else if (cards[1].GetCardVal() == cards[4].GetCardVal())
				return true;
			else
				return false;
		}
		// 是否五花牛
		private is_gold_niu(cards): boolean {
			if (cards[4].GetCardVal() > 10)
				return true;
			else
				return false;
		}
		// 是否四花牛
		private is_silver_niu(cards): boolean {
			if (cards[3].GetCardVal() > 10 && cards[4].GetCardVal() == 10)
				return true;
			else
				return false;
		}

		// 自己的牌型
		checkMyCards(): number {
			let cards = [];
			let type = 0;
			for (let i: number = 0; i < MAX_CARDS_COUNT; i++) {
				cards.push(this._cards[i]);
			}
			type = this.checkCardsType(cards);
			return type;
		}

		sort() {
			let cards = this._cards;//牌堆
			let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let max = MAX_SEATS_COUNT;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			let count = 0;
			for (let index = 0; index < max; index++) {//ui座位
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit) {
					for (let i = 0; i < MAX_CARDS_COUNT; i++) {//手牌
						let card = cards[count * MAX_CARDS_COUNT + i] as TbNiuNiuData;
						if (card) {
							card.myOwner(posIdx, mainUnit == unit, mainUnit.GetIndex());
							card.index = i;
							card.sortScore = MAX_CARDS_COUNT - i;
						}
					}
					count++;
				}
			}
		}

		setCardsIndex(index: number) {
			this._cardsIndex.push(this.getUnitUIPos(index));
		}

		resetCardsIndex() {
			this._cardsIndex = [];
			this._isGaiPai = false;
		}

		setValue(info: any) {
			if (!this._cards.length) return;
			let cards = this._cards;//牌堆
			let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let max = MAX_SEATS_COUNT;
			for (let index = 0; index < max; index++) {//ui座位
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit && unit.GetIndex() == info.SeatIndex) {
					let _cardsInfo = info.Cards;
					let _cards = [];
					for (let k: number = 0; k < _cardsInfo.length; k++) {
						_cards.push(_cardsInfo[k]);//用新数组存下来，方便调整牌序
					}
					let isNiu = this.checkCardsType(_cards);
					let uiPos = this._cardsIndex.indexOf(this.getUnitUIPos(unit.GetIndex()));
					_cards = this.sortCardsToNiu(_cards);
					for (let j = 0; j < MAX_CARDS_COUNT; j++) {//手牌
						let card = cards[uiPos * MAX_CARDS_COUNT + j] as TbNiuNiuData;
						let _card = _cards[j];
						if (card) {
							card.Init(_card.GetVal());
							card.index = j;
							card.sortScore = MAX_CARDS_COUNT - j;
							if (isNiu && j > 2) {
								if (!card.targe_pos) {
									card.targe_pos = new Vector2();
								}
								card.isFinalPos = false;
								card.targe_pos.y = card.targe_pos.y + 20;
							}
						}
					}
					this.kaipai(uiPos);
					this.moveCard(uiPos);
				}
			}
		}

		//获取座位上的玩家数量
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

		//根据实际位置获取精灵在UI上的逻辑位置
		private getUnitUIPos(_index): number {
			//主玩家的座位
			let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let max = MAX_SEATS_COUNT;
			for (let index = 0; index < max; index++) {
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
				if (unit && posIdx == _index) {
					return index;
				}
			}
			return -1;
		}

		sortCardsToNiu(cards): Array<TbNiuNiuData> {
			let lave = 0; //余数
			let index1 = 0;
			let index2 = 0;
			let newCards = cards;
			for (let i: number = 0; i < newCards.length; i++) {
				lave = lave + newCards[i].GetCount();
			}
			lave = lave % 10;
			for (let i: number = 0; i < newCards.length - 1; i++) {
				for (let j: number = i + 1; j < newCards.length; j++) {
					if ((newCards[i].GetCount() + newCards[j].GetCount()) % 10 == lave) {
						index1 = i;
						index2 = j;
					}
				}
			}
			if (index1 + index2 == 0) return newCards;
			if (index1 < 3 && index2 < 3) {
				let a = newCards[3];
				newCards[3] = newCards[index1];
				newCards[index1] = a;
				a = newCards[4];
				newCards[4] = newCards[index2];
				newCards[index2] = a;
			}
			if (index1 < 3 && index2 >= 3) {
				let index = 0;
				if (index2 == 3) {
					index = 4;
				}
				else if (index2 == 4) {
					index = 3;
				}
				let a = newCards[index];
				newCards[index] = newCards[index1];
				newCards[index1] = a;
			}
			if (index2 < 3 && index1 >= 3) {
				let index = 0;
				if (index1 == 3) {
					index = 4;
				}
				else if (index1 == 4) {
					index = 3;
				}
				let a = newCards[index];
				newCards[index] = newCards[index2];
				newCards[index2] = a;
			}

			return newCards;
		}

		//发牌
		fapai() {
			let count = 0;
			let counter = 0;
			for (let j: number = 0; j < MAX_CARDS_COUNT; j++) {
				for (let i: number = 0; i < this._cards.length / MAX_CARDS_COUNT; i++) {
					Laya.timer.once(150 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						let card = this._cards[i * MAX_CARDS_COUNT + j];
						if (!card) return;
						card.fapai();
						counter++;
						if (counter >= this._cards.length) {
							this.event(TbNiuNiuMgr.DEAL_OVER);
						}
					});
					count++;
				}
			}
		}

		//断线重连，重新发牌(主玩家大牌)
		refapai() {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.refapai();
			}
		}

		//断线重连，重新发牌(主玩家小牌)
		regaipai() {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.regaipai();
			}
		}

		//盖牌
		gaipai() {
			if (this._isGaiPai) return;
			for (let i: number = 0; i < MAX_CARDS_COUNT; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.yipai();
			}
			this._isGaiPai = true;
		}

		//翻牌
		fanpai() {
			Laya.timer.once(150 * this._cards.length, this, () => {
				for (let i: number = 0; i < 5; i++) {
					let card = this._cards[i];
					if (!card) return;
					card.fanpai();
				}
			});
		}

		//翻牌(断线重连后)
		reloadFanpai() {
			let count = 0;
			for (let i: number = 0; i < 5; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.fanpai();
			}
		}

		//开牌
		kaipai(index: number) {
			for (let i = 0; i < MAX_CARDS_COUNT; i++) {
				let card = this._cards[MAX_CARDS_COUNT * index + i];
				if (!card) return;
				card.fanpai();
			}
		}

		//摊牌
		tanpai(index: number) {
			for (let i = 0; i < MAX_CARDS_COUNT; i++) {
				let card = this._cards[MAX_CARDS_COUNT * index + i];
				if (!card) return;
				card.isShow = true;
				card.scaleX = 1;
			}
		}

		//牛牌最后两张向下移动
		moveCard(index: number) {
			Laya.timer.once(500, this, () => {
				for (let i = 0; i < MAX_CARDS_COUNT; i++) {
					let card = this._cards[MAX_CARDS_COUNT * index + i];
					if (!card) return;
					card.moveCard();
				}
			})
		}

		// 清理指定玩家卡牌对象
		clearCardObject(index: number): void {
			this._game.sceneObjectMgr.ForEachObject((obj: any) => {
				if (obj instanceof TbNiuNiuData) {
					if (obj.GetOwnerIdx() == index) {
						this._game.sceneObjectMgr.clearOfflineObject(obj);
					}
				}
			})
		}
	}
}