import React from 'react'

const Networks = ({ data }) => {

  const socialNetworks = data.map(network => {
    return (<li key={network.name}>
        <a href={network.url} target="_blank"><i className={network.className}></i></a>
      </li>)
  })

  return(
    <ul className="social">
      {socialNetworks}
    </ul>
  )
}

export default Networks
