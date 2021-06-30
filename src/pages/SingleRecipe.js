import React, { Component } from "react";

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import CardContent from '@material-ui/core/CardContent';

import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

import Ingredent from "../components/Ingredent";
import ReactPlayer from 'react-player'
const useStyles = theme => ({
    root: {
        maxWidth: 345,
    },
    singleMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

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
        const {strMeal, strMealThumb, strCategory, strInstructions, strYoutube} = this.state.recipe;
        
        
        const getIngredent = () => {
            let data = [];
            let i;
            for( i = 1; i <= 20; i++) {
               const item = {
                    name: this.state.recipe[`strIngredient${i}`],
                    measure: this.state.recipe[`strMeasure${i}`]
                }
               data.push(item);
            }
            return data;
        }
        // const Ingredent = getIngredent().map((ingredient, index) => (
        //     (ingredient.name != '') ? 
        //         <li key={index}>{ingredient.name} {'=>'} {ingredient.measure}</li>
        //     : ""
        // ))
        // const getData = async () => {
        //     let data = [];
        //     let i = 1;
        //     for (i; i <= 20; i++) {
        //       const item = {
        //         name: meal[`strIngredient${i}`],
        //         measure: meal[`strMeasure${i}`],
        //         img: getIngredientImg(meal[`strIngredient${i}`]),
        //       };
        //       data.push(item);
        //       i += 1;
        //     }
        //     return setIngredients(data);
        //   };


        
        if (this.state.loading) {
            return (
                <Container maxWidth="md">
                    <h2 className="loading">
                        loading recipe....
                    </h2>
                </Container>
            );
        }

        return(
            <Container maxWidth="md" style={{marginTop: "40px"}}>
                <Grid item md={12} sm={8} xs={12} className="recipe-root">
                    <Card className={`recipe-card`}>
                        <CardMedia
                            className='media'
                            image={strMealThumb}
                            title={strMeal}
                        />
                        <CardContent>
                            <Typography variant="h1" className="recipe-title">
                                {strMeal}
                            </Typography>

                            <Typography component="p" className="recipe-made">
                                Category: {strCategory}
                            </Typography> <br/>
                            
                            <Typography component="p">
                                <b>Instructions:</b> {strInstructions}
                            </Typography>
                            <br/><br/><br/>
                           
                           <div>
                                <b>Ingredient:</b> 
                                <ul>
                                    {
                                        // Ingredent
                                        getIngredent().map((ingredient, index) => (
                                            (ingredient.name !== '') ? 
                                                <Ingredent key={index} ingredient={ingredient}/>
                                            : ""
                                        )) 
                                    }
                                </ul>
                           </div>
                           
                            
                            {strYoutube && (
                                <div>
                                    <b>Youtube:</b> 
                                    <ReactPlayer 
                                        url={strYoutube}
                                        className="react-player"
                                        width="100%"
                                        height="500px"
                                        pip={true}
                                        stopOnUnmount={false}
                                    />
                                </div>
                            )}
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(SingleRecipe);