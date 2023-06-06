import { GridRowsProp } from "@mui/x-data-grid"
// import { Button } from "@mui/material"
import { randomId } from "@mui/x-data-grid-generator";
import SectionHeader from "../../components/SectionHeader"

import { useState } from "react";
import ActiveSubsection from "./components/ActiveSubsection";
import InactiveSubsection from "./components/InactiveSubsection";

interface SearchSectionProps {
    rows: GridRowsProp,
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
}

const SearchSection = (props: SearchSectionProps) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <section>
            <SectionHeader title="Search" />

            <div className="flex flex-col gap-2">
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

            </div>

            
        </section>
    )
}

export default SearchSection;