import { Text } from "@chakra-ui/react";
import { introMaxWidth } from "../providers/chakraUi/theme";

export default function Titulo({ children, widthIsFixed = false, ...rest }) {
  return (
    <Text textAlign={{ base: "center", lg: "left" }} maxW={{ base: "100%", sm: introMaxWidth }} fontSize={{ base: "text3", md: "text4" }} fontWeight="bold" color="primary.default" {...rest}>
      {children}
    </Text>
  );
}