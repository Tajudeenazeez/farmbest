import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { RatingContainer, Radio, Rating } from "./StyledRating";

const Rate = () => {
  const [rate, setRate] = useState(0)
  
    return (
      <RatingContainer> 
        {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return(
        <label>
          <Radio
          type ='radio'
          value ={givenRating}
          onClick={()=>{
            setRate(givenRating);
            
          }}
          />
          <Rating>
            <FaStar
            color = {
              givenRating < rate || givenRating === rate ?
              '#ffff00' : 'rgb(192,192,192)'
            }
            />
          </Rating>

          
        </label>
        )
        }
        )} 

      </RatingContainer>
    )
        }
 
  

export default Rate
