import Card from 'react-bootstrap/Card';
import Link from 'next/link';

import  { useContext } from "react";
import  Appcontext from "../store/Context";
// import { ReactComponent as Heart } from "./public/heart-svgrepo-com.svg"
// import { ReactComponent as HeartFilled } from './public/heart-svgrepo-com-fill.svg'

const CardBurger = (prop) => {
  
  return (
    <Card style={{ width: '18rem' }} id="cardBurger">
      <Link style={{textDecoration: 'none',color:"white"}} href={"/Main/"+prop.id}key={prop.id}><Card.Img variant="top" src={prop.image} /></Link>
      <Card.Body><Link style={{textDecoration: 'none',color:"white"}} href={"/Main/"+prop.id}key={prop.id}>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>
          {prop.dsc}
        </Card.Text></Link>
        <Card.Text className="price">
         ${prop.price}  
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardBurger