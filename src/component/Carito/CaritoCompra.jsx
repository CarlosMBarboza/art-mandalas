

const CaritoCompra = () => {
  return (
    <div className="col-md-3 d-flex justify-content-end">
            <div className="carrito position-relative">
              <img className="img-fluid" src="../../imagen/Img/carrito.png" alt="imagen carrito" />
              <div id="carrito" className="bg-white p-3 position-absolute" style={{ display: 'none' }}>
                <p className="text-center">El carrito está vacío</p>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                      </td>
                      <td>SRV</td>
                      <td className="fw-bold">$299</td>
                      <td className="d-flex align-items-center gap-2">
                        <button type="button" className="btn btn-dark">-</button>
                        <span>1</span>
                        <button type="button" className="btn btn-dark">+</button>
                      </td>
                      <td>
                        <button className="btn btn-danger" type="button">X</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-end">Total a pagar: <span className="fw-bold">$899</span></p>
                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
              </div>
            </div>
          </div>
  )
}

export default CaritoCompra