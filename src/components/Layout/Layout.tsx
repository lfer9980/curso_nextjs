import * as React from 'react';
import NavBar from '@components/Navbar/Navbar';

/* import styles from "@/styles/style.module.css"; */

function Layout({ children }: Props) {
	return (
		<main className='container'>
			<NavBar />
			{children}
			<footer>
				this is the footer
			</footer>
			<style jsx>
				{
					/* template literals CSS in JS */
					`
					.container {
						background: salmon;
					}
					`
				}

			</style>
		</main>
	);
}

export { Layout };