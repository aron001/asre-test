import React, { useState, useEffect } from "react";

const ProductCard = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const res = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await res.json();

        // Filter the data based on type: "SINGLE" and viewType: "TILE"
        const filteredData = data.items.filter(
          item => item.type === "SINGLE" && item.viewType === "TILE"
        );

        setCollectionData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollectionData();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-10">
      <div className="grid grid-cols-1 gap-4">
        {collectionData.map(item => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-1">
              <h5 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-900">{item.title}</h5>
            </div>

            <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              {item.items.slice(0, 4).map(subItem => (
                <div key={subItem.uuid} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
                  <div className="p-4">
                    {subItem.publication.media.map(media => (
                      <img key={media.id} src={media.uri} alt="Clock" className="w-full h-48 md:h-64 object-cover" />
                    ))}
                  </div>
                  <h5 className="text-sm font-normal tracking-tight text-gray-800 dark:text-gray-800">{subItem.publication.title}</h5>

                  <div className="px-4 py-3 flex">
                    <h5 className="text-lg font-semibold tracking-tight text-red-700 dark:text-red-600">{subItem.publication.priceInfo.discountRate}%</h5>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-800">{subItem.publication.priceInfo.discountPrice}</span>
                  </div>
                  <div className="px-4 py-3 flex">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <span className="text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{subItem.publication.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;