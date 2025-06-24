
import MethodCard from "../components/MethodCard";
import { FaBook, FaBookOpen, FaImages } from "react-icons/fa";


const Home = () => {


  return (

      <>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Elige tu método de aprendizaje
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
          {/* componente <MethodCard /> */}
          <MethodCard
            icon={<FaBook />}
            title="Dominio de Verbos"
            color="indigo"
            description="Aprende y domina los verbos ingleses en todos sus tiempos. Práctica con ejercicios interactivos y ejemplos contextuales."
            route="verbos"
          />
          <MethodCard
            icon={<FaBookOpen />}
            title="Lectura Interactiva"
            color="green"
            description="Mejora tu comprensión con textos adaptados a tu nivel. Aprende vocabulario nuevo interactuando con el contenido."
            route="lectura"
          />
          <MethodCard
            icon={<FaImages />}
            title="Vocabulario Visual"
            color="red"
            description="Expande tu vocabulario con imágenes asociativas y ejercicios de memorización. Categorías temáticas para un aprendizaje organizado."
            route="vocabulario-visual"
          />
          {/* Repite para las otras tarjetas */}
        </div>
      </>
  );
};

export default Home;
