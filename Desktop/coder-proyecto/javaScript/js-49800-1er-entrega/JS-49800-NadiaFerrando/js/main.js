console.log("");
console.log("---------- 1er Pre-entrega ----------");
console.log("---------- Inicialización de la aplicación ----------");

// Declaro variables para datos
let name; 
let surname;
let birthdate;
let age;
let address;
let phoneNumber; 
let email;

// Inicializar variables

const greet = "Bienvenidos a Villa Maipú Pilates";
  console.log(greet); 

const admission = "Ficha de Admisión";
  console.log(admission); 

function requestName() {
  let name = prompt("Ingrese su nombre");
  console.log(`El nombre ingresado es ${name}`);
}

requestName();

function requestSurname() {
  let surname = prompt("Ingrese su apellido");
  console.log(`El apellido ingresado es ${surname}`);
}

requestSurname();

function requestBirthdate() {
  let birthdate = prompt("Ingrese su fecha de nacimmiento");
  console.log(`La fecha de nacimiento es ${birthdate}`);
}

requestBirthdate();

function requestAge() {
  let age = parseInt (prompt("Ingrese su edad"));
  console.log(`Su edad es ${age}`);
}

requestAge();

function requestAddress() {
  let address = prompt("Ingrese su domicilio");
  console.log(`El domicilio ingresado es ${address}`);
}

requestAddress();

function requestPhonenumber() {
  let phoneNumber = parseInt (prompt("Ingrese su número de telefono"));
  console.log(`El número de telefono ingresado es ${phoneNumber}`);
}

requestPhonenumber();

function requestEmail() {
  let email = prompt("Ingrese su e-mail");
  console.log(`El e-mail ingresado es ${email}`);
}

requestEmail();

const data = "A continuación, dejo expresa constancia que la siguiente información solicitada, es cierta y verdadera:";
  console.log(data); 

//Definir las preguntas y respuestas
const questions1 = "¿Padece afecciones cardiacas?";
const questions2 = "¿Padece afecciones respiratorias?";
const questions3 = "¿Padece afecciones neurológicas?";
const questions4 = "¿Padece lesiones articulares?";
const questions5 = "¿Padece lesiones óseas (fracturas)?";
const questions6 = "¿Padece presión arterial normal?";
const questions7 = "¿Fuma?";

//Definir un objeto para almacenar las respuestas
const answer = {};

//Función para mostrar una pregunta y obtener la respuesta del usuario
function askQuestions (questions) {
  const answer = prompt(questions + " (responde si o no)").toLowerCase();
  console.log (questions + ": " + (answer ? "Sí" : "No"));
}

answer[questions1] = askQuestions (questions1);
answer[questions2] = askQuestions (questions2);
answer[questions3] = askQuestions (questions3);
answer[questions4] = askQuestions (questions4);
answer[questions5] = askQuestions (questions5);
answer[questions6] = askQuestions (questions6);
answer[questions7] = askQuestions (questions7);

function validateAnswer (answer){
  if (answer === "sí" || answer === "si") {
    console.log ("Respuesta: Sí");
  } else if (answer === "no") {
    console.log ("Respuesta: No");
  } else {
    return answer.toLowerCase() === "no";
  }
}

