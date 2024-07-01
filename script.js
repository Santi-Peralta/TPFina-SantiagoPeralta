let Url = 'https://api.yumserver.com/16783/products';

function GuardarProducto() {
    let productonuevo = {
        titulo: document.getElementById('producto').value.trim(),
        precioPeso: document.getElementById('preciopeso').value.trim(),
        precioDolar: document.getElementById('preciodolar').value.trim(),
        fecha: document.getElementById('fecha').value
    };   

        if(productonuevo.titulo === "" || productonuevo.precioPeso === "" || productonuevo.precioDolar === "" || productonuevo.fecha === "") 
            {document.getElementById('errores').innerText = "Completa todos los campos";}
        else {
            {document.getElementById('errores').innerText = "Guardado correctamente";}
        }

        fetch(Url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify (productonuevo)
            })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error: ', error));    
}

function ObtenerProductos() {
    fetch(Url)
    .then(response => response.json())
    .then(MostrarProductos)
    .catch(error => console.error('Error: ', error))
}

function MostrarProductos(productonuevo) {
    let html = ``;
    for (let i = 0; i < productonuevo.length; i++) {
        html += `
            <tr>
                <td>${productonuevo[i].idcod}</td>
                <td>${productonuevo[i].titulo}</td>
                <td>$${productonuevo[i].precioPeso}</td>        
                <td>$${productonuevo[i].precioDolar}</td>
                <td>${productonuevo[i].fecha}</td>
            </tr>
        `;   
    }
    document.getElementById('resultados').innerHTML = html; 
}

function EliminarProducto() {
    let IDeliminar = document.getElementById('idok').value.trim();

    if (IDeliminar) {
        var ok = confirm('¿Desea eliminar el producto?')    
        if (ok) {
            fetch(Url, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({idcod: IDeliminar})
            })
            .then(response => response.text())
            .then(data => {console.log(data);
                if(data === 'El idcod no es válido.') {
                    document.getElementById('parrafo').innerText = "El ID ingresado no existe";
                }
                else {
                    document.getElementById('parrafo').innerText = "Se eliminó correctamente";
                }
            })
            .catch(error => {console.error('Error: ', error)})
        }
        else {
            
            document.getElementById('parrafo').innerText = "Cancelado"
        }
    }
    else {
        document.getElementById('parrafo').innerText = "Ingresa un ID"
    }
}       

function ModificarProducto() {
    let idmodif = document.getElementById('IDaModificar').value.trim();
    let titulo =  document.getElementById('productoamodif').value.trim();
    let precioPeso = document.getElementById('preciopesoamodif').value.trim();
    let precioDolar = document.getElementById('preciodolaramodif').value.trim();
    let fecha = document.getElementById('fechaamodif').value;

    if(idmodif === "" || titulo === "" || precioPeso === "" || precioDolar === "" || fecha === "") {
        {document.getElementById('mostrarp').innerText = "Completa todos los campos";}
    } else {
        document.getElementById('mostrarp').innerText = "Modificado correctamente";
    }

    fetch(Url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            idcod: idmodif,
            titulo: titulo,
            precioPeso:precioPeso,
            precioDolar: precioDolar,
            fecha: fecha,
        })
    })
   .then(resp => resp.text())
   .then(data => {console.log(data)
    if(data !== 'OK') {
        alert('El ID no existe')
    }
   })
   .catch(error => console.error('ERROR', error))
}

function MostrarFormCrear() {
    var FormCrear = document.getElementById('CrearProductoID')
    if(FormCrear) 
    {
        if(FormCrear.className == 'CrearProducto') 
        {
            FormCrear.className = ''
        }
        else {
            FormCrear.className = 'CrearProducto'
        }          
    }
} 

function MostrarFormEliminar() {
    var FormEliminar = document.getElementById('Contenedor-eliminar-ID')
    if(FormEliminar) 
    {
        if(FormEliminar.className == 'Contenedor-eliminar') 
        {
            FormEliminar.className = ''
        }
        else {
            FormEliminar.className = 'Contenedor-eliminar'
        }          
    }
}

function MostrarFormModificar() {
    var FormModificar = document.getElementById('ContenedorID')
    if (FormModificar) {
        if(FormModificar.className == 'contenedorOK') {
            FormModificar.className = ''
        }
        else {
            FormModificar.className = 'contenedorOK'
        }
    }
}

function MostrarTabla() {
    var FormEliminar = document.getElementById('VerProductos')
    if(FormEliminar) 
    {
        if(FormEliminar.className == 'VerTabla') 
        {
            FormEliminar.className = ''
        }
        else {
            FormEliminar.className = 'VerTabla'
        }          
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-elim');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-modif');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        form.reset();
    });
}); 




