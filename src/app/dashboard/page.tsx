'use client'

import * as React from 'react'
import BarChart from "@/components/barchart";
import Header from "@/components/header";
import PieChart from "@/components/piechart";
import Sidebar from "@/components/sidebar";
import { useHooksJasaMarga } from '../hooks/inputhooks';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchApiGetLalin } from '@/fetchApi/homeApi';


const Dashboard = () => {
  
  const { tanggalLalin, handleFilterTanggal } = useHooksJasaMarga()
  const [totals, setTotals] = React.useState({
    eBri: 0,
    eBca: 0,
    eBni: 0,
    eDKI: 0,
    eMandiri: 0,
    eMega: 0,
    eFlo: 0,
  });
  const [totalsByGerbang, setTotalsByGerbang] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });
  const [totalsByShift, setTotalsByShift] = React.useState({
    1: 0,
    2: 0,
    3: 0,
  });
  const [totalsByRuas, setTotalsByRuas] = React.useState({
    1: 0,
    2: 0,

  });
  const barChartBank = ['BCA', 'BRI', 'BNI', 'DKI', 'Mandiri', 'Mega', 'Flo']
  const barChartGerbang = ['Gerbang 1', 'Gerbang 2', 'Gerbang 3', 'Gerbang 4', 'Gerbang 5']
  const pieChartShift = ['Shift 1', 'Shift 2', 'Shift 3']
  const pieChartRuas = ['Ruas 1', 'Ruas 2']

  const { data: initialData, isLoading, isError: isInitialError, isSuccess } = useQuery({
    queryKey: ['getInitialLalinData'],
    queryFn: () => fetchApiGetLalin({ tanggal: tanggalLalin, limit: 400}),
    refetchOnWindowFocus: false,
    enabled: true, 
  });

  const { 
    data: filteredData, 
    mutate: getLalinData, 
    isError 
  } = useMutation({
    mutationFn: () => fetchApiGetLalin({ tanggal: tanggalLalin, limit: 400 }),
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
  const displayedData = filteredData || initialData;

  const calculateTotals = (rows: any[]) => {
    return rows.reduce(
      (acc, row) => ({
        eBca: acc.eBca + row.eBca,
        eBri: acc.eBri + row.eBri,
        eBni: acc.eBni + row.eBni,
        eDKI: acc.eDKI + row.eDKI,
        eMandiri: acc.eMandiri + row.eMandiri,
        eMega: acc.eMega + row.eMega,
        eFlo: acc.eFlo + row.eFlo,
      }),
      {
        eBca: 0,
        eBri: 0,
        eBni: 0,
        eDKI: 0,
        eMandiri: 0,
        eMega: 0,
        eFlo: 0,
      }
    );
  };

 
  const calculateTotalsByGerbang = (rows: any[]) => {
    let countGerbang1 = 0;
    let countGerbang2 = 0;
    let countGerbang3 = 0;
    let countGerbang4 = 0;
    let countGerbang5 = 0;
  
    rows.forEach(row => {
      const idGerbang = row?.IdGerbang;
      if (idGerbang === 1) {
        countGerbang1 += 1;
      } else if (idGerbang === 2) {
        countGerbang2 += 1;
      } else if (idGerbang === 3) {
        countGerbang3 += 1;
      } else if (idGerbang === 4) {
        countGerbang4 += 1;
      } else if (idGerbang === 5) {
        countGerbang5 += 1;
      }
    });
  
    setTotalsByGerbang({
      1: countGerbang1,
      2: countGerbang2,
      3: countGerbang3,
      4: countGerbang4,
      5: countGerbang5,
    });
  };

  const calculateTotalsByShift = (rows: any[]) => {
    let countShift1 = 0;
    let countShift2 = 0;
    let countShift3 = 0;
  
    rows.forEach(row => {
      const idShift = row?.Shift;
      if (idShift === 1) {
        countShift1 += 1;
      } else if (idShift === 2) {
        countShift2 += 1;
      } else if (idShift === 3) {
        countShift3 += 1;
      }
    });
  
    setTotalsByShift({
      1: countShift1,
      2: countShift2,
      3: countShift3,
    });
  };
  const calculateTotalsByRuas = (rows: any[]) => {
    let countRuas1 = 0;
    let countRuas2 = 0;
  
    rows.forEach(row => {
      const idRuas = row?.IdCabang;
      if (idRuas === 16) {
        countRuas1 += 1;
      } else if (idRuas === 37) {
        countRuas2 += 1;
      } 
    });
  
    setTotalsByRuas({
      1: countRuas1,
      2: countRuas2,
    });
  };
  React.useEffect(() => {
    if (isSuccess && displayedData) {
      const rows = displayedData?.data?.rows?.rows || [];
      const total = calculateTotals(rows);
      setTotals(total);
      calculateTotalsByGerbang(rows);
      calculateTotalsByShift(rows);
      calculateTotalsByRuas(rows);
    }
  }, [isSuccess, displayedData]);
  

  const dataBarchart = [
    totals.eBca,
    totals.eBri,
    totals.eBni,
    totals.eDKI,
    totals.eMandiri,
    totals.eMega,
    totals.eFlo
  ];
  const dataBarchartGerbang = [
    totalsByGerbang[1],
    totalsByGerbang[2],
    totalsByGerbang[3],
    totalsByGerbang[4],
    totalsByGerbang[5],
  ]

  const dataPiechartShift = [
    totalsByShift[1],
    totalsByShift[2],
    totalsByShift[3]
  ]
  const dataPiechartRuas = [
    totalsByRuas[1],
    totalsByRuas[2],
  ]

  return (
    <>   
      <Header />
    <div className="flex flex-row ">
        <Sidebar/>
    <div className="w-screen h-screen bg-gray-300 px-10 py-10">
    <div className="flex flex-col h-full justify-start border bg-white">
    <p className="text-lg font-semibold mx-10">Dashboard</p>
    <div className="flex gap-6 mx-10 mt-4">
    <input type="date" name="tanggal" id="tanggal" placeholder="Tanggal" value={tanggalLalin} onChange={handleFilterTanggal} 
    className="border-2 border-gray-500 rounded-lg">
    </input>
    <button onClick={handleFilterClick} 
    className="border rounded-lg bg-slate-600 text-white font-semibold text-xs p-2">
     Filter
     </button>
    </div>
        <div className="flex flex-col gap-16 mt-4">
        <div className="flex justify-between px-10">
        <div className="w-[400px]">
        <BarChart labelBarchart={barChartBank} dataBarchart={dataBarchart} title='Total Lalin per E-Money'/>
        </div>
        <div className="w-[200px]">
        <PieChart title='Total Lalin per Shift' dataBarchart={dataPiechartShift} labelBarchart={pieChartShift} />
        </div>
        </div>
        <div className="flex flex-row justify-between px-10">
        <div className="w-[400px]">
        <BarChart labelBarchart={barChartGerbang} dataBarchart={dataBarchartGerbang} title='Total Lalin per Gerbang'/>
        </div>
        <div className="w-[200px]">
        <PieChart dataBarchart={dataPiechartRuas} title='Total Lalin per Ruas' labelBarchart={pieChartRuas}/>
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