export default function FriendListItem({ user: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
