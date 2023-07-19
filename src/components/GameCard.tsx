import {
  Box,
  Card,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "./Games";
import GameBadge from "./GameBadge";
import GamePlatform from "./GamePlatform";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardHeader>
        <HStack justifyContent="space-between">
          <Box>
            {game.parent_platforms.map(({ platform }) => (
              <GamePlatform platform={platform} />
            ))}
          </Box>

          <GameBadge points={game.metacritic} />
        </HStack>
        <Heading size="2xl" mt={6}>
          {game.name}
        </Heading>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
