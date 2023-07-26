import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import usePlatforms from "./hooks/usePlatforms";
import { Platform } from "./Games";

interface Props {
    selectPlatfrom: (platform: Platform) => void,
    platform: Platform | undefined,
}

const Platforms = ({platform, selectPlatfrom}:Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p="15px" fontSize="1.5rem"  fontWeight="bold">
            { platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.map((platform) => (
          <MenuItem fontSize="1.5rem" key={platform.id} onClick={() => selectPlatfrom(platform)}>{platform.name}</MenuItem>
        ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Platforms;
