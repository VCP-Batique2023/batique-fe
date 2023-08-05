export default function Button({ children, onClick, size, fullwidth, variant }) {
    console.log(onClick)
    return (
        <button onClick={onClick}>{children}</button>
    )
}