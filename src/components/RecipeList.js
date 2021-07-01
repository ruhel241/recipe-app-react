import Recipe from "./Recipe"

import Container from '@material-ui/core/Container';

export default function ReacipeList(props) {
  const { recipes, loading } = props;
  return (
    <div>
        <h1 style={{textAlign:"center"}}>RECIPE LIST</h1>
        <Container style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap',}}> 
          { loading ? 
              <h1> Loading Recipe...... </h1>
            : recipes.map(item => (
                <Recipe key={item.idMeal} recipe={item} />
              )) 
          }
        </Container>
    </div>
  );
}
