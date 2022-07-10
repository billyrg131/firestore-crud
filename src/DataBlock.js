import React, { useState } from 'react';
import './styles.css';
import { ref } from './App';
import EditData from './EditData';

function DataBlock({ dev }) {
  const [editBox, setEditBox] = useState(false);
  const DeleteDoc = (doc) => {
    ref
      .doc(doc.id)
      .delete()
      .catch((err) => alert(err));
  };
  return (
    <div key={dev.id} className="Div">
      <p style={{ fontSize: '25px' }}>
        <strong>Name: {dev.name}</strong>
      </p>
      <p style={{ fontSize: '22px' }}>Skill: {dev.skill}</p>
      <div className="btnDiv">
        <button className="btnEdit" onClick={() => setEditBox(true)}>
          Edit
        </button>
        {editBox === true && <EditData dev={dev} setEditBox={setEditBox} />}
        <button className="btnDel" onClick={() => DeleteDoc(dev)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DataBlock;
