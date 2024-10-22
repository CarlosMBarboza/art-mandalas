import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const ConstelacionesFamiliares = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src="../../../src/imagen/Img/constFamyliares.webp" 
            alt="Constelaciones Familiares" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-2">Constelaciones Familiares</h2>
          <p>
            Las <strong>constelaciones familiares</strong> son una terapia alternativa desarrollada por 
            el psicoterapeuta alemán <em>Bert Hellinger</em>. Esta técnica innovadora busca revelar dinámicas 
            ocultas en las relaciones familiares que podrían estar generando conflictos emocionales, 
            enfermedades o patrones de comportamiento repetitivos. La premisa central es que las dificultades 
            que enfrentamos en nuestra vida pueden estar relacionadas con las historias y los traumas no 
            resueltos de nuestros antepasados.
          </p>
          <p>
            Durante una sesión de constelación familiar, los participantes representan a miembros de la familia del 
            consultante. Esta representación se realiza en un entorno grupal, donde otros miembros del grupo 
            asumen el rol de familiares. A través de movimientos, posturas e interacciones espontáneas, se manifiestan 
            tensiones y bloqueos inconscientes que afectan el sistema familiar. El consultante observa cómo estas 
            dinámicas se despliegan en el espacio, lo que le permite ganar una nueva perspectiva sobre sus problemas.
          </p>
          <p>
            Uno de los aspectos más intrigantes de las constelaciones familiares es el uso de "representantes". 
            Estos individuos, que pueden ser otros participantes del grupo, representan a los miembros de la familia, 
            lo que permite al consultante experimentar sus sentimientos y percepciones desde un lugar de distancia emocional. 
          
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default ConstelacionesFamiliares;
