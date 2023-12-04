import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Footer, Header, Secao } from "./components";

export default async function Home() {
  return (
    <>
      <Header />
      <Secao>
        <Flex align="center" justify="space-between" direction={{ base: "column-reverse", lg: "row" }} width={{ base: "90%", xl: "100%" }} maxW="1200px" minH="100px" my="35px">
          <Flex direction="column" maxW="580px" gap="20px">
            <Text fontSize='32px' fontWeight="bold" color='#F1592A'>Otimização, Alta performance e transformação de processos</Text >
            <div>Somos uma empresa na área de gestão e educação, atuando desde 2013 em prol da transformação de pessoas e impulsionando empresas rumo a excelência.</div>
            <Button colorScheme="teal" size="md" borderRadius="50px"  boxShadow="lg" bg='#F1592A'  _hover={{ bg: '#f57f5a' }} maxW="281px">Conhecer mais sobre a Result</Button>
          </Flex>
          <Image src="/banner.png" alt="Logo" w="534px" />
        </Flex>
      </Secao>
      <Footer />
    </>
  );
}
