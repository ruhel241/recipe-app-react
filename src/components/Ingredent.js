import React, {Component} from "react";

class Ingredent extends Component {
    
    render() {
        const {ingredient} = this.props;
      
        return(
            <tr>
                <td>{ingredient.name} </td>
                <td>{ingredient.measure}</td>
            </tr>
        )
    }
}
export default Ingredent;
