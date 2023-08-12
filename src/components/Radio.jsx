export default function Radio({ name, label, value, setValue, required = false }) {
  return (
    <label
      style={{
        display: 'flex',
        gap: 6,
        accentColor: '#372b22',
        lineHeight: '75%',
      }}
    >
      <input
        type="radio"
        id={label.toLowerCase()}
        name={name}
        value={label.toLowerCase()}
        checked={label.toLowerCase() === value}
        required={required}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {label}
    </label>
  );
}
