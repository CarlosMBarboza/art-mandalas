import { products } from '../../db/Product.js';
import { useState } from 'react';

const Cards = () => {
  const [data, setData] = useState(products);

  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 my-4">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={item.img}
                alt={`Imagen de ${item.tipo}`}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h3 className="text-black fs-4 fw-bold text-uppercase text-center">
                  {item.tipo}
                </h3>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Lista de precio
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center">
          <p>No hay productos disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
