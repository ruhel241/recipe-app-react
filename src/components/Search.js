import React, { Component } from "react";

import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class Search extends Component {
    
    render() {
      const { handleChange, search, handleSubmit } = this.props;
   
      return(
        <Container maxWidth="sm">
          <div className="search" style={{marginTop: 70}}>
            <h1 className="title">Search recipes with <strong>API</strong> </h1>
            <p className="content">Types Recipes Separated By Comma</p>
            
            <FormControl  
              variant="outlined" 
              fullWidth
            >
              <InputLabel 
                htmlFor="outlined-adornment-password">
                Search Recipes
              </InputLabel>
              <OutlinedInput
                placeholder="chicken,onion,carrots"
                labelWidth={110}
                value={search}
                onChange={handleChange}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                      onClick={handleSubmit}
                      edge="end"
                    >
                    <SearchIcon/> 
                  </IconButton>
                }
              />
            </FormControl>
          </div>
        </Container>
        )
    }
} 
export default Search