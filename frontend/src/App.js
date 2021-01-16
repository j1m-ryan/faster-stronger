import { useState } from 'react';
import Header from './components/Header';
import SaveDetails from './components/SaveDetails';
import Settings from './components/Settings';
import BMI from './components/BMI';
import NewFast from './components/NewFast';
import Timer from './components/Timer';
const App = () => {
	const [userData, setUserData] = useState(
		localStorage.getItem('userData') === null
			? {}
			: JSON.parse(localStorage.getItem('userData'))
	);
	const [enoughInfo, setEnoughInfo] = useState(false);

	return (
		<>
			<Header />
			<main>
				<Timer userData={userData} />
				<NewFast userData={userData} setUserData={setUserData} />
				<BMI
					userData={userData}
					enoughInfo={enoughInfo}
					setEnoughInfo={setEnoughInfo}
				/>
				<Settings
					setUserData={setUserData}
					setEnoughInfo={setEnoughInfo}
					userData={userData}
					enoughInfo={enoughInfo}
				/>
				<SaveDetails setUserData={setUserData} setEnoughInfo={setEnoughInfo} />
			</main>
		</>
	);
};

export default App;
