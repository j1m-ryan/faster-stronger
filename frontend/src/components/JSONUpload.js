import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import Popup from './Popup';

const JSONUpload = ({ setUserData }) => {
	const [showPopup, setShowPopup] = useState(false);
	const [fileData, setFileData] = useState('');
	const [fileChosen, setfileChosen] = useState(false);
	const handleFileUpload = (event) => {
		event.preventDefault();
		setfileChosen(true);
		const file = event.target.files[0];
		const reader = new FileReader();
		console.log('here');
		reader.onload = (event) => {
			// The file's text will be printed here
			setFileData(event.target.result);
		};

		reader.readAsText(file);
	};
	const saveFile = () => {
		localStorage.setItem('userData', fileData);
		setUserData(JSON.parse(localStorage.getItem('userData')));
		togglePopup();
	};
	const togglePopup = () => {
		setShowPopup(!showPopup);
		setfileChosen(false);
	};

	return (
		<div>
			<Button variant='warning' onClick={togglePopup}>
				<i className='fas fa-upload' /> Import Data
			</Button>
			{showPopup ? (
				<Popup
					togglePopup={togglePopup}
					handleFileUpload={handleFileUpload}
					fileChosen={fileChosen}
					saveFile={saveFile}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default JSONUpload;
