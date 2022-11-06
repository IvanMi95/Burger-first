import Container from 'react-bootstrap/Container';
import React, { useState, useContext } from "react";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';



export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:8080/api/burgers')
  const data = await res.json()

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}
//does not work  beacuse of  api structure
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('http://localhost:8080/api/burgers/' + id)
  const data = await res.json()
  console.log(data)
  return {
    props: { menu: data }
  }
}
export default function FullScreenCard({menu}) {
  //useststae provisory
  const [counter, setCounter] = useState(1);
  const add = () => {
    setCounter(counter + 1)
  }
  const substract = () => {
    counter > 1 && setCounter(counter - 1)
  }
   let deliveryTime = 25
  return (
    <div className='fullScreenConatiner'>
      <Container id="fullScreenConatiner">
        <Link href="/Main"><img src="/navigation-back-arrow-svgrepo-com.svg" className='fullScreenbackBtn' /></Link>
        <Image className='imgFull' src={menu.img}></Image>
        <div className='fullScreentext'>
          <p className='fullScreentext name'>{menu.name}</p>
          <p className='fullScreentext dsc'>{menu.dsc}</p>
        </div>
        <div className='fullScreenDeliveryTimeWhole'>
          <p>Delivey time</p>
          <div className='fullScreenDeliveryTime'> <img src="/clock-svgrepo-com.svg" className="fullScreenClock" />{deliveryTime} minutes</div></div>
        <div className='fullScreenBottom'>
          <div className="fullScreenBottomButton">
            <Button onClick={add}>+</Button>
            <span>{counter}</span>
            <Button onClick={substract}>-</Button>

          </div>
          <div className="fullScreenBottomPrice">$ {menu.price * counter}</div>
          <div className="fullScreenBottomBuy"><span>+</span>Buy</div>
        </div>
      </Container></div>
  )
}


