import "./Switch.scss";

interface SwitchProps {
  chkId: string;
}

const Switch: React.FC<SwitchProps> = ({ chkId }) => {
  return (
    <div className="switch_wrap">
      <input type="checkbox" id={chkId} />
      <label htmlFor={chkId}></label>
    </div>
  );
};

export default Switch;
