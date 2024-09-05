'use client'

interface RowData {
  IdGerbang: number;
  IdCabang: number;
  Tanggal : string;
  DinasKary: number;
  DinasMitra: number;
  DinasOpr: number;
  Golongan: number;
  IdAsalGerbang: number;
  IdGardu: number;
  Shift: number;
  Tunai: number;
  eBca: number;
  eBni: number;
  eBri: number;
  eDKI: number;
  eFlo: number;
  eMandiri: number;
  eMega: number;
  eNobu: number;
  id: number;
}

interface TabelLalinProps {
    tableData : {
      data? : {
        rows : {
          rows : RowData []
        }
      }
  }
  metodeBuyer : string
}
const TableLalinHarian: React.FC<TabelLalinProps> = ({tableData, metodeBuyer}) => {
  const dataTable = tableData?.data?.rows?.rows
  console.log("table",dataTable)
  console.log("table2", tableData)
  return (
    <div className="p-4">
      <div className="overflow-auto max-h-80">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b-2 border-gray-200 whitespace-nowrap text-sm text-center">
            <tr>
              <th className="p-2 font-semibold text-gray-600">No.</th>
              <th className="p-2 font-semibold text-gray-600">Ruas</th>
              <th className="p-2 font-semibold text-gray-600">Gerbang</th>
              <th className="p-2 font-semibold text-gray-600">Gardu</th>
              <th className="p-2 font-semibold text-gray-600">Hari</th>
              <th className="p-2 font-semibold text-gray-600">Tanggal</th>
              <th className="p-2 font-semibold text-gray-600">Metode Pembayaran</th>
              <th className="p-2 font-semibold text-gray-600">Gol I</th>
              <th className="p-2 font-semibold text-gray-600">Gol II</th>
              <th className="p-2 font-semibold text-gray-600">Gol III</th>
              <th className="p-2 font-semibold text-gray-600">Gol IV</th>
              <th className="p-2 font-semibold text-gray-600">Gol V</th>
              <th className="p-2 font-semibold text-gray-600">Total Lalin</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            {dataTable?.map((item, index) => (
            <tr className="border-b" >
              <td className="p-1 text-center">{index + 1}</td>
              <td className="p-1 text-center whitespace-nowrap">{item?.IdCabang}</td>
              <td className="p-1 text-center whitespace-nowrap">{item?.IdGerbang}</td>
              <td className="p-1 text-center whitespace-nowrap">{item?.IdGardu}</td>
              <td className="p-1 text-center whitespace-nowrap">
                {item?.Tanggal
                  ? new Date(item.Tanggal).toLocaleDateString('id-ID', {
                      weekday: 'long' // This will return the day name in Indonesian (e.g., "Kamis")
                    })
                  : ''}
              </td>
              <td className="p-1 text-center whitespace-nowrap">  
              {item?.Tanggal
                ? new Date(item.Tanggal).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })
                : ''}</td>
              <td className="p-1 text-center whitespace-nowrap">{metodeBuyer}</td>
              <td className="p-1 text-center whitespace-nowrap">567</td>
              <td className="p-1 text-center whitespace-nowrap">234</td>
              <td className="p-1 text-center whitespace-nowrap">12</td>
              <td className="p-1 text-center whitespace-nowrap">10</td>
              <td className="p-1 text-center whitespace-nowrap">8</td>
              <td className="p-1 text-center whitespace-nowrap">831</td>
            </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-200 text-sm">
            <tr>
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Ruas 1</td>
              <td className="p-1 text-center whitespace-nowrap">1791</td>
              <td className="p-1 text-center whitespace-nowrap">7698</td>
              <td className="p-1 text-center whitespace-nowrap">210</td>
              <td className="p-1 text-center whitespace-nowrap">120</td>
              <td className="p-1 text-center whitespace-nowrap">78</td>
              <td className="p-1 text-center whitespace-nowrap">7546</td>
            </tr>
            <tr>
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Ruas 2</td>
              <td className="p-1 text-center whitespace-nowrap">4779</td>
              <td className="p-1 text-center whitespace-nowrap">7698</td>
              <td className="p-1 text-center whitespace-nowrap">210</td>
              <td className="p-1 text-center whitespace-nowrap">120</td>
              <td className="p-1 text-center whitespace-nowrap">78</td>
              <td className="p-1 text-center whitespace-nowrap">7546</td>
            </tr>
            <tr className="bg-gray-300">
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Keseluruhan</td>
              <td className="p-1 text-center whitespace-nowrap">4779</td>
              <td className="p-1 text-center whitespace-nowrap">7698</td>
              <td className="p-1 text-center whitespace-nowrap">210</td>
              <td className="p-1 text-center whitespace-nowrap">120</td>
              <td className="p-1 text-center whitespace-nowrap">78</td>
              <td className="p-1 text-center whitespace-nowrap font-semibold text-gray-700">7546</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableLalinHarian