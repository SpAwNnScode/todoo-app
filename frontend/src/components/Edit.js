import React, { useState } from "react";
import { motion } from "framer-motion";

const Edit = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [showModal, setShowModal] = useState(false);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      setShowModal(false);
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button className="edit-btn" onClick={() => setShowModal(true)}>
        Edit
      </button>

      {showModal && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="modal" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <form onSubmit={updateDescription}>
              <h2>Edit Todo</h2>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Edit;
