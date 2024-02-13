import { Box, Flex } from "@chakra-ui/react";

export default function Slider({ children }) {
    return (
        <Flex overflowX="auto" width="100%" gap={5} px={0.5} py={2.5}>
            {children}
        </Flex>
    );
}