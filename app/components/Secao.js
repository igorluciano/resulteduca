import { Flex } from "@chakra-ui/react";

export default function Secao({children, withBackgroundColor = false, withMarginTop = false, ...rest}) {
  return (
    <Flex bg={withBackgroundColor ? "#FFF3EA66" : "#FFFFFF"} justifyContent="center">
      <Flex py={5} w="100%" maxW={{ base: "90%", xlg: "1200px" }} mt={withMarginTop ? "85px" : "0"} {...rest}>
        {children}
      </Flex>
    </Flex>
  );
}