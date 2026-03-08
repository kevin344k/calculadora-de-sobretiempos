export default function PriceTable({ prices }) {
  return (
    <div className="mb-6 overflow-x-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-3">Precio de las Horas</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Normal</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">+25%</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">+50%</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">+100%</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-gray-800">${prices.normal.toFixed(3)}</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-800">${prices.al25.toFixed(3)}</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-800">${prices.al50.toFixed(3)}</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-800">${prices.al100.toFixed(3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
