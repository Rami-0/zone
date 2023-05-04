import React from 'react'
import css from "./Card.module.css"

const Card = ({date, mainText, img, pfp,name}) => {
  return (
    <div className={css.cardWrapper + " CARD" } style={{backgroundImage: `url(${img})`}}>
      <div  className='bkg'/>
      <div className={css.top}>
      <p className='secondary_text'>{date}</p>
      <h4>{mainText}</h4>
      </div>
      <div className={css.bottom}>
        <img src={pfp} alt="hey" />
        <p className='secondary_text mainColorText'>{name}</p>
      </div>
    </div>
  )
}

export default Card