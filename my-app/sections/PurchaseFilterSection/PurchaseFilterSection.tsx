import { useState } from "react";
import { GridValidRowModel } from "@mui/x-data-grid";
import { FilterData, FilterSection } from "./components/ActiveSubsection";
import { SectionHeader } from "my-app/components"
import { InactiveSubsection } from "./components/InactiveSubsection";

interface PurchaseFilterSectionProps {
    onFilterApplied: (newPurchaseData: GridValidRowModel[]) => void;
}

export const PurchaseFilterSection = (props: PurchaseFilterSectionProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <SectionHeader title="Purchase Filter Section" />

            {isActive ?
                <FilterSection
                    onFilterApplied={(filterData) => {
                        props.onFilterApplied(filterData);
                        setIsActive(false);
                    }}
                    onCancelClicked={() => setIsActive(false)}
                /> :

                <InactiveSubsection
                    OnAddClicked={() => setIsActive(true)}
                />
            }
        </section>
    )
}
