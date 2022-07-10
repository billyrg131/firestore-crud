import React, { useState } from 'react';
import { ref } from './App';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

export default function CreateData() {
  //Initialising values using useState hook
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');

  const CreateDoc = (newData) => {
    ref
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="createDiv">
      <h1 className="createh1">Create Data</h1>
      <input
        className="nameInput"
        type="text"
        id="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        className="skillInput"
        type="text"
        id="skill"
        placeholder="Skills"
        onChange={(e) => {
          setSkill(e.target.value);
        }}
      />
      <button
        className="createBtn"
        onClick={() => {
          CreateDoc({ name, skill, id: uuidv4() });
          //Empties content from input elements
          document.getElementById('name').value = '';
          document.getElementById('skill').value = '';
        }}
      >
        Create New Doc
      </button>
    </div>
  );
}
