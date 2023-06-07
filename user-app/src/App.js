import React, { useState } from "react";

import AddUserForm from "./components/Users/AddUserForm";
import styles from "./App.module.css";
import UsersList from "./components/Users/UsersList";
import InvalidModal from "./components/Users/Modals/InvalidModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(user);
      return updatedUsers;
    });
  };

  const invalidHandler = (message) => {
    setInvalidMessage(message);
    setShowModal(true);
  };

  let usersList = <p className="no-users">There are no users added yet!</p>;

  if (users.length > 0) {
    usersList = <UsersList users={users} />;
  }

  return (
    <div className={styles["users-app"]}>
      <section>
        <AddUserForm
          onAddUser={addUserHandler}
          onInvalidUser={invalidHandler}
        ></AddUserForm>
      </section>
      <section>
        <div>{usersList}</div>
      </section>
      <InvalidModal
        onCloseModal={() => setShowModal(false)}
        showModal={showModal}
        message={invalidMessage}
      />
    </div>
  );
}

export default App;
