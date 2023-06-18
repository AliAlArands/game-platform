import { SearchIcon } from "@chakra-ui/icons";
import {
  Link,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const Navbar = () => {
  const linkStyles = {
    fontWeight: "bold",
    letterSpacing: "3px",
    transition: "all 0.3s Linear",
    ":hover": {
      textDecor: "none",
      color: "white   ",
    },
  };
  const navStyles = {
    // border:"1px solid white",
    border:"0",
    backgroundColor : "hsl(0deg 0% 100% / 16%)",
    borderRadius: "20",
    // ":hover": {
    //   outline: "0",
    //   border: "0",
    // },
  };
  return (
    <Flex align={"center"} fontSize="2.5rem">
      <Link sx={linkStyles} color="whiteAlpha.700">
        RAWG
      </Link>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search games..." sx={navStyles} />
      </InputGroup>
    </Flex>
  );
};

export default Navbar;
