import { GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { SalesSummeryTable } from "my-app/components/SalesSummeryTable";
import { SectionHeader } from "my-app/components";

interface SalesFetchedSectionProps {
  salesRows: GridRowsProp;
}

export const SalesFetchedSection = (props: SalesFetchedSectionProps) => {
  const { salesRows } = props;

  
  return (
    <section>
      <SectionHeader title="Sales Fetched Result:" />
      <SalesSummeryTable salesRows={salesRows} />
    </section>
  );
};
