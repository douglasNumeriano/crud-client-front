import React from 'react'
import NavbarItem from './navbarItem'
import NavbarHeader from './navbarHeader'
// import { AuthConsumer } from '../main/provedorAutenticacao'

function Navbar(){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
        <NavbarHeader href="#/home" label="Projeto de Estudo"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
            <NavbarItem href="#/home" label="Início"/>
            <NavbarItem href="#/registerUser" label="Usuários"/>
            <NavbarItem href="#/costumerQuery" label="Clientes"/>
            <NavbarItem href="#/login" label="Login"/>
          </ul>
  
          </div>
        </div>
      </div>
    )
}

export default Navbar

// export default () => (
//   <AuthConsumer>
//     {(context) => (
//         <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />
//     )}
//   </AuthConsumer>
// )