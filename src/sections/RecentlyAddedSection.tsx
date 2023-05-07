import { DataTable, SectionHeader } from "../components"
import { GridRowsProp } from "@mui/x-data-grid"

interface RecentlyAddedSectionProps {
    rows: GridRowsProp,
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const RecentlyAddedSection = (props: RecentlyAddedSectionProps) => {

    return (
        <section>
            <SectionHeader title="Recently Added:" />
            <DataTable {...props} isEditable={true} />
        </section>
    )
}