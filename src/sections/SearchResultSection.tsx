import { GridRowsProp } from "@mui/x-data-grid"
import { DataTable, SectionHeader } from "../components"

interface SearchResultSectionProps {
    rows: GridRowsProp,
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const SearchResultSection = (props: SearchResultSectionProps) => {

    return (
        <section>
            <SectionHeader title="Search Result:" />
            <DataTable {...props} isEditable={true} />
        </section>
    )
}