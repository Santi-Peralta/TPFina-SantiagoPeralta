document.addEventListener('DOMContentLoaded', function(){
    const header = `
    <header>
            <img src="img/ciclista.jpg" class="logo">    
            <h1>Good Byke</h1>    
            <nav class="navok">
                <ul>
                    <li><a href="Productos.html" class="operaciones">Añadir | Eliminar | Modificar</a></li>
                </ul>
            </nav>
    </header>`;
    document.querySelector('header').innerHTML = header;
});



