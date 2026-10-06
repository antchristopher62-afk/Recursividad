/* =========================================
   FUNCIÓN RECURSIVA: FACTORIAL
   ========================================= */

function calcularFactorial() {
  // Lee el número escrito por el usuario
  var numero = document.getElementById("numeroFactorial").value;
  numero = Number(numero);

  // Valida que el número sea correcto
  if (numero < 0 || numero > 12) {
    document.getElementById("resultadoFactorial").innerHTML =
      "Escribe un número entre 0 y 12.";
    return;
  }

  // Función recursiva
  function factorial(n) {
    if (n == 0) {
      return 1; // Caso base
    }
    return n * factorial(n - 1); // Caso recursivo
  }

  // Muestra el resultado
  document.getElementById("resultadoFactorial").innerHTML =
    numero + "! = " + factorial(numero);
}

/* =========================================
   FUNCIÓN RECURSIVA: FIBONACCI
   ========================================= */

function calcularFibonacci() {
  // Lee la posición escrita por el usuario
  var numero = document.getElementById("numeroFibonacci").value;
  numero = Number(numero);

  // Valida el número
  if (numero < 0 || numero > 20) {
    document.getElementById("resultadoFibonacci").innerHTML =
      "Escribe una posición entre 0 y 20.";
    return;
  }

  // Función recursiva
  function fibonacci(n) {
    if (n == 0) {
      return 0; // Caso base 1
    }
    if (n == 1) {
      return 1; // Caso base 2
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Caso recursivo
  }

  // Muestra el resultado
  document.getElementById("resultadoFibonacci").innerHTML =
    "F(" + numero + ") = " + fibonacci(numero);
}

/* =========================================
   FUNCIÓN RECURSIVA: TORRES DE HANÓI
   ========================================= */

function resolverHanoi() {
  // Lee el número de discos
  var numero = document.getElementById("numeroHanoi").value;
  numero = Number(numero);

  // Obtiene los elementos para mostrar resultados
  var resultado = document.getElementById("resultadoHanoi");
  var movimientos = document.getElementById("movimientosHanoi");

  // Valida el número de discos
  if (numero < 1 || numero > 5) {
    resultado.innerHTML = "Escribe un número entre 1 y 5.";
    movimientos.innerHTML = "";
    return;
  }

  // Variable para guardar los movimientos
  var lista = "";

  // Función recursiva
  function hanoi(n, origen, destino, auxiliar) {
    if (n == 1) {
      lista = lista + "Mover disco 1 de " + origen + " a " + destino + "\n";
      return;
    }

    hanoi(n - 1, origen, auxiliar, destino);

    lista = lista + "Mover disco " + n + " de " + origen + " a " + destino + "\n";

    hanoi(n - 1, auxiliar, destino, origen);
  }

  // Llama a la función
  hanoi(numero, "A", "C", "B");

  // Muestra los resultados
  resultado.innerHTML = "Se necesitan " + Math.pow(2, numero) - 1 + " movimientos.";
  movimientos.innerHTML = lista;
}

/* =========================================
   FUNCIÓN RECURSIVA: FRACTAL SIMPLE
   ========================================= */

function dibujarFractal() {
  // Obtiene el lienzo
  var lienzo = document.getElementById("lienzo");
  var pincel = lienzo.getContext("2d");

  // Lee el nivel del fractal
  var nivel = document.getElementById("nivelFractal").value;
  nivel = Number(nivel);

  // Limpia el lienzo
  pincel.clearRect(0, 0, 400, 300);

  // Color de dibujo
  pincel.fillStyle = "#1e3a8a";

  // Función que dibuja un triángulo
  function dibujarTriangulo(x1, y1, x2, y2, x3, y3) {
    pincel.beginPath();
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.lineTo(x3, y3);
    pincel.closePath();
    pincel.fill();
  }

  // Función recursiva del fractal
  function sierpinski(x1, y1, x2, y2, x3, y3, nivel) {
    if (nivel == 0) {
      dibujarTriangulo(x1, y1, x2, y2, x3, y3);
      return;
    }

    // Puntos medios
    var x12 = (x1 + x2) / 2;
    var y12 = (y1 + y2) / 2;

    var x23 = (x2 + x3) / 2;
    var y23 = (y2 + y3) / 2;

    var x13 = (x1 + x3) / 2;
    var y13 = (y1 + y3) / 2;

    // Llamadas recursivas
    sierpinski(x1, y1, x12, y12, x13, y13, nivel - 1);
    sierpinski(x12, y12, x2, y2, x23, y23, nivel - 1);
    sierpinski(x13, y13, x23, y23, x3, y3, nivel - 1);
  }

  // Dibuja el fractal
  sierpinski(200, 20, 20, 280, 380, 280, nivel);
}

/* =========================================
   EJECUTA LOS EJEMPLOS AL ABRIR LA PÁGINA
   ========================================= */

window.onload = function () {
  calcularFactorial();
  calcularFibonacci();
  resolverHanoi();
  dibujarFractal();
};