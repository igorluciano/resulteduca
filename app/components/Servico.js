import { Flex, Text,Image } from "@chakra-ui/react";
import Botao from "./Botao";

export default function Servico({ icone, nome, detalhes, callToAction, ...rest }) {
    return (
        <Flex direction="column" alignItems="center" gap={5} minW={350} maxW="100%" p={5} minH={350} border="border: 1px solid #ECECEC" bg="white" boxShadow="0px 3px 6px #00000029" {...rest}>
             <Image alt="Logo" src={icone} w="auto" h="50px" />
            <Text textAlign="center" fontSize="text1" fontWeight="bold" color="primary.default">{nome}</Text>
            <Text textAlign="center" fontSize="text1" >{detalhes}</Text>
            <Botao minW="100%">
                {callToAction}
            </Botao>
        </Flex>
    );
}

