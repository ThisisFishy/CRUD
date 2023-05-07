import { useState } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

import { SectionHeader } from "../../components"
import { ActiveSubsection } from "./components/ActiveSubsection";
import { InactiveSubsection } from "./components/InactiveSubsection";

interface AddSectionProps {
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

export const AddSection = (props: AddSectionProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <SectionHeader title="Add Section" />

            {isActive ?
                <ActiveSubsection
                    OnDoneClicked={(formDataObject) => {
                        // console.table(formDataObject);

                        props.setRows((oldRows) => {
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