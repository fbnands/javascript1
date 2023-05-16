let llantas = (prompt("ingresa el numero de llantas"))
let transporte = parseInt()(prompt("ingresa el tipo de transporte si es terrestre, acuatico, o aereo")).toLowerCase()




if (llantas == 4 && transporte == "terreste") {
    alert("carro");
  } else if (llantas > 4 && transporte == "terreste") {
    alert("camion");
  } else if (llantas == 2 && transporte == "terreste") {
    alert("moto o bicicleta.");
  } else if (llantas == 1 && transporte == "terreste") {
    alert("monociclo.");
  } else if (llantas == 0 && transporte == "acuatico") {
    alert("barco.");
  } else if (llantas == 20 && transporte == "aereo") {
    alert("Eavion.");
  } else {
    alert("No se pudo identificar el medio de transportType.");
  }

  