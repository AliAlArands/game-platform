import { Grid, GridItem, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./hooks/useGames";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const Games = () => {
  const { error, data: games } = useGames();
  return (
    <>
      {error && <Text color="red.200">{error.message}</Text>}
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap="1rem"
      >
        {games?.map((game) => (
          <GridItem key={game.id}>
            <GameCard game={game} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Games;
