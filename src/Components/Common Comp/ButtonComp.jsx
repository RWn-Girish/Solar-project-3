import { Button } from "react-bootstrap";
const CustomButton = ({ text, variant = "outline-light", className = "", style = {},  onClick }) => {
  return (
    <Button variant={variant} className={`rounded-pill px-4 py-3 ${className}`} style={style} onClick={onClick}>
      {text}
    </Button>
  );
};
export default CustomButton;

