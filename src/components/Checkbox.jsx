export default function Checkbox({ label, name, checked }) {
    return (
        <label>
            <input type="checkbox" name={name} id={label.toLowerCase()} />
            {label}
        </label>
    )
}