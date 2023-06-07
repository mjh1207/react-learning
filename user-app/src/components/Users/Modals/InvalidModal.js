import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  let modalDisplay;
  if (props.showModal) {
    // setShowModal(true);
    modalDisplay = "block";
  } else {
    modalDisplay = "none";
  }

  const closeModal = () => {
    modalDisplay = "none";
    props.onCloseModal();
  };

  return (
    <div
      style={{ display: modalDisplay }}
      className={styles["modal"]}
      onClick={closeModal}
    >
      <div className={styles["modal-content"]}>
        <h2>Invalid Input</h2>
        <p>{props.message}</p>
        {/* <p>Please enter a valid name and age</p> */}
        <button className={styles["close"]} onClick={closeModal}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default InvalidModal;
