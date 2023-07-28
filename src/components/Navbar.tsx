import { SearchIcon } from "@chakra-ui/icons";
import {
  Link,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (query: string) => void,
}

const Navbar = ({onSearch}: Props) => {

  const ref = useRef<HTMLInputElement>(null);

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
    backgroundColor: "hsl(0deg 0% 100% / 16%)",
    borderRadius: "20",
  };
  return (
    <Flex align={"center"} fontSize="2.5rem">
      <Link sx={linkStyles} me="10">
        RAWG
      </Link>
      <form  onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input ref={ref} placeholder="Search games..." variant="filled" sx={navStyles} />
        </InputGroup>
      </form>
    </Flex>
  );
};

export default Navbar;
