import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const Pendulo = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src="../../../src/imagen/Img/pendulo.webp" 
            alt="Péndulo" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-1">Péndulo</h2>
          <p>
            El <strong>péndulo</strong> es una herramienta fascinante utilizada en diversas prácticas, como la 
            radiestesia, la sanación energética y la toma de decisiones intuitivas. Consiste en un objeto 
            suspendido que puede oscilar libremente en un plano. Este objeto, que puede ser una piedra, un 
            cristal o cualquier otro material, se cuelga de un hilo o cadena, permitiendo que se mueva en 
            respuesta a diversas energías o preguntas planteadas por el usuario.
          </p>
          <p>
            El uso del péndulo se basa en la idea de que todo en el universo está interconectado y que nuestras 
            energías pueden influir en el movimiento del objeto. Para utilizarlo, el practicante sostiene el 
            péndulo en una posición estable y plantea una pregunta clara. Las respuestas pueden manifestarse a 
            través de los movimientos del péndulo, que pueden ser oscilaciones hacia adelante y hacia atrás, 
            movimientos circulares o una posición estable, cada uno de los cuales puede interpretarse de 
            diferentes maneras según la intención del usuario.
          </p>
          <p>
            En la radiestesia, el péndulo se utiliza para detectar energías, como las de un lugar o una persona, 
            permitiendo al practicante identificar áreas de bloqueo o desequilibrio. También se emplea en la 
            selección de remedios, alimentos y tratamientos, ayudando a las personas a encontrar las mejores 
            opciones para su salud y bienestar. 
          </p>
         
         
        </div>
      </div>
    </div>
  );
}

export default Pendulo;
