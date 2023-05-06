import { SmallButton } from "../../components"

interface ActiveSubsectionProps {
    OnCancelClicked: () => void
}

export const ActiveSubsection = (props: ActiveSubsectionProps) => {
    return (
        <div className="flex gap-2">
            <SmallButton text="Done" />
            <SmallButton text="Cancel" onClick={props.OnCancelClicked} />
        </div>
    )
}