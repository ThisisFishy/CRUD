interface SmallButtonProps {
    text: string
    onClick?: () => void
}

export const SmallButton = (props: SmallButtonProps) => {
    return (
        <button
            className="bg-black hover:bg-gray-700 active:bg-gray-900 text-white px-8 py-1 rounded-lg"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}