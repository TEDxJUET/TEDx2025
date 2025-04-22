// app/not-found.js
'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
    <Navbar/> 
    <div className=" h-[80vh] bg-[#0B0B0B] flex items-center justify-center flex-col w-[100%] text-center">
      <h1 className="text-6xl font-bold text-[white] ">404</h1>
      <p className="text-xl mt-4 text-gray-400">Oops! Page not found.</p>
      <Link href="/">
        <h1 className="mt-6  text-red-500 hover:underline">Go back home</h1>
      </Link>
    </div>
    <Footer/>
    </>
  );
}
