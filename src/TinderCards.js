import React, { useEffect } from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'

const TinderCards = () => {
    
    const [people, setPeople] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get("/tinder/cards/")
            setPeople(req.data)
        }
        fetchData()
       })
       
       
       
       
        // {
        //     name: "Johnny Depp",
        //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/800px-Johnny_Depp_2020.jpg"
        // },
        // {
        //     name: "Conan O'Brien",
        //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Conan_O%27Brien_by_Gage_Skidmore_2.jpg/800px-Conan_O%27Brien_by_Gage_Skidmore_2.jpg"
        // },
        // {
        //     name: "Taylor Swift",
        //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png"
        // },
        // {
        //     name: "Tom Hiddleston",
        //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/800px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg"
        // }


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
     //   setLastDirection(direction);
    }
  return (
      <div className='tinderCards'>
          <div className='tinderCards_container'>
          {people.map((person) => (
              <TinderCard
                  onSwipe={onSwipe}
                  className="swipe"
                  key={person.name}
                  onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                  preventSwipe={['up', 'down']}>
                  <div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
                      <h3>{person.name}</h3>
                  </div></TinderCard>
        ))}
          </div>
          
    </div>
  )
}

export default TinderCards