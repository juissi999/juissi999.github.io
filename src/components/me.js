import React from 'react'

import tamagotchi from './img/tamagotchi.gif'
import ramen from './img/ramen.gif'
import smallme from './img/smallme.png'
import meme from './img/meme.JPG'
import rt from './img/rt.gif'
import {Text, Ulist, Img, Head} from './elements'


const Me = () => {

  return (<>
    <Head text={'Me'}/>
    <Text txt={'A few things about me.'}/>
    <br/>
    <Img src={smallme} class={'block_element'}/>
    <Text txt={'My name is Jussi. I\'m a 34-yo MsC from Finland.'}/>
    <br/>
    <Img src={tamagotchi} class={'block_element'}/>
    <Text txt={'I was always into tech somehow'}/>
    <br/>
    <Img src={meme} class={'block_element'}/>
    <Text txt={'I like internet culture and memes.'}/>
    <br/>
    <Img src={ramen} class={'block_element'}/>
    <Text txt={'Ramen is like my favourite food, try it!'}/>
    <br/>
    <Img src={rt} class={'block_element'}/>
    <Text txt={'Road-trips are my favourite means of travel!'}/>
    </>
  )
}

export default Me