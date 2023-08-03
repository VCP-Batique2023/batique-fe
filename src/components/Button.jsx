export default function Button({children, onClick, size, fullwidth, variant}) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}