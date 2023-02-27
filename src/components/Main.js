import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';


function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUsersData(), api.getInitialCards()])
      .then((data) => {
        const dataUser = data[0]
        const dataCard = data[1]
        setCards(dataCard);
        setUserName(dataUser.name);
        setUserAvatar(dataUser.avatar);
        setUserDescription(dataUser.about);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="page">
      <section className="profile">
        <a href="#" className="avatar-hover-effect" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </a>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button className="btn profile__edit-btn" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
        </div>
        <button className="btn profile__add-btn" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="photo-grid">
        {cards.map((card) => {
          return (
            <article className="element" key={card._id}>
              <Card card={card} onCardClick={props.onCardClick} />
            </article>
          );
        })}
      </section>
    </main>
  )
}

export default Main;