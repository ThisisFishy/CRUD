import { GridRowsProp } from "@mui/x-data-grid"
import SalesDataTable from "../../components/SalesDataTable";
import SectionHeader from "../../components/SectionHeader";

interface SalesAddedSectionProps {
    salesRows: any,
    salesSetRows: React.Dispatch<React.SetStateAction<any>>
}

const SalesAddedSection = (props: SalesAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Sales Added:" />
            <SalesDataTable {...props} isEditable={true} />
        </section>
    )
}

export default SalesAddedSection;