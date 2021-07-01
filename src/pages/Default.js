import React, { Component } from "react";
import Header from "../components/Header";
import Button from '@material-ui/core/Button';
import {
    Link
} from "react-router-dom";


class Default extends Component {

    render(){
        return(
            <Header title="404" styleClass="default-hero">
                <Link to="/recipes" className="search-link-btn">
                    <Button 
                    variant="contained"
                    color="primary"
                    className="search-btn">
                        Search Recipe
                    </Button>
                </Link>
            </Header>
        )
    }
}
export default Default;