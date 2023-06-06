interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <h2 className="text-xl text-slate-300 mb-3">{title}</h2>
    )
}

export default SectionHeader;