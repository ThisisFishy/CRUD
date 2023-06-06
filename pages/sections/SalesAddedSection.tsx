import { GridRowsProp } from "@mui/x-data-grid";
import SalesDataTable from "../../components/SalesDataTable";
import SectionHeader from "../../components/SectionHeader";

interface SalesAddedSectionProps {
  salesRows: GridRowsProp;
  salesSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>;
}

const SalesAddedSection = (props: SalesAddedSectionProps) => {
  const { salesRows, salesSetRows } = props;

  return (
    <section>
      <SectionHeader title="Sales Added:" />
      <SalesDataTable 
        salesRows={salesRows}
        salesSetRows={salesSetRows}
        isEditable={true}
      />
    </section>
  );
};

export default SalesAddedSection;
