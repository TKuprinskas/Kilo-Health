import React, { useState } from 'react'
import { Button, Container, Star } from './StarRating.styles'

const StarRating = () => {
  const [rating, setRating] = useState(0)
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <Button
            type="button"
            key={index}
            color={index <= rating ? 'on' : 'off'}
            onClick={() => setRating(index)}
          >
            <Star>&#9733;</Star>
          </Button>
        )
      })}
    </Container>
  )
}

export default StarRating
