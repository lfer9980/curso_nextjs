import React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = React.useState<TProduct>()

  React.useEffect(() => {
    window.fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
  }, []);

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      {product?.name}
    </section>
  )
}

export default ProductPage