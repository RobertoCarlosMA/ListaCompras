
let element = document.getElementById('totalPrecio');
element.innerHTML = 'total en precio';

let txtNombre = document.getElementById('Name');

txtNombre.value = 'Pera';


// //se crea un htmlcollection parecido a un array porque hay dos elementos
// let campos = document.getElementsByClassName('campo');
// console.log(campos);
// campos[0].value = 'Coca cola';
// console.log(campos[0].value);

// /* onabort evento cuando se oprime x para cancelar la actualizacion de la pag
// onblur evento cuando sale del campo
// onclick
// ondoubleclick */

// for(let i = 0; i < campos.length; i++){
//     campos[i].style.border = "red thin solid";
// }

// console.log(campos[0].style.border);

// //Los spans tienen textContent <span> textContent </span>
// let spans = document.getElementsByTagName('span');

// for(let i = 0; i < spans.length; i++){
//     console.log(spans[i].textContent);
// }






let tabla = document.getElementById('tablaListaCompras');
//al buscar getElements se refiere a que creara una HTMLCollection
let cuerpoTabla = tabla.getElementsByTagName('tbody');

// cuerpoTabla[0].innerHTML = `
// <tr>
// <th scope="row">1</th>
// <td>Coca cola</td>
// <td>1</td>
// <td>$30.00</td>
// <td>$30.00</td>
// </tr>
// `

/* 
            <tr>
              <th scope="row">1</th>
              <td>Coca cola</td>
              <td>1</td>
              <td>$30.00</td>
              <td>$30.00</td>
            </tr>
*/



let txtNumero = document.getElementById('Number');

let btnAgregar = document.getElementById('btnAgregar');

console.log(btnAgregar)

// btnAgregar.addEventListener('click', agregarElementos);

// function agregarElementos(){

// }

let count = 1;
btnAgregar.addEventListener('click', (e) => {
    // e.ctrlKey    / indica si se oprime control al dar click es booleano
    //console.log('click', e)
    // console.log(txtNombre.value, txtNumero.value)
    const precio = Math.random() * 50;
    console.log(cuerpoTabla);

    let tmp = `<tr>
    <th scope="row">${count}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumero.value}</td>
    <td>$${precio}</td>
    <td>$${parseInt(txtNumero.value) * precio}</td>
    </tr>`

    console.log(tmp)

    cuerpoTabla[0].innerHTML += tmp;
    count++;

    txtNombre.value = '';
    txtNumero.value = '';
    txtNombre.focus();
});




