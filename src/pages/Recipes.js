import React, { Component } from "react";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";
import RecipeList from "../components/RecipeList";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }
   
    state = {
        recipes: recipeData,
        search: "",
        url: ``,
        base_url: `https://www.themealdb.com/api/json/v1/1/search.php`,
        query: "?s=",
        error: "",
        status: 'fetched'
    }
    
    async getRecipes() {
        try {
          const response = await fetch(this.state.url);
          const responseData = await response.json();
            if (!responseData.meals) {
                this.setState({
                    error: "sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes",
                });
            } else {
                this.setState({
                    recipes: responseData.meals,
                    error: "",
                    status: 'fetched'
                });
            }
        } catch (error) {
          console.log(error);
        }
    }
      
    handleChange = e => {
        this.setState({
            search: e.target.value
        }) 
    }
   
    handleSubmit = e => {
        e.preventDefault();
        const {base_url, query, search} = this.state;
        this.setState(
            {
                url: `${base_url}${query}${search}`,
                search: '',
                status: 'loading'
            }, 
            () => this.getRecipes()
        );
    }   
   
    render(){
        return (
            <div>
                <Search 
                    search={this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.error ? (
                    <section> 
                        <div className="error-cls" style={{textAlign: 'center'}}> 
                            <h1>{this.state.error}</h1>
                        </div>
                    </section>
                ): (
                    <RecipeList 
                        recipes={this.state.recipes}
                        status={this.state.status}
                    />
                )}
            </div>
        )
    }
}
export default Recipes
