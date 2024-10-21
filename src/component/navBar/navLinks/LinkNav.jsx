import { navLinks } from '../../../db/NavOptions.js';

const LinkNav = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="container-xl mt-5 ">
        <nav className="d-flex justify-content-around">
          {navLinks.map((link) => (
            <a
              href={link.path}
              key={link.name}
              className="text-white text-decoration-none text-uppercase fw-bold mx-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default LinkNav;
