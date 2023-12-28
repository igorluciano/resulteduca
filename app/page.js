import {Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import { attributes } from "../content/resumo_sobre_a_empresa.md";
import { Footer, Header, Secao, Identity } from "./components";
import Titulo from "./components/Titulo";
import Conteudo from "./components/Conteudo";
import Botao from "./components/Botao";
import { bannerMaxWidth } from "./providers/chakraUi/theme";
 
import Icone from "./components/Icone";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Animate from "./components/Animate";

export const revalidate = 0;
export default async function Home() {
  let { title, content, button, banner } = attributes;
  return (
    <Identity>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Header />
      
      <Secao withBackgroundColor withMarginTop direction={{ base: "column", xlg: "row-reverse" }} gap={5} justifyContent="space-between" alignItems="center">
          <Animate tipo="pulse">
            <Image alt="Logo" src={banner} h={{ base: "100%",  md: "100%" }} w={{ base: "100%",  md: bannerMaxWidth }} />
          </Animate>

          <Animate tipo="slideInLeft">
            <Flex direction="column" gap={5}>
              <Titulo>
                {title}
              </Titulo>
              <Conteudo>{content}</Conteudo>
              <Botao>
                {button}
                <Icone as={faAnglesRight} />
              </Botao>
            </Flex>
          </Animate>
      </Secao>

      <Footer />
    </Identity>
  );
}