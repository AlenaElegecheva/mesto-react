import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import '../index.css';
import ImagePopup from './ImagePopup';


function App() {
  const [editAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [addPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    setImagePopupOpen(true);
  }

  function closePopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* <!--Попап редактирования--> */}
      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        formName={"edit"}
        formId={"edit"}
        btnText={"Сохранить"}
        isOpen={editProfilePopupOpen}
        onClose={closePopups}
      >
        <input className="popup__input popup__input_field_name" type="text" name="username" id="username" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__error username-error"></span>
        <input className="popup__input popup__input_field_aboutme" type="text" name="aboutme" id="aboutme" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
        <span className="popup__error aboutme-error"></span>
      </PopupWithForm>

      {/* <!--Попап добавления карточки--> */}
      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        formName={"add"}
        formId={"add"}
        btnText={"Создать"}
        isOpen={addPlacePopupOpen}
        onClose={closePopups}
      >
        <input className="popup__input popup__input_field_place" type="text" name="place" id="place" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__error place-error"></span>
        <input className="popup__input popup__input_field_src" type="url" name="src" id="src" placeholder="Ссылка на картинку" required />
        <span className="popup__error src-error"></span>
      </PopupWithForm>

      {/* <!--Попап картинки--> */}
      <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closePopups}></ImagePopup>

      {/* <!--Попап удаления карточки--> */}
      <PopupWithForm
        name={"delete-card"}
        title={"Вы уверены?"}
        formName={"card-delete"}
        formId={"card-delete"}
        btnText={"Да"}
      >
      </PopupWithForm>

      {/* <!--Попап редактирования аватара--> */}
      <PopupWithForm
        name={"edit-avatar"}
        title={"Обновить аватар"}
        formName={"avatar-edit"}
        formId={"avatar-edit"}
        btnText={"Сохранить"}
        isOpen={editAvatarPopupOpen}
        onClose={closePopups}
      >
        <input className="popup__input popup__input_field_avatar-src" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required />
        <span className="popup__error avatar-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
