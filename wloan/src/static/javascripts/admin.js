;(function(){

    const  USER = {
        name:'admin',
        password:"tj940224"
    }
           
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
                password   = $.trim($('.login').find('#password').val());

            if(username == ""){
                $.DialogByZ.Alert({Title: "提示", Content: "用户名不可以为空",BtnL:"确定",FunL:alerts})
            }else if(password == ""){
                $.DialogByZ.Alert({Title: "提示", Content: "密码不可为空",BtnL:"确定",FunL:alerts})
            }else if(username == USER.name && password == USER.password){
                $.app.Util.StorageSetter('admin_user_name',username);
                $.app.Util.StorageSetter('admin_password',password);
                $.app.loading.login($(".login"),function(){
                    window.location.href = './index.html'
                });
            }else{
                $.DialogByZ.Alert({Title: "提示", Content: "用户名或密码错误",BtnL:"确定",FunL:alerts})
            }

            function alerts(){
                $.DialogByZ.Close();
            }
        })
    }

    init();

})();
