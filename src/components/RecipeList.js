import Recipe from "./Recipe"

import Container from '@material-ui/core/Container';

export default function ReacipeList(props) {
  const { recipes, status } = props;
  return (
    <div>
        <h1 style={{textAlign:"center"}}>RECIPE LIST</h1>
        <Container style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap',}}> 
          {
            status == 'fetched' ? 
              recipes.map(item => (
                <Recipe key={item.idMeal} recipe={item} />
              ))
            :  <h1> Loading...... </h1>
          }
        </Container>
    </div>
  );
}
