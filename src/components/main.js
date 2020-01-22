import React from 'react'

import uc from './img/uc.gif'
import tamagotchi from './img/tamagotchi.gif'
import ramen from './img/ramen.gif'
import smallme from './img/smallme.png'
import meme from './img/meme.JPG'
import rt from './img/rt.gif'
import {Text, Ulist, Img} from './elements'

const Main = () => {

  return (<>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <br/>
    Welcome to my site. Click a link to proceed.
    <br/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    <Img src={uc} class={'topimage'}/>
    </>
  )
}

export default Main