'use client'

import * as React from 'react';

interface ModalDeleteProps {
  deleteGerbang: boolean;
  setDeleteGerbang: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ deleteGerbang , setDeleteGerbang }) => {

 const handleCloseGerbang = () => {
   setDeleteGerbang(false)
 }
return(
 <>
     <div
      className={`${
        deleteGerbang ? "flex" : "hidden"
      } justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50`}
    >
      <div className='flex flex-col justify-center bg-white p-10 gap-8'> 
        <p className='text-center text-lg font-semibold'>Tambah Gerbang</p>
        <p className='text-center text-base font-normal'>Apakah anda yakin menghapus data Ruas 1?</p>
      <div className='flex flex-row justify-center gap-6'>
      <button className={`border bg-slate-600 text-white font-semibold text-xs p-3`} onClick={() => setDeleteGerbang(false)}>
       Tidak
     </button>
      <button className="border bg-white text-black font-semibold text-xs p-3" onClick={handleCloseGerbang}>
       Ya
     </button>
     </div>
     </div>

    </div>
 </>
 );
};

export default ModalDelete