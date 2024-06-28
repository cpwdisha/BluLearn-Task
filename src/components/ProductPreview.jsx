import React from 'react';

function ProductPreview({ image, descriptionTitle, descriptionBody }) {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden w-full sm:w-80 mx-auto">
      <div className="phone-preview border border-gray-700 rounded-xl overflow-hidden">
        <img src={image || 'https://picsum.photos/800/600'} alt="Product" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">{descriptionTitle || 'Personalized Video Response'}</h3>
          <p className="text-sm mb-4">{descriptionBody || 'I will personally review your request and help you build a plan for success.'}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
