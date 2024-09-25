import React from "react";

const Nutritionel = ({ nutritionel }) => {
  return (
    <div>
      {" "}
      <div>
        <h3 className="mb-12 text-4xl">
          Informations Nutritionnelles{" "}
          <span className="text-3xl">(pour 100ml)</span>
        </h3>
        <div className="flex gap-10">
          {/* Mapping over the nutritionel object */}
          {Object.entries(nutritionel).map(([key, value], i) => (
            <div
              key={i}
              className="relative flex flex-col items-center h-56 gap-3 py-2 text-xl text-center capitalize transition-colors duration-500 rounded-lg w-36 bg-mainColor text-secondColor"
            >
              <div>
                <h4 className="h-16">{key}</h4>
                <div className="relative">
                  <p className="absolute -translate-x-1/2 bottom-6 left-1/2 text-mainColor">
                    {value} {key === "energie" ? "Kcal" : "g"}
                  </p>
                  <svg
                    className="fill-secondColor"
                    version="1.1"
                    width="140px"
                    height="140px"
                    viewBox="0 0 264.564 264.564"
                  >
                    <g>
                      <path
                        d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773
        c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutritionel;
