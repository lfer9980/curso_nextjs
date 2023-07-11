import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

function ProductList({ products }: ProductListProps) {
	return (
	  <Card.Group itemsPerRow={2} stackable centered>
		{mapProductsToCards(products)}
	  </Card.Group>
	);
} 

export default ProductList
