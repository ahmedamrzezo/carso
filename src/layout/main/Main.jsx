import { Fragment } from 'react/cjs/react.production.min';

const Main = ({ children }) => {
	return (
		<Fragment>
			<main className="container mx-auto mt-10 mb-auto">{children}</main>
		</Fragment>
	);
};

export default Main;
