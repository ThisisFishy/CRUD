import { GridRowsProp } from "@mui/x-data-grid"
import { DataTable, SectionHeader } from "../components"

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