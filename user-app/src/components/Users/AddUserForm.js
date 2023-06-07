import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const usernameIsValid = () => (username.trim().length > 0 ? true : false);

  const ageIsValid = () => (age > 0 ? true : false);

  let invalidMessage;
  const validateForm = () => {
    if (!usernameIsValid()) {
      invalidMessage = "Please enter a valid username";
      return false;
    } else if (!ageIsValid()) {
      invalidMessage = "Please enter a valid age";
      return false;
    }
    return true;
  };

  const submitUser = () => {
    props.onAddUser({
      username: username,
      age: age,
      id: Math.random().toString(),
    });
  };

  const submitInvalidUser = () => {
    props.onInvalidUser(invalidMessage);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const validForm = validateForm();
    if (validForm) {
      submitUser();
    } else {
      submitInvalidUser();
    }

    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        ></input>
      </div>
      <div className={styles["form-control"]}>
        <label>Age (Years)</label>
        <input
          type="number"
          min={0}
          value={age}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
