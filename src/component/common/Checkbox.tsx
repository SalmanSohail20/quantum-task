import "./Checkbox.scss";

interface CheckboxProps {
  id: string;
  value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, value = "value1" }) => {
  return (
    <div>
      <input
        className="checkbox_input"
        id={id}
        type="checkbox"
        value={value}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default Checkbox;
