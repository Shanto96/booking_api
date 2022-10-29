import React from "react";
import { MdCancel } from "react-icons/md";
function Reserve({ setShowModel, id }) {
  return (
    <div>
      Reserve {id} <MdCancel onClick={() => setShowModel(false)} />
    </div>
  );
}

export default Reserve;
