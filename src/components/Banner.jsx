import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [bannerdata, setBannerdata] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getBannerinfo = async () => {
      try {
        const res = await fetch('https://api.testvalley.kr/main-banner/all');
        const data = await res.json();
        setBannerdata(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBannerinfo();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? bannerdata.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === bannerdata.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {bannerdata.length > 0 && (
        <div className="relative banner-container max-w-full">
          <img
            src={bannerdata[currentIndex].pcImageUrl}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[300px] relative z-50 max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l" onClick={handlePrev}>
              &lt;
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;