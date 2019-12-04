/**
* name 
*/
module gametbniuniu.page {
	export class TbniuniuPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//通比牛牛界面
		static PAGE_TBNIUNIU: string = "1";
		//通比牛牛地图UI
		static PAGE_TBNIUNIU_MAP: string = "2";
		//通比牛牛开始游戏动画界面
		static PAGE_TBNIUNIU_BEGIN: string = "3";
		//通比牛牛胜利动画界面
		static PAGE_TBNIUNIU_WIN: string = "4";
		//通比牛牛失败动画界面
		static PAGE_TBNIUNIU_LOSE: string = "5";
		//通比牛牛游戏规则界面
		static PAGE_TBNIUNIU_RULE: string = "101";
		//通比牛牛托管界面
		static PAGE_TBNIUNIU_TUOGUAN: string = "11";

		static myinit(str: string) {
			super.myinit(str);
			TbniuniuClip.init();
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU] = TbNiuNiuPage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_MAP] = TbNiuNiuMapPage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN] = TbNiuNiuBeginPage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_WIN] = TbNiuNiuWinPage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_LOSE] = TbNiuNiuLosePage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_RULE] = TbNiuNiuRulePage;
			PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_TUOGUAN] = TbNiuNiuTuoGuanPage;

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				DatingPath.atlas_dating_ui + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",

				Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
				Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_0.png",
				Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_1.png",
				Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_2.png",
				Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_3.png",

				Path.custom_atlas_scene + 'card.atlas',
				Path.map + 'pz_tbniuniu.png',
				Path.map_far + 'bg_tbniuniu.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_tbniuniu.music_tbniuniu + "kaishi.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu0_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu0_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu1_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu1_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu2_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu2_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu3_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu3_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu4_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu4_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu5_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu5_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu6_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu6_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu7_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu7_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu8_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu8_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu9_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu9_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu10_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu10_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu11_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu11_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu12_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu12_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu13_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu13_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu14_nan.mp3",
					Path_game_tbniuniu.music_tbniuniu + "niu14_nv.mp3",
					Path_game_tbniuniu.music_tbniuniu + "piaoqian.mp3",
					Path_game_tbniuniu.music_tbniuniu + "shengli.mp3",
					Path_game_tbniuniu.music_tbniuniu + "shibai.mp3",
					Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3",
				])
			}
		}
	}
}