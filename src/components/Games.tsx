import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
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
  const { error, data: games, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (isLoading)
    return (
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap="1rem"
        rowGap="2rem"
      >
        {skeletons.map((skeleton) => (
          <Card width={"350px"}>
            <CardHeader>
              <Skeleton height="350px" borderRadius={"10px"} key={skeleton} />
            </CardHeader>
            <CardBody>
              <SkeletonText />
            </CardBody>
          </Card>
        ))}
      </Grid>
    );
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
