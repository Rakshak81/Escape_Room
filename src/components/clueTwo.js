import React, { useState } from "react";
import { ClueTwoPopup } from "./clueTwoPopup";
import "./clueTwo.css";
import Typography from "@mui/material/Typography";

export const ClueTwo = (props) => {
  const [clueTwoPopup, setClueTwoPopup] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [clueOnWall, setClueOnWall] = useState(false);
  
  const handlePopup = () => {
    props.pickUpClueTwo();
    setClueTwoPopup(!clueTwoPopup);
  };
  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  const checkInputs = () => {
    if (input === "new") {
      setAnswer("O");
      setClueTwoPopup(!clueTwoPopup);
      setClueOnWall(true);
      props.handleBlankTwo();
    } else {
      setClueTwoPopup(!clueTwoPopup);
    }
  };

  return (
    <>
      {clueOnWall && <h1 className="clueTwoLetter">{answer}</h1>}
      <img
        onClick={handlePopup}
        role="button"
        className="clueTwo"
        src="clue-2.png"
        alt=""
      />
      {clueTwoPopup && (
        <ClueTwoPopup
          toggleClueTwoPopup={checkInputs}
          inventory={props.inventory}
          input={input}
          content={
            <div>
              <Typography sx={{ p: 2 }}>
                It's not hard it's 
                <input
                  className="word"
                  value={input}
                  onChange={handleChange}
                ></input>
              </Typography>
            </div>
          }
        />
      )}
    </>
  );
};
