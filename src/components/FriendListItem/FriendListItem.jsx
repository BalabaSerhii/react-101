import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ user: { avatar, name, isOnline } }) {
  const statusUser = isOnline ? "Online" : "Offline";
  const styleUser = isOnline ? css.isOnline : css.isOffline;
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={styleUser}>{statusUser}</p>
    </div>
  );
}

// добавлять  в зависимости от статуса слово и цвет
