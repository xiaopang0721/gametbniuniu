/**
* name 
*/
module gametbniuniu.page {
	export class TbNiuNiuTuoGuanPage extends game.gui.base.Page {
		private _viewUI: ui.game_ui.tbniuniu.TuoGuanUI;
		private _checkBoxList: Array<CheckBox>;
		private _niuMgr: TbNiuNiuMgr;
		private _niuStory: TbniuniuStory;
		private _tuoGuanRate: number;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tbniuniu.TuoGuanUI');
			this.addChild(this._viewUI);

			this._checkBoxList = [];
			for (let i: number = 0; i < 5; i++) {
				this._checkBoxList.push(this._viewUI["checkBox" + i])
			}
			this._niuStory = this._game.sceneObjectMgr.story as TbniuniuStory;
			this._niuMgr = this._niuStory.niuMgr;
			if (this._niuMgr && this._niuMgr.isTuoGuan) {
				this.selectRate(this._niuMgr.isTuoGuan - 1);
			} else {
				this.selectRate(0);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_cancel.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_rate0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_rate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_rate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_rate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_rate4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: any, target: any): void {
			switch (target) {
				case this._viewUI.btn_cancel:
					this.close();
					break;
				case this._viewUI.btn_enter:
					this._niuMgr.isTuoGuan = this._tuoGuanRate;
					this.close();
					break;
				case this._viewUI.box_rate0:
					this.selectRate(0);
					break;
				case this._viewUI.box_rate1:
					this.selectRate(1);
					break;
				case this._viewUI.box_rate2:
					this.selectRate(2);
					break;
				case this._viewUI.box_rate3:
					this.selectRate(3);
					break;
				case this._viewUI.box_rate4:
					this.selectRate(4);
					break;
			}
		}

		private selectRate(rate: number): void {
			for (let i: number = 0; i < this._checkBoxList.length; i++) {
				this._checkBoxList[i].selected = rate == i;
			}
			this._tuoGuanRate = rate + 1;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_cancel.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.box_rate0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.box_rate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.box_rate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.box_rate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.box_rate4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			super.close();
		}
	}
}