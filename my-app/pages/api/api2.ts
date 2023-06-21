import { GridValidRowModel } from '@mui/x-data-grid';
import { FilterData } from 'my-app/sections/PurchaseFilterSection/components/ActiveSubsection';

export const fetchPurchaseData = async (filterData: FilterData): Promise<GridValidRowModel[]> => {
    const definedFilterData = Object.fromEntries(
        Object.entries(filterData).filter(([_key, value]) => value !== undefined)
    );
    
    const params = new URLSearchParams(definedFilterData);
  
    console.log('About to call fetchPurchaseData');
    try {
        const response = await fetch(`/api/fetchPurchaseData?field=${encodeURIComponent(filterData.field || "")}&condition=${encodeURIComponent(filterData.condition || "")}&value=${encodeURIComponent(filterData.value || "")}&secondValue=${encodeURIComponent(filterData.secondValue || "")}`, {
            method: 'GET',
        });

        // const response = await fetch(`/api/fetchPurchaseData?${params.toString()}`, {
        //     method: 'GET',
        // });

        console.log('This is api2.ts');

        // Throw an error if the response is not ok
        if (!response.ok) {
            console.error('Error status code:', response.status);
            console.error('Error status text:', response.statusText);
            throw new Error('Network response was not ok');
        }        

        // Process the response
        const data: GridValidRowModel[] = await response.json();
        return data;

    } catch (error) {
        console.error('Fetch failed:', error);
        return [];
    }
};

