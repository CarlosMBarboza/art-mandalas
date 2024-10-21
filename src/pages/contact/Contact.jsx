
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contacto - Art.Mandalas</h1>
      <form action="#" method="post">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            name="nombre" 
            required 
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            required 
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea 
            className="form-control" 
            id="mensaje" 
            name="mensaje" 
            rows="5" 
            required 
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
