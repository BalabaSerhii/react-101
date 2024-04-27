import FriendListItem from "../FriendListItem/FriendListItem.jsx";




export default function FriendsList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Friend user={item} />
        </li>
      ))}
    </ul>
  );
}
