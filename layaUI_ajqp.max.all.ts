
module ui.ajqp.game_ui.tbniuniu.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":246,"height":94},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png"}},{"type":"Box","props":{"y":0,"x":0,"blendMode":"lighter"},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.Effect_yqUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class NiuNiuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"y":83,"x":88,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_nt.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":112,"tweenMethod":"backIn","tween":true,"target":2,"key":"y","index":0},{"value":85,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10}],"x":[{"value":121,"tweenMethod":"backIn","tween":true,"target":2,"key":"x","index":0},{"value":88,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10}],"scaleY":[{"value":0.5,"tweenMethod":"backIn","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"backIn","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class NiuPaiUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_niu:Laya.Box;
		public img_type:Laya.Image;
		public img_x:Laya.Image;
		public img_rate:Laya.Image;
		public box_notNiu:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":220,"height":80},"child":[{"type":"Box","props":{"y":2,"x":-1,"width":220,"var":"box_niu","height":77},"child":[{"type":"Box","props":{"y":30,"x":87,"scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":8,"child":[{"type":"Image","props":{"y":10,"var":"img_type","skin":"tbniuniu_ui/game_ui/tbniuniu/n_5.png"}},{"type":"Image","props":{"y":5,"x":97,"var":"img_x","skin":"tbniuniu_ui/game_ui/tbniuniu/sz_x.png"}},{"type":"Image","props":{"x":125,"var":"img_rate","skin":"tbniuniu_ui/game_ui/tbniuniu/sz_0.png"}}]},{"type":"Image","props":{"y":42,"x":110,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.5}}]},{"type":"Box","props":{"y":8,"x":42,"var":"box_notNiu","gray":true},"child":[{"type":"Image","props":{"skin":"tbniuniu_ui/game_ui/tbniuniu/n_0.png"}}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"scaleY":[{"value":2.5,"tweenMethod":"backInOut","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":2.5,"tweenMethod":"backInOut","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class PaoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":570,"height":58},"child":[{"type":"Image","props":{"y":0,"x":0,"width":260,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_pao1.png","sizeGrid":"0,2,0,12","height":44}},{"type":"Image","props":{"y":29,"x":284,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_pao2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":306,"width":260,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_pao3.png","sizeGrid":"0,12,0,2"}},{"type":"Label","props":{"y":7,"x":62,"wordWrap":true,"width":447,"text":"点选三张点击之和为10的倍数的牌，然后点击有牛","leading":6,"height":23,"fontSize":20,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.PaoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public img_banker:ui.ajqp.game_ui.tbniuniu.component.YingUI;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;
		public img_vip:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":0,"x":0,"width":100,"height":139},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"width":100,"var":"txt_name","text":"玩家名字六字","leading":6,"height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f8ea5e","align":"center"}},{"type":"Ying","props":{"y":-13,"x":-11,"var":"img_banker","runtime":"ui.ajqp.game_ui.tbniuniu.component.YingUI"}},{"type":"Clip","props":{"y":15,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.YingUI",ui.ajqp.game_ui.tbniuniu.component.YingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.TouXiangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class WanJia_LUI extends View {
		public view_icon:ui.ajqp.game_ui.tbniuniu.component.TouXiangUI;
		public box_cardType:Laya.Box;
		public box_typeNiu:ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI;
		public box_bigNiu:ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI;
		public box_betRate:Laya.Box;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"TouXiang","props":{"y":29,"x":4,"var":"view_icon","runtime":"ui.ajqp.game_ui.tbniuniu.component.TouXiangUI"}},{"type":"Box","props":{"y":0,"x":112,"visible":false,"var":"box_cardType"},"child":[{"type":"NiuPai","props":{"y":132,"var":"box_typeNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI"}},{"type":"NiuNiu","props":{"x":3,"var":"box_bigNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI"}}]},{"type":"Box","props":{"y":0,"x":111,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":4,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_x.png"}},{"type":"Image","props":{"x":32,"var":"img_betRate1","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_1.png"}},{"type":"Image","props":{"y":0,"x":55,"var":"img_betRate2","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.TouXiangUI",ui.ajqp.game_ui.tbniuniu.component.TouXiangUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI",ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI",ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class WanJia_L1UI extends View {
		public view_icon:ui.ajqp.game_ui.tbniuniu.component.TouXiangUI;
		public box_cardType:Laya.Box;
		public box_typeNiu:ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI;
		public box_bigNiu:ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI;
		public box_betRate:Laya.Box;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":250,"height":300},"child":[{"type":"TouXiang","props":{"y":28,"x":46,"var":"view_icon","runtime":"ui.ajqp.game_ui.tbniuniu.component.TouXiangUI"}},{"type":"Box","props":{"y":115,"x":6,"var":"box_cardType"},"child":[{"type":"NiuPai","props":{"y":134,"var":"box_typeNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI"}},{"type":"NiuNiu","props":{"var":"box_bigNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI"}}]},{"type":"Box","props":{"y":47,"x":151,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":4,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_x.png"}},{"type":"Image","props":{"x":32,"var":"img_betRate1","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_1.png"}},{"type":"Image","props":{"y":0,"x":55,"var":"img_betRate2","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.TouXiangUI",ui.ajqp.game_ui.tbniuniu.component.TouXiangUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI",ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI",ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.WanJia_L1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class Wanjia_MainUI extends View {
		public view_icon:ui.ajqp.game_ui.tbniuniu.component.TouXiangUI;
		public box_betRate:Laya.Box;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"TouXiang","props":{"y":29,"x":14,"var":"view_icon","runtime":"ui.ajqp.game_ui.tbniuniu.component.TouXiangUI"}},{"type":"Box","props":{"y":0,"x":117,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":4,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_x.png"}},{"type":"Image","props":{"x":32,"var":"img_betRate1","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_1.png"}},{"type":"Image","props":{"y":0,"x":55,"var":"img_betRate2","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.TouXiangUI",ui.ajqp.game_ui.tbniuniu.component.TouXiangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.Wanjia_MainUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class WanJia_RUI extends View {
		public view_icon:ui.ajqp.game_ui.tbniuniu.component.TouXiangUI;
		public box_cardType:Laya.Box;
		public box_bigNiu:ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI;
		public box_typeNiu:ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI;
		public box_betRate:Laya.Box;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"TouXiang","props":{"y":29,"x":252,"var":"view_icon","runtime":"ui.ajqp.game_ui.tbniuniu.component.TouXiangUI"}},{"type":"Box","props":{"y":1,"x":63,"var":"box_cardType"},"child":[{"type":"NiuNiu","props":{"var":"box_bigNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI"}},{"type":"NiuPai","props":{"y":132,"x":-7,"var":"box_typeNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI"}}]},{"type":"Box","props":{"y":1,"x":160,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":4,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_x.png"}},{"type":"Image","props":{"x":32,"var":"img_betRate1","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_1.png"}},{"type":"Image","props":{"y":0,"x":55,"var":"img_betRate2","skin":"tbniuniu_ui/game_ui/tbniuniu/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.TouXiangUI",ui.ajqp.game_ui.tbniuniu.component.TouXiangUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI",ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI",ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":160},"child":[{"type":"Image","props":{"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_zhuang.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_zhuang.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.component.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks1.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.GoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class JieSuan_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":330,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_1.png","scaleY":1,"scaleX":1,"centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl1.png","centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png","centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":348,"x":626,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":5}]}},{"target":6,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.JieSuan_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class JieSuan_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":330,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_1.png","scaleY":1,"scaleX":1,"gray":true,"centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sb1.png","centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sb.png","centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":348,"x":626,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","gray":true,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":5}]}},{"target":6,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.JieSuan_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class TongBiNNUI extends View {
		public paixie:ui.ajqp.game_ui.tongyong.PaiXeiUI;
		public btn_continue:Laya.Button;
		public box_showCard:Laya.Box;
		public box_typeNiu:ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI;
		public box_bigNiu:ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI;
		public box_status:Laya.Box;
		public txt_status:laya.display.Text;
		public box_tips:Laya.Box;
		public txt_tips:laya.display.Text;
		public view5:ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI;
		public view1:ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI;
		public view2:ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI;
		public view0:ui.ajqp.game_ui.tbniuniu.component.Wanjia_MainUI;
		public box_betRate:Laya.Box;
		public btn_betRate1:Laya.Button;
		public clip_betRate1:Laya.Clip;
		public btn_betRate2:Laya.Button;
		public clip_betRate2:Laya.Clip;
		public btn_betRate3:Laya.Button;
		public clip_betRate3:Laya.Clip;
		public btn_betRate4:Laya.Button;
		public clip_betRate4:Laya.Clip;
		public btn_betRate5:Laya.Button;
		public clip_betRate5:Laya.Clip;
		public box_id:Laya.Box;
		public txt_id:laya.display.Text;
		public txt_base:laya.display.Text;
		public btn_tanpai:Laya.Button;
		public view4:ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI;
		public view3:ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI;
		public btn_tuoguan:Laya.Button;
		public box_timer:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public xipai:ui.ajqp.game_ui.tongyong.effect.XiPaiUI;
		public btn_back:Laya.Button;
		public btn_chongzhi:ui.ajqp.game_ui.tbniuniu.component.Effect_chongzhiUI;
		public btn_spread:Laya.Button;
		public box_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_cardType:Laya.Button;
		public btn_set:Laya.Button;
		public btn_zhanji:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"PaiXei","props":{"y":110,"x":805,"var":"paixie","runtime":"ui.ajqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"height":70,"centerY":40,"centerX":0},"child":[{"type":"Image","props":{"y":17,"x":57,"width":123,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png","height":33}}]},{"type":"Box","props":{"y":448,"x":540,"width":181,"var":"box_showCard","height":137},"child":[{"type":"NiuPai","props":{"y":57,"x":1,"var":"box_typeNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI"}},{"type":"NiuNiu","props":{"y":-85,"x":-1,"var":"box_bigNiu","runtime":"ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI"}}]},{"type":"Box","props":{"y":389,"x":654,"width":687,"var":"box_status","height":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":158,"wordWrap":true,"width":336,"var":"txt_status","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":511,"x":300,"width":687,"var":"box_tips","height":43,"anchorY":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":9,"x":176,"wordWrap":true,"width":336,"var":"txt_tips","text":"等待下一局","strokeColor":"#00ffc1","leading":6,"height":21,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"WanJia_L","props":{"y":302,"x":66,"var":"view5","runtime":"ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":302,"x":860,"var":"view1","runtime":"ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":99,"x":860,"var":"view2","runtime":"ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI"}},{"type":"Panel","props":{"y":7,"x":10,"width":184,"mouseThrough":true,"height":287}},{"type":"Wanjia_Main","props":{"y":523,"x":207,"var":"view0","runtime":"ui.ajqp.game_ui.tbniuniu.component.Wanjia_MainUI"}},{"type":"Box","props":{"y":472,"x":640,"width":877,"var":"box_betRate","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_betRate1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","labelBold":true,"disabled":false},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":42},"child":[{"type":"Clip","props":{"var":"clip_betRate1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_betRate2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","labelBold":true},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":42},"child":[{"type":"Clip","props":{"var":"clip_betRate2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":2,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_betRate3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","labelBold":true},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":42},"child":[{"type":"Clip","props":{"var":"clip_betRate3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":3,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_betRate4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","labelBold":true},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":42},"child":[{"type":"Clip","props":{"var":"clip_betRate4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":4,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_betRate5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","labelBold":true},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":42},"child":[{"type":"Clip","props":{"var":"clip_betRate5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":5,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":20,"x":84,"var":"box_id"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":302,"var":"txt_id","text":"牌局号：15323156415613212313","leading":6,"height":24,"fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":30,"x":0,"width":157,"var":"txt_base","text":"试玩场：底注：1 ","leading":6,"height":25,"fontSize":20,"color":"#ffffff"}}]},{"type":"Button","props":{"y":553,"x":900,"var":"btn_tanpai","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#309d26","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"tbniuniu_ui/game_ui/tbniuniu/tu_tp.png"}}]},{"type":"WanJia_L","props":{"y":99,"x":66,"var":"view4","runtime":"ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI"}},{"type":"WanJia_L","props":{"y":13,"x":455,"var":"view3","runtime":"ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI"}},{"type":"Button","props":{"y":662,"x":78,"var":"btn_tuoguan","stateNum":1,"skin":"tbniuniu_ui/game_ui/tbniuniu/btn_tg0.png","anchorY":0.5,"anchorX":0.5}},{"type":"DaoJiShi","props":{"y":325,"var":"box_timer","scaleY":1.2,"scaleX":1.2,"centerX":-3,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"XiPai","props":{"y":310,"x":640,"var":"xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"y":673,"x":1147,"var":"btn_chongzhi","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tbniuniu.component.Effect_chongzhiUI"}},{"type":"Button","props":{"var":"btn_spread","top":10,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":16,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"box_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":287},"child":[{"type":"Image","props":{"y":71,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":142,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":212,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":84,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":14,"x":14,"var":"btn_cardType","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":224,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":154,"x":14,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":90,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.PaiXeiUI",ui.ajqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI",ui.ajqp.game_ui.tbniuniu.component.NiuPaiUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI",ui.ajqp.game_ui.tbniuniu.component.NiuNiuUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI",ui.ajqp.game_ui.tbniuniu.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI",ui.ajqp.game_ui.tbniuniu.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.Wanjia_MainUI",ui.ajqp.game_ui.tbniuniu.component.Wanjia_MainUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.ajqp.game_ui.tbniuniu.component.Effect_chongzhiUI",ui.ajqp.game_ui.tbniuniu.component.Effect_chongzhiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.TongBiNNUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class TongBiNN_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_leixing:Laya.Panel;
		public panel_wanfa:Laya.Panel;
		public txt_daxiao:Laya.Image;
		public txt_beishu:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":862,"height":640,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png","centerY":-20,"centerX":-192}},{"type":"Image","props":{"y":35,"x":829,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png","scaleX":-1}},{"type":"Image","props":{"y":32,"x":193,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Image","props":{"y":71,"x":442,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":104,"x":44,"width":209,"var":"btn_tab","height":366},"child":[{"type":"Button","props":{"y":5,"x":4,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":83,"x":4,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item1"}},{"type":"Button","props":{"y":160,"x":4,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item2"}},{"type":"Button","props":{"y":238,"x":4,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxbs.png","name":"item3"}}]},{"type":"Panel","props":{"y":122,"x":225,"width":600,"var":"panel_leixing","height":397},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tbniuniu_ui/game_ui/tbniuniu/guize_2.png"}},{"type":"Image","props":{"y":514,"x":-4,"skin":"tbniuniu_ui/game_ui/tbniuniu/guize_5.png"}}]},{"type":"Panel","props":{"y":122,"x":225,"width":600,"var":"panel_wanfa","height":390},"child":[{"type":"Image","props":{"y":-20,"x":-10,"skin":"tbniuniu_ui/game_ui/tbniuniu/guize_1.png"}}]},{"type":"Image","props":{"y":95,"x":213,"var":"txt_daxiao","skin":"tbniuniu_ui/game_ui/tbniuniu/guize_3.png"}},{"type":"Image","props":{"y":106,"x":205,"var":"txt_beishu","skin":"tbniuniu_ui/game_ui/tbniuniu/guize_4.png"}},{"type":"Button","props":{"y":74,"x":787,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.TongBiNN_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class TongBiNN_HUDUI extends View {
		public view:ui.ajqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public btn_xinshou:Laya.Box;
		public txt_least0:Laya.Clip;
		public txt_difen0:Laya.Clip;
		public btn_chuji:Laya.Box;
		public txt_difen1:Laya.Clip;
		public txt_least1:Laya.Clip;
		public btn_zhongji:Laya.Box;
		public txt_least2:Laya.Clip;
		public txt_difen2:Laya.Clip;
		public btn_gaoji:Laya.Box;
		public txt_difen3:Laya.Clip;
		public txt_least3:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view","top":-1,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":-1,"left":-1,"bottom":-1}},{"type":"Box","props":{"y":0,"x":0,"width":1278,"var":"box_right","height":465,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-13,"width":250,"var":"btn_xinshou","right":976,"height":446},"child":[{"type":"SkeletonPlayer","props":{"y":165,"x":139,"url":"tbniuniu_ui/game_ui/tbniuniu/sk/tbnn_0.sk"}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png"}},{"type":"Image","props":{"y":29,"x":15,"skin":"tbniuniu_ui/game_ui/tbniuniu/difen_01_1.png"}},{"type":"Label","props":{"y":345,"x":65,"width":65,"text":"底分：","height":25,"fontSize":24,"color":"#a9d6c1"}},{"type":"Clip","props":{"y":388,"x":147,"var":"txt_least0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu0.png","clipX":10}},{"type":"Clip","props":{"y":347,"x":147,"var":"txt_difen0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu0.png","clipX":10}},{"type":"Label","props":{"y":385,"x":64,"width":65,"text":"准入：","height":25,"fontSize":24,"color":"#a9d6c1"}}]},{"type":"Box","props":{"y":-13,"width":250,"var":"btn_chuji","right":678,"height":446},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png"}},{"type":"Image","props":{"y":9,"x":32,"skin":"tbniuniu_ui/game_ui/tbniuniu/difen_02_1.png"}},{"type":"SkeletonPlayer","props":{"y":157,"x":138,"url":"tbniuniu_ui/game_ui/tbniuniu/sk/tbnn_1.sk"}},{"type":"Clip","props":{"y":348,"x":150,"var":"txt_difen1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Clip","props":{"y":389,"x":149,"var":"txt_least1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Label","props":{"y":345,"x":71,"width":65,"text":"底分：","height":25,"fontSize":24,"color":"#80adc8"}},{"type":"Label","props":{"y":385,"x":72,"width":65,"text":"准入：","height":25,"fontSize":24,"color":"#80adc8"}}]},{"type":"Box","props":{"y":-13,"width":250,"var":"btn_zhongji","right":379,"height":446},"child":[{"type":"Image","props":{"y":3,"x":-6,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png"}},{"type":"Image","props":{"y":33,"x":-12,"skin":"tbniuniu_ui/game_ui/tbniuniu/difen_03_1.png"}},{"type":"SkeletonPlayer","props":{"y":176,"x":139,"url":"tbniuniu_ui/game_ui/tbniuniu/sk/tbnn_2.sk"}},{"type":"Clip","props":{"y":391,"x":142,"var":"txt_least2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Clip","props":{"y":350,"x":141,"var":"txt_difen2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Label","props":{"y":347,"x":62,"width":65,"text":"底分：","height":25,"fontSize":24,"color":"#9d77aa"}},{"type":"Label","props":{"y":389,"x":63,"width":65,"text":"准入：","height":25,"fontSize":24,"color":"#9d77aa"}}]},{"type":"Box","props":{"y":-13,"width":250,"var":"btn_gaoji","right":81,"height":446},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png"}},{"type":"SkeletonPlayer","props":{"y":173,"x":146,"url":"tbniuniu_ui/game_ui/tbniuniu/sk/tbnn_3.sk"}},{"type":"Clip","props":{"y":346,"x":156,"var":"txt_difen3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Image","props":{"y":17,"x":10,"skin":"tbniuniu_ui/game_ui/tbniuniu/difen_04_1.png"}},{"type":"Clip","props":{"y":388,"x":156,"var":"txt_least3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Label","props":{"y":343,"x":63,"width":65,"text":"底分：","height":25,"fontSize":24,"color":"#c19a81"}},{"type":"Label","props":{"y":385,"x":64,"width":65,"text":"准入：","height":25,"fontSize":24,"color":"#c19a81"}}]}]},{"type":"Image","props":{"top":11,"skin":"tbniuniu_ui/game_ui/tbniuniu/qznn_title.png","centerX":100,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.TongBiNN_HUDUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tbniuniu {
    export class TuoGuanUI extends View {
		public btn_enter:Laya.Button;
		public btn_cancel:Laya.Button;
		public box_rate0:Laya.Box;
		public checkBox0:Laya.CheckBox;
		public box_rate1:Laya.Box;
		public checkBox1:Laya.CheckBox;
		public box_rate2:Laya.Box;
		public checkBox2:Laya.CheckBox;
		public box_rate3:Laya.Box;
		public checkBox3:Laya.CheckBox;
		public box_rate4:Laya.Box;
		public checkBox4:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":663,"height":463,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":28,"x":32,"width":302,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"88,0,148,31","height":482}},{"type":"Image","props":{"y":28,"width":302,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"88,0,148,31","scaleX":-1,"height":482,"centerX":153}},{"type":"Image","props":{"y":65,"x":339,"skin":"tongyong_ui/game_ui/tongyong/general/tit_tgtishi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":136,"x":52,"wordWrap":true,"width":571,"valign":"middle","text":"托管后由系统自动执行下注 摊牌 继续游戏操作。确定要进行托管吗？","leading":10,"height":62,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":434,"x":471,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1danh.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":16,"x":61,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Button","props":{"y":434,"var":"btn_cancel","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1danh.png","left":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":16,"x":61,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_qx.png"}}]},{"type":"Text","props":{"y":230,"x":56,"wordWrap":true,"width":530,"valign":"middle","text":"请选择下注倍数：","leading":10,"height":31,"fontSize":24,"color":"#f7ffbc","align":"left"}},{"type":"Text","props":{"y":354,"x":86,"wordWrap":true,"width":514,"valign":"middle","text":"（如果最大可下注倍数小于设定倍数，那么押最大可下注倍数）","leading":10,"height":24,"fontSize":18,"color":"#00ff1e","align":"center"}},{"type":"Box","props":{"y":291,"x":78,"var":"box_rate0"},"child":[{"type":"CheckBox","props":{"var":"checkBox0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":35,"wordWrap":true,"width":50,"text":"1倍","leading":6,"height":28,"fontSize":26,"color":"#f7ffbc","align":"left"}}]},{"type":"Box","props":{"y":291,"x":186,"var":"box_rate1"},"child":[{"type":"CheckBox","props":{"var":"checkBox1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":35,"wordWrap":true,"width":50,"text":"2倍","leading":6,"height":28,"fontSize":26,"color":"#f7ffbc","align":"left"}}]},{"type":"Box","props":{"y":291,"x":294,"var":"box_rate2"},"child":[{"type":"CheckBox","props":{"var":"checkBox2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":35,"wordWrap":true,"width":50,"text":"3倍","leading":6,"height":28,"fontSize":26,"color":"#f7ffbc","align":"left"}}]},{"type":"Box","props":{"y":291,"x":401,"var":"box_rate3"},"child":[{"type":"CheckBox","props":{"var":"checkBox3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":35,"wordWrap":true,"width":50,"text":"4倍","leading":6,"height":28,"fontSize":26,"color":"#f7ffbc","align":"left"}}]},{"type":"Box","props":{"y":291,"x":509,"var":"box_rate4"},"child":[{"type":"CheckBox","props":{"var":"checkBox4","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":35,"wordWrap":true,"width":50,"text":"5倍","leading":6,"height":28,"fontSize":26,"color":"#f7ffbc","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tbniuniu.TuoGuanUI.uiView);
        }
    }
}
