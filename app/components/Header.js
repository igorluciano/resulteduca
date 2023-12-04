"use client";

import {
  Box,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Options from "./Options";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="100%" align="center" justify="center" boxShadow="lg">
      <Flex
        align="center"
        justify="space-between"
        width={{ base: "90%", xl: "100%" }}
        maxW="1200px"
        h="60px"
      >
        <Image src="/logo.svg" alt="Logo" />

        <Box hideFrom="lg">
          <Button onClick={() => onOpen()} m={4}>
            Menu
          </Button>
        </Box>

        <Flex hideBelow="lg" align="center" gap={5}>
          <Options />
        </Flex>
      </Flex>
      <>
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Options />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
}