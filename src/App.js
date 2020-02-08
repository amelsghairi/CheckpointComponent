import React  from 'react';
import theImage from './React.png'
import  Image from './react2.png'
import './style.css';
import Contaienr from './Components/Contaienr';
import { Component } from 'react';


function App(){
return(
<div style={{border: "solid 1px black", maxwidth :'100vw',color:'red'}}>
        <h1 className='title red'> my title </h1>
        <img src={theImage}className='img'/>
        <img src={Image} className='img'/>
            <Contaienr />
        </div>
         );
 }
 
  

export default App;
