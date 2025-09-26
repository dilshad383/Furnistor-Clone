import React, { useState } from 'react';

const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div>
      <label className='text-xl inline-block py-2'>Region *</label>
      <br />

      <input
        type="radio"
        id="europe"
        name="region"
        value="Europe"
        checked={selectedRegion === 'Europe'}
        onChange={handleRegionChange}
      />
      <label htmlFor="europe">Europe</label>
      <br />

      <input
        type="radio"
        id="north-america"
        name="region"
        value="North America"
        checked={selectedRegion === 'North America'}
        onChange={handleRegionChange}
      />
      <label htmlFor="north-america">North America</label>
      <br />

      <input
        type="radio"
        id="south-america"
        name="region"
        value="South America"
        checked={selectedRegion === 'South America'}
        onChange={handleRegionChange}
      />
      <label htmlFor="south-america">South America</label>
      <br />

      <input
        type="radio"
        id="asia"
        name="region"
        value="Asia"
        checked={selectedRegion === 'Asia'}
        onChange={handleRegionChange}
      />
      <label htmlFor="asia">Asia</label>
      <br />

      <input
        type="radio"
        id="africa"
        name="region"
        value="Africa"
        checked={selectedRegion === 'Africa'}
        onChange={handleRegionChange}
      />
      <label htmlFor="africa">Africa</label>
      <br />

      <input
        type="radio"
        id="australia-oceania"
        name="region"
        value="Australia / Oceania"
        checked={selectedRegion === 'Australia / Oceania'}
        onChange={handleRegionChange}
      />
      <label htmlFor="australia-oceania">Australia / Oceania</label>
    </div>
  );
};

export default RegionSelector;