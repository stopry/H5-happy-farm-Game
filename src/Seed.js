//种子逻辑
var Seed = (function(){
    // params——种子-种子类型-等级-状态-是否成熟-是否被偷-土地等级
    function Seed(seed,type,level,state,isRipe,isSteal,landLv){
        this.seed = seed;
        this.type = type;
        this.level = level;
        this.state = state;
        this.isRipe = isRipe;
        this.isSteal = isSteal;
        this.landLv = landLv;
        this.loadSeed();
    };
    var _proto = Seed.prototype;
    // 初始化种子
    _proto.alerts = function(){
        alert(1)
    }
    _proto.loadSeed = function(){
        this.setSeedUI(this.level,this.type);
    }
    //设置种子显示
    _proto.setSeedUI = function(level,type){
        switch(level)
        {
        case 1:
            this.seed.getChildByName('seedLv1').visible = true;
            this.seed.getChildByName('seedLv1').skin = "ui/seed_"+type+"_"+level+".png";
            this.seed.getChildByName('seedLv2').visible = false;
            this.seed.getChildByName('seedLv3').visible = false;
            this.seed.getChildByName('seedLv4').visible = false;
            this.seed.getChildByName('seedDie').visible = false;
        break;
        case 2:
            this.seed.getChildByName('seedLv2').visible = true;
            this.seed.getChildByName('seedLv2').skin = "ui/seed_"+type+"_"+level+".png";
            this.seed.getChildByName('seedLv1').visible = false;
            this.seed.getChildByName('seedLv3').visible = false;
            this.seed.getChildByName('seedLv4').visible = false;
            this.seed.getChildByName('seedDie').visible = false;
        break;
        case 3:
            this.seed.getChildByName('seedLv3').visible = true;
            this.seed.getChildByName('seedLv3').skin = "ui/seed_"+type+"_"+level+".png";
            this.seed.getChildByName('seedLv1').visible = false;
            this.seed.getChildByName('seedLv2').visible = false;
            this.seed.getChildByName('seedLv4').visible = false;
            this.seed.getChildByName('seedDie').visible = false;
        break;
        case 4:
            this.seed.getChildByName('seedLv4').visible = true;
            this.seed.getChildByName('seedLv4').skin = "ui/seed_"+type+"_"+level+".png";
            this.seed.getChildByName('seedLv1').visible = false;
            this.seed.getChildByName('seedLv2').visible = false;
            this.seed.getChildByName('seedLv3').visible = false;
            this.seed.getChildByName('seedDie').visible = false;
        break;
        case 5:
            this.seed.getChildByName('seedDie').visible = true;
            this.seed.getChildByName('seedDie').skin = "ui/seed_"+type+"_"+level+".png";
            this.seed.getChildByName('seedLv1').visible = false;
            this.seed.getChildByName('seedLv2').visible = false;
            this.seed.getChildByName('seedLv3').visible = false;
            this.seed.getChildByName('seedLv4').visible = false;
        break;
        default:
            this.seed.visible = false;
            this.seed.getChildByName('seedLv1').visible = false;
            this.seed.getChildByName('seedLv2').visible = false;
            this.seed.getChildByName('seedLv3').visible = false;
            this.seed.getChildByName('seedLv4').visible = false;
            this.seed.getChildByName('seedDie').visible = false;
        }
    }
    return Seed;
})()