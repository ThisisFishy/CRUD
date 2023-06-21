import { GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { PurchaseSummeryTable } from "my-app/components/PurchaseSummeryTable";
import { SectionHeader } from "my-app/components";

interface PurchaseFetchedSectionProps {
  PurchaseRows: GridRowsProp;
}

export const PurchaseFetchedSection = (props: PurchaseFetchedSectionProps) => {
  const { PurchaseRows } = props;

  
  return (
    <section>
      <SectionHeader title="Purchase Fetched Result:" />
      <PurchaseSummeryTable PurchaseRows={PurchaseRows} />
    </section>
  );
};
