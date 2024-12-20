 import styled from 'styled-components'
import { Button } from "../styled/Button.js"; // Adjust the path if necessary

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
         <img src="/images/dice.jpg" alt="image" />

        </div>
       <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
       </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
   max-width :1180px ;
   display:flex;
   margin: 50px auto;
   height: 60vh;
   align-items: center;
   gap: 50px;

.content{
   h1{ 
   
   font-size:96px;
   white-space: nowrap;
    }
}
`;
 

