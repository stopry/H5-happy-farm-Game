//我的家园操作类
var MyHome = (function(){
    function MyHome(myHomeBtn,homeMenuBox,isHomeMenuBoxActive,showRotate,hideRotate){
        this.myHomeBtn = myHomeBtn;//我的家园按钮
        this.homeMenuBox = homeMenuBox;//我的家园菜单
        this.isHomeMenuBoxActive = isHomeMenuBoxActive;//菜单是否激活状态
        this.showRotate = showRotate;//显示时的角度
        this.hideRotate = hideRotate;//隐藏时的角度

        this.init();
    }
    var _proto = MyHome.prototype;
    _proto.init = function(){
        this.myHomeBtn.on(Laya.Event.CLICK,this,this.showMyfamMenu);
    }
    //显示隐藏菜单
    _proto.showMyfamMenu = function(){
        if(!this.isHomeMenuBoxActive){
        //Laya缓动动画——操作对新-属性列表-执行时间-动画效果-回调
            Laya.Tween.to(this.homeMenuBox,{rotation:this.showRotate},500,Laya.Ease.backOut,null);
        }else{
            Laya.Tween.to(this.homeMenuBox,{rotation:this.hideRotate},500,Laya.Ease.backOut,null);
        }
        //重置状态
        this.isHomeMenuBoxActive = !this.isHomeMenuBoxActive
    }
    return MyHome;
})()

//我的果园操作类
var MyOrchard = (function(){
    function MyOrchard(myHomeBtn,homeMenuBox,isHomeMenuBoxActive,showRotate,hideRotate){
        this.myHomeBtn = myHomeBtn;//我的家园按钮
        this.homeMenuBox = homeMenuBox;//我的家园菜单
        this.isHomeMenuBoxActive = isHomeMenuBoxActive;//菜单是否激活状态
        this.showRotate = showRotate;//显示时的角度
        this.hideRotate = hideRotate;//隐藏时的角度

        this.init();
    }
    var _proto = MyOrchard.prototype;
    //显示菜单方法继承自我的家园部分
    _proto.showMyOrchardMenu = MyHome.prototype.showMyfamMenu;
    _proto.init = function(){
        this.myHomeBtn.on(Laya.Event.CLICK,this,this.showMyOrchardMenu);
    }
    return MyOrchard;
})()