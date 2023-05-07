import { GridRowsProp } from "@mui/x-data-grid"
import { Button } from "@mui/material"
import { DataTable, SectionHeader } from "../components"

interface SearchSectionProps {
    rows: GridRowsProp,
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const SearchSection = (props: SearchSectionProps) => {
    return (
        <section>
            <SectionHeader title="Search" />

            <div className="flex flex-col gap-2">
                <div>
                    <Button variant="contained">Search</Button>
                </div>

                <DataTable {...props} isEditable={false} />
            </div>
        </section>
    )
}