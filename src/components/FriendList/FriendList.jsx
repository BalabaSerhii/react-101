import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendListItem.module.css"


export default function FriendsList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.styleFriend}>
          <FriendListItem user={item} />
          
        </li>
      ))}
    </ul>
  );
}
