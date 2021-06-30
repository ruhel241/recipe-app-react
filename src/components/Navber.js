import React from "react";
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link
} from "react-router-dom";

import logo from '../images/logo.svg';
// import Container from '@material-ui/core/Container';
import '../index.css';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
function Navber() {
    return(
        <nav className="navber">
            <Grid 
            container
            direction="row"
            alignItems="center"
            >
                <Grid item sm={2} style={{ paddingLeft: 50 }}>
                    <div className="recipe-logo">
                        <img src={logo} alt="logo"/>
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