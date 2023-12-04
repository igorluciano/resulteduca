import { Footer, Header, Secao, Servico } from "./components";

export default async function Home() {
  return (
    <>
      <Header />

      <Secao>
        <Servico />
      </Secao>

      <Footer />
    </>
  );
}
