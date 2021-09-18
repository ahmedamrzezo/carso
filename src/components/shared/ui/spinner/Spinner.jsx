import { RefreshIcon } from '@heroicons/react/outline';

const Spinner = () => {
	return (
		<div className="fixed top-0 left-0 bg-primary_light_color_80 flex justify-center items-center w-100vw h-100vh z-10">
			<RefreshIcon className="animate-spin-reverse w-10 text-secondary_color"></RefreshIcon>
		</div>
	);
};

export default Spinner;
