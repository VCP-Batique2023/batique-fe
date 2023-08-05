import '@/assets/style/Button.css';

export default function Button({
  children,
  onClick,
  disabled,
  className,
  style,
  width = 'auto',
  variant = 'contained',
  size = 'medium',
  color = 'primary',
}) {
  const buttonColor = ['primary', 'secondary', 'success', 'warning', 'error'];
  const buttonVariant = ['contained', 'outlined', 'text'];
  const buttonSize = ['small', 'medium', 'large'];

  if (
    !buttonVariant.includes(variant) ||
    !buttonSize.includes(size) ||
    !buttonColor.includes(color)
  ) {
    variant = 'contained';
    size = 'medium';
  }

  return (
    <button
      style={{ width: width, ...style }}
      className={`btn btn-${variant}-${color} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
