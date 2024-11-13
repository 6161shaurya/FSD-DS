import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
  const students =[{name:"Abhishek",roll:87566,m1:89,m2:58,m3:89},
    {name:"Abhishek",roll:87566,m1:89,m2:99,m3:89},
    {name:"shaurya",roll:87566,m1:89,m2:58,m3:81},
    {name:"Abhifwef",roll:87566,m1:89,m2:58,m3:68},
    {name:"Abhdfdw",roll:87566,m1:89,m2:69,m3:89},
    {name:"Abhsfsfesf",roll:87566,m1:89,m2:62,m3:91},
    {name:"Abhsafefew",roll:87566,m1:89,m2:54,m3:22},
  ]
  return (
    <div>
      <Marks name={"Abhi"} roll={45566} m1={98} m2={58} m3={89} />
    </div>
  );
};

export default DisplayMarks;