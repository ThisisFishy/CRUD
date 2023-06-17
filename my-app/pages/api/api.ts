import { GridValidRowModel } from '@mui/x-data-grid';// replace with the actual path
import { FilterData } from 'my-app/sections/SalesFilterSection/components/ActiveSubsection'; // replace with the actual path

export const fetchSalesData = async (filterData: FilterData): Promise<GridValidRowModel[]> => {
    // Convert filterData to query parameters
    const definedFilterData = Object.fromEntries(Object.entries(filterData).filter(([_, v]) => v != null));
    const params = new URLSearchParams(definedFilterData);


   try {
        const response = await fetch(`/api/fetchSalesData?${params}`, {
            method: 'GET',
        });        

        // Log the response
        const data: GridValidRowModel[] = await response.json();

        console.log('Response:', response);

      
        // Throw an error if the response is not ok
        if (!response.ok) {
            console.log('Response:', response);
            console.error('Error status code:', response.status);
            console.error('Error status text:', response.statusText);
            throw new Error('Network response was not ok');
        }        
    

        // Process the response
        return data.map((row: GridValidRowModel) => ({ id: row.id, ...row.data }));


    } catch (error) {
        console.error('Fetch failed:', error);
        return [];
    }
};
