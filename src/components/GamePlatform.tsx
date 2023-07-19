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
import { Icon } from "@chakra-ui/react";
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

import { Platform } from "./Games";
interface Props {
  platform: Platform;
}
const GamePlatform = ({ platform }: Props) => {
  return (
    <Icon
      key={platform.id}
      as={iconsSlugMapping[platform.slug]}
      color={"gray.500"}
      fontSize="1.7rem"
      mx="5px"
    ></Icon>
  );
};

export default GamePlatform;
