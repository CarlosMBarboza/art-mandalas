
import LinkNav from './navLinks/LinkNav';
import '../../../src/index.css';

const NavBar = () => {
  return (
    <div className="py-5 Navbar">
      <div className="container-xl">
        <div className="row justify-content-between align-items-center mt-5">
          <div className="col-12 col-md-3 text-center">
            <h2 className='text-white text-uppercase m-md-0'>Art. <br />Mandalas</h2>
          </div>
        <LinkNav/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
