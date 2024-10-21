import '../../index.css'; // Asegúrate de importar el CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Home = () => {
  return (
    <div className="container home">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img src="../../../public/img/LogoHome.jpg" alt="Descripción de la imagen" className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
        <h1 className="emprendimiento-title">Bienestar Holístico</h1>
          <p className="emprendimiento-description">
            Art.Mandalas se especializa en ofrecer un enfoque integral hacia el bienestar y la sanación holística, combinando diversas prácticas que fomentan el crecimiento personal y la conexión espiritual.
          </p>
          <p className="emprendimiento-description">
            A través del Reiki, ayudas a tus clientes a liberar bloqueos emocionales y físicos, promoviendo un estado de relajación profunda. Las constelaciones familiares permiten explorar y resolver dinámicas familiares, facilitando la sanación. Con los mapas akáshicos, ofreces acceso a la sabiduría interior y claridad sobre el propósito de vida. Utilizas péndulos para la radiestesia, ayudando en la toma de decisiones, y complementas tus servicios con la venta de saumerios para purificar espacios.
          </p>
          <p className="emprendimiento-description">
            Tu enfoque personalizado busca empoderar a las personas en su camino de autoconocimiento y sanación, creando un espacio seguro donde cada uno pueda explorar su interior y encontrar su bienestar.
          </p>
        </div>
      </div>
      </div>
  )
}

export default Home;
