function login(){
    var loginVar = document.getElementById("loginDatoInput").value;
    var contraVar = document.getElementById("password").value;

    var contraTrue = document.getElementById("contraseñaCorrecta");
    var contraFalse = document.getElementById("contraseñaIncorrecta");
    var noContra = document.getElementById("Nocontraseña");

    var contraTrueInput = document.getElementById("contraseñaInputCorrecta");
    var contraFalseInput = document.getElementById("contraseñaInputIncorrecta");
    var noContraInput = document.getElementById("NocontraseñaInput");

    var userTrueFalse;
    var contraTrueFalse;
    if(loginVar == "anna0"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "white00"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "carol1"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "orange01"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "julia2"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "yellow02"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "irene3"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "blue03"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "rachel4"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "red04"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "sophie5"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "green05"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == "wendy6"){
        contraTrue.classList.add('contraseñaCorrecta2');
        contraFalse.classList.remove('contraseñaIncorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = true;
        if(contraVar == "purple06"){
            contraTrueInput.classList.add('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = true;
        }else if(contraVar == ""){
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = false;
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;
        }
    }else if(loginVar == ""){
        contraFalse.classList.remove('contraseñaIncorrecta2');
        contraTrue.classList.remove('contraseñaCorrecta2');
        userTrueFalse = false;
        noContra.classList.add('Nocontraseña2');
        if(contraVar == ""){
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            contraFalseInput.classList.remove('contraseñaInputIncorrecta2');
            noContraInput.classList.add('NocontraseñaInput2');
            contraTrueFalse = true;
        }
    }else{
        contraFalse.classList.add('contraseñaIncorrecta2');
        contraTrue.classList.remove('contraseñaCorrecta2');
        noContra.classList.remove('Nocontraseña2');
        userTrueFalse = false;
        if(1 >= 2){
            console.log('Hello world')
        }else{
            contraFalseInput.classList.add('contraseñaInputIncorrecta2');
            contraTrueInput.classList.remove('contraseñaInputCorrecta2');
            noContraInput.classList.remove('NocontraseñaInput2');
            contraTrueFalse = false;      
        }
    }
    console.log(loginVar, userTrueFalse);


}