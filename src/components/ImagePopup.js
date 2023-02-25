function ImagePopup(props) {

  return(
    <div className={`popup popup_image ${ props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
    <div className="popup__container-image" onClick={(event) => event.stopPropagation()}>
      <button className="btn popup__close-icon popup__close-icon_image" type="button" aria-label="закрыть" onClick={props.onClose}></button>
      <img className="popup__picture" src={props.card.link} alt="" />
      <h2 className="popup__image-title">{props.card.name}</h2>
    </div>
  </div>
  )
}

export default ImagePopup;