var RankList = (function(_super){
    function RankList(){
        RankList.super(this);
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.init();
    }
    Laya.class(RankList,"RankList",_super);
    var _proto = RankList.prototype;
    _proto.init = function(){
        this.setFeedBtn();
    	this.setListDatas(Service.farmList());
        this.setListFunc();
        this.closeBtn.on(Laya.Event.CLICK,this,this.closeRankAlert);
    }
    //列表功能设置
    _proto.setListFunc = function(){
        this.farmList.selectEnable = true;
        this.farmList.scrollBar.hide = true;//隐藏列表的滚动条。
        this.farmList.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.farmList.scrollBar.elasticDistance = 50;//设置橡皮筋极限距离。
        this.farmList.selectHandler = new laya.utils.Handler(this, this.onSelect);//设置 list 改变选择项执行的处理器。
    }
    //渲染列表数据
    _proto.setListDatas = function(farmLists){
        this.farmList.array = farmLists;
    }
    //列表选择
    _proto.onSelect = function(index){
        console.log("当前选择的项目索引： index= ", index);
    }
    //关闭当前界面
    _proto.closeRankAlert = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //按钮反馈
    _proto.setFeedBtn = function(){
        var feedBtn = [
            this.closeBtn,
            this.pageControl.getChildByName("nextPageBtn"),
            this.pageControl.getChildByName("prePageBtn"),
            this.petPageControl.getChildByName("prePageBtn"),
            this.petPageControl.getChildByName("prePageBtn")
        ]
        for(var i = 0;i<feedBtn.length;i++){
        	new BtnFeed(feedBtn[i]);
        }
    }
    return RankList;
})(ui.RankListUI)