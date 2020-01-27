import React from 'react'

import uc from './img/uc.gif'
import tamagotchi from './img/tamagotchi.gif'
import ramen from './img/ramen.gif'
import smallme from './img/smallme.png'
import meme from './img/meme.JPG'
import rt from './img/rt.gif'
import {Text, Ulist, Img} from './elements'

const Me = () => {

  return (<>
    <Img src={smallme} class={'block_element'}/>
    <Text txt={'My name is Jussi. I\'m a 34-yo MsC from Finland.'}/>
    <br/>
    <Img src={tamagotchi} class={'block_element'}/>
    <Text txt={'I was always into tech somehow'}/>
    <br/>
    <br/>
    <Img src={meme} class={'block_element'}/>
    <Text txt={'I like memes too. Sometimes communicating with me is basically memes.'}/>
    <br/>
    <Img src={ramen} class={'block_element'}/>
    <Text txt={'Ramen is like the bestest food eva. U should try it.'}/>
    <br/>
    <Img src={rt} class={'block_element'}/>
    <Text txt={'Travelling is fun. Road tripping very fun.'}/>
    </>
  )
}

export default Me