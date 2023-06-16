import { useState } from "react";

import { FilterData, FilterSection } from "./components/ActiveSubsection";
import { SectionHeader } from "my-app/components"
import { InactiveSubsection } from "./components/InactiveSubsection";

interface SalesFilterSectionProps {
    onFilterApplied: (filterData: FilterData) => void;
}

export const SalesFilterSection = (props: SalesFilterSectionProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <SectionHeader title="Sales Filter Section" />

            {isActive ?
                <FilterSection
                    onFilterApplied={(filterData) => {
                        // Pass the filter data to the parent component
                        props.onFilterApplied(filterData);

                        // Deactivate the filter form
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
