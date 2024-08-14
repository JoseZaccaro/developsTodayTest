import { VehicleModel } from "@/app/types/vehicle";
import { stringifyError } from "next/dist/shared/lib/utils";

const VehicleModels = async ({ makeId, year }: { makeId: string; year: string }) => {
    try {
        const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        const data: { Results: VehicleModel[] } = await res.json();

        if (!data.Results || data.Results.length === 0) {
            return <p>No models found for this make and year.</p>;
        }

        return (
            <>
                <h2 className="text-4xl font-bold mb-8"> Model maker: {data.Results[0]?.Make_Name} - year: {year}</h2>
                <table className="border-collapse border-spacing-2 border w-3/4 md:w-1/2 lg:w-1/4">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th>Model Name</th>
                            <th>Model ID</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-black">
                        {data.Results.map((model) => (
                            <tr className="border border-gray-300 hover:bg-gray-100 odd:bg-gray-300" key={model.Model_ID}>
                                <td className="px-2">{model.Model_Name}</td>
                                <td className="px-2">{model.Model_ID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    } catch (error) {
        console.error(error);
        return <p>Error: could not get vehicle models. </p>;
    }

};

export default VehicleModels