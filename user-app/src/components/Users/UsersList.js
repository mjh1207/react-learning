import UserEntry from "./UserEntry";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={styles["users-list"]}>
      {props.users.map((user) => {
        return (
          <UserEntry
            key={user.id}
            username={user.username}
            age={user.age}
          ></UserEntry>
        );
      })}
    </ul>
  );
};

export default UsersList;
