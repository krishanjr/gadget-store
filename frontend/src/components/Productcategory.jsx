import React from 'react';

const Productcategory = ({ category, onSelect }) => {
  return (
    <div
      className="cursor-pointer border rounded-lg p-4 text-center hover:bg-blue-100 transition"
      onClick={() => onSelect(category)}
    >
      <h3 className="text-lg font-semibold">{category.name}</h3>
      {category.image && (
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-32 object-cover rounded mt-2"
        />
      )}
    </div>
  );
};

export default Productcategory;
