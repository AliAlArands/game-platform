import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Games, { Platform } from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import Platforms from "./components/Platforms";



function App() {
  const [selectedGenre, setSelectedGenre] = useState<number>();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>();
  const getGenreId = (id: number) => {
    setSelectedGenre(id);
  };
  const setPlatform = (platform:Platform) => {
    setSelectedPlatform(platform);
  };
  return (
    <>
      <Grid
        p="10px"
        height={100}
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        // gridTemplateColumns={"10% 1fr"}
        // gridTemplateRows={"5% 1fr"}
      >
        <GridItem area="nav" mb="1rem">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingLeft={"10px"} paddingRight={"8px"}>
            <Genres
              id={selectedGenre ? selectedGenre : null}
              handleOnClick={getGenreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Platforms platform={selectedPlatform} selectPlatfrom={setPlatform} />
          <Games platformId={selectedPlatform?.id} genreId={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
