import { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";

/* importar CSS de forma global */
/* import "@/styles/style.css"; */

export default function MyApp({ Component, pageProps }: AppProps) {
	/* componente perfecto para utilizar providers / contexts */
	/* agregar layouts */
	/* props adicionales */

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}