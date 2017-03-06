//商店
var Shop = (function(_super){
    function Shop(){
        Shop.super(this);
        this.init();
    }
    Laya.class(Shop,"Shop",_super);
    var _proto = Shop.prototype;
    _proto.init = function(){

    }
    //位置设置-垂直居中
    _proto.setStyle = function(){
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.scaleX = 0;
        this.scaleY = 0;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
    }
    return Shop;
})(ui.ShopUI)