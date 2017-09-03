;(function(){

    var Dom ={
        login_button : $('#login_button')
    }

    function init(){
        EventHandler();
    }

    function EventHandler(){
        //todo  事件

        Dom.login_button.click(function(){ //登录
            var $this = $(this),
                username = $.trim($('.login').find('#username').val());
                wxname   = $.trim($('.login').find('#wxname').val());

            if(username == ""){
                $.DialogByZ.Alert({Title: "提示", Content: "姓名不可以为空",BtnL:"确定",FunL:alerts})
            }else if(wxname == ""){
                $.DialogByZ.Alert({Title: "提示", Content: "微信号",BtnL:"确定",FunL:alerts})
            }else{
                $.app.Util.StorageSetter('user_name',username);
                $.app.Util.StorageSetter('wx_name',wxname);

                $.app.loading.checked($(".login"),function(){
                    window.location.href = './wloan_result.html'
                });
            }
            function alerts(){
                $.DialogByZ.Close();
            }
        })
    }

    init();

})();
