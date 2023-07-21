import React from "react";
import PropTypes from "prop-types";
function ImagesList({ pages, prefix }) {
  const number = 1;
  return (
    <div>
      {pages === 0 ? <div className="text-5xl text-center m-auto flex w-screen h-screen justify-center items-center">Coming Soon</div>: <div className="max-w-3xl mx-auto rounded shadow p-4">
        {[...Array(pages)].map((x, index) => {
          const number = toPaddedNumber(index + 1);
          const src = `/menus/${prefix}_${number}.png`;
          console.log(src);
          return (
            <div key={index} className="mt-4">
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>}
    </div>
  );
}
ImagesList.prototypes = {
  pages: PropTypes.number,
};
function toPaddedNumber(number) {
  return number < 10 ? "0" + number : number.toString();
}

export default ImagesList;
