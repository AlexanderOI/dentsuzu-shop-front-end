import styled from "styled-components"
import { GitHubIcon, LinkedinIcon, RepositoryIcon } from "../assets/icons/IconsFooter"

export const FooterInfo = styled.footer`
  display: flex;
  background-color: #004e6d;
  align-content: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 10px 3px;
`

export const DivFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  height: 100%;
`

export const Div = styled.div`
  color: #fff;
  width: 300px;
  height: 100%;
  padding: 25px 15px 0px 15px;

  h3 {
    margin-bottom: 10px;
    color: #fff;
    border-bottom: 1px solid #000;
  }

  p {
    padding: 3px;
  }

  a {
    color: #fff;
    display: flex;
    text-decoration: none;
    padding: 3px;
  }

  i {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`

export function Footer() {
  return (
    <FooterInfo>
      <DivFooterInfo>
        <Div className="footer-section">
          <h3>MI CUENTA</h3>
          <p>Mi cuenta</p>
          <p>Ir al pago</p>
          <p>Cambiar contraseña</p>
          <p>Mis compras anteriores</p>
          <p>Cómo comprar</p>
        </Div>
        <Div className="footer-section">
          <h3>ACCESOS RÁPIDOS</h3>
          <p>Inicio</p>
          <p>Preguntas frecuentes</p>
          <p>Condiciones de uso</p>
          <p>Guía para proveedores</p>
          <p>Medios de pago</p>
          <p>Zonas de cobertura</p>
        </Div>
        <Div className="footer-section">
          <h3>INFORMACIÓN IMPORTANTE</h3>
          <p>Precios válidos únicamente para la versión online.</p>
          <p>Los pedidos que se hagan los sábados a partir de las 16 horas y los domingos serán entregados el día lunes.</p>
        </Div>
        <Div >
          <h3>DentsuzuOI</h3>
          Tienda falsa hecha por: AlexaderOI
          <a href="https://www.linkedin.com/in/alexander-o-18a7a1248"><i><LinkedinIcon /></i>Limkedin</a>
          <a href="https://github.com/AlexanderOI"><i><GitHubIcon /></i>GitHub</a>

          <a href="https://github.com/AlexanderOI/dentsuzu-shop-front-end"><i><RepositoryIcon /></i>Proyecto</a>
        </Div>
      </DivFooterInfo>
    </FooterInfo>
  )
} 
