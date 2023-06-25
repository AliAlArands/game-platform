import {
  Badge,
  Box,
  Card,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Game } from "./Games";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const iconsSlugMapping: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <Card overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardHeader>
        <HStack justifyContent="space-between">
          <Box>
            {game.parent_platforms.map(({ platform }) => (
              <Icon
                key={platform.id}
                as={iconsSlugMapping[platform.slug]}
                color={"gray.500"}
                fontSize="1.7rem"
                mx="5px"
                
              ></Icon>
            ))}
          </Box>

          <Badge
            borderRadius="5px"
            p="5px"
            lineHeight="20px"
            fontWeight="bold"
            fontSize="2rem"
            colorScheme="green"
            variant="subtle"
            >
            {game.metacritic}
          </Badge>
        </HStack>
        <Heading size="2xl" mt={6}>
          {game.name}
        </Heading>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
