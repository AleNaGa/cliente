//DOM -> Document Object Model
/*
                          --> elemento (head) -> elemento (title) -> textContent 'Titulo de mi web'
                         |
Document -> root (html) -|                      --> elemento (h1)
                         |                     |
                          --> elemento (body) -|                                     --> textContent 'Contacto'
                                               |                                    |    
                                                --> elemento (nav) -> elemento (a) -|  
                                                                                    |
                                                                                     --> atributo ('id'): 'contact'
*/
const documento = document;
console.log(documento);
const head = document.head;
console.log(head);
const body = document.body;
console.log(body);
const forms = document.forms;
console.log(forms);
const firstForm = document.forms[0];
console.log(firstForm);
const firstFormId = document.forms[0].id;
console.log(firstFormId);
const firstFormClass = document.forms[0].classList;
console.log(firstFormClass);
const firstFormClassString = document.forms[0].className;
console.log(firstFormClassString);
//igual que forms se puede hacer con links, images...

//Seleccionar elementos por su clase:
const cards = document.getElementsByClassName("cards");
console.log(cards);

//Seleccionar elementos por id:
const cardContainer = document.getElementById("cardContainer");
console.log(cardContainer);

//Seleccionar por selector de css (solo un elemento)
const card = document.querySelector(".cards"); //Solo nos da el primero
console.log(card);
//Podemos usar cualquier selector de css
const card1 = document.querySelector("#cardContainer .cards"); 
console.log(card1);
//Para elegir la segunda
const card2 = document.querySelector("#cardContainer .cards:nth-child(2)");
console.log(card2);

//Seleccionar todos por selector de css
const allCards = document.querySelectorAll(".cards"); //Nos da todas las cards
console.log(allCards);

//Modificar textos:
const tituloh1 = document.querySelector("#tituloh1");
console.log(tituloh1.innerText); // Si visibility: hidden no lo va a encontrar
console.log(tituloh1.textContent); // Si lo encuentra
console.log(tituloh1.innerHTML); //Trae el html

tituloh1.innerHTML = "Hola Mundo";

//Modificar css:
tituloh1.style.backgroundColor = "red"; //CUIDADO -> CSS: background-color JAVASCRIPT: backgroundColor
tituloh1.style.fontFamily = "Arial";
tituloh1.textTransform = "uppercase";

//Añadir clases
tituloh1.classList.add('redClass');
tituloh1.classList.remove('redClass');

//Traversing
const navTool = document.querySelector("#navTool");
console.log(navTool);
//Lista de hijos
console.log(navTool.childNodes); //Los saltos de linea/espacios en blanco son considerados elementos
console.log(navTool.children); //No coge los saltos de linea/espacios
//Elegir uno en concreto
console.log(navTool.children[1]);
//Ver tipo de etiqueta y tipo de nodo
console.log(navTool.children[1].nodeName);
console.log(navTool.children[1].nodeType);
//Puedes modificar tambien sus atributos
const hijo = navTool.children[1];
hijo.textContent = "Inicio";
console.log(hijo); 
//De hijo a padre
console.log(hijo.parentNode); //Los saltos de linea/espacios en blanco son considerados elementos
console.log(hijo.parentElement); //No coge los saltos de linea/espacios
//Moverse entre hermanos
console.log(hijo.nextElementSibling); //Equivalente a navTool.children[2]
console.log(hijo.previousElementSibling); //Equivalente a navTool.children[0]
//Otros
console.log(navTool.firstElementChild);
console.log(navTool.lastElementChild);

//Eliminar elementos html
console.log(navTool); 
console.log(hijo); 
hijo.remove();
console.log(navTool); 
//Eliminar desde el padre
navTool.removeChild(navTool.children[3]);
console.log(navTool); 

//Crear elemento
const enlace = document.createElement("A"); //No lo estoy agregando al DOM, solo creando enlace
enlace.textContent = "Nuevo enlace";
enlace.href = "#";
enlace.target = "_blank";
enlace.setAttribute("atributo-personalizado", "personalizado")

//Seleccionar donde añadirlo. En nuestro caso, en el navTool que ya tenemos definido
navTool.appendChild(enlace);
//Tambien se puede añadir despues de cierto enlace
navTool.insertBefore(enlace, navTool.children[2]);

//Crear un contenedor con elementos
const cardTitle = document.createElement("H1");
cardTitle.textContent = "Titulo";
const cardText = document.createElement("P");
cardText.textContent = "Contenido";
const cardButton = document.createElement("BUTTON");
cardButton.textContent = "Mas info";

const cardDiv = document.createElement("div");
cardDiv.classList.add("cards");
cardDiv.classList.add("redClass");

cardDiv.appendChild(cardTitle);
cardDiv.appendChild(cardText);
cardDiv.appendChild(cardButton);

//Insertarlo en el html
cardContainer.appendChild(cardDiv);