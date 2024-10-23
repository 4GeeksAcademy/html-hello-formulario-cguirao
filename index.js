// Obtener los elementos del DOM
const alerta = document.getElementById('alerta');
var tarjeta = document.getElementById('card');
var cvc = document.getElementById('cvc');
var amount = document.getElementById('amount');
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var city = document.getElementById('city');
var state = document.getElementById('state');
var pCode = document.getElementById('pCode');

// Función para agregar la alerta al contenedor de alertas
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible m-2" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  
  alerta.innerHTML = '';
  alerta.append(wrapper);
}


const validarCampos = () => {

  var respuesta = "All fields are filled correctly";
  if (tarjeta.value.trim() === "") {
    respuesta = "Inserta una tarjeta de credito."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (cvc.value.trim() === "") {
    respuesta = "Inserta el cvc de la tarjeta."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (amount.value.trim() === "") {
    respuesta = "Inserta una cantidad."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (fName.value.trim() === "") {
    respuesta = "Inserta un nombre."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (lName.value.trim() === "") {
    respuesta = "Inserta tus apellidos."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (city.value.trim() === "") {
    respuesta = "Inserta una ciudad."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (state.value.trim() === "") {
    respuesta = "Inserta un Estado."
    appendAlert(respuesta, 'danger');
    return false;
  }
  if (pCode.value.trim() === "") {
    respuesta = "Inserta tu codigo postal."
    appendAlert(respuesta, 'danger');
    return false;
  }


  appendAlert(respuesta, 'danger');
  return true;
}


const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    validarCampos();
  });
}