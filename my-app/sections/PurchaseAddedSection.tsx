import { GridRowsProp } from "@mui/x-data-grid"
import { PurchaseDataTable, SectionHeader } from "my-app/components"

interface PurchaseAddedSectionProps {
    purchaseRows: GridRowsProp,
    purchaseSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const PurchaseAddedSection = (props: PurchaseAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Purchase Added:" />
            <PurchaseDataTable {...props} isEditable={true} />
        </section>
    )
}