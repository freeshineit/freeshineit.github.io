;(function(){

    var Dom ={
        check_button : $('#check_button'),
        logout_admin : $('#logout_admin')
    }

    function init(){
        $.app.login.login();
        EventHandler();
    }

    function EventHandler(){
        //todo  事件

        Dom.check_button.click(function(){ //登录
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
                $.app.Util.StorageRemove('quota'),

                $.app.loading.checked($(".login"),function(){
                    window.location.href = './wloan_result.html'
                });
            }
            function alerts(){
                $.DialogByZ.Close();
            }
        })

        Dom.logout_admin.click(function(){
            $.app.login.logout();
        })
    }

    init();

})();
