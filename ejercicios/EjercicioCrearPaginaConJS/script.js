// creo el header
const header = document.createElement("header");
header.classList.add("site-header");//clase para el CSS
document.body.appendChild(header); //PARA QUE SE VEA
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


//CREAR EL MAIN body 
const main = document.createElement("main");
main.classList.add("site-main");
main.id = "content";
//contenido del main 
const article = document.createElement("article"); //crear un articulo dentro del main
article.classList.add("site-article"); 
    const articleTitle = document.createElement('h2'); //un titulo del artículo
    articleTitle.textContent = 'Sobre Nosotros'; //contenido
    article.appendChild(articleTitle);

    //contenido del artículo
    const articleText = document.createElement('p');
    articleText.textContent = "Este es el contenido del artículo dentro de una etiqueta p bla bla bla bla bla";
    articleText.classList.add("site-article-text");
    articleText.id = "article-text";
    articleText.style.color = "red";

article.appendChild(articleText);
main.appendChild(article);

document.body.appendChild(main);

//footer 
const footer = document.createElement("footer");
footer.classList.add("site-footer");
footer.id = "main-footer";
footer.textContent = "Footer copyright";
    const pFoot = document.createElement("p");
    pFoot.textContent = "Este es el footer del sitio";
    pFoot.classList.add("site-footer-text");
    pFoot.id = "footer-text";
    footer.appendChild(pFoot);

document.body.appendChild(footer);
