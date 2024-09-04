'use client'

import * as React from 'react';
import Sidebar from "@/components/sidebar";
import TableGerbang from "@/components/table-gerbang";
import ModalGerbang from '@/components/modal-gerbang';
import ModalDelete from '@/components/modal-delete';
import Header from '@/components/header';

const MasterGerbang = () => {
    const [openGerbang, setOpenGerbang] = React.useState(false)
    const [editGerbang, setEditGerbang] = React.useState(false)
    const [showGerbang, setShowGerbang] = React.useState(false)
    const [deleteGerbang, setDeleteGerbang] = React.useState(false)
    
    const handleOpenGerbang = () => {
     setOpenGerbang(true)
    }
  return (
    <>   
      <Header />
    <div className="flex flex-row ">
        <Sidebar/>
    <div className="w-screen h-screen bg-gray-300 px-10 py-10">
    <div className="flex flex-col h-full justify-start border bg-white">
    <p className="text-lg font-semibold mx-10">Master Data Gerbang</p>
    <div className="flex gap-6 mx-10 mt-4 justify-between">
    <input type="text" className="border-2 border-gray-500 rounded-lg" placeholder="Search">
    </input>
    <button className="border rounded-lg bg-slate-600 text-white font-semibold text-xs p-2" onClick={handleOpenGerbang}>
     + Tambah
     </button>
    </div>
    <TableGerbang openGerbang={openGerbang} setOpenGerbang={setOpenGerbang} editGerbang={editGerbang} setEditGerbang={setEditGerbang} showGerbang={showGerbang} setShowGerbang={setShowGerbang} deleteGerbang={deleteGerbang} setDeleteGerbang={setDeleteGerbang}/>
     </div>
     <ModalGerbang openGerbang={openGerbang} setOpenGerbang={setOpenGerbang} editGerbang={editGerbang} setEditGerbang={setEditGerbang} showGerbang={showGerbang} setShowGerbang={setShowGerbang}/> 
     <ModalDelete deleteGerbang={deleteGerbang} setDeleteGerbang={setDeleteGerbang}/>
     </div>
     </div>
     </>
  );
}

export default MasterGerbang