import react from "react";
import { useRouter } from "next/router";

const commentId = () => {
	const router = useRouter();
	const { productId, commentId } = router.query;

	return (
		<div>
			Esta es la pagina de comment: {commentId} del product {productId}
		</div>
	);
}

export default commentId;