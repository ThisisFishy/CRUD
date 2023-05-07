import { GridRowsProp } from "@mui/x-data-grid"
import { DataTable, SectionHeader, SmallButton } from "../components"

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
                    <SmallButton text="Search" />
                </div>

                <DataTable {...props} isEditable={false} />
            </div>
        </section>
    )
}