let day = prompt("ingrese un dia").toLowerCase(); //

if (
  day == "lunes" ||
  day == "martes" ||
  day == "miercoles" ||
  day == "jueves" ||
  day == "viernes"
) {
  alert("es un dia entre semana");
} else {
  if (day == "sabado" || day == "domingo") {
    alert("es un fin de semana");
  } else {
    alert("por favor ingresa solo un dia en la semana");
  }
}
