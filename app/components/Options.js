"use client";

import { Button, Image, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function Options() {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column", lg: "row" }}
      gap="20px"
    >
      <Image hideFrom="md"  src="/logo.svg" alt="Logo" w="150px" />
      <span>Início</span>
      <span>Institucional</span>
      <span>Serviços</span>
      <span>Conteúdos</span>
      <span>Contatos</span>
      <Button
        colorScheme="teal"
        size="md"
        borderRadius="50px"
        boxShadow="lg"
        bg="#F1592A"
        _hover={{ bg: '#f57f5a' }}
      >
        Contratar serviços
      </Button>
    </Flex>
  );
}
