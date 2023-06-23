function detectarDiaYHora() {
    const fechaActual = new Date();
    const diaSemana = fechaActual.getDay();
    const esFinDeSemana = diaSemana === 0 || diaSemana === 6;
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
  
    let mensaje = '';
  
    if (esFinDeSemana) {
      mensaje = 'Es fin de semana';
      
    } else {
      mensaje = 'Es día de semana';
    }
  
    mensaje += ` y la hora actual es ${hora}:${minutos}`;
  
    console.log(mensaje);
  }
  

  detectarDiaYHora(); // para llamar a la funcion
  