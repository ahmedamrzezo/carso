import { Fragment } from 'react/cjs/react.production.min';

const Main = ({ children }) => {
	return (
		<Fragment>
			<main className="container mx-auto">{children}</main>
		</Fragment>
	);
};

export default Main;
