import {
  Card,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";

const Genres = () => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Card
            key={skeleton}
            direction={"row"}
            padding={"5px"}
            marginBottom={"10px"}
          >
            <Skeleton boxSize={"40px"} marginLeft={"10px"} /> <SkeletonText />
          </Card>
        ))}
      <List>
        {genres?.map((genre) => (
          <ListItem
            marginBottom={"10px"}
            key={genre.id}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              src={genre.image_background}
              boxSize="40px"
              objectFit="cover"
              borderRadius={8}
              marginEnd={"10px"}
              alt={genre.description}
            ></Image>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {genre.name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
