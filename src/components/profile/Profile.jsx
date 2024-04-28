import css from "./Profile.module.css";

export default function Profile({
  items: { username, tag, location, avatar, stats },
}) {
  const keys = Object.keys(stats);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={css.container}>
      <div className={css.user}>
        <img src={avatar} alt="User photo" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {keys.map((item) => {
          return (
            <li className={css.statsItem} key={item}>
              <span className={css.label}>{capitalizeFirstLetter(item)}</span>
              <span className={css.statsData}>{stats[item]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
