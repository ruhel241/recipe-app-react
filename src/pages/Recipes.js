import React, { Component } from "react";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";
import RecipeList from "../components/RecipeList";
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

class Recipes extends Component {
    
    state = {
        recipes: recipeData,
        search: "",
        url: ``,
        base_url: `https://www.themealdb.com/api/json/v1/1/search.php`,
        query: "?s=",
        error: "",
        loading: false
    }
    
    async getRecipes() {
        try {
          const response = await fetch(this.state.url);
          const responseData = await response.json();
            if (!responseData.meals) {
                this.setState({
                    error: "Sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes",
                });
            } else {
                this.setState({
                    recipes: responseData.meals,
                    error: "",
                    loading: false
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

    onKeyUpValue = e => {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }
   
    handleSubmit = e => {
        e.preventDefault();
        const {base_url, query, search} = this.state;
        this.setState(
            {
                url: `${base_url}${query}${search}`,
                search: '',
                loading: true
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
                    onKeyUpValue={this.onKeyUpValue}
                />
                {this.state.error ? (
                    <Container maxWidth="md" style={{marginTop:50}}>
                        <Alert severity="error">{this.state.error}</Alert>
                    </Container>
                ): (
                    <RecipeList 
                        recipes={this.state.recipes}
                        loading={this.state.loading}
                    />
                )}
            </div>
        )
    }
}
export default Recipes
