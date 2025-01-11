import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({ onHandleInputChange, formData }) {
  // Ensure formData is properly handled and safe for destructuring
  const { desc } = formData || {};

  const handleChange = (e) => {
    onHandleInputChange(e.target.value);
  };

  return (
    <div className='my-10'>
      <HeadingDescription 
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />
      <input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        className='p-4 border rounded-lg mt-5 w-full text-gray-500'
        value={desc || ''}
        onChange={handleChange}
      />
    </div>
  );
}

export default LogoDesc;
