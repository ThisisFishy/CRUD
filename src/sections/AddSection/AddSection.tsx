import { useState } from "react";
import { SectionHeader } from "../../components"
import { ActiveSubsection } from "./ActiveSubsection";
import { InactiveSubsection } from "./InactiveSubsection";

export const AddSection = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <SectionHeader title="Add Section" />

            {isActive ?
                <ActiveSubsection
                    OnCancelClicked={() => setIsActive(false)}
                /> :

                <InactiveSubsection
                    OnAddClicked={() => setIsActive(true)}
                />
            }
        </section>
    )
}