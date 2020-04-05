import React from 'react'

const Head = ({children}) => {
  return (
    <h1>
    {children}
    </h1>
  )
}

const Img = (props) => {
  return (<img src={props.src} className={props.class}/>)
}

const Hyperlink = ({to, children}) => {
  return (<a href={to}>{children}</a>)
}

const Text = ({children}) => {
  return (<p>
            {children}
          </p>)
}

const Txtcombined = ({txtlist}) => {
  const catlist = (e) => e.map((el, i) =>{
    // span-> React.Fragment to remove unnecessary DOM-elements
    return (<React.Fragment key={i}>{el}</React.Fragment>)
  })

  return (<>{catlist(txtlist)}</>)
}

const Li = ({txtlist}) => {
  return (<li><Txtcombined txtlist={txtlist}/></li>)
}

const Ulist = ({elements}) => {

  const maplist = () => elements.map((el,i) => {
    return (<Li key={i} txtlist={el}/>)
  })

  return (<ul>{maplist()}</ul>)
}

const Site = ({Content}) => {
  // not_in_use, for future refactoring to have extra div for site

  return (<div className='site_data'>
            <Content />
          </div>)
}

export {Site, Hyperlink, Head, Text, Txtcombined, Ulist, Img}
