import '@/assets/style/auth.css';
import Radio from './Radio';

export default function RadioField({
  className,
  label,
  options,
  value,
  setValue,
}) {
  return (
    <label className={`radio-field ${className || ''}`}>
      {label}
      <div className="radio-group">
        {options.map((gender, index) => (
          <Radio
            key={index}
            name="gender"
            label={gender}
            value={value}
            setValue={setValue}
            required={index === 0 ? true : false}
          />
        ))}
      </div>
    </label>
  );
}
