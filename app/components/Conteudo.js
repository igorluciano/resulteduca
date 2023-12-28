import { Box } from "@chakra-ui/react";
import { contentMinWidth, introMaxWidth } from "../providers/chakraUi/theme";

export default function Conteudo({ children, ...rest }) {
  return (
    <Box maxW={{ base: "100%", sm: introMaxWidth }} fontSize={{ base: "small", sm: "text1" }} textAlign={{ base: "center", sm: "justify" }} {...rest}>
      {children}
    </Box>
  );
}