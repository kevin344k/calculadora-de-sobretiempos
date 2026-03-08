export default function HoursDetail({ detail }) {
  return (
    <div className="space-y-4">
      {/* Hours Table */}
      <div className="overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Detalles de Horas Trabajadas</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">%</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Horas Jornada</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Cant. Días/Noches</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Total Horas</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Valor ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50 hover:bg-blue-100">
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">+25%</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">8</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">{detail.workNights}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">{detail.al25.hours}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">${detail.al25.value.toFixed(2)}</td>
            </tr>
            <tr className="bg-green-50 hover:bg-green-100">
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">+50%</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">4 / 1.25</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">{detail.workDays} / {detail.workNights}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">{detail.al50.hours}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">${detail.al50.value.toFixed(2)}</td>
            </tr>
            <tr className="bg-purple-50 hover:bg-purple-100">
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">+100%</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">2.75</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">{detail.workNights}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">{detail.al100.hours}</td>
              <td className="border border-gray-300 px-3 py-2 text-gray-800 font-semibold">${detail.al100.value.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total Summary */}
      <div className="bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-600 rounded-lg p-6 mt-6">
        <h3 className="text-xl font-bold text-red-800 mb-2">Total de Sobretiempos</h3>
        <p className="text-4xl font-bold text-red-600">
          ${detail.total.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
