import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
import "../assets/style/Modal.css";
import { useState } from "react";

function Modal({
  avatar,
  isOpen,
  changeModal,
  name,
  username,
  bio,
  handleSubmit,
}) {
  const [newName, setNewName] = useState(() => name || "");
  const [newAvatar, setNewAvatar] = useState(() => avatar || null);
  const [newUsername, setNewUsername] = useState(() => username || "");
  const [newBio, setNewBio] = useState(() => bio || "");

  function handleChangeNewName(e) {
    setNewName(e.target.value);
  }

  function handleChangeAvatar(e) {
    setNewAvatar(URL.createObjectURL(e.target.files[0]));
  }

  function handleChangeNewUsername(e) {
    setNewUsername(e.target.value);
  }

  function handleChangeNewBio(e) {
    setNewBio(e.target.value);
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    handleSubmit({
      name: newName,
      avatar: newAvatar,
      username: newUsername,
      bio: newBio,
    });
    changeModal();
  }

  return (
    <div id="modal" className={isOpen ? "modal modal__open" : "modal"}>
      <div className="modal__card">
        <div className="modal__body">
          <h2 className="judulbatik">Edit Profile</h2>
          <div className="modal__avatar">
            <div className="display__avatar">
              <img src={newAvatar || avatar} alt="avatar" />
            </div>
            <div>
              <input
                id="inputFile"
                type="file"
                className="modal__input_file"
                accept=".jpg, .jpeg, .png"
                required
                onChange={handleChangeAvatar}
              />
              <label htmlFor="inputFile" className="">
                <ArrowUpOnSquareIcon className="upload__icon" />
              </label>
            </div>
          </div>
          <label className="input__label">Display Name</label>
          <input
            type="text"
            className="input modal__input"
            placeholder="Name"
            required
            value={newName}
            onChange={handleChangeNewName}
          />
          <label className="input__label">Username</label>
          <input
            type="text"
            className="input modal__input"
            placeholder="Username"
            required
            value={newUsername}
            onChange={handleChangeNewUsername}
          />
          <label className="input__label">Bio</label>
          <textarea
            className="textarea"
            defaultValue={newBio}
            onChange={handleChangeNewBio}
          ></textarea>
        </div>
        <div className="modal__action">
          <button className="btn btn-danger" onClick={changeModal}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleSubmitButton}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
