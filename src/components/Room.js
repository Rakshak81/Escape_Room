import "./room.css";
import { useState } from "react";
import { Door } from "./Door";
import { FirstKey } from "./FirstKey";
import { KeyPopupBox } from "./KeyPopupBox";
import { Monitor } from "./Monitor";
import { Safe } from "./Safe";
import { ClueOne } from "./clueOne";
import { Book } from "./book";

export const Room = () => {
  const [inventory, setInventory] = useState({ key: false, clueOne: false });
  const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };

  const pickUpClueOne = () => {
    setInventory({ ...inventory, clueOne: true });
  };

  console.log(inventory);

  return (
    <article>
      <Door></Door>
      <Monitor></Monitor>
      <Safe></Safe>
      {inventory.key === false && <FirstKey pickUpKey={pickUpKey} />}
      <img className="room" src="stock-escape-room-interior.png" alt="" />
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
      <ClueOne pickUpClueOne={pickUpClueOne} />
      <Book />
    </article>
  );
};
