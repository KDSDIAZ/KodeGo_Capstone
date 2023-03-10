import React from 'react'

export default function NavList_L() {
  return (
    <ul className="flex flex-row gap-8 text-white font-bold cursor-pointer">
      <li className="hover:text-theme-accent">Home</li>
      <li className="hover:text-theme-accent">About Us</li>
      <li className="hover:text-theme-accent">FAQs</li>
      <li className="hover:text-theme-accent">Contact Us</li>
    </ul>
  );
}

