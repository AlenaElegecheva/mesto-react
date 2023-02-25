function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button className="btn popup__close-icon" type="button" aria-label="закрыть" onClick={props.onClose}></button>
        <h3 className="popup__heading">{props.title}</h3>
        <form className="popup__form" name={props.formName} id={props.formId} noValidate>
          {props.children}
          <button className="popup__btn" type="submit">{props.btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;