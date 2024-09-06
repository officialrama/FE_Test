'use client'

import { fetchApiCreateMasterGerbang, fetchApiUpdateMasterGerbang } from '@/fetchApi/homeApi';
import { useMutation } from '@tanstack/react-query';
import * as React from 'react';

interface RowData {
  id: number;
  IdCabang: number;
}

interface MasterGerbangForm {
  ruas: string;
  gerbang: string;
  id: number;
  IdCabang: number;
}

interface MasterGerbangV2 {
  NamaCabang: string;
  NamaGerbang: string;
  id: number;
  IdCabang: number;
}

interface ModalGerbangProps {
  openGerbang: boolean;
  setOpenGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  editGerbang: boolean;
  setEditGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  showGerbang: boolean;
  setShowGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  dataDetailGerbang: RowData,
  masterForm: any,
  setMasterForm : React.Dispatch<React.SetStateAction<MasterGerbangForm>>
}

const ModalGerbang: React.FC<ModalGerbangProps> = ({ openGerbang , setOpenGerbang, editGerbang, setEditGerbang, showGerbang, setShowGerbang, dataDetailGerbang, masterForm, setMasterForm }) => {
 const [masterv2, setMasterV2] = React.useState <any | []>({})
 const handleCloseGerbang = () => {
   setOpenGerbang(false)
   setEditGerbang(false)
   setShowGerbang(false)
 }
 const handleChangeMasterGerbang = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setMasterForm(prevState => ({
    ...prevState,
    [name]: value,
  }));
};
const {
  mutate: edit_mastergerbang,
} = useMutation({
  mutationFn: fetchApiUpdateMasterGerbang,
    onError: (error) => {
      console.error("Gagal, Ulangi Lagi", error);
    }
  });

  const {
    mutate: save_mastergerbang,
  } = useMutation({
    mutationFn: fetchApiCreateMasterGerbang,
      onError: (error) => {
        console.error("Gagal, Ulangi Lagi", error);
      }
    });
  const [randomNumber, setRandomNumber] = React.useState<number | null >(null)
  React.useEffect(() => {
      if(editGerbang === false && showGerbang === false){
          const generatedAutoNumber = Math.floor(Math.random() * (900 - 100 + 1)) + 100
         const generatedNumber = generatedAutoNumber
         setRandomNumber(generatedNumber)
        setMasterForm({
          id : Number(randomNumber),
          IdCabang : 37,
          gerbang : masterForm?.gerbang,
          ruas : masterForm?.ruas
        })
      }
  },[editGerbang, showGerbang , openGerbang ])

   React.useEffect(() => {
    if(editGerbang === true){
    setMasterV2({
      id: masterForm.id,
      IdCabang: masterForm.IdCabang,
      NamaCabang : masterForm.ruas,
      NamaGerbang : masterForm.gerbang
    })}
   },[editGerbang])
  const handleSaveMasterGerbang = () => {
    if(editGerbang === true) {
      edit_mastergerbang(masterv2)
    } else {
      save_mastergerbang(masterForm)
    }
    setOpenGerbang(false)
  }
 console.log('test',dataDetailGerbang)
 console.log('dast',masterForm)
 console.log('dastasd',masterv2)
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
      <input type="text" name='ruas' id='ruas' value={masterForm?.ruas} onChange={handleChangeMasterGerbang} className="border-2 border-gray-500" placeholder="Ruas" disabled={showGerbang ? true : false}>
      </input>
      <input type="text" name='gerbang' id='gerbang' value={masterForm?.gerbang} onChange={handleChangeMasterGerbang} className="border-2 border-gray-500" placeholder="Gerbang" disabled={showGerbang ? true : false}>
      </input>
      </div>
      <div className='flex flex-row justify-center gap-6'>
      <button className={`border bg-slate-600 text-white font-semibold text-xs p-3 ${showGerbang ? "hidden" : "block"}`} onClick={handleSaveMasterGerbang}>
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