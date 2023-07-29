import "./App.css";
import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Games, { Platform } from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import Platforms from "./components/Platforms";
import SortCompoent from "./components/SortCompoent";
import { SortType } from "./components/SortCompoent";
import { Genre } from "./components/hooks/useGenres";

export interface GameQuery {
  Genre: Genre,
  Platform: Platform,
  Sorting: SortType,
  SearchQuery: string,
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const getGenreId = (g: Genre) => {
    setGameQuery({ ...gameQuery, Genre:g })
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
          <Navbar onSearch={(search) => setGameQuery({...gameQuery, SearchQuery: search})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingLeft={"10px"} paddingRight={"8px"}>
            <Genres
              id={gameQuery.Genre?.id}
              handleOnClick={getGenreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Heading as={"h1"} fontSize={"7xl"} marginBottom={"20px"}> {gameQuery.Platform?.name || ''} {gameQuery.Genre?.name} Games</Heading>
          <Platforms platform={gameQuery.Platform} selectPlatfrom={setPlatform} />
          <SortCompoent sorting={gameQuery.Sorting} selectSorting={(sorting) => setGameQuery({...gameQuery, Sorting:sorting})}/>
          <Games gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
