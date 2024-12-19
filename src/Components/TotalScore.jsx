import styled from "styled-components";


const TotalScore=({score})=> {
  return (
    <ScoreCountainer>
            <h1>{score}</h1>
            <p>Total Score:{score}</p>
    </ScoreCountainer>
  )
}

export default TotalScore

const ScoreCountainer=styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size:100px;
        line-height: 10px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`
