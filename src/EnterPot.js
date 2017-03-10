//仓库弹出UI
(function(_super){
    function EnterPot(){
        EnterPot.super(this);
        this.setStyle();
        this.init();
    }
    Laya.class(EnterPot,"EnterPot",_super);
    var _proto = EnterPot.prototype;
    _proto.init = function(){
        this.setListFunc();//功能设置
        this.setListUI();//果实列表
        this.goOrchard.on(Laya.Event.CLICK,this,this.toOrchard);//页面跳转
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis);//关闭
    }
    _proto.setListFunc = function(){
        this.fruitList.selectEnable = true;
        this.fruitList.scrollBar.hide = true;//隐藏列表的滚动条。
        this.fruitList.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.fruitList.scrollBar.elasticDistance = 50;//设置橡皮筋极限距离。
    }
    _proto.setStyle = function(){
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.scaleX = 0;
        this.scaleY = 0;
        this.repeatX = 5;
        this.repeatY = 5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
    }
    _proto.showThis = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},300,Laya.Ease.backIn,null);
    }
    _proto.hideThis = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //渲染列表
    _proto.setListUI = function(){
        console.log(Service.fruit());
        this.fruitList.array = Service.fruit();
    }
    //进入果园
    _proto.toOrchard = function(){
        goUrl("https://www.baidu.com");
    }
    return EnterPot;
})(ui.EnterPotUI)