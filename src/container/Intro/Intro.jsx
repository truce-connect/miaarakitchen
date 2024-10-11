import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
   const vidhandlle = ()=>{
     if(playVideo){
       vidRef.current.pause();
       setPlayVideo(false);
     } else {
       vidRef.current.play();
       setPlayVideo(true);
     }
   }

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center" onClick={vidhandlle}>
            {playVideo? <BsPauseFill  color='#fff' fontSize={30}/> 
            : <BsFillPlayFill color='#fff' fontSize={30}/>}

          </div>
          </div>
       </div>
  );
};

export default Intro;