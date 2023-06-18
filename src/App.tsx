import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Grid
        p="10px"
        height={100}
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
        // gridTemplateColumns={"10% 1fr"}
        // gridTemplateRows={"5% 1fr"}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="yellow">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"blue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
