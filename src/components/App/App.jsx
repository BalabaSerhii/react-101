import css from "./App.module.css";
import Profile from "../profile/Profile.jsx";
import userData from "../data/userData.json";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../data/friends.json";
export default function App() {
  return (
    <div>
      <Profile items={userData} />
      <FriendList items={friends} />
    </div>
  );
}
