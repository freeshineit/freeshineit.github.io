(function(){


    $.app = $.app || {version: "v1.0.0"};
    $.extend($.app,{
        Util:{
            prefix :'wloan_',
            StorageGetter: function(key){
                return localStorage.getItem(this.prefix + key)
            },

            StorageSetter: function(key,val){
                return localStorage.setItem(this.prefix + key, val);
            },
            StorageRemove: function(key){
                return localStorage.removeItem(this.prefix + key);
            }
        },
        Dom:{
            Win : $(window),
            Doc : $(document),
        },
        loading:{
            checked:function(target,callback,html){
                target && target.hide();
                var loading = html || '<div class="loading-box" style="margin-top:20px;"><img  class="loading-img" src="../static/images/loading.gif" width="100px;" height="100px;" style=/><p class="text-c">额度正在计算中,请稍等。。。</p></div>'
                    target.after(loading);
                setTimeout(function(){
                    callback && callback();
                },1000)
            }
        },
        login:{
            checked:function(){
                var username = $.app.Util.StorageGetter('user_name');

                if(username == null){
                    window.location.href = '../view/index.html'
                    return ;
                }
            }
        },

    });


})();
