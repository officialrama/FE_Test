'use client'

import * as React from 'react';

interface ModalGerbangProps {
  openGerbang: boolean;
  setOpenGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  editGerbang: boolean;
  setEditGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  showGerbang: boolean;
  setShowGerbang: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalGerbang: React.FC<ModalGerbangProps> = ({ openGerbang , setOpenGerbang, editGerbang, setEditGerbang, showGerbang, setShowGerbang }) => {

 const handleCloseGerbang = () => {
   setOpenGerbang(false)
   setEditGerbang(false)
   setShowGerbang(false)
 }
return(
 <>
     <div
      className={`${
        openGerbang ? "flex" : "hidden"
      } justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50`}
    >
      <div className='flex flex-col justify-center bg-white p-10 gap-8'> 
        <p className='text-center text-lg font-semibold'>Tambah Gerbang</p>
        <div className='flex gap-12'>
      <input type="text" className="border-2 border-gray-500" placeholder="Ruas">
      </input>
      <input type="text" className="border-2 border-gray-500" placeholder="Gerbang">
      </input>
      </div>
      <div className='flex flex-row justify-center gap-6'>
      <button className={`border bg-slate-600 text-white font-semibold text-xs p-3 ${showGerbang ? "hidden" : "block"}`} onClick={() => setOpenGerbang(false)}>
       Simpan
     </button>
      <button className="border bg-slate-600 text-white font-semibold text-xs p-3" onClick={handleCloseGerbang}>
       Tutup
     </button>
     </div>
     </div>

    </div>
 </>
 );
};

export default ModalGerbang