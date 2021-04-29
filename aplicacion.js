$(document).ready(function(){
    var boton = $("#boton");
    var boton2 = $("#boton2");
    var aparecer = $("#aparecer");
    var cambiar = $("#yo");

    boton.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
        
    });
    boton.mouseleave(function(){
        $(this).fadeTo("fast",1)
    });

    boton.click(function(){ 
        $("#esto").hide()

    });
    aparecer.click(function(){ 
        $("#esto").show()

    });
    
    boton2.click(function(){ 
        $("#titulo").text("HOLAHOLAAA")

    });

    cambiar.mouseenter(function(){ 
        $("#yo").css("background-color","pink")

    });
});