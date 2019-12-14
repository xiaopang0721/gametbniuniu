/**
* 牛牛
*/
module gametbniuniu.page {
	export class TbNiuNiuPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.tbniuniu.TongBiNN_HUDUI;
		private _difenTmep: any = [1, 10, 50, 100];
		private _leastTmep: any = [50, 200, 500, 1000];
		private _player: any;
		private _playerInfo: any;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tbniuniu.TongBiNN_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this.initRoomInfo();
			(this._viewUI.view as TongyongHudPage).onOpen(this._game, TbniuniuPageDef.GAME_NAME, false);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					x: 1280
				}, this._initialtime + index * this._time, Laya.Ease.linearNone);
			}
			Laya.timer.once(this._initialtime + 4 * this._time, this, this.onComplete)
			this._game.playMusic(Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3");
		}

		private _initialtime: number = 200;
		private _time: number = 100;
		private onComplete() {
			this._viewUI.btn_xinshou.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_chuji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_zhongji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_gaoji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		private initRoomInfo(): void {
			for (let i: number = 0; i < this._difenTmep.length; i++) {
				this._viewUI["txt_difen" + i].text = "" + this._difenTmep[i];
			}
			for (let i: number = 0; i < this._leastTmep.length; i++) {
				this._viewUI["txt_least" + i].text = "" + this._leastTmep[i];
			}
		}

		protected onBtnTweenEnd(e: any, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.btn_xinshou:
					if (this._player.playerInfo.money < this._leastTmep[0]) {
						this.showTipsBox(this._leastTmep[0]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_1.toString());

					break;
				case this._viewUI.btn_chuji:
					if (this._player.playerInfo.money < this._leastTmep[1]) {
						this.showTipsBox(this._leastTmep[1]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_2.toString());
					break;
				case this._viewUI.btn_zhongji:
					if (this._player.playerInfo.money < this._leastTmep[2]) {
						this.showTipsBox(this._leastTmep[2]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_3.toString());
					break;
				case this._viewUI.btn_gaoji:
					if (this._player.playerInfo.money < this._leastTmep[3]) {
						this.showTipsBox(this._leastTmep[3]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_4.toString());
					break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			this._game.alert(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true, Tips.TIPS_SKIN_STR["cz"]);
		}

		public close(): void {
			this._player = null;
			if (this._viewUI) {
				this._viewUI.btn_xinshou.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_chuji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_zhongji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_gaoji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			this._game.stopMusic();
			super.close();
		}
	}
}