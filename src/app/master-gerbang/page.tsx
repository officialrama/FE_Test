'use client'

import * as React from 'react';
import Sidebar from "@/components/sidebar";
import TableGerbang from "@/components/table-gerbang";
import ModalGerbang from '@/components/modal-gerbang';
import ModalDelete from '@/components/modal-delete';
import Header from '@/components/header';
import { fetchApiGetMasterGerbang } from '@/fetchApi/homeApi';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useHooksJasaMarga } from '../hooks/inputhooks';

const MasterGerbang = () => {
    const [openGerbang, setOpenGerbang] = React.useState(false)
    const [editGerbang, setEditGerbang] = React.useState(false)
    const [showGerbang, setShowGerbang] = React.useState(false)
    const [deleteGerbang, setDeleteGerbang] = React.useState(false)
    const [searchGerbang, setSearchGerbang] = React.useState()
    const [searchGerbangType, setSearchGerbangType] = React.useState()
    const [showInputs, setShowInputs] = React.useState(false);
    const handleDropdownClick = () => {
      setShowInputs(!showInputs);
    };
    const handleClickItem = (e: any) => {
      console.log("er",e?.target?.innerText)
      const chooseType = e?.target?.innerText
      setSearchGerbangType(chooseType) 
      setShowInputs(!showInputs);
    };
    const [dataDetailGerbang, setDataDetailGerbang] = React.useState({
      id : 0,
      IdCabang : 0
    })
    console.log("datadeta",dataDetailGerbang)
    const { masterGerbangFilter, setMasterGerbangFilter, masterForm, setMasterForm } = useHooksJasaMarga()
    
    const handleOpenGerbang = () => {
     setOpenGerbang(true)
     setDataDetailGerbang({id : 0, IdCabang : 0})
    }

    const { data: initialData, isLoading, isError: isInitialError, isSuccess } = useQuery({
      queryKey: ['getInitialMasterGerbangData'],
      queryFn: () => fetchApiGetMasterGerbang({ body: masterGerbangFilter}),
      refetchOnWindowFocus: false,
      enabled: true, 
    });
  
    const { 
      data: filteredData, 
      mutate: getMasterGerbangData, 
      isError 
    } = useMutation({
      mutationFn: () => fetchApiGetMasterGerbang({ body: masterGerbangFilter}),
      onSuccess: (data) => {
        console.log('Master gerbang Data:', data);
      },
      onError: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  
    const displayedData = filteredData || initialData;

    console.log(displayedData)
  return (
    <>   
      <Header />
    <div className="flex flex-row ">
      <Sidebar/>
    <div className="w-screen h-screen bg-gray-300 px-10 py-10">
    <div className="flex flex-col h-full justify-start border bg-white">
    <p className="text-lg font-semibold mx-10">Master Data Gerbang</p>
    <div className="flex gap-6 mx-10 mt-4 justify-between">
      <div className='flex flex-row gap-3'>
      <input type="text" className="border-2 border-gray-500 rounded-lg" placeholder="Search">
    </input>
    <div className='absolute ml-56 flex flex-col gap-2 w-40 '>
    <button
          type="button"
          className="inline-flex flex-row border whitespace-nowrap text-center justify-center items-center rounded-lg bg-gray-500 text-white p-1"
          id="options-menu"
          onClick={handleDropdownClick}
    >{searchGerbangType ? searchGerbangType : 'Pilih Tipe Pencarian'}
    </button>
    {showInputs && (
      <>
    <button
          type="button"
          className="border rounded-lg bg-white text-center  text-black p-1 w-40"
          id="options-menu"
          onClick={(e) =>handleClickItem(e)}
    >Ruas
    </button>
        <button
        type="button"
        className="border rounded-lg bg-white text-center text-black p-1 w-40"
        id="options-menu"
        onClick={(e) => handleClickItem(e)}
  >Gerbang
  </button>
  </>
    )}
    </div>
    </div>
    <button className="border rounded-lg bg-slate-600 text-white font-semibold text-xs p-2" onClick={handleOpenGerbang}>
     + Tambah
     </button>
    </div>
    <TableGerbang data={displayedData?.data} openGerbang={openGerbang} setOpenGerbang={setOpenGerbang} editGerbang={editGerbang} setEditGerbang={setEditGerbang} showGerbang={showGerbang} setShowGerbang={setShowGerbang} deleteGerbang={deleteGerbang} setDeleteGerbang={setDeleteGerbang} setDataDetailGerbang={setDataDetailGerbang} setMasterForm={setMasterForm}/>
     </div>
     <ModalGerbang openGerbang={openGerbang} setOpenGerbang={setOpenGerbang} editGerbang={editGerbang} setEditGerbang={setEditGerbang} showGerbang={showGerbang} setShowGerbang={setShowGerbang} dataDetailGerbang={dataDetailGerbang} masterForm={masterForm} setMasterForm={setMasterForm}/> 
     <ModalDelete deleteGerbang={deleteGerbang} setDeleteGerbang={setDeleteGerbang}/>
     </div>
     </div>
     </>
  );
}

export default MasterGerbang