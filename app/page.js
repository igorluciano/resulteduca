import Head from "next/head"
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Footer, Header, Secao } from "./components";
import { attributes } from '../content/home.md'

export const revalidate = 0;
export default async function Home() {
  let { title, content, button, banner } = attributes;
  return (
    <>
     <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      <Secao>
        <Flex align="center" justify="space-between" direction={{ base: "column-reverse", lg: "row" }} width={{ base: "90%", xl: "100%" }} maxW="1200px" minH="100px" my="35px">
          <Flex direction="column" maxW="580px" gap="20px">
            <Text fontSize='32px' fontWeight="bold" color='#F1592A'>{title}</Text >
            <div>{content}</div>
            <Button colorScheme="teal" size="md" borderRadius="50px"  boxShadow="lg" bg='#F1592A'  _hover={{ bg: '#f57f5a' }} maxW="281px">{button}</Button>
          </Flex>
          <Image src={banner} alt="Logo" w="534px" />
        </Flex>
      </Secao>
      <Footer />
    </>
  );
}
