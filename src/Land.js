//Land（土地）逻辑类
var Land = (function(){
    // params——土地-土地等级-是否有种子
    function Land(land,level,isHasSedd,isDry,toolBox,toolBoxY,seed){
        this.land = land;//土地
        //土地等级-根据土地等级切换土地皮肤
        this.level = level;//土地等级
        this.isHasSedd = isHasSedd;//是否有种子
        this.isDry = isDry;//是否干旱
        this.toolBox = toolBox;//工具箱
        this.toolBox.active = false;//工具箱默认状态为未激活
        this.toolBoxY = toolBoxY;//工具箱的y值
        this.toolBoxShowY = this.toolBoxY+this.toolBox.height/1.5;//工具箱激活时的y值
        this.seed = seed;
        //执行加载土地
        this.loadLand();
        //土地添加点击事件——事件名称-执行域-执行方法;
        this.land.on(Laya.Event.CLICK,this,this.oprLand);
        this.toolBox.getChildByName("sow").on(Laya.Event.CLICK,this,this.resetToolBox);
    }
    var _proto = Land.prototype;
    //加载土地
    _proto.loadLand = function(){
        this.setLandUI(this.level);
    }
    //设置土地皮肤接口
    _proto.setLandUI = function(level){
        switch(level)
        {
        case 1:
            this.land.skin = "ui/land-1.png";//等级一未开垦
        break;
        case 2:
            this.land.skin = "ui/land0.png";//等级二已开垦 黄土地
        break;
        default:
            this.land.skin = "ui/land-1.png";
        }
    }
    //初始化工具箱
    _proto.resetToolBox = function(){
        //如果是激活状态
        if(this.toolBox.active){
            var y = this.toolBoxY+this.toolBox.height/0.5;
            Laya.Tween.to(this.toolBox.getChildByName("sow"),{scaleY:0,scaleX:0,y:y},300,Laya.Ease.backIn,Laya.Handler.create(this,this.hideToolBox));
            Laya.Tween.to(this.toolBox.getChildByName("watering"),{scaleY:0,scaleX:0,y:y},300,Laya.Ease.backIn,Laya.Handler.create(this,this.hideToolBox));
            Laya.Tween.to(this.toolBox.getChildByName("upRoot"),{scaleY:0,scaleX:0,y:y},300,Laya.Ease.backIn,Laya.Handler.create(this,this.hideToolBox));
            Laya.Tween.to(this.toolBox.getChildByName("reap"),{scaleY:0,scaleX:0,y:y},300,Laya.Ease.backIn,Laya.Handler.create(this,this.hideToolBox));
            Laya.Tween.to(this.toolBox.getChildByName("grouSecTool"),{scaleY:0,scaleX:0,y:y},300,Laya.Ease.backIn,Laya.Handler.create(this,this.hideToolBox));
        }else{
            console.log("工具箱已经隐藏");
        }
        //状态反转
        this.toolBox.active = false;
    }
    //隐藏工具箱Box
    _proto.hideToolBox = function(){
        this.toolBox.visible = false;
    }
    //显示工具箱
    _proto.showToolBox = function(){
        this.toolBox.visible = true;
    }
    //激活工具箱
    _proto.activeToolBox = function(){
        if(!this.toolBox.active){
            this.showToolBox();
            this.toolBox.active = true;
            return true;
        }
        return false;
    }
    //种下种子
    _proto.sowSeed = function(){
        this.seed.type = 1;
        this.seed.level = 1;
        this.seed.loadSeed();
    }
    //土地操作
    _proto.oprLand = function(){
        console.log(this.level);
        //如果土地登记大于一并且没有种子
        if(this.activeToolBox()){
            this.toolBox.visible = true;
            if(this.level>1&&!this.isHasSedd){
                Laya.Tween.to(
                    this.toolBox.getChildByName("sow"),
                    {scaleY:1,scaleX:1,y:this.toolBoxShowY},
                    300,Laya.Ease.backIn,
                    Laya.Handler.create(this,this.sowSeed)
                );
            }   
        }else{
            console.log("工具箱未激活");
            return false;
        }
        
    }
    //种地
    _proto.seedLand = function(){

    }
    return Land;
})()