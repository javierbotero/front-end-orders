import React, { useState } from 'react';

export default function FormOrder ({
  firstNameProp,
  lastNameProp,
  addressProp,
  quantityProp,
  handleFetch
}) {
  const [firstName, setFirstName] = useState(firstNameProp);
  const [lastName, setLastName] = useState(lastNameProp);
  const [address, setAddress] = useState(addressProp);
  const [quantity, setQuantity] = useState(quantityProp);
  const [notification, setNotification] = useState('');

  const data = {
    firstName,
    lastName,
    address,
    quantity
  }

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const message = handleFetch(data);
    setNotification(message);
    resetValues();
  }

  const resetValues = () => {
    setAddress('');
    setFirstName('');
    setLastName('');
    setQuantity(0);
  }

  const updateField = (event: React.SyntheticEvent) => {
    setNotification('');

    if (event) {
      switch(event?.target.id) {
        case "firstName":
          setFirstName(event.target.value);
          break;
        case "lastName":
          setLastName(event.target.value);
          break;
        case "address":
          setAddress(event.target.value);
          break;
        case "quantity":
          setQuantity(event.target.value);
          break;
      }
    }
    console.log(data);
  }

  return <div>
    <form onSubmit={submit}>
      <div>{notification}</div>
      <fieldset>
        <legend>First Name</legend>
        <input value={firstName} onChange={updateField} id="firstName" />
      </fieldset>

      <fieldset>
        <legend>Last Name</legend>
        <input value={lastName} onChange={updateField} id="lastName" />
      </fieldset>

      <fieldset>
        <legend>Address</legend>
        <input value={address} onChange={updateField} id="address" />
      </fieldset>

      <fieldset>
        <legend>Quantity</legend>
        <input value={quantity} onChange={updateField} id="quantity" />
      </fieldset>
      <input type="submit" />
    </form>
  </div>;
}