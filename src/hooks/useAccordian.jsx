import {useState} from "react";

const useAccordian = () => {
  const [isOpenAccordian, setIsOpenAccordian] = useState({
    id: 0,
  });
  const handleAccordian = (id, index) => {
    if (id === index) {
      return setIsOpenAccordian({
        id: id,
      });
    }
   return;
  };

  return {
    openAccordian: isOpenAccordian,
    handleAccordian,
  };
};

export default useAccordian;
