//创建角色
var CreateRole = (function(_super){
    function CreateRole(){
        CreateRole.super(this);
        this.pic = 2;//默认头像为第二个
        this.init();
    }
    Laya.class(CreateRole,"CreateRole",_super);
    var _proto = CreateRole.prototype;
    _proto.init = function(){
        this.addLittleTip();
        new BtnFeed(this.confirmBtn);
        this.confirmBtn.on(Laya.Event.CLICK,this,this.submitData);
        this.eachClick();
    }
    //提交表单
    _proto.submitData = function(){
        var that = this;
        this.nickNameVal = this.nickName.text;
        this.picVal = this.pic;
        if(((this.nickNameVal).trim()).length>7||!this.nickNameVal.trim()){
            LayaSample.littleTip.showThis("昵称不合法")
        }else{
            //服务器交互
             Http.connect('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData',JSON.stringify({nickNameVal:this.nickNameVal,picVal:this.picVal}),function(data){
                LayaSample.littleTip.showThis("创建成功");
             })
        }
    }
    //添加小提示UI
    _proto.addLittleTip = function(){
        if(!LayaSample.littleTip){
            LayaSample.littleTip = new LittleTip()
        }
        this.addChild(LayaSample.littleTip);
    };
    //选择头像
    _proto.selPic = function(num){
        this.pic = num;//改变选中的头像 
        for(var i = 1;i<7;i++){
            if(i==num){
                this.headPicBox.getChildByName("head_"+num).getChildByName("bg").skin = "dialog/headerPicBgSel.png";
            }else{
                this.headPicBox.getChildByName("head_"+i).getChildByName("bg").skin = "dialog/headerPicBg.png";
            }
        }
    }
    //for循环选择头像事件遍历
    _proto.eachClick = function(){
        for(var i = 1;i<7;i++){
            new BtnFeed(this.headPicBox.getChildByName("head_"+i));
            this.headPicBox.getChildByName("head_"+i).on(Laya.Event.CLICK,this,this.selPic,[i]);
        };
    }
    return CreateRole;
})(ui.CreateRoleUI)