import {ChangeEvent} from "react";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder: string;
  name: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = (props) => {
  return (
    <div className="pb-3">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default Input;
