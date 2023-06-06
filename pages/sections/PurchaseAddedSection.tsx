import { GridRowsProp } from "@mui/x-data-grid"
import PurchaseDataTable from "../../components/PurchaseDataTable";
import SectionHeader from "../../components/SectionHeader";


interface PurchaseAddedSectionProps {
    purchaseRows: any,
    purchaseSetRows: React.Dispatch<React.SetStateAction<any>>
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