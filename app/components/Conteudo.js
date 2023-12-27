import { Box } from "@chakra-ui/react";

export default function Conteudo({ children, ...rest }) {
  return (
    <Box maxW={{ base: "100%", sm: "550px" }} fontSize="18px" textAlign="justify" {...rest}>
      {children}
    </Box>
  );
}