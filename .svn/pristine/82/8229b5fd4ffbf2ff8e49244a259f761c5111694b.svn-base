//好友列表逻辑类
var FriendList = (function(){
    // params——弹出层-弹出层标题-关闭按钮-列表项-List对象-点击打开弹出层的按钮-宠物
    function FriendList(alertBox,title,titleStr,closeBtn,arrayList,List,openBtn){
        this.alertBox = alertBox;
        this.title = title;
        this.titleStr = titleStr;
        this.title.text = this.titleStr;
        this.closeBtn = closeBtn;
        this.arrayList = arrayList;
        this.isVisible = false;
        this.List = List;
        this.openBtn = openBtn;
        //给列表赋值
        this.List.array = this.arrayList;
        this.closeBtn.on(Laya.Event.CLICK,this,this.closeDialog);
        this.openBtn.on(Laya.Event.CLICK,this,this.openDialog);
                
    }
    var _proto = FriendList.prototype;
    //关闭弹出层
    _proto.closeDialog = function(){
        this.alertBox.visible = false;
    }
    //显示弹出层
    _proto.openDialog = function(){
        this.alertBox.visible = true;
    }
    return FriendList;
})()