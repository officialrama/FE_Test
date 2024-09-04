'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [lalinOpen, setLalinOpen] = React.useState(false);
  const router = useRouter();


  return (
    <div className={`h-screen bg-white text-white flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl p-4 hover:bg-gray-500 focus:outline-none text-black"
      >
        {isOpen ? '←' : '→'}
      </button>
      <div className={`flex flex-col mx-6 mt-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
        <p onClick={() => router.push('/dashboard')} className='cursor-pointer hover:bg-gray-500 focus:outline-none text-black font-semibold'>
            Dashboard
        </p>
        <div onClick={()=> setLalinOpen(true)} className='cursor-pointer hover:bg-gray-500 focus:outline-none text-black font-semibold'>
            Laporan Lalin {lalinOpen ? "v" : "^"}
             {lalinOpen ? <p className='ml-5 hover:bg-gray-700 focus:outline-none text-black font-semibold' onClick={() => router.push('/laporan')}>Laporan Per Hari</p> : ""}
        </div>
        <p onClick={() => router.push('/master-gerbang')} className='cursor-pointer hover:bg-gray-500 focus:outline-none text-black font-semibold'>
            Master Gerbang
        </p>
      </div>
    </div>
  );
};

export default Sidebar