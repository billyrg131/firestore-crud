import DataBlock from './DataBlock';
import firebase from './firebase/config';
import { useEffect, useState } from 'react';
import CreateData from './CreateData';

const ref = firebase.firestore().collection('developers');

function App() {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(false);

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
			<h1 style={{ padding: '30px', textAlign: 'center', fontSize: '25px' }}>
				React Firestore CRUD App
			</h1>
			{data.map((dev) => (
				<DataBlock dev={dev} />
			))}
			<CreateData />
		</div>
	);
}

export default App;

export { ref };
