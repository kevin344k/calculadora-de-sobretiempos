import { useState } from 'react'
import PriceTable from './PriceTable'
import HoursDetail from './HoursDetail'

export default function OvertimeCalculator() {
  const [basicSalary, setBasicSalary] = useState('')
  const [workDays, setWorkDays] = useState('')
  const [workNights, setWorkNights] = useState('')
  const [prices, setPrices] = useState(null)
  const [hoursDetail, setHoursDetail] = useState(null)
  const [error, setError] = useState('')

  const calculateOvertime = () => {
    setError('')
    
    if (!basicSalary) {
      setError('Por favor ingrese un salario básico')
      return
    }

    // Calcular precio por hora
    const preHoraNormal = ((basicSalary / 30) / 8).toFixed(3)
    const preHoraAl25 = (preHoraNormal * 1.25).toFixed(3)
    const preHoraAl50 = (preHoraNormal * 1.5).toFixed(3)
    const preHoraAl100 = (preHoraNormal * 2).toFixed(3)

    setPrices({
      normal: parseFloat(preHoraNormal),
      al25: parseFloat(preHoraAl25),
      al50: parseFloat(preHoraAl50),
      al100: parseFloat(preHoraAl100)
    })

    // Calcular horas si hay días y noches
    if (workDays && workNights) {
      const jornadaNocheX25 = 8
      const jornadaNocheX50 = 1.25
      const jornadaDiaX50 = 4
      const jornadaNochex100 = 2.75

      const cantHorasAl25 = workNights * jornadaNocheX25
      const cantHorasAl50 = workNights * jornadaNocheX50 + workDays * jornadaDiaX50
      const cantHorasAl100 = workNights * jornadaNochex100

      const valAl25 = (cantHorasAl25 * (preHoraAl25 - preHoraNormal)).toFixed(2)
      const valAl50 = (cantHorasAl50 * preHoraAl50).toFixed(2)
      const valAl100 = (cantHorasAl100 * preHoraAl100).toFixed(2)

      const totalValue = (parseFloat(valAl25) + parseFloat(valAl50) + parseFloat(valAl100)).toFixed(2)

      setHoursDetail({
        al25: { hours: cantHorasAl25, value: parseFloat(valAl25) },
        al50: { hours: cantHorasAl50, value: parseFloat(valAl50) },
        al100: { hours: cantHorasAl100, value: parseFloat(valAl100) },
        total: parseFloat(totalValue),
        workDays: workDays,
        workNights: workNights
      })
    }
  }

  const clearForm = () => {
    setBasicSalary('')
    setWorkDays('')
    setWorkNights('')
    setPrices(null)
    setHoursDetail(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Calculadora de Sobretiempos</h1>
            <p className="text-red-100 mt-2">v3.0</p>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6 rounded">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Salary Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Salario Básico ($):
              </label>
              <input
                type="number"
                step="any"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
                placeholder="Ingrese su salario básico"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
              />
            </div>

            {/* Price Table */}
            {prices && <PriceTable prices={prices} />}

            {/* Days and Nights Section */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Días Laborados:
                </label>
                <input
                  type="number"
                  value={workDays}
                  onChange={(e) => setWorkDays(e.target.value)}
                  placeholder="Cantidad de días"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Noches Laboradas:
                </label>
                <input
                  type="number"
                  value={workNights}
                  onChange={(e) => setWorkNights(e.target.value)}
                  placeholder="Cantidad de noches"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={calculateOvertime}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Calcular
              </button>
              <button
                onClick={clearForm}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Limpiar
              </button>
            </div>

            {/* Hours Detail */}
            {hoursDetail && <HoursDetail detail={hoursDetail} />}
          </div>
        </div>
      </div>
    </div>
  )
}
