import React from 'react'
import {Link} from 'react-router-dom'

import {Head} from './elements'

const Main = () => {

  return (<>
    <Head>Jussi's homepage</Head>
    Welcome to my site.
    Click a link on the top right corner to proceed.
    <br/>
    Currently looking for a job. See more on page <Link to={'me'}>me</Link>!
    </>
  )
}

export default Main
