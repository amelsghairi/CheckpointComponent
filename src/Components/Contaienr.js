import React ,{Component} from 'react';
 import List from './list';
class Contaienr extends Component {
    render(){
        return(
            <div>
<h2>Contaienr</h2>
                
            <ul>
               <List/>  
               <List/>  
               <List/>  
               
            </ul>
            
            </div>
        )
    }
}
export default Contaienr;