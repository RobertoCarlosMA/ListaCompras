let contador = 0;
let costoTotal = 0;
let totalProductos = 0;
let messageError;
let element = document.getElementById('totalPrecio');
let txtNombre = document.getElementById('Name');
let tabla = document.getElementById('tablaListaCompras');
let cuerpoTabla = tabla.getElementsByTagName('tbody');
let total = document.getElementById('precioTotal');
let txtNumero = document.getElementById('Number');
let btnAgregar = document.getElementById('btnAgregar');
element.innerHTML = 'Total en precio';

const validarNombre = () => {
  if(txtNombre.value.trim().length < 3){
    messageError = '<li>El nombre debe tener por lo menos 3 caracteres.</li>'

    document.getElementById('alertValidacionesTextoNombre').innerHTML = 'Nombre inválido';
    document.getElementById('alertValidacionesNombre').style.display = '';
    txtNombre.style.background = 'pink';
    txtNombre.style.border = 'red thin solid';
    return false;
  }
  return true;
}

const validarCantidad = () => {
  if(txtNumero.value.length == 0 || isNaN(txtNumero.value) || parseFloat(txtNumero.value) <= 0){
    messageError += '<li>La cantidad debe tener un número mayor a 0.</li>'
    document.getElementById('alertValidacionesTextoCantidad').innerHTML = 'Número inválido';
    document.getElementById('alertValidacionesCantidad').style.display = '';
    txtNumero.style.background = 'pink';
    txtNumero.style.border = 'red thin solid';
    return false;
  }
  return true;
}

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    messageError = '';
    document.getElementById('alertValidacionesTexto').innerHTML = '';
    btnAgregar.disabled = true;
    txtNombre.disabled = true;
    txtNumero.disabled = true;
    const isValidName = validarNombre();
    const isValidNumber = validarCantidad();

    if(!isValidName || !isValidNumber){
      document.getElementById('alertValidacionesTexto').innerHTML = `
      Los campos deben ser llenados correctamente.
      <ul>${messageError}</ul>`

      document.getElementById('alertValidaciones').style.display = '';

      setTimeout(() => {
        document.getElementById('alertValidaciones').style.display = 'none';
        document.getElementById('alertValidacionesNombre').style.display = 'none';
        document.getElementById('alertValidacionesCantidad').style.display = 'none';
        txtNombre.style.background = '';
        txtNumero.style.background = '';
        btnAgregar.disabled = false;
        txtNombre.disabled = false;
        txtNumero.disabled = false;
      }, 3000);
      return;
    }

    document.getElementById('alertValidaciones').style.display = 'none';

    contador++;
    document.getElementById('contadorProductos').innerHTML = contador;
    //window.sessionStorage    sessionStorage    window.localStorage    localStorage
    localStorage.setItem('contadorProductos', contador);
    const precio = Math.floor((Math.random() * 50)*100)/100;
    const cantidad = parseFloat(txtNumero.value);
    costoTotal += (Math.floor((cantidad * precio)*100)/100);
    totalProductos += cantidad < 1 ? Math.ceil(cantidad) : parseInt(cantidad);
    localStorage.setItem('productosTotal', totalProductos);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem('precioTotal', costoTotal.toFixed(2));
    document.getElementById('productosTotal').innerHTML = totalProductos;
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumero.value}</td>
    <td>$${precio}</td>
    <td>$${Math.floor((cantidad * precio) * 100) / 100}</td>
    </tr>`

    cuerpoTabla[0].innerHTML += tmp;
    txtNombre.value = '';
    txtNumero.value = '';
    txtNombre.focus();
    btnAgregar.disabled = false;
    txtNombre.disabled = false;
    txtNumero.disabled = false;
});

txtNombre.addEventListener('focus', (e) => {
  e.target.style.background = 'lightblue';
  e.target.style.color = 'white';
  e.target.style.border = '';
});

txtNumero.addEventListener('focus', (e) => {
  e.target.style.background = 'lightblue';
  e.target.style.color = 'white';
  e.target.style.border = '';
});

txtNombre.addEventListener('blur', (e) => {
  e.target.value = e.target.value.trim();
  e.target.style.background = '';
  e.target.style.color = ''
});

txtNumero.addEventListener('blur', (e) => {
  e.target.value = e.target.value.trim();
  e.target.style.background = '';
  e.target.style.color = ''
});

window.addEventListener('load', () => {

  if(localStorage.getItem('contadorProductos') != null){
    contador = parseInt(localStorage.getItem('contadorProductos'));
    document.getElementById('contadorProductos').innerHTML = contador;
  }

  if(localStorage.getItem('productosTotal') != null){
    totalProductos = parseInt(localStorage.getItem('productosTotal'));
    document.getElementById('productosTotal').innerHTML = totalProductos;
  }

  if(localStorage.getItem('precioTotal') != null){
    costoTotal = parseFloat(localStorage.getItem('precioTotal'));
    document.getElementById('precioTotal').innerHTML = `$ ${costoTotal}`;
  }
});