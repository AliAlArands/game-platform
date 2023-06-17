import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Grid
        height={100}
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
        // gridTemplateColumns={"10% 1fr"}
        // gridTemplateRows={"5% 1fr"}
      >
        <GridItem area="nav" bg="red">Nav</GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="yellow">Aside</GridItem>
        </Show>
        <GridItem area="main" bg={"blue"}>Main</GridItem>
      </Grid>
    </>
  );
}

export default App;
