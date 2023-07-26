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
import { Genre } from "./hooks/useGenres";
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
  genres: Genre[];
}

interface Props {
  id? : number
}

const Games = ({id}:Props) => {
  const { error, data: games, isLoading } = id?  useGames(id): useGames();
  
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color="red.200">{error.message}</Text>}
      <Grid
      mt={3}
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap="1rem"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <Card borderRadius={"10px"} key={skeleton}>
              <CardHeader>
                <Skeleton height="250px" borderRadius={"10px"}  />
              </CardHeader>
              <CardBody>
                <SkeletonText />
              </CardBody>
            </Card>
          ))}
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
