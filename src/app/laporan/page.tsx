'use client'

import * as React from 'react'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TableLalinHarian from "@/components/table-lalin";
import { fetchApiGetLalin } from "@/fetchApi/homeApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useHooksJasaMarga } from "../hooks/inputhooks";

const LaporanLalinHari = () => {
  const { tanggalLalin, handleFilterTanggal } = useHooksJasaMarga()
  const [ MetodeBuyer, setMetodeBuyer ] = React.useState('Tunai')
  const { data: initialData, isLoading, isError: isInitialError, isSuccess } = useQuery({
    queryKey: ['getInitialLalinData'],
    queryFn: () => fetchApiGetLalin({ tanggal: tanggalLalin, limit: 5}),
    refetchOnWindowFocus: false,
    enabled: true, 
  });

  const { 
    data: filteredData, 
    mutate: getLalinData, 
    isError 
  } = useMutation({
    mutationFn: () => fetchApiGetLalin({ tanggal: tanggalLalin, limit: 6 }),
    onSuccess: (data) => {
      console.log('Lalin Data:', data);
    },
    onError: (error) => {
      console.error('Error fetching data:', error);
    }
  });

  const handleFilterClick = () => {
    getLalinData();
  };
  console.log(MetodeBuyer)
  const displayedData = filteredData || initialData;
  return (
    <>   
      <Header />
    <div className="flex flex-row ">
        <Sidebar/>
    <div className="w-screen h-screen bg-gray-300 px-10 py-10">
    <div className="flex flex-col h-full justify-start border bg-white">
    <p className="text-lg font-semibold mx-10">Laporan Lalin Per Hari</p>
    <div className="flex flex-col gap-6 mx-10 mt-4">
        <div className="flex gap-6">
    <input type="text" className="border-2 border-gray-500 rounded-lg" placeholder="Search">
    </input>
    <input type="text" className="border-2 border-gray-500 rounded-lg" placeholder="Tanggal">
    </input>
        </div>
        <div className="flex gap-3">
        <button className="border rounded-lg bg-slate-600 text-white font-semibold text-xs p-3">
     Filter
     </button>
     <button className="border-2 rounded-lg bg-white text-black font-semibold text-xs p-3">
     Reset
     </button>
        </div>

    </div>
    <div className="flex flex-row mx-6 mt-8 -mb-3">
    <p onClick={() => setMetodeBuyer('Tunai')} className={`border-x cursor-pointer border-y text-center w-24 h-6  text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'Tunai' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total Tunai
     </p>
     <p onClick={() => setMetodeBuyer('Toll')} className={`border-x cursor-pointer border-y text-center w-24 h-6  text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'Toll' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total E-Toll
     </p>
     <p onClick={() => setMetodeBuyer('Flo')} className={`border-x cursor-pointer border-y text-center w-24 h-6  text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'Flo' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total Flo
     </p>
     <p onClick={() => setMetodeBuyer('KTP')} className={`border-x cursor-pointer border-y text-center w-24 h-6  text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'KTP' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total KTP
     </p>
     <p onClick={() => setMetodeBuyer('Keseluruhan')} className={`border-x cursor-pointer border-y text-center w-36 h-6 text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'Keseluruhan' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total Keseluruhan
     </p>
     <p onClick={() => setMetodeBuyer('Total E-Toll+Tunai+Flo')} className={`border-x cursor-pointer border-y text-center w-44 h-6 text-xs border-x-black px-2 py-1 ${MetodeBuyer === 'Total E-Toll+Tunai+Flo' ? "bg-gray-400 text-white font-semibold" : " font-normal bg-gray-200 text-black"}`}>
     Total E-Toll+Tunai+Flo
     </p>
     <button className="ml-52 -mt-4 border-2 rounded-lg bg-white text-black font-semibold text-xs p-3">
     Export
     </button>
    </div>
    <TableLalinHarian tableData={displayedData} metodeBuyer={MetodeBuyer}/>
     </div>
     </div>
     </div>
     </>
  );
}
export default LaporanLalinHari