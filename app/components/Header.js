"use client";

import {
  Box,
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

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  return (
    <Flex w="100%" bg="blue" align="center" justify="center">
      <Flex align="center" justify="space-between" bg="red" w="100%" maxW="1200px">
        <span>Logo</span>
        <Box hideFrom="md">
          <Button onClick={() => onOpen()} m={4}>
            Menu
          </Button>
        </Box>
        <Flex hideBelow="md" gap={5}>
          <span>Início</span>
          <span>Institucional</span>
          <span>Serviços</span>
        </Flex>
      </Flex>
      <>
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> full drawer contents </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit
                dolor magna eget est lorem. Erat imperdiet sed euismod nisi
                porta. Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
}
