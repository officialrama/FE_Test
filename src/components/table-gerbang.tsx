import { useHooksJasaMarga } from '@/app/hooks/inputhooks';
import React from 'react';

interface RowData {
  id: number;
  IdCabang: number;
  NamaCabang: string;
  NamaGerbang: string;
}

interface MasterGerbangForm {
  ruas: string;
  gerbang: string;
  id: number;
  IdCabang: number;
}

interface DataGerbangProps {
  id: number;
  IdCabang: number;
}

interface RowsProp {
  count: number;
  current_page: number;
  total_pages: number;
  rows: {
    rows: RowData[];
  };
}

interface TabelGerbangProps {
  openGerbang: boolean;
  setOpenGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  editGerbang: boolean;
  setEditGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  showGerbang: boolean;
  setShowGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  deleteGerbang: boolean;
  setDeleteGerbang: React.Dispatch<React.SetStateAction<boolean>>;
  data: RowsProp;
  setDataDetailGerbang: React.Dispatch<React.SetStateAction<DataGerbangProps>>; 
  setMasterForm: React.Dispatch<React.SetStateAction<MasterGerbangForm>>;
}

const TableGerbang: React.FC<TabelGerbangProps> = ({
  openGerbang,
  setOpenGerbang,
  editGerbang,
  setEditGerbang,
  showGerbang,
  setShowGerbang,
  deleteGerbang,
  setDeleteGerbang,
  data,
  setDataDetailGerbang,
  setMasterForm,
}) => {
  const handleEditGerbang = (id: number, IdCabang: number, NamaCabang: string, NamaGerbang: string) => {
    setOpenGerbang(true);
    setEditGerbang(true);
    setMasterForm({
      id: id,
      IdCabang: IdCabang,
      ruas : NamaCabang,
      gerbang: NamaGerbang
    })
    console.log('Edit:', { id, IdCabang, NamaCabang, NamaGerbang });
    setDataDetailGerbang({id, IdCabang})
  };

  const handleShowGerbang = (id: number, IdCabang: number, NamaCabang: string, NamaGerbang: string) => {
    setOpenGerbang(true);
    setShowGerbang(true);
    setMasterForm({
      id: id,
      IdCabang: IdCabang,
      ruas : NamaCabang,
      gerbang: NamaGerbang
    })
    setDataDetailGerbang({id, IdCabang})
    console.log('Show:', { id, IdCabang, NamaCabang, NamaGerbang });
  };

  const handleDeleteGerbang = (id: number, IdCabang: number) => {
    setDeleteGerbang(true);
    console.log('Deleting:', { id, IdCabang });
  };

  const dataGerbang = data?.rows?.rows;

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">No.</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Ruas</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gerbang</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dataGerbang?.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.NamaCabang}</td>
                <td className="px-4 py-2">{item.NamaGerbang}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button onClick={() => handleEditGerbang(item.id, item.IdCabang, item.NamaCabang, item.NamaGerbang)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                    </svg>
                  </button>
                  <button onClick={() => handleShowGerbang(item.id, item.IdCabang, item.NamaCabang, item.NamaGerbang)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button onClick={() => handleDeleteGerbang(item.id, item.IdCabang)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableGerbang;
