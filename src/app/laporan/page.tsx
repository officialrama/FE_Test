'use client'

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TableLalinHarian from "@/components/table-lalin";

const LaporanLalinHari = () => {
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
    <p className="border-x cursor-pointer border-y text-center w-24 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total Tunai
     </p>
     <p className="border-x cursor-pointer border-y text-center w-24 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total E-Toll
     </p>
     <p className="border-x cursor-pointer border-y text-center w-24 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total Flo
     </p>
     <p className="border-x cursor-pointer border-y text-center w-24 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total KTP
     </p>
     <p className="border-x cursor-pointer border-y text-center w-32 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total Keseluruhan
     </p>
     <p className="border-x cursor-pointer border-y text-center w-44 h-6 bg-gray-300 text-black font-normal text-xs border-x-black px-2 py-1">
     Total E-Toll+Tunai+Flo
     </p>
     <button className="ml-52 -mt-4 border-2 rounded-lg bg-white text-black font-semibold text-xs p-3">
     Export
     </button>
    </div>
    <TableLalinHarian/>
     </div>
     </div>
     </div>
     </>
  );
}
export default LaporanLalinHari