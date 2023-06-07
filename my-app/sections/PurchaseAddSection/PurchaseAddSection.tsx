import { useState } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

import { SectionHeader } from "my-app/components"
import { ActiveSubsection } from "./components/ActiveSubsection";
import { InactiveSubsection } from "./components/InactiveSubsection";

interface AddSectionProps {
    purchaseSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const PurchaseAddSection = (props: AddSectionProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="mt-3">
            <SectionHeader title="Purchase Section" />
            {isActive ?
                <ActiveSubsection
                    OnDoneClicked={(formDataObject) => {
                        // console.table(formDataObject);

                        props.purchaseSetRows((oldRows) => {
                            const newId = randomId();
                            return [...oldRows, { ...formDataObject, id: newId }]
                        })

                        setIsActive(false);
                    }}
                    OnCancelClicked={() => setIsActive(false)}
                /> :

                <InactiveSubsection
                    OnAddClicked={() => setIsActive(true)}
                />
            }
        </section>
    )
}