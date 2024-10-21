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
                <p className="fw-black text-primary fs-3 text-center">
                  ${item.precio.toFixed(2)}
                </p>
                <div className="mt-auto">
                  <button type="button" className="btn btn-dark w-100">
                    Agregar al Carrito
                  </button>
                </div>
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
