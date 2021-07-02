import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import LinkIcon from '@material-ui/icons/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

class Recipe extends Component {
    render(){
        const { classes, recipe } = this.props;
      
        return (
            <Grid item md={3} sm={8} xs={12} className="recipe-root">
                <Card className={`recipe-card`}>
                        <Link
                            to={`/single-recipe/${recipe.idMeal}`}>
                            <CardMedia
                                className={classes.media}
                                image={recipe.strMealThumb}
                                title={recipe.strMeal}
                            />
                        </Link>
                    <CardContent>
                        <Link
                            to={`/single-recipe/${recipe.idMeal}`} style={{textDecoration:'none', color: 'currentcolor'}}>
                            <Typography variant="h1" className="recipe-title">
                                {recipe.strMeal}
                            </Typography>
                        </Link>

                        <Typography component="p" className="recipe-made">
                            Category: {recipe.strCategory}
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <IconButton aria-label="details">
                            <Link
                                to={`/single-recipe/${recipe.idMeal}`}
                            >
                                <VisibilityIcon/>
                            </Link>
                        </IconButton>
                        
                        <IconButton aria-label="link">
                            <a
                                href={"https://www.themealdb.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mx-2 text-capitalize"
                            >
                                <LinkIcon/>
                            </a>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(Recipe);