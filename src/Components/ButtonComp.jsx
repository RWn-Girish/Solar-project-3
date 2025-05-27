const Button = ({
  label,
  textColor = 'white',
  bgColor = 'blue',
  borderColor,
  padding = '8px 24px',
  borderRadius = '6px',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        border: borderColor ? `2px solid ${borderColor}` : 'none',
        padding: padding,
        borderRadius: borderRadius,
        cursor: 'pointer',
        fontWeight: '500',
      }}
    >
      {label}
    </button>
  );
};

export default Button;

