'use client'

import BarChart from "@/components/barchart";
import Header from "@/components/header";
import PieChart from "@/components/piechart";
import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <>   
      <Header />
    <div className="flex flex-row ">
        <Sidebar/>
    <div className="w-screen h-screen bg-gray-300 px-10 py-10">
    <div className="flex flex-col h-full justify-start border bg-white">
    <p className="text-lg font-semibold mx-10">Dashboard</p>
    <div className="flex gap-6 mx-10 mt-4">
    <input type="text" className="border-2 border-gray-500 rounded-lg" placeholder="Tanggal">
    </input>
    <button className="border rounded-lg bg-slate-600 text-white font-semibold text-xs p-2">
     Filter
     </button>
    </div>
        <div className="flex flex-col gap-16 mt-4">
        <div className="flex justify-between px-10">
        <div className="w-[400px]">
        <BarChart/>
        </div>
        <div className="w-[200px]">
        <PieChart/>
        </div>
        </div>
        <div className="flex flex-row justify-between px-10">
        <div className="w-[400px]">
        <BarChart/>
        </div>
        <div className="w-[200px]">
        <PieChart/>
        </div>
        </div>
        </div>
     </div>
     </div>
     </div>
     </>
  );
}

export default Dashboard