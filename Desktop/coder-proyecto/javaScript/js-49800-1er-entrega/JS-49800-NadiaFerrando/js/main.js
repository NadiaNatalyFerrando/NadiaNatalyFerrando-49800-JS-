console.log("");
console.log("---------- 2da Pre-entrega ----------");
console.log("---------- Inicialización de la aplicación ----------");


// Funciones globales

const elementExistsId = (array, idReference) => {
    let exist = array.some( element => element.id === idReference );
    return exist;
  }

// Inicializar variables

const greet = "Bienvenidos a Villa Maipú Pilates";
  console.log(greet); 

  // Sección crear login con contraseña
function login(){
  let username = prompt("Ingrese su nombre de usuario:");
    console.log(studentId);
  let password = prompt("Ingrese su contraseña:");

  //Verificar credenciales
  if (username === " " && password === " ") {
    console.log("Inicio de sesión exitoso");
  }
}

const register = "Registrate";
  console.log(register); 

  // Sección Alumnos

  let studentId = 1;
  let students = [];
  
  class Student {
    constructor(nombre, apellido, fechadenacimiento, edad, domicilio, númerodecelular, email) {
      this.name = nombre;
      this.surname = apellido;
      this.birthdate = fechadenacimiento;
      this.age = edad;
      this.address = domicilio;
      this.phoneNumber = númerodecelular;
      this.email = email;
      this.id = studentId;
    }
  }
  
  const addStudent = (student) => {
      students.push(student);
      studentId++
  };
  
  const deleteStudent = ( id ) => {
  
    if(elementExistsId(students, id)) {
      student = students.filter(student => student.id !== id);
    } else {
      alert("No existe ningún alumno con ese ID");
    }
  };
  
  const showStudents = () => {
      let studentNames = students.map( student => `ID: ${student.id} - Nombre: ${student.name}` );
      // verificar si hay elementos en el array 
      if(studentNames.length > 0) {
        alert(studentNames.join("\n"));
      } else {
        alert("No hay alumnos registrados");
      }
  };

  // Sección de Menús

  // Menú Admisión

  const formsMenu = () => {
    let state = true;
  
    while (state) {
      let option = parseInt(
        prompt(
          `
          Bienvenido a Menú de formularios
          1 - Responder cuestionario de admisión
          2 - Volver
          `
        )
      );
      switch (option) {
        case 1:
            // Seccion completar cuestionario de admisión
            const admissionDate = "Cuestionario de Admisión";
              console.log(admissionDate); 

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
            break;
        case 2:
            state = false;
            mainMenu();
            break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };


  // Menú Alumnos

  const studentMenu = () => {
    let state = true;
  
    while (state) {
      let option = parseInt(
        prompt(
          `
          Bienvenido a Menú de alumnos
          1 - Mostrar alumnos
          2 - Agregar un alumno
          3 - Eliminar un alumno
          4 - Volver
          `
        )
      );
  
      switch (option) {
        case 1:
          showStudents();
          break;
        case 2:
          let name = prompt("Ingrese el nombre");
            console.log(`El nombre ingresado es ${name}`);
          let surname = prompt("Ingrese el apellido");
            console.log(`El apellido ingresado es ${surname}`);
          let birthdate = parseInt (prompt("Ingrese su fecha de nacimiento"));
            console.log(`La fecha de nacimiento es ${birthdate}`);
          let age = parseInt (prompt("Ingrese su edad"));
            console.log(`Su edad es ${age}`);
          let address = prompt("Ingrese su domicilio completo");
            console.log(`El domicilio ingresado es ${address}`);
          let phoneNumber = parseInt (prompt("Ingrese su número de telefono"));
            console.log(`El número de telefono ingresado es ${phoneNumber}`);
          let email = prompt("Ingrese el email del usuario");
            console.log(`El e-mail ingresado es ${email}`);
          let student = new Student(name, surname, birthdate, age, address, phoneNumber, email);
          addStudent(student);
          break;
        case 3:
          let idStudent = parseInt(prompt("Ingrese el ID del alumno a eliminar"));
          deleteStudent(idStudent);
          break;
        case 4:
          state = false;
          mainMenu();
          break;
  
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  
  let state = true;
  const mainMenu = () => {
    while (state) {
      let option = parseInt(
        prompt(
          `
        Bienvenido a nuestra APP de Inscripción Villa Maipú Pilates
        1 - Registro de Alumnos
        2 - Registro de Formularios
        3 - Salir
        `
        )
      );
      switch (option) {
        case 1:
          // registro alumnos
          studentMenu();
          break;
        case 2:
          // registro de formularios
          formsMenu();
          break;
        case 3:
          state = false;
          break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  
  login();
  mainMenu();
