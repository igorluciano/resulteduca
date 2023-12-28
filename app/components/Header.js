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
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex zIndex={1} w="100%" align="center" position="fixed" justify="center" boxShadow="lg" bg="#FFFFFF">
      <Flex
        align="center"
        justify="space-between"
        width={{ base: "90%", xl: "100%" }}
        maxW="1200px"
        h="60px"
      >
        <Image src="/logo.svg" alt="Logo" />

        <Box hideFrom="lg">
          <Button onClick={() => onOpen()} bg="transparent" mr="-15px" _hover={{ bg: 'transparent' }} >
            <HamburgerIcon boxSize={6} color="#F1592A"  _hover={{ color: '#f57f5a'}}/>
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
