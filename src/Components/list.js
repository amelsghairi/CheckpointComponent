import React ,{Component} from 'react';
import Itemlist from './itemlist';
 
class List extends Component {
    render(){
    
        return(
            <div>
            <h3>List</h3>
              <Itemlist/>   
              <Itemlist/>   
              <Itemlist/>   
          
                </div>
        )
    }
}
export default List;