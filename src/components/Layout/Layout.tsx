import * as React from 'react';
import NavBar from '../Navbar/Navbar';

function Layout({ children }: Props) {
	return (
		<main>
			<NavBar />
			{children}
			<footer>
				this is the footer
			</footer>
		</main>
	);
}

export { Layout };