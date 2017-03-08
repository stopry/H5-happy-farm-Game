//注册UI
var registCite;//定义regist界面引用
var Regist = (function(_super){
    function Regist(){
        Regist.super(this);
        this.verBtnCanClick = true;//设置获取短信验证码的按为可点击
        this.timer = 12;//默认120秒可重新获取
        this.registData = {};//注册数据
        this.mobileReg = /^1[3-9][\d]{9}$/;
        this.init();
    }
    Laya.class(Regist,"Regist",_super);
    var _proto = Regist.prototype;
    _proto.init = function(){
        registCite = this;
        this.registFeedBtn();
        this.addLittleTip();
        this.formBox.getChildByName("backPage").on(Laya.Event.CLICK,this,this.backLoadUI);
        this.formBox.getChildByName("getMsgCode").on(Laya.Event.CLICK,this,this.getVerCode);
        this.formBox.getChildByName("toRegist").on(Laya.Event.CLICK,this,this.submitData);
    }
    //添加小提示UI
    _proto.addLittleTip = function(){
        if(!LayaSample.littleTip){
            LayaSample.littleTip = new LittleTip()
        }
        this.addChild(LayaSample.littleTip);
    };
    //注册反馈按钮
    _proto.registFeedBtn = function(){
        new BtnFeed(this.formBox.getChildByName("backPage"));
        new BtnFeed(this.formBox.getChildByName("toRegist"));
        new BtnFeed(this.formBox.getChildByName("getMsgCode"));
    }
    //获取form控件数据
    _proto.getFormData = function(){
        this.registData.mobileNum = this.mobileNumVal = this.formBox.getChildByName("mobileNum").text;//手机号码
        this.registData.realName = this.realNameVal = this.formBox.getChildByName("realName").text;//真实姓名
        this.registData.idCard = this.mobileNumVal = this.formBox.getChildByName("idCard").text;//证件号码
        this.registData.inputPwd = this.mobileNumVal = this.formBox.getChildByName("inputPwd").text;//输入密码
        this.registData.confirmPwd = this.mobileNumVal = this.formBox.getChildByName("confirmPwd").text;//确认密码
        this.registData.TJCode = this.mobileNumVal = this.formBox.getChildByName("TJCode").text;//推荐码
        this.registData.msgVerify = this.mobileNumVal = this.formBox.getChildByName("msgVerify").text;//手机验证码
    }
    //从服务器获取验证码
    _proto.getVerCode = function(){
        //如果按钮可点击
        if(this.verBtnCanClick){
            this.getFormData();//获取input数据
            if(!this.mobileReg.test(this.registData.mobileNum)){
                LayaSample.littleTip.showThis("请输入正确手机号");
                return;
            }
            var that = this;
            that.verBtnCanClick = false;
            Http.connect('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData', 'name=myname&psword=xxx',function(data){
                //异常情况    
                if(!data){
                    that.verBtnCanClick = true;
                    return;
                }
                //正常情况
                LayaSample.littleTip.showThis("验证码已发送");
                that.formBox.getChildByName("getMsgCode").skin = "ui/building_03.png";
                that.formBox.getChildByName("getMsgCode").label = that.timer;
                that.countDown = setInterval(function(){
                    that.timer--;
                    that.formBox.getChildByName("getMsgCode").skin = "ui/building_03.png";
                    that.formBox.getChildByName("getMsgCode").label = that.timer;
                    if(that.timer<=0){
                        clearInterval(that.countDown);
                        that.formBox.getChildByName("getMsgCode").skin = "ui/common_a_45.png";
                        that.formBox.getChildByName("getMsgCode").label = "获取";
                        // 重新设置按钮状态可点击
                        that.verBtnCanClick = true;
                        that.timer = 12;
                    }
                },1000)
            });
        }else{
            return false;
        }
    }
    //提交注册
    _proto.submitData = function(){
        this.getFormData();
        if(!this.mobileReg.test(this.registData.mobileNum)){
            LayaSample.littleTip.showThis("手机号码有误");
            return;
        }else if(!(this.registData.realName).trim()){
            LayaSample.littleTip.showThis("请输入姓名");
            return;
        }else if(!(this.registData.idCard).trim()){
            LayaSample.littleTip.showThis("请输入证件号");
            return;
        }else if(!(this.registData.inputPwd).trim()){
            LayaSample.littleTip.showThis("请输入密码");
            return;
        }else if(!(this.registData.confirmPwd).trim()){
            LayaSample.littleTip.showThis("请确认密码");
            return;
        }else if(!(this.registData.TJCode).trim()){
            LayaSample.littleTip.showThis("请输入推荐码");
            return;
        }else if(!(this.registData.msgVerify).trim()){
            LayaSample.littleTip.showThis("请输输入手机验证码码");
            return;
        }else if(this.registData.inputPwd!==this.registData.confirmPwd){
            LayaSample.littleTip.showThis("两次密码不一致");
            return;
        }else if((this.registData.inputPwd).length<6){
            LayaSample.littleTip.showThis("密码长度不能小于6位");
            return;
        }else{
            console.log(this.registData);
            var that = this;
             Http.connect('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData', JSON.stringify(this.registData),function(data){
                 LayaSample.littleTip.showThis("注册成功");
                 that.regSusTip();
                 that.resetForm();
             })
        }  
    }
    //注册成功重置表单
    _proto.resetForm = function(){
        this.registData.mobileNum = this.mobileNumVal = this.formBox.getChildByName("mobileNum").text = '';//手机号码
        this.registData.realName = this.realNameVal = this.formBox.getChildByName("realName").text = '';//真实姓名
        this.registData.idCard = this.mobileNumVal = this.formBox.getChildByName("idCard").text = '';//证件号码
        this.registData.inputPwd = this.mobileNumVal = this.formBox.getChildByName("inputPwd").text = '';//输入密码
        this.registData.confirmPwd = this.mobileNumVal = this.formBox.getChildByName("confirmPwd").text = '';//确认密码
        this.registData.TJCode = this.mobileNumVal = this.formBox.getChildByName("TJCode").text = '';//推荐码
        this.registData.msgVerify = this.mobileNumVal = this.formBox.getChildByName("msgVerify").text = '';//手机验证码
        clearInterval(this.countDown);
        this.formBox.getChildByName("getMsgCode").skin = "ui/common_a_45.png";
        this.formBox.getChildByName("getMsgCode").label = "获取";
        // 重新设置按钮状态可点击
        this.verBtnCanClick = true;
        this.timer = 12;
    }
    //注册成功提示
    _proto.regSusTip = function(){
        if(!LayaSample.farm){
            LayaSample.farm = new Farm()
        }
        this.alertLayer.visible = true;
        var susTips = new TipDialog("注册成功","注册成功,是否返回登录页",this.backLoadUI,this.hideAlertLaye);
        this.addChild(susTips);
        susTips.showThis();
    }
    //隐藏alertLayer
    _proto.hideAlertLaye = function(){
        registCite.alertLayer.visible = false;
    }
    //返回登陆页面
    _proto.backLoadUI = function(){
        registCite.hideAlertLaye();
        this.removeSelf();
        Laya.stage.addChild(LayaSample.LogIn);
    } 
    return Regist;
})(ui.RegistUI)