import { SmallButton } from "../../components"

interface InactiveSubsectionProps {
    OnAddClicked: () => void
}

export const InactiveSubsection = (props: InactiveSubsectionProps) => {
    return (
        <SmallButton text="Add" onClick={props.OnAddClicked} />
    )
}