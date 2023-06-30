import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const HomePage = () => {

  const [productList, setProductList] = React.useState<TProduct[]>([])

  React.useEffect(() => {
    window.fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
  }, []);

  return (
    <div>
      <Navbar />
      {productList.map((product, i) => (
        <div key={i}>
          {product.name}
        </div>
      ))}
    </div>
  )
}

export default HomePage