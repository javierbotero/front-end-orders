'use client';

import { useState } from 'react';
import { URL } from '../utils/constants';
import FormOrder from '../components/Form';

export default function Order({ searchParams }) {
  const productId = searchParams.productId;
  const name = searchParams.name;
  const handleFetch = async (data) => {
    data.productId = productId;
    const response = await fetch(`${URL}/orders`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    const returnedData = await response.json();
    return `Order ${returnedData.id} created`;
  };

  return (
    <div>
      <div>You will order {name}</div>
      <FormOrder
        firstNameProp=""
        lastNameProp=""
        addressProp=""
        quantityProp=""
        handleFetch={handleFetch}
      />
    </div>
  );
}
