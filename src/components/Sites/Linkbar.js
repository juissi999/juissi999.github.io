import React from 'react'
import {Link} from 'react-router-dom'

const Linkbar = () => {
  const linklist = ['main', 'me', 'projects']

  const links = () => linklist.map((cval, i) => {
      return(<Link key={i} to={cval}>{cval}</Link>)
    }
  )

  return (<div className='linkbar'>
            {links()}
          </div>
  )
}

export default Linkbar
