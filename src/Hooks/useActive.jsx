import { useState } from "react";

const useActive = () => {
    const [active, setActive] = useState(0);

    const onActive = (index) => {
      setActive(index);
    };

    return {active, setActive, onActive };
}
 
export default useActive;