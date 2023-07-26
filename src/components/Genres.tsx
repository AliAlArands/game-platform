import {
  Button,
  Card,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";

interface Props {
  handleOnClick: (id: number) => void;
  id: number | null;
}

const Genres = ({ handleOnClick, id }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  const style = {
    ":hover": {
      // borderBottom: "1px solid white",
      cursor: "pointer",
    },
  };

  const styleGenre = {
    fontWieght: "400",
    color: "#978d8d",
    transition: "all 0.1s all"
  };

  const styleSelectedGenre = {
    fontWieght: "700",
    color: "white",
  };

  // const imgaeStyle = {
  //   ':hover' : {
  //     marginBottom : "1px solid white"
  //   }
  // }
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
            sx={style}
            onClick={() => handleOnClick(genre.id)}
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
              // sx={imgaeStyle}
              // borderBottom={"1px solid white"}
            ></Image>
            <Button
              variant="link"
              fontSize={"lg"}
              sx={genre.id === id ? styleSelectedGenre : styleGenre}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
