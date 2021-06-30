import React, {Component} from "react";

class Ingredent extends Component {
    
    render() {
        const {ingredient} = this.props;
        // console.log(ingredient)
        return(
            <li>{ingredient.name} {'=>'} {ingredient.measure}</li>
        )
    }
}
export default Ingredent;
