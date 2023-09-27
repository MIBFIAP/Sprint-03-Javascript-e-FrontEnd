import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 100px;

  @media (max-width: 1600px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const PublicationContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 700px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #333;

  @media (max-width: 660px) {
    font-size: 0.8rem;
  }
`;

const ProfileDescription = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 5px;

  @media (max-width: 660px) {
    display: none;
  }
`;

const PhotoDescription = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-top: 30px;

  @media (max-width: 660px) {
    font-size: 0.9rem;
  }
`;

const PostTitle = styled.h3`
  margin: 15px 50px;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 660px) {
    font-size: 1rem;
    margin-left: 40px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ImageItem = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Publication = () => {
  return (
    <Container>
      <PublicationContainer>
        <ProfileWrapper>
          <ProfileSection>
            <ProfileImage src="src/assets/foto-perfil.jpg" alt="Profile" />
            <ProfileDetails>
              <ProfileName>Lucas Silva</ProfileName>
              <ProfileDescription>
                Aventureiro apaixonado por trilhas e amante da natureza.
              </ProfileDescription>
            </ProfileDetails>
          </ProfileSection>
          <PostTitle>Trilha da Cachoeira</PostTitle>
        </ProfileWrapper>
        <ImageGrid>
          <ImageItem src="src/assets/parque.jpg" alt="Image 1" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 2" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 3" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 4" />
        </ImageGrid>
        <PhotoDescription>
          A Trilha da Cachoeira Esmeralda é um verdadeiro tesouro escondido no
          coração da floresta. Localizada na região montanhosa, esta trilha
          oferece uma experiência de caminhada desafiadora e recompensadora. Com
          uma extensão de aproximadamente 10 km, você será levado através de uma
          paisagem exuberante de mata fechada, riachos cristalinos e mirantes
          panorâmicos.
        </PhotoDescription>
      </PublicationContainer>

      <PublicationContainer>
        <ProfileWrapper>
          <ProfileSection>
            <ProfileImage src="src/assets/foto-perfil2.jpg" alt="Profile" />
            <ProfileDetails>
              <ProfileName>Isabela Santos</ProfileName>
              <ProfileDescription>
                Aventureira apaixonada por trilhas e amante da natureza.
              </ProfileDescription>
            </ProfileDetails>
          </ProfileSection>
          <PostTitle>Trilha da Floresta</PostTitle>
        </ProfileWrapper>
        <ImageGrid>
          <ImageItem src="src/assets/parque.jpg" alt="Image 1" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 2" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 3" />
          <ImageItem src="src/assets/parque.jpg" alt="Image 4" />
        </ImageGrid>
        <PhotoDescription>
          A Trilha da Floresta Encantada é como um conto de fadas da vida real
          esperando para ser descoberto. Esta trilha deslumbrante oferece uma
          experiência única para os amantes da natureza e aventureiros de todas
          as idades. Ao longo de seus 8 km de extensão, você será envolvido por
          uma atmosfera mágica, com árvores antigas, riachos murmurantes e uma
          sensação de tranquilidade que só a natureza intocada pode
          proporcionar.
        </PhotoDescription>
      </PublicationContainer>
    </Container>
  );
};

export default Publication;
