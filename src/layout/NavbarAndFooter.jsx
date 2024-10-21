import Footer from "../component/footer/Footer"
import Navbar from "../component/navBar/NavBar.jsx"




const NavbarAndFooter = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default NavbarAndFooter