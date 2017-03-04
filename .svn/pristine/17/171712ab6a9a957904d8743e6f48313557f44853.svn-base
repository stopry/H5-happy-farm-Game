//好友农场UI
var FriendsFarm = (function(_super){
    function FriendsFarm(friendId){
        //好友id用来得到好友农场信息
        //存放土地的数组
        this.lands = new Array;
        //土地数量
        this.landNum = 12;
        FriendsFarm.super(this);
        this.friendId = friendId;
        //循环数组
        for(var i = 0;i<this.landNum;i++){
            this.land = new Land(this.getChildByName("item"+i).getChildByName("land"),Math.round(Math.random()*2));
            this.lands.push(this.land);
        }
        this.getUserId();
        this.backPrePage.on(Laya.Event.CLICK,this,this.backMyFarm);
    }
    Laya.class(FriendsFarm,"FriendsFarm",_super);
    var _proto = FriendsFarm.prototype;
    //得到当前农场用户ID
    _proto.getUserId = function(){
        console.log(this.friendId);
        this.friendInfoLabel.text = "农场用户信息"+JSON.stringify(this.friendId);
    }
    //返回上一页
    _proto.backMyFarm = function(){
        this.removeSelf();
        Laya.stage.addChild(LayaSample.farm);
    }
    return FriendsFarm;
})(ui.FriendsFarmUI)