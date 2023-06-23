export function detectarDiaYHora() {
  const fechaActual = new Date();
  const diaSemana = fechaActual.getDay();
  const esFinDeSemana = diaSemana === 0 || diaSemana === 6;
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript comienzan en 0
  const anio = fechaActual.getFullYear();

  const fechaFormateada = `${dia}.${mes}.${anio}`;

  let mensaje = '';

  if (esFinDeSemana) {
    mensaje = 'Es fin de semana';
  } else {
    mensaje = 'Es día de semana';
  }

  mensaje += ` y la hora actual es ${hora}:${minutos}`;

  console.log(fechaFormateada);
  console.log(mensaje);

  return fechaFormateada;}

detectarDiaYHora(); // Llamada a la función
