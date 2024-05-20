function Button({ onClick, className, isImg, type, children, imgIcon }) {
  const classes = `font-semibold font-inter  ${className || ''}`;

  const ButtonImg = () => (
    <button
      onClick={onClick}
      className={classes}>
      {children}{' '}
      <img
        src={imgIcon}
        alt={imgIcon}
      />
    </button>
  );
  const Button = () => (
    <button
      onClick={onClick}
      className={classes}>
      {children}
    </button>
  );

  return isImg ? ButtonImg() : Button();
}

export default Button;
