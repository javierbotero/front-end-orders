import Link from 'next/link';
import { URL } from './utils/constants';

export default async function Home() {
  const fetchProducts = async () => {
    const products = await fetch(`${URL}/products`, {
      "headers": {
        "contentType": "application/json"
      }
    })
    return products.json();
  }
  const productsList = await fetchProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {productsList.map(obj => {
        return <Link
          key={obj.id}
          href={
            {
              pathname: '/orders',
              query: {
                productId: obj.id,
                name: obj.name
              }
            }
          }>
          {obj.name}
        </Link>
      })}
    </main>
  )
}
