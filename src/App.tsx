import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Games, { Platform } from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import Platforms from "./components/Platforms";
import SortCompoent from "./components/SortCompoent";
import { SortType } from "./components/SortCompoent";

export interface GameQuery {
  GenreId: number,
  Platform: Platform,
  Sorting: SortType
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const getGenreId = (id: number) => {
    setGameQuery({ ...gameQuery, GenreId: id })
  };

  const setPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, Platform: platform })
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
              id={gameQuery.GenreId}
              handleOnClick={getGenreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Platforms platform={gameQuery.Platform} selectPlatfrom={setPlatform} />
          <SortCompoent sorting={gameQuery.Sorting} selectSorting={(sorting) => setGameQuery({...gameQuery, Sorting:sorting})}/>
          <Games gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
