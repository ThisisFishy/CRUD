import { useState } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

import { SectionHeader } from "../../components"
import { ActiveSubsection } from "./components/ActiveSubsection";
import { InactiveSubsection } from "./components/InactiveSubsection";

interface AddSectionProps {
    salesSetRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const AddSection = (props: AddSectionProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <SectionHeader title="Add Section lalala" />

            {isActive ?
                <ActiveSubsection
                    OnDoneClicked={(formDataObject) => {
                        // console.table(formDataObject);

                        props.salesSetRows((oldRows) => {
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