import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import rawgApi from "./../apis/rawgApi";
import { CanceledError } from "axios";
import GameCard from "./GameCard";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:  {platform: Platform}[];
  metacritic: number;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    rawgApi
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return (
    <>
      {error && <Text color="red.200">{error}</Text>}
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap="1rem"
      >
        {games.map((game) => (
          <GridItem key={game.id} >
            <GameCard game={game} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Games;
