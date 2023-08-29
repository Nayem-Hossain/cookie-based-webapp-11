'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const handleUserPreference = async () => {
    const response = await fetch(`http://localhost:3000/api/set-cookies/`, {
      method: 'GET',
    });
    // console.log("set cookies", response);
  }
  const [cookie, setCookies] = useState([])
  const handleDisplayCookies = async () => {
      const response = await fetch(`http://localhost:3000/api/read-cookies/`, {
        method: 'GET',
      });
      console.log("cookies", response);
      setCookies(response.stringify());
    }
 
  return (
    <div className='flex justify-center items-center h-screen gap-4'>
      <button onClick={handleUserPreference} className='bg-purple-600 rounded text-white px-4 py-1 hover:bg-black'>Set Cookies</button>
      <button onClick={handleDisplayCookies} className='bg-purple-600 rounded text-white px-4 py-1 hover:bg-black'>Display Cookies</button>
      <p>{cookie}</p>
    </div>
  )
}
