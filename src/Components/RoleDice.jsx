import React from 'react'
import styled from 'styled-components'

const RoleDice =  ({ roleDice, currentDice }) => { 
    
  
    return (
      <DiceContainer>
        <div className="dice" onClick={roleDice}>
          
          <img src={`/images/${currentDice}dice.png`} alt={`Dice`} />
        </div>
        <p>Click on Dice to roll</p>
         
      </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
margin-top: 30px;
   display :flex ;
   flex-direction: column;
   align-items: center;

   .dice{
    cursor: pointer;
   }

p{
    font-size: 24px;
    font-weight: bold;
}
`
 
