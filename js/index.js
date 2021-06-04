

$(document).ready(function(){

    $("#menu-icon-closed").on("click",()=>{
        $("#menu-icon-open").css("display","inline");
        $("#menu-icon-closed").css("display","none");
        $(".menu-desplegado").css("display","flex");
        

    });

    $("#menu-icon-open").on("click",()=>{
        $("#menu-icon-open").css("display","none");
        $("#menu-icon-closed").css("display","inline");
        $(".menu-desplegado").css("display","none");

    });
    
})