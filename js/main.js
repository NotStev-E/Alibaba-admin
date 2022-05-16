function login(){
    var loginVar = document.getElementById("loginDatoInput").value;
    
    if(loginVar == "anna0"){
        alert('Tu nombre de usuario es correcto');
        document.getElementById("loginDatoInput").value="";
    }else if(loginVar == ""){
        alert('Coloca tu nombre antes de continuar');
        document.getElementById("loginDatoInput").focus;
    }else{
        alert('Tu nombre de usuario es incorrecto');
    }
    console.log(loginVar);

}