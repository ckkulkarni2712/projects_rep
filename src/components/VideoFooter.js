import React from 'react'
import './VideoFooter.css'
import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
const VideoFooter = ({ channel,description,song}) => {
  return (
      <div className='videoFooter'>
          <div className='videofooter_text'>
              <h3>@{channel}</h3>
              <p>{description}
              </p>
              <div className='videoFooter_ticker'>
                  <MusicNoteIcon className='videoFooter_icon' />
                  <Ticker mode='smooth'>
                      {({ index }) => (
                          <>
                            <p>{song}</p>
                          </>
                      )}
                  </Ticker>
              </div>
          </div>
          <img className='videoFooter_record' src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
    </div>
  )
}

export default VideoFooter