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
    <main className="">
      <ul>
      {productsList.map(obj => {
        return (
          <li key={obj.id} className="p-3 border-solid border-2 border-black-500">
            <Link
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
          </li>
        )
      })}
      </ul>
    </main>
  )
}
