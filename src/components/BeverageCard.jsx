import React from 'react';

const BeverageCard = ({ image, name, description, price }) => (
  <div className="border p-4 rounded">
    <img src={image} alt={name} className="w-full h-48 object-cover mb-2" />
    <h2 className="text-lg font-bold">{name}</h2>
    <p>{description}</p>
    <p className="font-semibold">{price} บาท</p>
  </div>
);
export default BeverageCard;
