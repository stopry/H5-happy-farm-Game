var Log = (function(_super){
    function Log(){
        Log.super(this);
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.scaleX = 0;
        this.scaleY = 0;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.init();
    }
    Laya.class(Log,"Log",_super);
    var _proto = Log.prototype;
    _proto.init = function(){
        this.setFeedBtn();
    	this.setListDatas();
        this.setListFunc();
        this.closeBtn.on(Laya.Event.CLICK,this,this.closeLogAlert);
        this.logList.on(Laya.Event.CLICK,this,this.listClickHandler);
    }
    //列表功能设置
    _proto.setListFunc = function(){
        this.logList.selectEnable = true;
        this.logList.scrollBar.hide = true;//隐藏列表的滚动条。
        this.logList.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.logList.scrollBar.elasticDistance = 50;//设置橡皮筋极限距离。
    }
    //渲染列表数据
    _proto.setListDatas = function(){
        this.logList.array = Service.log();
    }
    //日志列表点击事件回调
    _proto.listClickHandler = function(event){
        event.stopPropagation();
        var datas = event.target.dataSource;
        if(datas){
            this.addChild(LayaSample.littleTip);
            LayaSample.littleTip.showThis(datas.logCon);
        }
    }
    //关闭当前界面
    _proto.closeLogAlert = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //打开当前界面
    _proto.showThis = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},300,Laya.Ease.backIn,null);
    }
    //按钮反馈
    _proto.setFeedBtn = function(){
        var feedBtn = [
            this.closeBtn,
            this.pageControl.getChildByName("nextPageBtn"),
            this.pageControl.getChildByName("prePageBtn"),
        ]
        for(var i = 0;i<feedBtn.length;i++){
        	new BtnFeed(feedBtn[i]);
        }
    }
    return Log;
})(ui.LogUI)