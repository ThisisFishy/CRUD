import { GridRowsProp } from "@mui/x-data-grid"
import PurchaseDataTable from "../../components/PurchaseDataTable";
import SectionHeader from "../../components/SectionHeader";


interface PurchaseAddedSectionProps {
    purchaseRows: GridRowsProp,
    purchaseSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

const PurchaseAddedSection = (props: PurchaseAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Purchase Added:" />
            <PurchaseDataTable {...props} isEditable={true} />
        </section>
    )
}

export default PurchaseAddedSection;