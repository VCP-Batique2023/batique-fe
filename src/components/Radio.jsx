export default function Radio({ name, label, checked }) {
    return (
        <label>
            <input
                type="radio"
                id={label.toLowerCase()}
                name={name}
                value={label.toLowerCase()}
            />
            {label}
        </label>
    )
}