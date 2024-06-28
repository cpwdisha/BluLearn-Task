import React, { useState } from 'react';

function AddProductForm({ updatePreview }) {
  const [image, setImage] = useState(null);
  const [descriptionTitle, setDescriptionTitle] = useState('Personalized Video Response');
  const [descriptionBody, setDescriptionBody] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      updatePreview(imageUrl, descriptionTitle, descriptionBody);
    }
  };

  const handleDescriptionTitleChange = (e) => {
    const title = e.target.value;
    setDescriptionTitle(title);
    updatePreview(image, title, descriptionBody);
  };

  const handleDescriptionBodyChange = (e) => {
    const body = e.target.value;
    setDescriptionBody(body);
    updatePreview(image, descriptionTitle, body);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">1. Select Image</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <label htmlFor="imageUpload" className="block mb-2">
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Choose Image
            </span>
            <input
              id="imageUpload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          {image && <img src={image} alt="Selected" className="mt-2 mb-2 rounded-lg" />}
          {!image && (
            <>
              <p className="text-gray-500 mt-2">Drag Your Image Here</p>
              <p className="text-gray-400 text-sm">1024 x 1024</p>
            </>
          )}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">2. Write Description</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="descriptionTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Description Title *
            </label>
            <input
              id="descriptionTitle"
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={descriptionTitle}
              onChange={handleDescriptionTitleChange}
            />
          </div>
          <div>
            <label htmlFor="descriptionBody" className="block text-sm font-medium text-gray-700 mb-1">
              Description Body *
            </label>
            <textarea
              id="descriptionBody"
              className="w-full border border-gray-300 rounded-lg p-2"
              rows="4"
              value={descriptionBody}
              onChange={handleDescriptionBodyChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
