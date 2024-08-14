"use client"
import { useState, useEffect } from 'react';
import { VehicleType } from './types/vehicle';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [makeId, setMakeId] = useState('');
  const [year, setYear] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      .then(response => response.json())
      .then(data => setVehicleTypes(data.Results))
      .catch(error => {
        console.error(error)
        setVehicleTypes([
          {
            MakeId: 0,
            MakeName: "No make found",
            VehicleTypeId: 0,
            VehicleTypeName: "No vehicle type found"
          },
        ])
      });
  }, []);

  useEffect(() => {
    setIsButtonEnabled(makeId !== '' && year !== '');
  }, [makeId, year]);
  const years = Array.from({ length: new Date().getFullYear() - 2015 + 1 }, (_, i) => 2015 + i);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 text-black">
      <h1 className="text-4xl font-bold mb-8">Select Vehicle Type and Model Year</h1>
      <div className="mb-4 w-full flex flex-col items-center justify-center">
        <label htmlFor="vehicleType" className="block mb-2 text-left w-3/4 md:w-1/2 lg:w-1/4">Vehicle Type:</label>
        <select
          id="vehicleType"
          value={makeId}
          onChange={(e) => setMakeId(e.target.value)}
          className="border p-2 rounded w-3/4 md:w-1/2 lg:w-1/4"
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.length > 0 ? vehicleTypes.map((type) => (
            <option key={type.MakeId} value={type.MakeId} className=''>{type.MakeName}</option>
          ))
            : <option value="0">Loading...</option>

          }
        </select>
      </div>
      <div className="mb-4 w-full flex flex-col items-center justify-center">
        <label htmlFor="year" className="block mb-2 text-left w-3/4 md:w-1/2 lg:w-1/4">Model Year:</label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 rounded w-3/4 md:w-1/2 lg:w-1/4"
        >
          <option value="">Select Year</option>
          {years.length > 0 ? years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))
            : <option value="0">Loading...</option>
          }
        </select>
      </div>
      <button
        disabled={!isButtonEnabled}
        className={`bg-blue-500 text-white p-2 rounded ${!isButtonEnabled ? 'opacity-50' : ''}`}
        onClick={() => router.push(`result/${makeId}/${year}`)}
      >
        Next
      </button>
    </main>
  );
}
