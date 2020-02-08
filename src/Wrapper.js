import React, { Component }  from 'react';
import {Photo}  from './Photo'
import {Title} from './Title'
import Img from './images.jpg'
class Wrapper extends Component {
    render(){
        return(
            <div>
	<Photo src={Img} />

<Title small style={{

    color:'red'

}}>My Name here</Title>

<Title >My job here</Title>
            </div>
            
        )
        
}
   
}
export default Wrapper;

