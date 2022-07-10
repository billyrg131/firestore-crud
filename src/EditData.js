import React, { useState } from 'react';
import { ref } from './App';

function EditData({ dev, setEditBox }) {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');

  function EditDoc(updatedDoc) {
    ref
      .doc(updatedDoc.id)
      .update(updatedDoc)
      .catch((err) => console.log(err.message));
  }
  return (
    <div className="editDiv">
      <h1 className="edith1">Edit/Update Data</h1>
      <input
        className="editName"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="editSkill"
        type="text"
        placeholder="Skill"
        onChange={(e) => setSkill(e.target.value)}
      />
      <button
        className="editBtn"
        onClick={() => {
          EditDoc({ name: name, skill: skill, id: dev.id });
          setEditBox(false);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default EditData;
