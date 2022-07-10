import firebase from './firebase/config';
import { useEffect, useState } from 'react';
import EditData from './EditData';

function DisplayData() {
  const ref = firebase.firestore().collection('developers');

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const [editBox, setEditBox] = useState(false);

  function GetData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }
  useEffect(() => {
    GetData();
    console.log(data);
  }, []);
  return (
    <div className="App">
      {loader === false &&
        data.map((dev) => (
          <div key={dev.id}>
            <h1>Name: {dev.name}</h1>
            <p> Skills: {dev.skills}</p>
            <button onClick={() => setEditBox(true)}>Edit</button>
            {editBox === true && <EditData dev={dev} setEditBox={setEditBox} />}
          </div>
        ))}
    </div>
  );
}

export default DisplayData;
