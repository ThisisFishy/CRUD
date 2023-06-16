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
    console.log(salesRows);
    // Transform the data to be a flat array of objects
    const transformedData = salesRows.map((row: any) => {
      const transformedRow = { id: row.id, ...row.data };
      return transformedRow;
    });
  
    console.log(transformedData);  // Add this line
  
    setRows(transformedData);
  }, [salesRows]);
  
  return (
    <section>
      <SectionHeader title="Sales Fetched:" />
      <SalesSummeryTable salesRows={rows} />
    </section>
  );
};
