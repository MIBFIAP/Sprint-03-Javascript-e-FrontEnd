import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #9fcf19;
  text-align: center;
`;

const BlogText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const BlogImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #888;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Blog() {
  return (
    <BlogContainer>
      <Title>Blog</Title>
      <BlogText>
        Seja Bem Vindo ao nosso Blog! Aqui você verá os principais eventos que
        ocorreram perto de você!
      </BlogText>
      <h1>The Town</h1>
      <BlogText>
        O festival The Town foi um evento incrível que agitou os fãs da música
        nos últimos dois finais de semana. A presença de renomados artistas como
        Post Malone, Bruno Mars e Maroon 5 tornou o festival ainda mais
        emocionante e diversificado em termos de gêneros musicais. Os fãs
        tiveram a oportunidade de desfrutar de performances memoráveis e vibes
        musicais únicas. Com duração de dois finais de semana, o festival
        proporcionou uma experiência prolongada e inesquecível para todos os
        presentes, reforçando ainda mais a importância da música como um
        elemento unificador da cultura contemporânea.
      </BlogText>
      <BlogImage src="src\assets\mapa.jpg" alt="The Town" />
      <h1>Explore o Parque da Tranquilidade</h1>
      <BlogText>
        Junte-se a nós em uma jornada única de descoberta no Parque da
        Tranquilidade. Este oásis verdejante é um refúgio perfeito para aqueles
        que buscam paz e serenidade no coração da cidade. Com vastos campos,
        trilhas sinuosas e uma vegetação exuberante, este parque é o lugar ideal
        para relaxar, meditar e recarregar suas energias.
      </BlogText>
      <BlogImage
        src="src\assets\parquetranquilo.jpg"
        alt="Parque da Tranquilidade"
      />
      <Footer>
        Por enquanto esses foram os eventos recentes perto de você!
      </Footer>
    </BlogContainer>
  );
}

export default Blog;
