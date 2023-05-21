import { GridRowsProp } from "@mui/x-data-grid"
import { SalesDataTable, SectionHeader } from "../components"

interface RecentlyAddedSectionProps {
    rows: GridRowsProp,
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const RecentlyAddedSection = (props: RecentlyAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Recently Added:" />
            <SalesDataTable {...props} isEditable={true} />
        </section>
    )
}