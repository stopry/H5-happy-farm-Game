//用户信息dialog
var UserAlert = (function(_super){
    function UserAlert(){
        UserAlert.super(this);
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.init();
    }
    Laya.class(UserAlert,"UserAlert",_super);
    var _proto = UserAlert.prototype;
    _proto.init = function(){
        new BtnFeed(this.dialogClose);
        this.dialogClose.on(Laya.Event.CLICK,this,this.closeUserAlert);
        this.setUserInfo(Service.userInfo());
    }
    //关闭弹出层
    _proto.closeUserAlert = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //用户信息设置
    _proto.setUserInfo = function(userInfo){
        this.userInfo.getChildByName("userPic").skin = userInfo.userImg;
        this.userInfo.getChildByName("userNickName").text = userInfo.nickName;
        this.userInfo.getChildByName("userNickNameT").text = userInfo.nickName;
        this.userInfo.getChildByName("houseLevel").text = "Lv."+userInfo.houseLevel;
        this.userInfo.getChildByName("userTreasure").text = userInfo.treasure;
        this.userInfo.getChildByName("userId").text = userInfo.userId;
    }
    return UserAlert;
})(ui.UserAlertUI);