// 主入口文件
(function(){
    (function(LayaSample){
        var Browser = Laya.Browser;
        //初始化引擎
        Laya.init(640,1024);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //设置stage颜色
        Laya.stage.bgColor = "#ffcccc";
        //加载资源-资源路径-回调-进度回调-资源类型
        Laya.loader.load(["res/atlas/ui.json","res/atlas/dialog.json"],Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS)
    })();
    function onLoaded(){
        /*加载农场界面 */
        // LayaSample.Farm = new Farm();
        // // Laya.stage为Stage的引用
        // Laya.stage.addChild(LayaSample.Farm);
        /*加载农场界面*/
        
        /**初始化加载登录UI */
        LayaSample.LogIn = new LogIn();
        Laya.stage.addChild(LayaSample.LogIn);
        /**初始化加载登录UI */
    }
    //注册全局变量LayaSample
})(window.LayaSample || (window.LayaSample = {}));