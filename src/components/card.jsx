import React, { useState, useEffect } from "react";
import clock from '../assets/clock.jpg';

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
    <div className="container mt-9 ml-1 ">
      <div className="flex flex-wrap justify-center">
        {shortcutdata.map((item) => (
          <div
            key={item.mainShortcutId}
            className="w-full sm:w-1/3 lg:w-auto px-1 my-1 flex justify-center"
          >
            <div className="flex flex-col items-center space-x-6">
              <img
                className="w-full h-10 object-contain"
                src={item.imageUrl}
                alt="Product 1"
              />
              <div className="text-center mt-2">
                <p className="text-sm text-gray-900 dark:text-gray-900">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;