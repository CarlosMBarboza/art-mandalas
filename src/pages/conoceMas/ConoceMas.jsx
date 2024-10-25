import { Outlet } from "react-router-dom";

const TerapiasAlternativas = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Conoce Más</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explora diferentes terapias y recursos para tu bienestar personal.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Imagen */}
        <div className="flex-1">
          <img
            src="../../../src/imagen/Img/alternativas.jpg"
            alt="Terapias Alternativas"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Descripción */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Terapias Alternativas</h2>
          <p className="mb-4 text-gray-700">
            Las <strong>terapias alternativas</strong> como el <strong>Reiki</strong>, 
            el <strong>péndulo</strong>, los <strong>registros akáshicos</strong> y las 
            <strong>constelaciones familiares</strong> ofrecen un enfoque holístico para la 
            sanación y el autoconocimiento. Estas prácticas buscan el bienestar integral.
          </p>

          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Reiki</h3>
          <p className="text-gray-700">
            El <strong>Reiki</strong> canaliza energía universal a través de las manos para 
            equilibrar la energía del paciente y fomentar la sanación física, emocional y espiritual.
          </p>

          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Péndulo</h3>
          <p className="text-gray-700">
            El <strong>péndulo</strong> es una herramienta de radiestesia que identifica 
            y equilibra energías, mejorando la salud y el bienestar.
          </p>

          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Registros Akáshicos</h3>
          <p className="text-gray-700">
            Los <strong>registros akáshicos</strong> contienen información del alma, permitiendo 
            entender patrones de vida y liberar bloqueos emocionales.
          </p>

          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Constelaciones Familiares</h3>
          <p className="text-gray-700">
            Las <strong>constelaciones familiares</strong> exploran las dinámicas familiares que 
            afectan la vida de las personas, ayudando a resolver conflictos y sanar heridas emocionales.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Outlet /> {/* Renderiza las rutas anidadas */}
      </div>
    </section>
  );
};

export default TerapiasAlternativas ;
