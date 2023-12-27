import { Button } from "@chakra-ui/react";

export default function Botao({ children, ...rest }) {
  return (
    <Button
      h={{ base: "45px", md: "40px" }}
      maxW={{ base: "100%", xlg: "fit-content" }}
      px={{ base: "none", xlg: "25px" }}
      borderRadius="50px"
      boxShadow="lg"
      color="#FFF"
      bg="#F1592A"
      _hover={{ bg: "#f57f5a" }}
      {...rest}
    >
      {children}
    </Button>
  );
}