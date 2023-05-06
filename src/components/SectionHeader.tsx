interface SectionHeaderProps {
    title: string
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <h2 className="text-xl text-white mb-3">{title}</h2>
    )
}