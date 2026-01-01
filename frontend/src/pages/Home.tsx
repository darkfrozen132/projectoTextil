import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al Sistema de Gestión Textil</h1>
      <p className="home-description">
        Sistema integral para la gestión de trabajadores y órdenes de producción
      </p>
      <div className="home-cards">
        <div className="home-card">
          <h2>Trabajadores</h2>
          <p>Gestiona la información de los trabajadores de la planta textil</p>
        </div>
        <div className="home-card">
          <h2>Órdenes de Producción</h2>
          <p>Administra y da seguimiento a las órdenes de producción</p>
        </div>
      </div>
    </div>
  )
}

export default Home
