import { Badge } from "@chakra-ui/react";

interface Props {
  points: number;
}

const GameBadge = ({ points }: Props) => {
  return (
    <Badge
      borderRadius="5px"
      p="5px"
      lineHeight="20px"
      fontWeight="bold"
      fontSize="2rem"
      colorScheme="green"
      variant="subtle"
    >
      {points}
    </Badge>
  );
};

export default GameBadge;
