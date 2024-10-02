// creo el header
const header = document.createElement("header");
header.classList.add("site-header");//clase para el CSS
document.body.appendChild(header); //simplemente está dentro del document
header.id = "main-header";//ID único
//Creo el h1 en el Header
const h1 = document.createElement("h1");
h1.textContent = "Trabajo para asignatura Cliente";
header.appendChild(h1); //asignamos h1 como hijo de Hader, por lo que está dentro del header
h1.id = "main-title";
//Barra de navegación
const nav = document.createElement("nav");
nav.classList.add("site-nav");
nav.id = "main-nav";
//enlaces en la barra de navegación
const ul = document.createElement("ul");
const links = [ //un array de objetos con dos propiedades HREF y TEXT
    {href: '#home', text: "Inicio"},
    {href: '#about', text: "Acerca de"},
    {href: '#contact', text: "Contacto"}
]
//Ahora se itera a través del array creando un enlace y un li por cada elemento
links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text; //el textcontent del a es el texto del objeto
    a.href = link.href; //el href del a es el valor del href del objeto
    li.appendChild(a);
    ul.appendChild(li); //poner cada elemento del array como hijo de la lista ul
});
nav.appendChild(ul); // la lista está en el navegador
header.appendChild(nav); // el navegador es hijo de header
//PONER LOS APPENDCHILD AL FINAL DEL CÓDIGO DEL HIJO COMO BUENA PRÁCTICA
body.appendChild(header);