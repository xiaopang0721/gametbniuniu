/**
* name 
*/
module gametbniuniu.page {
	const enum TYPE_INDEX {
		TYPE_WANFA_JIESHAO = 0,
		TYPE_CARD_LEIXING = 1,
		TYPE_CARD_DAXIAO = 2,
		TYPE_CARD_BEISHU = 3,
	}
	export class TbNiuNiuRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.tbniuniu.TongBiNN_GuiZeUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tbniuniu.TongBiNN_GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.panel_wanfa.vScrollBarSkin = "";
			this._viewUI.panel_wanfa.vScrollBar.autoHide = true;
			this._viewUI.panel_wanfa.vScrollBar.elasticDistance = 100;
			this._viewUI.panel_leixing.vScrollBarSkin = "";
			this._viewUI.panel_leixing.vScrollBar.autoHide = true;
			this._viewUI.panel_leixing.vScrollBar.elasticDistance = 100;

			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			} else {
				this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_WANFA_JIESHAO;
			}
		}

		private selectHandler(index: number): void {
			this._viewUI.panel_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.panel_leixing.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_LEIXING;
			this._viewUI.txt_daxiao.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_DAXIAO;
			this._viewUI.txt_beishu.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_BEISHU;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}
			super.close();
		}
	}
}