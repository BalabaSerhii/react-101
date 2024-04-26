export default function Profile({
  items: { username, tag, location, avatar, stats },
}) {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@pmarica</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}
