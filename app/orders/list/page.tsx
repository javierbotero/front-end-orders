'use client'

import { useState, useEffect } from 'react';
import { URL } from '../../utils/constants';
import Link from 'next/link';

export default function ListOrders() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  const deleteOrder = async (event: React.SyntheticEvent) => {
    await fetch(`${URL}/orders/${event.currentTarget.id}`, {
      method: "DELETE",
      headers: {
        "contentType": "application/json"
      },
    }).
      then(response => {
        response.json().
          then(data => {
            console.log(data);
            if (data.hasOwnProperty('error')) {
              setMessage(data.error);
            } else {
              setOrders(list => list.filter(order => {
                return order.id !== parseInt(event.target.id, 10);
              }));
              setMessage(data);
            }
          })
      });
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`${URL}/orders`, {
          "headers": {
            "contentType": "application/json"
          }
        });
      return response.json();
    }
    fetchOrders().
      then((list) => setOrders(list)).
      catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>{message}</div>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="my-5">
            <Link
              href={`/orders/${order.id}`}
            >
              Order {` ${order.id}`}
            </Link>
            <button onClick={deleteOrder} id={order.id} className="rounded-md mx-2 bg-red-400 p-3">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}