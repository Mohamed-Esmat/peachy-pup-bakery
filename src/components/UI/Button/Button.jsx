import styles from './Button.module.css';

const Button = ({ text, position }) => {
  const buttonStyle = {
    // margin: position === 'center' ? '0 auto' : '',
    // alignSelf: position=== 'center' ? 'center' : '',
    marginRight: position === 'left' ? 'auto' : '',
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
