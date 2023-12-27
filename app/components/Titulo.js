import { Text } from "@chakra-ui/react";

export default function Titulo({ children, widthIsFixed = false, ...rest }) {
  return (
    <Text maxW={{ base: "100%", sm: "550px" }} fontSize={{ base: "24px", md: "26px" }} fontWeight="700" color="#F1592A" {...rest}>
      {children}
    </Text>
  );
}