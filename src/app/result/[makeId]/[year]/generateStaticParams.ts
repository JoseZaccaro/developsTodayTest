import { VehicleType } from "@/app/types/vehicle";

export async function generateStaticParams() {
    // Puedes realizar una petición a la API o definir los parámetros manualmente
    const makes: VehicleType[] = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
        .then(res => res.json())
        .then(data => data.Results)
        .catch(error => console.error(error));

    const years = ['2016', '2017', '2018', '2019', '2020'];
    const paths = makes.flatMap(make =>
        years.map(year => ({
            makeId: make.MakeId.toString(),
            year
        }))
    );

    return paths;
}
