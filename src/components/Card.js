function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <>
      <button className="btn element__delete-btn" type="button" aria-label="удалить"></button>
      <img className="element__image" alt="" src={props.card.link} onClick={handleCardClick} />
      <div className="element__image-description">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__like-btn" type="button" aria-label="нравится"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  )
}

export default Card;