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
  let birthdate = parseInt (prompt("Ingrese su fecha de nacimmiento"));
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

const answerCheck = (userAnswer, questions) => {
  let answer = prompt(questions).toLowerCase();

  while (answer !== "no" && answer !== "si") {
    alert("Respuesta invalida. Por favor debe contestar por si o por no");
    answer = prompt(questions).toLowerCase();
  }

  if (answer === userAnswer) {
    console.log(questions + ": " + answer)
  } else {
    console.log(questions + ": " + answer)
  }
};

for (let i = 0; i <= 7; i++) {
let questions;
let userAnswer;

switch (i) {
  case 1:
    questions = "¿Padece afecciones cardiacas?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 2:
    questions = "¿Padece afecciones respiratorias?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 3:
    questions = "¿Padece afecciones neurológicas?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 4:
    questions = "¿Padece lesiones articulares?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 5:
    questions = "¿Padece lesiones óseas (fracturas)?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 6:
    questions = "¿Padece presión arterial normal?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  case 7:
    questions = "¿Fuma?";
    userAnswer = " ";
    answerCheck (userAnswer, questions);
    break;
  default:
    alert("Encuesta de preguntas por si o por no");
    break;
}
}

