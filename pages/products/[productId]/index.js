import react from "react";
import { useRouter } from "next/router";

const ProductId = () => {
	const router = useRouter();
	const { productId } = router.query;

	return (
		<div>
			Esta es la pagina de product: {productId}
		</div>
	);
}

export default ProductId;