

//点击菜单添加上方breadcrumb
$(".w-menu").click(function(){
    $("#breadcrumb").html("<li>" +
        "<i class='icon-home home-icon'></i>" +
        "<a href='#' class='w-backPage'>首页</a>" +
        "</li>");//首页
    var mybread=$(this).parents("li");//获取所有夫级li节点
        //console.log(mybread);
    var myUpMenus=[],mySrc=[];
    for(var i=0;i<mybread.length;i++){
        //获取菜单li下第一个span的内容
        myUpMenus.push(mybread[i].getElementsByTagName("span")[0].innerHTML);
        //获取菜单li下第一个a的href的值
        mySrc.push($(mybread[i].getElementsByTagName("a")[0]).attr("href"));
    }
    //console.log(mySrc);
    for(var j=myUpMenus.length-1;j>=0;j--){
        if(j>0){
            $("#breadcrumb").html(
                $("#breadcrumb").html()+"<li><a href='"+mySrc[j]+"' class='w-backPage'>"+myUpMenus[j]+"</a></li>"
            )
        }else{
            $("#breadcrumb").html(
                $("#breadcrumb").html()+"<li>"+myUpMenus[j]+"</li>"
            )
        }
    }

});


//breadcrumb返回父级菜单
$(document).on("click",".w-backPage",function (){
    var myli=$("#breadcrumb>li"),num;
    for(var i=0;i<myli.length-1;i++){
        if(myli[i].getElementsByTagName("a")[0]==this){num=i;}
    }
    if(num==0){
        $("#breadcrumb").html("<li><i class='icon-home home-icon'></i> 首页</li>");
    }else{
        for(var j=0;j<myli.length;j++){
            if(j==num){myli[j].innerHTML=this.innerHTML;}
            if(j>num){$(myli[j]).remove();}
        }
    }
});

