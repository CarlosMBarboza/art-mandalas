import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica que haya al menos 3 caracteres en nombre y mensaje.
    if (nombre.trim().length < 3 || mensaje.trim().length < 5) {
      alert('Por favor, completa los campos con al menos 3 y 5 caracteres respectivamente.');
      return;
    }

    setEnviando(true); // Muestra que el envío está en progreso.
    const whatsappURL = `https://wa.me/5491161292394?text=${encodeURIComponent(
      `Hola, soy ${nombre}. ${mensaje}`
    )}`;

    window.open(whatsappURL, '_blank');
    setTimeout(() => setEnviando(false), 1000); // Restablece estado después de 1 segundo.
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contacto - Art.Mandalas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Ingresa tu nombre"
            aria-label="Nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea
            className="form-control"
            id="mensaje"
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            placeholder="Escribe tu mensaje aquí..."
            aria-label="Mensaje"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-success w-100"
          disabled={enviando || !nombre || !mensaje}
        >
          {enviando ? 'Enviando...' : 'Enviar por WhatsApp'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
