import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Basket(props) {
  const [modalIsOpen, setMoalIsOpen] = useState(false);

  function deleteHandler() {
    setMoalIsOpen(true);
  }
  function closeModal() {
    setMoalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
}
export default Basket;
