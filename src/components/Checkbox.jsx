export default function Checkbox({ label, value, setValue, style, required = false }) {
  return (
    <label
      style={{
        display: 'flex',
        gap: 6,
        accentColor: '#372b22',
        lineHeight: '75%',
        ... style
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={setValue}
        id={label.toLowerCase()}
        required={required}
      />
      {label}
    </label>
  );
}
