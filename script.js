const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

CALCULAR.addEventListener("click", () => {
  const DATO = document.getElementById("peso").value;
  //validamos que se cargue un dato:
  if (DATO > 0) {
    ERROR.style.display = "none";
    let flujo = calcFlujo(DATO); //El flujo es diario
    let mantenimiento = flujo * 1.5;
    FLU.innerHTML = flujo + " cc/hr";
    MAN.innerHTML = "m+m/2 " + mantenimiento + " cc/hr";
    FLU.style.display = "block";
    MAN.style.display = "block";
  } else {
    ERROR.style.display = "block";
    FLU.style.display = "none";
    MAN.style.display = "none";
  }
});
function calcFlujo(pesoKg) {
  let peso = pesoKg;
  if (peso > 30) {
    //Usamos metodo de superficie corporal
    let flujo = calcularSC(pesoKg) * 1500; //Este flujo es el valor para el flujo diario
    return flujo / 24; //Obtenemos el valor del flujo horario
  }
  if (peso > 20) {
    let flujo = 100 * 10; //100 cc por cada kilo hasta 10
    flujo += 50 * 10; // 50 cc de 10 hasta 20 por cada kilo
    flujo += 20 * (peso - 20); //Sumamos 20cc por cada kilo sobre 20 (peso-20) 22-20 = 2
    return flujo / 24; //Obtenemos el valor del flujo horario
  }
  if (peso > 10) {
    let flujo = 100 * 10; //100 cc por cada kilo hasta 10
    flujo += 50 * (peso - 10); // 50 cc de 10 hasta 20 por cada kilo extra de 10
    return flujo / 24; //Obtenemos el valor del flujo horario
  } else {
    let flujo = 100 * peso; //100 cc por cada kilo hasta 10
    return flujo / 24; //Obtenemos el valor del flujo horario
  }
}

function calcularSC(peso) {
  return (peso * 4 + 7) / (peso + 90);
}
