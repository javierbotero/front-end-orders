'use client'

import { useState, useEffect } from 'react';
import FormOrder from "@/app/components/Form";
import { URL } from "../../utils/constants";

export default function SingleOrder({ params }) {
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    address: '',
    quantity: 0,
  });
  const id = params.id;
  const handleFetch = async (data) => {
    const response = await fetch(`${URL}/orders/${id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(data)
    });
    const returnedData = await response.json();
    return `Order ${id} updated`;
  }

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(`${URL}/orders/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      return await response.json();
    };
    fetchOrder().
      then((response) => setOrder(response)).
      catch((error) => { console.log(error)});
  }, [id]);

  return (
    <div>
      <h3>Edit Order {` ${id}`}</h3>
      <FormOrder
        firstNameProp={order.firstName}
        lastNameProp={order.lastName}
        addressProp={order.address}
        quantityProp={order.quantity}
        handleFetch={handleFetch}
      />
    </div>
  );
}