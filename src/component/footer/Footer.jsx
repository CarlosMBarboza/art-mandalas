import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark mt-1 py-5">
      <div className="container-xl">
        <p className="text-white text-center fs-4 mt-1 m-md-0">Joyeria-Cm - Todos los derechos Reservados</p>
        <div className="text-center mt-3">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2 social-icon"
          >
            <FaInstagram size={30} />
          </a>
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2 social-icon"
          >
            <FaFacebook size={30} />
          </a>
          <a 
            href="https://www.whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2 social-icon"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
