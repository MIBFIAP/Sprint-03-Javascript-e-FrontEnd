import {} from 'react'; // Adicione o useState
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

function Home() {

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

    </HomeContainer>
  );
}

export default Home;