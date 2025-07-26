/**
 * Reusable text section component for content blocks
 */
const TextSection = ({ 
  title, 
  subtitle, 
  content, 
  children,
  className = "",
  titleClassName = "title-first",
  subtitleClassName = "title-second",
  contentClassName = "second-p",
  ...props 
}) => {
  return (
    <div className={`text ${className}`} {...props}>
      {title && (
        <div className={titleClassName}>
          {title}
          {subtitle && (
            <>
              <br />
              <span className={subtitleClassName}>{subtitle}</span>
            </>
          )}
        </div>
      )}
      
      {content && (
        <div className={contentClassName}>
          <p>{content}</p>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default TextSection;