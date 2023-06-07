import styles from "./UserEntry.module.css";

const UserEntry = (props) => {
  return (
    <p
      className={styles["user"]}
    >{`${props.username} (${props.age} years old)`}</p>
  );
};

export default UserEntry;
