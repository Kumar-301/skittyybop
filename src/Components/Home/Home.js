
import Slider from './Slider';
import Connections from './Connections';
import Button from '../UI/Button';
import React from 'react'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea';
export default function Home() {
  return (
      <>
   
    <Slider/>
    <Button type="button" className="" value="SIGNIN"/>
    <TextArea id="id" rows="8" cols="5" name="content name" className="classname"/>
  
     <Input type="password" placeholder="your choice" id="fname" className="classname" name="name"/>
    <Connections/>
 
    </>
  )
}
