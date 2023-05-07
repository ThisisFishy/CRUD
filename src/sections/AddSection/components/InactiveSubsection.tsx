import { Button } from "@mui/material"

interface InactiveSubsectionProps {
    OnAddClicked: () => void
}

export const InactiveSubsection = (props: InactiveSubsectionProps) => {
    return (
        <Button variant="contained" onClick={props.OnAddClicked}>Add</Button>
    )
}