 import styled from 'styled-components';
import { Button } from "../styled/Button.js"; // Adjust the path if necessary

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src={require('./images/dice.jpg').default} alt="Dice game" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 50px auto;
  padding: 20px;
  height: auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Ensures elements stack on smaller screens */
  gap: 30px;

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover; /* Maintains aspect ratio of the image */
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .content {
    flex: 1;
    text-align: center;

    h1 {
      font-size: 72px; /* Smaller font size for responsiveness */
      white-space: nowrap;
      margin-bottom: 20px;
      color: #333; /* Contrasting color */
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 48px; /* Adjust font size for small screens */
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 36px;
      }
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 8px;
      background-color: #007BFF;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
