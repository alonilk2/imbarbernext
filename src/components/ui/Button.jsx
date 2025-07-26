/**
 * Reusable Button component with different variants
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  style = {},
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'appoint',
    secondary: 'contact-btn',
    details: 'details-btn',
    detailsDark: 'details-btn-dark',
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;