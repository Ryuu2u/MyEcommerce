import React from 'react';

const BeverageCard = (props) => {
    const { image, name, description, price, onOrder } = props;

    return (
  <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover mb-2 rounded"
    />
    <h2 className="text-lg font-bold">{name}</h2>
    <p className="text-gray-600 mb-2">{description}</p>
    <p className="font-semibold mb-3">{price} บาท</p>
    
    <button
      onClick={onOrder}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
    >
      สั่งซื้อ
    </button>
  </div>
);
}

export default BeverageCard;
