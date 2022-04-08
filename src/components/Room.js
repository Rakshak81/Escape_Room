import "./room.css";
import { useState } from "react";
import { Door } from "./Door";
import { FirstKey } from "./FirstKey";
import { KeyPopupBox } from "./KeyPopupBox";

export const Room = () => {
  const [inventory, setInventory] = useState({ key: false, book: false });
  const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };

  console.log(inventory);

  return (
    <article>
      <Door></Door>
      <img className="room" src="Plain-White-Walls.jpg" alt="" />
      <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
    </article>
  );
};
