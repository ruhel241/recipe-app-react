import '../index.css';
import React from "react";
import {Link} from "react-router-dom";
import logo from '../images/logo.svg';
import Grid from '@material-ui/core/Grid';

function Navber() {
    return(
        <nav className="navber">
            <Grid 
            container
            direction="row"
            alignItems="center"
            >
                <Grid item sm={2} className="recipe-nav">
                    <div className="recipe-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <nav className="nav-menu">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                        </ul>
                    </nav>
                </Grid>
            </Grid>
        </nav>
    );
}
export default Navber; 