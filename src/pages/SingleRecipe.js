import React, { Component } from "react";

class SingleRecipe extends Component {
    
    constructor(props) {
        super(props);
        const recipeID = this.props.match.params.id;
        this.state = {
            recipe: {},
            id: recipeID,
            loading: true
        }
    }
    
    async componentDidMount() {
        const url  = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.state.id}`;
        try {
          const response = await fetch(url);
          const responseData = await response.json();
          console.log(responseData.meals[0]);
            this.setState({
                recipe: responseData.meals[0], 
                loading: false
            })
        } catch (error) {
          console.log(error);
        }
    }

    render(){
        // const { idMeal, strMeal, strMealThumb, strCategory, strArea} = this.state.recipe;
        const { strMeal } = this.state.recipe;
        return(
            <h1>{strMeal} </h1>
        )
    }
}
export default SingleRecipe;