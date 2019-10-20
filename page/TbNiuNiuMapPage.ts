/**
* 牛牛
*/
module gametbniuniu.page {
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
    const MONEY_NUM = 50; // 特效金币数量
    const MONEY_FLY_TIME = 30; // 金币飞行时间间隔
    const MAX_SEATS_COUNT = 6; // 最大座位数
    const ROOM_CONFIG = {
        "41": [1, 50],    //新手
        "42": [10, 200],  //初级
        "43": [50, 500],  //中级
        "44": [100, 1000],  //高级
    };

    export class TbNiuNiuMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.tbniuniu.TongBiNNUI;
        private _niuMgr: TbNiuNiuMgr;
        private _niuStory: TbniuniuStory;
        private _playerList: any;
        private _winnerIndex: number;//赢家位置
        private _winnerBenefit: number;//赢家总收益
        private _mainPlayerBenefit: number;//玩家收益
        private _unitIndexOnTable: Array<number>;//精灵位置集合
        private _settleInfo: Array<number> = [];//结算信息集合
        private _clipList: Array<TbniuniuClip> = [];//飘字集合
        private _room_config: any;//房间等级底注信息
        private _niuMapInfo: TbniuniuMapInfo;
        private _curStatus: number;//当前地图状态
        private _countDown: number;//倒计时时间戳
        private _maxBetRate: number;//当前可下最大注
        private _isPlayXiPai: boolean = false;//播放洗牌

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
                DatingPath.atlas_dating_ui + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_0.png",
                Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_1.png",
                Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_2.png",
                Path_game_tbniuniu.ui_tbniuniu_sk + "tbnn_3.png",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.tbniuniu.TongBiNNUI');
            this.addChild(this._viewUI);
            this.initView();
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("TbNiuNiuMapPage");//额外界面控制器
            }
            if (!this._niuMgr) {
                this._niuStory = this._game.sceneObjectMgr.story as TbniuniuStory;
                this._niuMgr = this._niuStory.niuMgr;
                this._niuMgr.on(TbNiuNiuMgr.TUOGUAN_GAME, this, this.onUpdateBtnTuoGuan);
                this._niuMgr.on(TbNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
            }
            this._game.playMusic(Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3");
            if (!this._niuStory.isReConnected) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this.showContinue(page.dataSource);
                });
            } else {
                this.onUpdateMapInfo();
            }
            this._viewUI.btn_spread.left = this._game.isFullScreen ? 30 : 10;
            this._viewUI.box_menu.left = this._game.isFullScreen ? 25 : 10;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
             //api充值不显示
            this._viewUI.btn_chongzhi.visible = !WebConfig.enterGameLocked;
            
            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cardType.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_betRate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_betRate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_betRate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_betRate4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_betRate5.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_tuoguan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_tanpai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

            this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
            this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
            this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

            this.onUpdateUnitOffline();
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }
        }

        //帧间隔心跳
        deltaUpdate() {
            if (!this._viewUI) return;
            if (!(this._niuMapInfo instanceof TbniuniuMapInfo)) return;
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_GAMESTART || this._curStatus == MAP_STATUS.PLAY_STATUS_COMPARE
                || this._curStatus == MAP_STATUS.PLAY_STATUS_NONE || this._curStatus == MAP_STATUS.PLAY_STATUS_SETTLE
                || this._curStatus == MAP_STATUS.PLAY_STATUS_PUSH_CARD) {
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime);
            if (time > 0) {
                this._viewUI.box_timer.visible = true;
                this._viewUI.box_timer.txt_time.text = time.toString();

            } else {
                this._viewUI.box_timer.visible = false;
            }
        }

        //玩家进来了
        private onUnitAdd(u: Unit) {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            //离场清除桌上卡牌
            this._niuMgr.clearCardObject(u.GetIndex());
        }


        //更新托管按钮
        private onUpdateBtnTuoGuan(): void {
            this._viewUI.btn_tuoguan.skin = this._niuMgr.isTuoGuan > 0 ? Path_game_tbniuniu.ui_tbniuniu + "btn_tg1.png" : Path_game_tbniuniu.ui_tbniuniu + "btn_tg0.png";
            if (this._niuMgr.isTuoGuan == 0) return;
            if (this._niuMapInfo && this._curStatus == MAP_STATUS.PLAY_STATUS_SHOW_GAME) {
                if (this._game.sceneObjectMgr.mainPlayer.GetMoney() / 100 < this._room_config[1]) return;
                this.continueGame();
                this._game.sceneObjectMgr.leaveStory();
            } else if (!this._niuMapInfo) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this.showContinue(page.dataSource);
                    if (!this._game.sceneObjectMgr.story.mapinfo) {
                        this._niuMgr.isTuoGuan = 0;
                    }
                });
                this._viewUI.btn_continue.visible = false;
                this.continueGame();
            }
        }

        //是否显示继续游戏
        private showContinue(data): void {
            this._viewUI.btn_continue.visible = data;
        }

        //控制发牌动画
        private onUpdateAniDeal(): void {
            this._viewUI.paixie.ani2.gotoAndStop(0);
        }

        private onWashCardOver(): void {
            if (!this._isPlayXiPai) return;
            Laya.Tween.to(this._viewUI.xipai, { x: 865, y: 135, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
            Laya.timer.once(500, this, () => {
                this._viewUI.paixie.cards.visible = true;
                this._viewUI.paixie.ani_chupai.play(0, false);
                this._isPlayXiPai = false;
            })
        }

        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._niuMapInfo = mapinfo as TbniuniuMapInfo;
            if (mapinfo) {
                this._viewUI.btn_continue.visible = false;
                this.onUpdateStatus();
                this.onUpdateUnit();
                this.onUpdateBattle();
                this.onUpdateCountDown();
                if (this._niuStory.isReConnected) {
                    this._niuStory.mapLv = mapinfo.GetMapLevel();
                    this.initRoomConfig();
                    if (this._curStatus > MAP_STATUS.PLAY_STATUS_NONE) {
                        this._viewUI.paixie.cards.visible = true;
                    }
                }
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this.showContinue(page.dataSource);
                    if (!this._game.sceneObjectMgr.mapInfo) {
                        this._niuMgr.isTuoGuan = 0;
                    }
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        private onUpdateUnitOffline() {
            if (!this._niuMgr.offlineUnit) return;
            let unitOffline = this._niuMgr.offlineUnit;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view0.visible = true;
                let money;
                if (mPlayer) {
                    if (!mPlayer.playerInfo) return;
                    money = mPlayer.playerInfo.money;
                    this._viewUI.view0.view_icon.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view0.view_icon.img_icon.skin = TongyongUtil.getHeadUrl(mPlayer.playerInfo.headimg, 2);;
                    this._viewUI.view0.view_icon.img_qifu.visible = TongyongUtil.getIsHaveQiFu(mPlayer, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view0.view_icon.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mPlayer.playerInfo.headKuang);
                    this._viewUI.view0.view_icon.img_vip.visible = mPlayer.playerInfo.vip_level > 0;
                    this._viewUI.view0.view_icon.img_vip.skin = TongyongUtil.getVipUrl(mPlayer.playerInfo.vip_level);
                } else {
                    money = unitOffline.GetMoney();
                    this._viewUI.view0.view_icon.txt_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view0.view_icon.img_icon.skin = TongyongUtil.getHeadUrl(unitOffline.GetHeadImg(), 2);
                    this._viewUI.view0.view_icon.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unitOffline, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view0.view_icon.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unitOffline.GetHeadKuangImg());
                }
                money = EnumToString.getPointBackNum(money, 2).toString();
                this._viewUI.view0.view_icon.txt_money.text = money;
            }
        }

        private onUpdateUnit(qifu_index?: number) {
            if (!this._niuMapInfo) return;
            let battleInfoMgr = this._niuMapInfo.battleInfoMgr;
            this._unitIndexOnTable = [];
            //主玩家的座位
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let max = MAX_SEATS_COUNT;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                let viewPlayer = this._playerList[index];
                viewPlayer.visible = unit;
                if (unit) {
                    this._unitIndexOnTable.push(index);
                    let iconUrl = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                    if (unit.type == UnitField.TYPE_ID_PLAYER) {
                        if (unit.GetIndex() == idx) {
                            iconUrl = TongyongUtil.getHeadUrl(this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg, 2);
                        }
                    }
                    viewPlayer.view_icon.txt_name.text = getMainPlayerName(unit.GetName());
                    if (this._curStatus != MAP_STATUS.PLAY_STATUS_SETTLE || this._niuStory.isReConnected) {
                        this.updateMoney();
                    }
                    //头像框
                    viewPlayer.view_icon.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unit.GetHeadKuangImg());
                    //vip
                    viewPlayer.view_icon.img_vip.visible = unit.GetVipLevel() > 0;
                    viewPlayer.view_icon.img_vip.skin = TongyongUtil.getVipUrl(unit.GetVipLevel());
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewPlayer.view_icon.qifu_type.visible = true;
                        viewPlayer.view_icon.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(viewPlayer.view_icon.qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (TongyongUtil.getIsHaveQiFu(unit, this._game.sync.serverTimeBys)) {
                        if (qifu_index && posIdx == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                viewPlayer.view_icon.img_qifu.visible = true;
                                viewPlayer.view_icon.img_icon.skin = iconUrl;
                            })
                        } 
                        // else {
                        //     viewPlayer.view_icon.img_qifu.visible = true;
                        //     viewPlayer.view_icon.img_icon.skin = iconUrl;
                        // }
                    } else {
                        viewPlayer.view_icon.img_qifu.visible = false;
                        viewPlayer.view_icon.img_icon.skin = iconUrl;
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            if (!this._game.sceneObjectMgr || !this._game.sceneObjectMgr.mainUnit || this._game.sceneObjectMgr.mainUnit.GetIndex() != dataSource.qifu_index) return;
            this._game.qifuMgr.showFlayAni(this._viewUI.view0.view_icon, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = TongyongUtil.getQFTypeImg(dataInfo.qf_id);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
        }

        private updateMoney(): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let max = MAX_SEATS_COUNT;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                this._playerList[index].visible = unit;
                if (unit) {
                    let money = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                    this._playerList[index].view_icon.txt_money.text = money;
                }
            }
        }

        //结算表现
        private addSettleEff(): void {
            if (!this._settleInfo) return;
            for (let i: number = 0; i < this._settleInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = this.getUnitUIPos(this._settleInfo[index]);
                let unitBenefit = this._settleInfo[index + 1];
                if (unitPos == -1) continue;
                if (i < this._settleInfo.length / 2 - 1) {
                    this.addMoneyFly(unitPos, this._winnerIndex);
                    this.addMoneyClip(unitBenefit, unitPos);
                } else {
                    this.addMoneyClip(unitBenefit, this._winnerIndex);
                }
            }
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

        //下注倍数按钮更新
        private onUpdateBetBtn() {
            let playerMoney: number = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
            let antes: number = this._room_config[0];
            if (playerMoney > antes * 10) {
                this._maxBetRate = 5;
                this._viewUI.btn_betRate4.disabled = false;
                this._viewUI.btn_betRate5.disabled = false;
            } else if (playerMoney >= antes * 8 && playerMoney < antes * 10) {
                this._maxBetRate = 4;
                this._viewUI.btn_betRate4.disabled = false;
                this._viewUI.btn_betRate5.disabled = true;
            } else if (playerMoney >= antes * 6 && playerMoney < antes * 8) {
                this._maxBetRate = 3;
                this._viewUI.btn_betRate4.disabled = true;
                this._viewUI.btn_betRate5.disabled = true;
            }
        }

        //战斗结构体更新
        private _battleIndex: number = -1;
        private onUpdateBattle() {
            if (!this._niuMapInfo) return;
            let battleInfoMgr = this._niuMapInfo.battleInfoMgr;
            if (!battleInfoMgr) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                switch (battleInfo.Type) {
                    case 2: {//下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                            this.onBattleBet(info);
                        }
                        break;
                    }
                    case 3: {//出牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPlayCard<gamecomponent.object.PlayingPuKeCard>;
                            this.onBattlePlayCard(info);
                        }
                        break;
                    }
                    case 11: {//结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;

                            this.onBattleSettle(info);
                        }
                        break;
                    }

                    default:
                        break;
                }
            }

        }

        private onBattleBet(info: any): void {
            let index = this.getUnitUIPos(info.SeatIndex);
            this._playerList[index].box_betRate.visible = true;
            this.setBetRate(index, info.BetVal);
        }

        private onBattleSettle(info: any): void {
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal > 0) {
                this._winnerIndex = this.getUnitUIPos(info.SeatIndex);
                this._playerList[this._winnerIndex].view_icon.img_banker.visible = true;
                this._playerList[this._winnerIndex].view_icon.img_banker.ani1.play(0, false);
            }
            this._settleInfo.push(parseFloat(info.SeatIndex));
            this._settleInfo.push(parseFloat(info.SettleVal));
        }

        private onBattlePlayCard(info: any): void {
            let unitNum = this.getPlayerOnSeat();
            let cardType = this._niuMgr.checkCardsType(info.Cards);
            let playerIndex = this.getUnitUIPos(info.SeatIndex);//玩家真实位置转换为UI位置
            let headImg = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex).GetHeadImg();
            let sex = parseInt(headImg) <= 10 ? "nan" : "nv";
            if (playerIndex == 0) {
                Laya.timer.once(350, this, () => {
                    this._viewUI.box_showCard.visible = true;
                    this._viewUI.box_typeNiu.box_notNiu.visible = cardType == 0;
                    this._viewUI.box_bigNiu.visible = cardType > 7;
                    this._viewUI.box_typeNiu.box_niu.visible = cardType > 0;
                    this._viewUI.box_bigNiu.ani1.play(0, false);
                    cardType > 0 && this._viewUI.box_typeNiu.ani1.play(0, false);
                    this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                })
                if (cardType >= 10) {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                } else {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            } else {
                Laya.timer.once(350, this, () => {
                    this._playerList[playerIndex].box_cardType.visible = true;
                    this._playerList[playerIndex].box_typeNiu.box_notNiu.visible = cardType == 0;
                    this._playerList[playerIndex].box_bigNiu.visible = cardType > 7;
                    this._playerList[playerIndex].box_typeNiu.box_niu.visible = cardType > 0;
                    this._playerList[playerIndex].box_bigNiu.ani1.play(0, false);
                    cardType > 0 && this._playerList[playerIndex].box_typeNiu.ani1.play(0, false);
                    this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                })
                if (cardType >= 10) {
                    this._playerList[playerIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                    this._playerList[playerIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_x.png");
                    this._playerList[playerIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                } else {
                    this._playerList[playerIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                    this._playerList[playerIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_x.png");
                    this._playerList[playerIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            }
        }

        private getBeginIndex(): number {
            let index = this._unitIndexOnTable.indexOf(this._winnerIndex) + 1;
            if (index >= this._unitIndexOnTable.length) index = 0;
            return index;
        }

        //金币变化 飘金币特效
        public addMoneyFly(fromPos: number, tarPos: number): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            let fromX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[fromPos].x + this._playerList[fromPos].view_icon.x);
            let fromY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[fromPos].y + this._playerList[fromPos].view_icon.y);
            let tarX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[tarPos].x + this._playerList[tarPos].view_icon.x);
            let tarY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[tarPos].y + this._playerList[tarPos].view_icon.y);
            this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "piaoqian.mp3", false);
            for (let i: number = 0; i < MONEY_NUM; i++) {
                let posBeginX = MathU.randomRange(fromX + 23, fromX + 70);
                let posBeginY = MathU.randomRange(fromY + 23, fromY + 70);
                let posEndX = MathU.randomRange(tarX + 23, tarX + 65);
                let posEndY = MathU.randomRange(tarY + 23, tarY + 65);
                let moneyImg: LImage = new LImage(PathGameTongyong.ui_tongyong_general + "icon_money.png");
                moneyImg.scale(0.7, 0.7);
                if (!moneyImg.parent) this._viewUI.addChild(moneyImg);
                moneyImg.pos(posBeginX, posBeginY);
                // Laya.Bezier 贝塞尔曲线  取得点
                Laya.Tween.to(moneyImg, { x: posEndX }, i * MONEY_FLY_TIME, null);
                Laya.Tween.to(moneyImg, { y: posEndY }, i * MONEY_FLY_TIME, null, Handler.create(this, () => {
                    moneyImg.removeSelf();
                }));

            }
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, pos: number): void {
            let valueClip = value >= 0 ? new TbniuniuClip(TbniuniuClip.ADD_MONEY_FONT) : new TbniuniuClip(TbniuniuClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            valueClip.setText(Math.abs(value), true, false, preSkin);
            let playerIcon = this._playerList[pos].view_icon;
            valueClip.x = playerIcon.clip_money.x;
            valueClip.y = playerIcon.clip_money.y;
            playerIcon.clip_money.parent.addChild(valueClip);

            playerIcon.clip_money.visible = false;
            this._clipList.push(valueClip);
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: valueClip.y - 45 }, 1500);
        }

        //清理所有飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                }
            }
            this._clipList = [];
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

        //设置下注倍数
        private setBetRate(i: number, val: number): void {
            let num1 = 0;
            let num2 = 0;
            if (val >= 10) {
                num1 = 1;
                num2 = val % 10;
                this._playerList[i].img_betRate2.visible = true;
            } else {
                num1 = val;
                this._playerList[i].img_betRate2.visible = false;
            }
            this._playerList[i].img_betRate1.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "bei_{0}.png", num1);
            this._playerList[i].img_betRate2.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "bei_{0}.png", num2);
        }

        //更新地图状态
        private onUpdateStatus() {
            if (!this._niuMapInfo) return;
            let mapStatus = this._niuMapInfo.GetMapState();
            if (this._curStatus == mapStatus) return;
            this._curStatus = mapStatus;
            this._viewUI.btn_continue.visible = this._curStatus == MAP_STATUS.PLAY_STATUS_SHOW_GAME;
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_GAMESTART || this._curStatus == MAP_STATUS.PLAY_STATUS_COMPARE || this._curStatus == MAP_STATUS.PLAY_STATUS_NONE
                || this._curStatus == MAP_STATUS.PLAY_STATUS_SETTLE || this._curStatus == MAP_STATUS.PLAY_STATUS_PUSH_CARD) {
                this._viewUI.box_timer.visible = false;
            }
            if (this._curStatus > MAP_STATUS.PLAY_STATUS_NONE && this._curStatus < MAP_STATUS.PLAY_STATUS_SHOW_GAME) {
                this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_MATCH, parent: this._game.uiRoot.HUD });
            }
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
                    this.initRoomConfig();
                    this._viewUI.xipai.x = 640;
                    this._viewUI.xipai.y = 310;
                    this._viewUI.xipai.scaleX = 1;
                    this._viewUI.xipai.scaleY = 1;
                    this._viewUI.xipai.alpha = 1;
                    this._viewUI.xipai.rotation = 0;
                    this._viewUI.xipai.visible = true;
                    this._viewUI.xipai.ani_xipai.play(0, false);
                    this._isPlayXiPai = true;
                    break;
                case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始
                    this._pageHandle.pushOpen({ id: TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "kaishi.mp3", false);
                    this._viewUI.box_status.visible = false;
                    this._viewUI.box_timer.visible = false;
                    this._viewUI.box_tips.visible = false;
                    break;
                case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
                    this._pageHandle.pushClose({ id: TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_betRate.visible = true;
                    this._viewUI.txt_status.text = "开始下注";

                    Laya.timer.once(1500, this, () => {
                        if (this._niuMgr.isTuoGuan > 0) {//托管
                            if (this._maxBetRate < this._niuMgr.isTuoGuan) {//玩家金币不足以继续下高倍注，默认当前可下的最大注
                                this._niuMgr.isTuoGuan = this._maxBetRate;
                            }
                            this._game.network.call_tbniuniu_bet(this._niuMgr.isTuoGuan);
                            this._viewUI.box_betRate.visible = false;
                        }
                    })
                    break;
                case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
                    this._viewUI.paixie.ani2.play(0, true);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_status.visible = false;
                    this._viewUI.box_tips.visible = false;
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_CARDS:// 摊牌阶段
                    this._viewUI.btn_tanpai.visible = true;
                    Laya.timer.once(1500, this, () => {
                        if (this._niuMgr.isTuoGuan > 0) {//托管
                            this._game.network.call_tbniuniu_showcard();
                            this._niuMgr.gaipai();
                            this._viewUI.btn_tanpai.visible = false;
                        }
                    })
                    break;
                case MAP_STATUS.PLAY_STATUS_COMPARE:// 比牌阶段
                    this._viewUI.btn_tanpai.visible = false;
                    this._viewUI.box_tips.visible = false;
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
                    this._viewUI.box_tips.visible = false;
                    Laya.timer.once(1500, this, () => {
                        this.addSettleEff();
                        this.updateMoney();
                    })
                    Laya.timer.once(3500, this, () => {
                        if (this._mainPlayerBenefit > 0) {
                            let rand = MathU.randomRange(1, 3);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                            this._game.uiRoot.HUD.open(TbniuniuPageDef.PAGE_TBNIUNIU_WIN);
                        } else {
                            let rand = MathU.randomRange(1, 4);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                            this._game.uiRoot.HUD.open(TbniuniuPageDef.PAGE_TBNIUNIU_LOSE);
                        }
                    });
                    if (this._room_config && this._game.sceneObjectMgr.mainPlayer.GetMoney() / 100 < this._room_config[1]) {
                        Laya.timer.once(5500, this, () => {
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), () => {
                                this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, () => {
                            }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
                        });
                        if (this._niuMgr.isTuoGuan > 0) {
                            this._niuMgr.isTuoGuan = 0;
                            this._viewUI.btn_tuoguan.skin = Path_game_tbniuniu.ui_tbniuniu + "btn_tg0.png";
                        }
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_GAME:// 本局展示阶段
                    this._pageHandle.pushClose({ id: TbniuniuPageDef.PAGE_TBNIUNIU_WIN, parent: this._game.uiRoot.HUD });
                    this._pageHandle.pushClose({ id: TbniuniuPageDef.PAGE_TBNIUNIU_LOSE, parent: this._game.uiRoot.HUD });
                    if (this._niuMgr.isTuoGuan > 0) {//托管
                        if (this._viewUI.box_menu.y >= 0) {//每局重新开始把菜单收起来
                            this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                            this._viewUI.box_menu.visible = false;
                            this._viewUI.btn_spread.visible = true;
                        }
                        if (this._niuMapInfo instanceof MapInfo) {
                            this.continueGame();
                            this._game.sceneObjectMgr.leaveStory();
                        }
                    }
                    break;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread://菜单
                    this.showMenu(true);
                    break;
                case this._viewUI.btn_cardType://牌型
                    this._game.uiRoot.general.open(TbniuniuPageDef.PAGE_TBNIUNIU_RULE, (page: TbNiuNiuRulePage) => {
                        page.dataSource = 1;
                    });
                    break;
                case this._viewUI.btn_rule://规则
                    this._game.uiRoot.general.open(TbniuniuPageDef.PAGE_TBNIUNIU_RULE);
                    break;
                case this._viewUI.btn_chongzhi://充值
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                case this._viewUI.btn_qifu://祈福
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU)
                    break;
                case this._viewUI.btn_tanpai://摊牌
                    this._viewUI.txt_tips.text = "等待其他玩家摊牌";
                    this._game.network.call_tbniuniu_showcard();
                    this._niuMgr.gaipai();
                    this._viewUI.btn_tanpai.visible = false;
                    this._niuMgr.isTuoGuan = 0;

                    break;
                case this._viewUI.btn_zhanji://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = TbniuniuPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_back://返回
                    if (this._niuMapInfo && this._niuMapInfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this.continueGame();
                    this.clearSceneObjMgr();
                    this._game.sceneObjectMgr.leaveStory(true);
                    // this.close();
                    break;
                case this._viewUI.btn_continue://继续游戏
                    if (this._room_config) {
                        let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                        if (mainPlayer && mainPlayer.GetMoney() / 100 < this._room_config[1]) {
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), () => {
                                this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, () => {
                            }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
                            return;
                        }
                    }
                    // this._viewUI.btn_continue.visible = false;
                    if (this._niuMapInfo instanceof MapInfo) {
                        this.continueGame();
                        this._game.sceneObjectMgr.leaveStory();

                    } else {
                        this.onUpdateMapInfo();
                    }
                    break;
                case this._viewUI.btn_betRate1://下注倍率1
                    this._game.network.call_tbniuniu_bet(1);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_tips.visible = true;
                    this._niuMgr.isTuoGuan = 0;
                    this._viewUI.txt_tips.text = "等待其他玩家下注";
                    break;
                case this._viewUI.btn_betRate2://下注倍率2
                    this._game.network.call_tbniuniu_bet(2);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_tips.visible = true;
                    this._niuMgr.isTuoGuan = 0;
                    this._viewUI.txt_tips.text = "等待其他玩家下注";
                    break;
                case this._viewUI.btn_betRate3://下注倍率3
                    this._game.network.call_tbniuniu_bet(3);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_tips.visible = true;
                    this._niuMgr.isTuoGuan = 0;
                    this._viewUI.txt_tips.text = "等待其他玩家下注";
                    break;
                case this._viewUI.btn_betRate4://下注倍率4
                    this._game.network.call_tbniuniu_bet(4);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_tips.visible = true;
                    this._niuMgr.isTuoGuan = 0;
                    this._viewUI.txt_tips.text = "等待其他玩家下注";
                    break;
                case this._viewUI.btn_betRate5://下注倍率5
                    this._game.network.call_tbniuniu_bet(5);
                    this._viewUI.box_betRate.visible = false;
                    this._viewUI.box_tips.visible = true;
                    this._niuMgr.isTuoGuan = 0;
                    this._viewUI.txt_tips.text = "等待其他玩家下注";
                    break;
                case this._viewUI.btn_tuoguan://托管
                    if (this._niuMgr.isTuoGuan > 0) {
                        this._niuMgr.isTuoGuan = 0;
                    } else {
                        if (this._niuMapInfo && this._room_config) {
                            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                            if (mainPlayer && mainPlayer.GetMoney() / 100 < this._room_config[1]) {
                                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), () => {
                                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                                }, () => {
                                }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
                                return;
                            }
                        }
                        this._game.uiRoot.general.open(TbniuniuPageDef.PAGE_TBNIUNIU_TUOGUAN);
                    }
                    break;

                default:
                    break;
            }
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.showMenu(false);
            }
        }

        showMenu(isShow: boolean) {
            if (isShow) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.btn_spread.visible = false;
                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn)
            } else {
                if (this._viewUI.box_menu.y >= 0) {
                    Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, () => {
                        this._viewUI.btn_spread.visible = true;
                        this._viewUI.box_menu.visible = false;
                    }));
                }
            }
        }

        private continueGame(): void {
            this.clearClips();
            this._battleIndex = -1;
            this._settleInfo = [];
            // this._game.network.call_tbniuniu_continue();
            this.resetUI();
        }

        private clearSceneObjMgr(): void {
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

            this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
            this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
            this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
        }

        private onUpdateGameNo(): void {
            let gameNo = this._niuMapInfo.GetGameNo();
            if (gameNo) {
                this._viewUI.box_id.visible = true;
                this._viewUI.txt_id.text = "牌局号：" + gameNo;
            }
        }

        private onUpdateCountDown(): void {
            if (!this._niuMapInfo) return;
            this._countDown = this._niuMapInfo.GetCountDown();
        }

        private initView(): void {
            //所有玩家UI
            this._viewUI.box_menu.visible = false;
            this._viewUI.box_menu.zOrder = 99;
            this._playerList = [];
            for (let i: number = 0; i < MAX_SEATS_COUNT; i++) {
                this._playerList.push(this._viewUI["view" + i])
            }
            for (let i: number = 0; i < MAX_SEATS_COUNT; i++) {
                this._playerList[i].visible = false;
                this._playerList[i].box_betRate.visible = false;
                this._playerList[i].view_icon.clip_money.visible = false;
                this._playerList[i].view_icon.img_banker.visible = false;
                if (i > 0) {
                    this._playerList[i].box_cardType.visible = false;
                }
            }

            //主玩家UI
            this._viewUI.box_showCard.visible = false;
            this._viewUI.btn_continue.visible = false;

            //界面UI
            this._viewUI.box_tips.visible = false;
            this._viewUI.box_status.visible = false;
            this._viewUI.box_betRate.visible = false;
            this._viewUI.box_timer.visible = false;
            this._viewUI.box_id.visible = false;
            this._viewUI.btn_tanpai.visible = false;
            this._viewUI.paixie.ani2.gotoAndStop(0);
            this._viewUI.xipai.visible = false;
            this._viewUI.paixie.cards.visible = false;
            this._viewUI.paixie.ani_chupai.stop();
        }

        private initRoomConfig(): void {
            if (this._niuStory.maplv) {
                this._room_config = ROOM_CONFIG[this._niuStory.maplv];
                let str = "";
                if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_1) {
                    str = "房间：新手场  底注：";
                } else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_2) {
                    str = "房间：小资场  底注：";
                } else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_3) {
                    str = "房间：老板场  底注：";
                } else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_4) {
                    str = "房间：富豪场  底注：";
                }
                this._viewUI.txt_base.text = str + this._room_config[0];
                this.onUpdateBetBtn();
            }
        }

        //重置UI
        private resetUI(): void {
            for (let i: number = 0; i < MAX_SEATS_COUNT; i++) {
                this._playerList[i].box_betRate.visible = false;
                this._playerList[i].view_icon.clip_money.visible = false;
                this._playerList[i].view_icon.img_banker.visible = false;
                if (i > 0) {
                    this._playerList[i].visible = false;
                    this._playerList[i].box_cardType.visible = false;
                }
            }

            //主玩家UI
            this._viewUI.box_showCard.visible = false;
            this._viewUI.btn_continue.visible = false;

            //界面UI
            this._viewUI.box_tips.visible = false;
            this._viewUI.box_status.visible = false;
            this._viewUI.box_betRate.visible = false;
            this._viewUI.box_timer.visible = false;
            this._viewUI.box_id.visible = false;
            this._viewUI.btn_tanpai.visible = false;
            this._viewUI.paixie.cards.visible = false;
            this._viewUI.paixie.ani_chupai.stop();
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardType.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate5.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tuoguan.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tanpai.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);

                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);

                if (this._niuMgr) {
                    this._niuMgr.off(TbNiuNiuMgr.TUOGUAN_GAME, this, this.onUpdateBtnTuoGuan);
                    this._niuMgr.off(TbNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                }
                this._game.stopAllSound();
                this._game.stopMusic();
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this.clearClips();
                this._niuMgr.clear();
                this._battleIndex = -1;
                this._settleInfo = [];
            }
            super.close();
        }
    }
}