import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const Reiki = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src="../../../src/imagen/Img/reiki.webp" 
            alt="Reiki" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-3">Reiki</h2>
          <p>
            El <strong>reiki</strong> es una práctica de sanación energética que se basa en la idea de que 
            existe una energía vital universal que fluye a través de todos los seres vivos. Esta técnica, originaria 
            de Japón, se utiliza para promover el equilibrio emocional, físico y espiritual, facilitando la 
            recuperación y el bienestar general.
          </p>
          <p>
            Durante una sesión de reiki, el practicante coloca sus manos suavemente sobre el cuerpo del receptor 
            o a una pequeña distancia, canalizando la energía a través de las palmas. Esta energía se utiliza 
            para aliviar el estrés, reducir el dolor y ayudar en la recuperación de enfermedades. 
            Los tratamientos pueden ser tanto presenciales como a distancia, permitiendo que la energía fluya 
            donde sea necesario.
          </p>
          <p>
            Se considera que el reiki actúa sobre el sistema energético del cuerpo, desbloqueando áreas de 
            tensión y restaurando el equilibrio. Muchos practicantes y receptores reportan una sensación de 
            paz profunda y bienestar después de una sesión, convirtiéndolo en un recurso valioso para el autocuidado 
            y la sanación integral.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reiki;
