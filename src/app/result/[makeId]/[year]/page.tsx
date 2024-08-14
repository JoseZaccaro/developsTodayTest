import React, { Suspense, lazy } from 'react';

// Componente cargado dinámicamente
const VehicleModels = lazy(() => import('./VehicleModels'));

const ResultPage = ({ params }: { params: { makeId: string, year: string } }) => {
  const { makeId, year } = params;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 text-black">
      <Suspense fallback={<p>Loading models...</p>}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>
    </main>
  );
};

export default ResultPage;
