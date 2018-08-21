function func() {
    alertify.prompt("Fala tu!!", "",
        function(evt, value ){
            if(value != null && value!="")
            document.getElementById("parag").innerHTML = "mano, "+value+".";
            });
    }

    var hora = new Date().toLocaleString();
    document.getElementById("hora").innerHTML = hora;

    setInterval(function(){
        var hora = new Date().toLocaleString();
        document.getElementById("hora").innerHTML = hora;
    },1000)