import { Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import { attributes as contentResumo } from "../content/resumo_sobre_a_empresa.md";
import { attributes as contentServicos } from "../content/lista_de_servicos_oferecidos.md";
import { Footer, Header, Secao, Identity, Servico } from "./components";
import Titulo from "./components/Titulo";
import Conteudo from "./components/Conteudo";
import Botao from "./components/Botao";
import { bannerMaxWidth } from "./providers/chakraUi/theme";

import Icone from "./components/Icone";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Animate from "./components/Animate";
import Slider from "./components/Slider";

export const revalidate = 0;
export default async function Home() {
  let { title, content, button, banner } = contentResumo;
  let { servicos } = contentServicos;
  console.log('oo', servicos);
  return (
    <Identity>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Header />

      <Secao withBackgroundColor withMarginTop direction={{ base: "column", xlg: "row-reverse" }} gap={5} justifyContent="space-between" alignItems="center">
        <Animate tipo="pulse">
          <Image alt="Logo" src={banner} h={{ base: "100%", md: "100%" }} w={{ base: "100%", md: bannerMaxWidth }} />
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

      <Secao withMarginTop direction={{ base: "column", md: "row" }} gap={5} alignItems="center">

        <Slider>
          {servicos.map((item, indice) => {
            return <Servico key={indice} icone={item.icon} nome={item.content} detalhes={item.description} callToAction={item.button} />
          })}
        </Slider>

      </Secao>

      <Secao withBackgroundColor withMarginTop direction={{ base: "column", xlg: "row" }} gap={5} justifyContent="space-between" alignItems="center">
        Motivos para escolher a Result para alavancar sua empresa e carreira:
      </Secao>

      <Secao withMarginTop direction={{ base: "column", xlg: "row" }} gap={5} justifyContent="space-between" alignItems="center">
        conheça o CEO da Result
      </Secao>

      <Secao withBackgroundColor withMarginTop direction={{ base: "column", xlg: "row" }} gap={5} justifyContent="space-between" alignItems="center">
        Conteúdos selecionados para impulsionar o seu sucesso:
      </Secao>

      <Secao withMarginTop direction={{ base: "column", xlg: "row" }} gap={5} justifyContent="space-between" alignItems="center">
        Há +10 anos promovendo resultados:
      </Secao>

      <Footer />
    </Identity>
  );
}