import {
  Card,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";

interface Game {
  name: string;
  background_image: string;
}

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"}>
      <Image
        src={game.background_image}
      />
      <CardHeader>
        <Heading size="2xl">{game.name}</Heading>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
