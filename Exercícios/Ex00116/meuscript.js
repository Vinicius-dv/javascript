const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const f_msg = document.getElementById('f_msg')

document.getElementById('btn_validar').addEventListener('click',(evt)=>{
    let estadoValidação = f_nome.validity

    if(estadoValidação.valueMissing){
       f_nome.setCustomValidity('Poxa , este campo é obrigatório')
    }
    f_nome.reportValidity()


    let msg = null

    if(!f_nota.checkValidity()){
        msg = f_nota.validationMessage
    }

    f_msg.innerHTML = f_nome.validationMessage
    //f_msg.innerHTML = msg
    evt.preventDefault()
})


/*Métodos de validação do DOM
checkValidity()
setCustomvalidity()
*/

/*Propriedades de validação do DOM 
validity
validationMessage
*/

/*Propriedades de validação*/

/*
customError: true , se uma mensagem de validação personalizada for definida.
patternMismatch: true , se o valor de um elemento não corresponder ao seu atributo padrão
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/
