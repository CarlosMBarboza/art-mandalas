import { Outlet } from 'react-router-dom';

const ConoscaMas = () => {
  return (
    <div className="container m-5">
      <Outlet />
      <div className="row">
        <div className="col-md-6">
          <img
            src="../../../src/imagen/Img/alternativas.jpg"
            alt="Terapias Alternativas"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-2">Terapias Alternativas</h2>
          <p>
            Las <strong>terapias alternativas</strong> como el <strong>Reiki</strong>, el <strong>péndulo</strong>,
            los <strong>registros akáshicos</strong> y las <strong>constelaciones familiares</strong> ofrecen un enfoque holístico
            para la sanación y el autoconocimiento. Cada una de estas prácticas tiene su propio conjunto de técnicas
            y beneficios, pero todas comparten el objetivo de promover el bienestar integral.
          </p>
          <h3>Reiki</h3>
          <p>
            El <strong>Reiki</strong> es una práctica de sanación energética que utiliza la imposición de manos para canalizar
            energía universal hacia el cuerpo del paciente, ayudando a equilibrar su energía y promover la sanación física,
            emocional y espiritual.
          </p>
          <h3>Péndulo</h3>
          <p>
            El uso del <strong>péndulo</strong> es una técnica de radiestesia que permite detectar y equilibrar energías en
            el cuerpo y el entorno. A través de movimientos del péndulo, se pueden identificar bloqueos y desequilibrios que
            pueden ser tratados para mejorar la salud y el bienestar.
          </p>
          <h3>Registros Akáshicos</h3>
          <p>
            Los <strong>registros akáshicos</strong> son archivos energéticos que contienen información sobre el alma de cada
            individuo. Acceder a ellos proporciona claridad sobre la vida, permitiendo entender patrones y liberar bloqueos
            emocionales.
          </p>
          <h3>Constelaciones Familiares</h3>
          <p>
            Las <strong>constelaciones familiares</strong> son una técnica terapéutica que explora las dinámicas familiares
            y sus influencias en la vida de una persona. A través de representaciones y visualizaciones, se pueden resolver
            conflictos y sanar heridas familiares.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConoscaMas;
