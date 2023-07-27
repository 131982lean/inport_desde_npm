// Importamos la función multiplicar desde el módulo multiplicar
import { multiplicar } from "multiplicar";

// Función para calcular un número elevado a una potencia
function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  } else if (exponente < 0) {
    return 1 / potencia(base, -exponente);
  } else {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado = multiplicar(resultado, base);
    }
    return resultado;
  }
}

// Ejemplo de uso:
const base = 2;
const exponente = 3;
const resultado = potencia(base, exponente);
console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);
