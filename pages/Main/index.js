import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import CardBurger from '../../comps/CardBurger';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/burgers')
  const data = await res.json()
  console.log(data);
  return {
    props: { menu: data }
  }
}
const Main = ({ menu }) => {  
  console.log(menu);
  return (
    <div id="main">
      <Container >
        <Navbar.Brand href="#home" className='navbar'>
          <img
            src="/profile-svgrepo-com.svg"
            className="d-inline-block align-top icon"
          />
          <Link href="./Cart"><img
            src="/shopping-basket-svgrepo-com.svg"
            className="d-inline-block align-top icon"
          /></Link>
        </Navbar.Brand>
        <Row><p className='MenuTitle'>Our menu</p></Row>
        <Row  >
          {menu && menu.map(entry =>
            <CardBurger image={entry.img} dsc={entry.dsc} name={entry.name} price={entry.price} favourite={entry.favourite} key={entry.id} id={entry.id} />
          )}</Row>
      </Container>
    </div>

  )

}

export default Main;