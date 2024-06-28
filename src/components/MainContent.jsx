import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductPreview from './ProductPreview';
import { BsFillImageFill, BsCardChecklist, BsThreeDots } from 'react-icons/bs';

function MainContent() {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewDescriptionTitle, setPreviewDescriptionTitle] = useState('Personalized Video Response');
  const [previewDescriptionBody, setPreviewDescriptionBody] = useState('');

  const updatePreview = (image, title, body) => {
    setPreviewImage(image);
    setPreviewDescriptionTitle(title);
    setPreviewDescriptionBody(body);
    // hi test
  };

  return (
    <main className="flex-1 bg-[#f8f7ff] overflow-y-auto p-4 lg:p-6">
      <header className="bg-white p-6">
      <span className="text-xl font-bold text-gray-300">My Store / </span>
        <span className="text-xl font-bold text-gray-700">Add New Product</span>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mt-4">
          Your store isn't live yet. No worries! You can renew your subscription <a href="#" className="text-blue-600 underline">here</a>.
        </div>
      </header>
      <div className="p-6">
        <div className="mb-6">
          <NavButton text="Thumbnails" icon={<BsFillImageFill />} />
          <NavButton text="Checkout Page" icon={<BsCardChecklist />} active />
          <NavButton text="Options" icon={<BsThreeDots />} />
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 mb-6 lg:mb-0 lg:mr-6">
            <AddProductForm updatePreview={updatePreview} />
          </div>
          <div className="lg:w-1/3">
            <ProductPreview
              image={previewImage}
              descriptionTitle={previewDescriptionTitle}
              descriptionBody={previewDescriptionBody}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function NavButton({ text, icon, active }) {
  return (
    <button 
      className={`px-4 py-2 rounded-lg mr-2 transition-all duration-200 ease-in-out
        ${active 
          ? 'bg-[#ebe9fe] text-[#5043e3] font-medium' 
          : 'bg-white text-gray-600 hover:bg-[#f8f7ff] hover:text-[#5043e3]'
        }`}
    >
      <span className="text-xl mr-2">{icon}</span>
      {text}
    </button>
  );
}

export default MainContent;
