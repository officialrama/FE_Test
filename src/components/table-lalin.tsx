'use client'

const TableLalinHarian = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">No.</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Ruas</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gerbang</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gardu</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Hari</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Tanggal</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Metode Pembayaran</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gol I</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gol II</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gol III</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gol IV</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Gol V</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Total Lalin</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Ruas 1</td>
              <td className="px-4 py-2">Gerbang 1</td>
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">Kamis</td>
              <td className="px-4 py-2">30-05-2024</td>
              <td className="px-4 py-2">Tunai</td>
              <td className="px-4 py-2">567</td>
              <td className="px-4 py-2">234</td>
              <td className="px-4 py-2">12</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">8</td>
              <td className="px-4 py-2">831</td>
            </tr>
            {/* Repeat similar rows for other entries */}
          </tbody>
          <tfoot className="bg-gray-200">
            <tr>
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Ruas 1</td>
              <td className="px-4 py-2">1791</td>
              <td className="px-4 py-2">7698</td>
              <td className="px-4 py-2">210</td>
              <td className="px-4 py-2">120</td>
              <td className="px-4 py-2">78</td>
              <td className="px-4 py-2">7546</td>
            </tr>
            <tr>
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Ruas 2</td>
              <td className="px-4 py-2">4779</td>
              <td className="px-4 py-2">7698</td>
              <td className="px-4 py-2">210</td>
              <td className="px-4 py-2">120</td>
              <td className="px-4 py-2">78</td>
              <td className="px-4 py-2">7546</td>
            </tr>
            <tr className="bg-gray-300">
              <td colSpan={7} className="px-4 py-2 text-center font-semibold text-gray-700">Total Lalin Keseluruhan</td>
              <td className="px-4 py-2">4779</td>
              <td className="px-4 py-2">7698</td>
              <td className="px-4 py-2">210</td>
              <td className="px-4 py-2">120</td>
              <td className="px-4 py-2">78</td>
              <td className="px-4 py-2 font-semibold text-gray-700">7546</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableLalinHarian