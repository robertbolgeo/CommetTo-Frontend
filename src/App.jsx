import { useState } from 'react'
import './App.css'
// @ts-ignore
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const BACKEND_URL = import.meta.env.VITE_APP_BASE_URL;

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<div className='flex'>
<<<<<<< HEAD
					<div className='h-screen'>
						<LeftSide/>
						<div className='absolute flex settings--width-height bottom-0 text-white tile-bg'>
                    		<div className='m-auto'>Settings</div>
							<div className='m-2 h-20 float-right rounded-lg tile-inner-bg'>
                        		<div className='m-2'>Add Event Button</div>
                    		</div>
                		</div>
					</div>
					<RightSide/>
	  			</div>
=======
					<LeftSide />
					<RightSide />
				</div>
>>>>>>> 357ab1e (feat:List all basic information about events)
			</div>
		</>
	)
}

export default App
