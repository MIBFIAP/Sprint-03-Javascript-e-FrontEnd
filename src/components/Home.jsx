import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from './dados/Aventuras.json';
import data2 from './dados/Parques.json';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const CarouselContainer = styled.div`
  max-width: 1600px;
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
  margin-top: 30px;
  color: #008000; /* Aplicar a cor diretamente ao componente TituloDestaque */
`;

const ProdutosCarousel = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 90%;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    max-width: 800px; /* Nova largura para 960px */
  }

  @media (max-width: 660px) {
    max-width: 90%; /* Nova largura para 660px */
    margin: 0; /* Remover margem horizontal */
  }
`;

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  margin: 0 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 660px) {
    /* Adicionar regras de estilo específicas para 660px */
    h3 {
      font-size: 16px; /* Reduza o tamanho da fonte para o título */
    }

    p {
      font-size: 14px; /* Reduza o tamanho da fonte para o texto */
    }
  }
`;

function Home() {
  const centerSlidePercentage = window.innerWidth < 660 ? 50 : 20;

  return (
    <HomeContainer>
      <CarouselContainer>
        <Carousel showStatus={false} showThumbs={false} showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
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

      <ProdutosCarousel>
      <Carousel
        showThumbs={false}
        showArrows={true}
        infiniteLoop={false}
        autoPlay={false}
        interval={5000}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        swipeable={false}
        showStatus={false} 
        showIndicators={false} 
        dynamicHeight={false}
        
        
      >
        {data.map((parque) => (
          <Produto key={parque.id}>
            <img src={parque.image} alt={parque.name} />
            <h3>{parque.name}</h3>
            <p>{parque.endereco}</p>
          </Produto>
        ))}
      </Carousel>
      </ProdutosCarousel>

      <TituloDestaque><h2>Parques</h2></TituloDestaque>

      <ProdutosCarousel>
      <Carousel
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={33.33} // Definido para 33.33%
        swipeable={false}
        showStatus={false} 
        showIndicators={false} 
        dynamicHeight={false}
      >
        {data2.map((parque) => (
          <Produto key={parque.id}>
            <img src={parque.image} alt={parque.name} />
            <h3>{parque.name}</h3>
            <p>{parque.endereco}</p>
          </Produto>
        ))}
      </Carousel>
      </ProdutosCarousel>

    </HomeContainer>
  );
}

export default Home;