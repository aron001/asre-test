import clock from '../assets/clock.jpg'
import React from 'react';
import { useState, useEffect } from "react";
const Card = () => {
    const [shortcutdata, setShortcutdata] = useState([]);

    useEffect(() => {
        const getShortcutinfo = async () => {
          try {
            const res = await fetch("https://api.testvalley.kr/main-shortcut/all");
            const data = await res.json();
            
            setShortcutdata(data);
       
          } catch (error) {
            console.error(error);
          }
        };
    
        getShortcutinfo();
      }, []);

  return (
<div className="container mx-auto px-28 flex">
{shortcutdata.map((item) => (
  <div key={item.mainShortcutId} className="flex flex-wrap">
    <div className="w-40 my-4">
      <img
        className="w-full h-10 object-contain"
        src={item.imageUrl}
        alt="Product 1"
      />
      <div className="text-center mt-2">
        <p className="text-sm text-gray-900 dark:text-gray-900">{item.title}</p>
      </div>
    </div>
    
    {/* Add more product elements as needed */}
  </div>
     ))}
</div>
  
  );
};

export default Card;


/*
import React, { useState, useEffect } from "react";
import clock from '../assets/clock.jpg';

const ProductCard = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const res = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await res.json();

        // Filter the data based on type: "SINGLE" and viewType: "TILE"
        const filteredData = data.filter(
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
    <div className="container mx-auto px-32">
      <div className="grid grid-cols-1 gap-4">
        {collectionData.map(item => (
          <div key={item.id} className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <h5 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-900">{item.title}</h5>
            </div>

            <div className="col-span-4 grid grid-cols-4 gap-4">
              {item.items.slice(0, 4).map(subItem => (
                <div key={subItem.uuid} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
                  <div className="p-4">
                    {subItem.publication.media.map(media => (
                      <img key={media.id} src={media.uri} alt="Clock" className="w-full" />
                    ))}
                  </div>

                  <div className="px-4 py-3">
                    <a href="#">
                      <h5 className="text-lg font-normal tracking-tight text-gray-900 dark:text-gray-900">{subItem.publication.priceInfo.discountRate}%</h5>
                    </a>
                    <a href="#">
                      <h5 className="text-sm font-normal tracking-tight text-gray-400 dark:text-gray-400">{subItem.publication.priceInfo.discountRate}%</h5>
                    </a>
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
*/