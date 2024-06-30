import Button from '../Button';
import smartHome from '/src/assets/devices-monitor-svgrepo-com.svg';

export default function Header() {
	return (
		<div className='fixed top-0 z-50 lg:backdrop-blur-sm color'>
			<div className='flex items-center px-5 lg:px-7.5 xl:px10 max-lg:py-4'></div>
			<a className='block w-[12rem] xl:mr-8 href="#smart-home'>
				<img src={smartHome} className='w-20 h-80'></img>
			</a>
			<Button className='mt-100 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>
				Something
			</Button>
		</div>
	);
}
