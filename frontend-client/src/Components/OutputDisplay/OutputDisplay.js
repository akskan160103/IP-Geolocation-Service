import React from 'react'
import '../OutputDisplay/OutputDisplay.css';
import IpMap from '../IpMap/IpMap';


function OutputDisplay({error, info}) {
  return (
    <section className='OutputDisplayContainer'>

      {error && <p className='ErrorMessageContainer'>{error}</p>} {/*This is called conditional rendering: The && operation means that the first falsy value will be rendered. If none of the 
      values are falsy, it renders(returns) the last truthy value.*/}
      {/*If error == null, that is a falsy, and error will be returned. But since this is not an element, nothing will be displayed. <p> --- </ p> will always be
      truthy since it is a valid HTML element, hence if error is not null (truthy), the last truthy value [element p] will be rendered. */}
    
    {!error && 
    <div className='PrintInfoContainer'>
      {info.network && <p>Network Range: {info.network}</p>}
      {info.longitude && <p>Longitude: {info.longitude}</p>}
      {info.latitude && <p>Latitude: {info.latitude}</p>}
      {info.subdivision && <p>Subdivision: {info.subdivision}</p>}
      {info.city && <p>City: {info.city}</p>}
      {info.country && <p>Country: {info.country}</p>}
    </div>
    }

    {
    info.latitude && info.longitude && <IpMap info={info} />
    }

    </section>
  )
}

export default OutputDisplay
