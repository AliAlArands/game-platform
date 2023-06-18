import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";

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
        <GridItem area="nav" mb="1rem">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <Games />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
