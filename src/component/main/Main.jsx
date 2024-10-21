import Cards from "../card/Cards"


const Main = () => {
  return (

    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
      <div className="row mt-5">
        <Cards />
      </div>
    </main>
  )
}

export default Main