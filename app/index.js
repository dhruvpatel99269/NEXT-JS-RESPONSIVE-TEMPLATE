"use client"
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // This code will only run on the client side
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

    if (burger && menu) {
      burger.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          menu.classList.add('block');
        } else {
          menu.classList.add('hidden');
        }
      });
    }
  }, []);

  return (
    <div id='menu'>
      {hi}
    </div>
  );
}

export default MyComponent;
