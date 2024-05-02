import React from "react";

function MoreButton(props: { handleClick: () => void }) {
  return (
    <button
      className="block bg-white sm:p-4 p-2.5 text-center truncate rounded-xl sm:max-w-52 max-w-40 w-full text-dark font-helvetica text-lg sm:text-xl"
      onClick={props.handleClick}
    >
      Batafsil
    </button>
  );
}

export default MoreButton;
