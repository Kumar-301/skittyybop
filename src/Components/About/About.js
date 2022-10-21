import React from 'react'
import Banner from './Banner'
import Footer from '../Home/Footer';
import Story from '../About/AboutStory/Story'
export default function banner() {
  return (
    <div><Banner/>
         <Story/>
        <Footer/>
    </div>
  )
}
