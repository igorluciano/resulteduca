import { Button } from "@chakra-ui/react";

export default function Botao({ children, ...rest }) {
  return (
      <Button
        {...rest}         
        h={{ base: "45px", xlg: "40px" }}
        maxW={{ base: "100%", xlg: "fit-content" }}
        px={{ base: "none", xlg: "25px" }}
        borderRadius="3px"
        boxShadow="lg"
        color="white"
        bg="primary.default"
        _hover={{
          bg: "primary.emphasis",
          boxShadow: "0 0.6em 0.6em -0.4em var(--chakra-colors-primary-selected)",
          transform: "translateY(-0.25em)",
        }}
      >
        {children}
      </Button>
  );
}