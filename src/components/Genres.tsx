import { Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";

const Genres = () => {
  const { data: genres, error } = useGenres();
  if (error) return <p className="text-danger">{error.message}</p>;
  return (
    <List>
      {genres?.map((genre) => (
        <ListItem
          marginBottom={"10px"}
          key={genre.id}
          display={"flex"}
          // justifyContent={"space-between"}
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
  );
};

export default Genres;
