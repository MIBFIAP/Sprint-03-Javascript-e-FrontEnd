import React, { useRef, useState } from 'react'; // Adicione o useState
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const CarouselContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }
  
`;

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    object-fit:cover
  }

  @media (max-width: 1400px) {
    height: 400px;
  }
`;

const TituloDestaque = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  text-align: left;
`;

const HighlightSection = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-width: 1700px; /* Ajuste a largura máxima conforme necessário */
`;

const HighlightList = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.scrollPosition}px);
  width: fit-content; /* Defina a largura para ajustar ao conteúdo */
  overflow: hidden; /* Adicione um overflow oculto para ocultar as imagens 5 e 6 */
  gap: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover
  }

  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 40px;
  color: #333;
  transition: color 0.3s ease;
  outline: none;

  &:hover {
    color: #007bff;
  }
`;

function Home() {
  const highlightListRef = useRef(null);
  const scrollStep = 300;

  const handleScrollLeft = () => {
    if (highlightListRef.current) {
      highlightListRef.current.scrollLeft -= scrollStep;
    }
  };

  const handleScrollRight = () => {
    if (highlightListRef.current) {
      highlightListRef.current.scrollLeft += scrollStep;
    }
  };

  // Verificação para desativar as setas quando não há mais espaço para rolar
  const disableScrollLeft = highlightListRef.current?.scrollLeft === 0;
  const disableScrollRight =
    highlightListRef.current?.scrollLeft + highlightListRef.current?.clientWidth >=
    highlightListRef.current?.scrollWidth;

  return (
    <HomeContainer>
      <CarouselContainer>
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
          <CarouselItem>
            <img src="src\assets\trilha-banner.jpg" alt="Imagem 1" />
          </CarouselItem>
          <CarouselItem>
            <img src="src\assets\trilha-banner2.jpg" alt="Imagem 2" />
          </CarouselItem>
          <CarouselItem>
            <img src="src\assets\trilha-banner3.jpg" alt="Imagem 3" />
          </CarouselItem>
        </Carousel>
      </CarouselContainer>

      <TituloDestaque><h2>Destaques</h2></TituloDestaque>

      <HighlightSection>
        {/* Desativar a seta esquerda se não houver mais espaço para rolar para a esquerda */}
        <ArrowButton onClick={handleScrollLeft} disabled={disableScrollLeft}>
          &#8249;
        </ArrowButton>
        <HighlightList ref={highlightListRef} scrollPosition={0}>
          {/* Renderize todos os itens, mas ajuste a largura máxima para controlar o número de itens visíveis */}
          {[1, 2, 3, 4, 5, 6].map(i => (
            <HighlightItem key={i}>
              <img src={`src\\assets\\parque${i}.jpg`} alt={`Destaque ${i}`} />
              <p>Título do Destaque {i}</p>
            </HighlightItem>
          ))}
        </HighlightList>
        {/* Desativar a seta direita se não houver mais espaço para rolar para a direita */}
        <ArrowButton onClick={handleScrollRight} disabled={disableScrollRight}>
          &#8250;
        </ArrowButton>
      </HighlightSection>
    </HomeContainer>
  );
}

export default Home;