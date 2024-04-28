import css from "./App.module.css";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx"
import Profile from "../profile/Profile.jsx";
import userData from "../data/userData.json";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../data/friends.json";
import transacData from "../data/transactions.json";
export default function App() {
  return (
    <div className={css.container}>
      <Profile items={userData} />
      <FriendList items={friends} />
      <TransactionHistory items={transacData}/>
    </div>
  );
}
