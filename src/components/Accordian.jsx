import {data} from "../constants/fakeData";
import useAccordian from "../hooks/useAccordian";
import "../App.css";
const Accordian = () => {
  const {handleAccordian, openAccordian} = useAccordian();
  return (
    <>
      {data.map((qna, index) => (
        <div key={qna.id || index} onClick={() => handleAccordian(qna.id, index+1)}>
          <h3 className="flex flex-vertical-center hover">{qna.title} &nbsp; +</h3>
          {openAccordian.id === qna.id ? <p className="flex flex-vertical-center">{qna.answer}</p> : ''}
        </div>
      ))}
    </>
  );
};

export default Accordian;
