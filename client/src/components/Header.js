import React from "react";
import { Center, chakra, Divider, Flex, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Header = chakra(chakra.header, {
  baseStyle: {
    padding: "1rem",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default function HeaderComponent() {
  return (
    <Flex
      flexDirection="column"
      marginLeft="-1.5rem"
      marginRight="-1.5rem"
      marginTop="-1rem"
      gridColumn="1 / span 2"
      gridRow="1"
    >
      <Header>
        <HStack alignItems="baseline"></HStack>
        <Flex>
          <Center marginLeft="0.5rem">
            <ColorModeSwitcher justifySelf="flex-end" />
          </Center>
        </Flex>
      </Header>
      <Divider />
    </Flex>
  );
}
