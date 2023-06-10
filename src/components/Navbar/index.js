import react from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<li>
				<Link href={"/"}>
					HOME
				</Link>
				{/* con prefetch false, el prefetching se hace solo cuando haces hover al link */}
				<Link href={"/about"} prefetch={false}>
					About
				</Link>
				<Link href={"https://www.google.com"}>
					google
				</Link>
			</li>
		</nav>
	);
}

export default Navbar;