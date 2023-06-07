import { GridRowsProp } from "@mui/x-data-grid"
import { SalesDataTable, SectionHeader } from "my-app/components"

interface SalesAddedSectionProps {
    salesRows: GridRowsProp,
    salesSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const SalesAddedSection = (props: SalesAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Sales Added:" />
            <SalesDataTable {...props} isEditable={true} />
        </section>
    )
}