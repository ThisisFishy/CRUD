import { GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { SalesSummeryTable } from "my-app/components/SalesSummeryTable";
import { SectionHeader } from "my-app/components";

interface SalesFetchedSectionProps {
  salesRows: GridRowsProp;
}

export const SalesFetchedSection = (props: SalesFetchedSectionProps) => {
  const { salesRows } = props;
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from server
      const res = await fetch('http://localhost:3000//api/fetchSalesData'); // Replace with your API endpoint
      const data = await res.json(); // Parse the JSON data from the response
  
      console.log(data); // Log the data to the console
  
      // Save the data into state
      setRows(data);
    };
  
    fetchData();
  }, []);
  
  return (
    <section>
      <SectionHeader title="Sales Fetched:" />
      <SalesSummeryTable salesRows={rows} />
    </section>
  );
};
