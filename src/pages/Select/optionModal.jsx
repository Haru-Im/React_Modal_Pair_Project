import { OptionBox1, OptionSelect } from "./optionStyle";
import ReactDOM from "react-dom";

const Optionmodal = ({ selectList, optionSelect, open, style }) => {

    if (open) {
      return ReactDOM.createPortal(
        <OptionBox1 top={style.top} left= {style.left}>
          {selectList.map((item, idx) => (
            <OptionSelect
              onClick={() => optionSelect(item)}
              key={idx}
              value={item.value}
            >
              {item.text}
            </OptionSelect>
          ))}
        </OptionBox1>,
        document.getElementById("portal")
      );
    }
    return null;
  };
  
  export default Optionmodal;