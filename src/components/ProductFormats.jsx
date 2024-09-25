"use client";

import Image from "next/image"; // Adjust the import if necessary

const ProductFormats = ({ formats }) => {
  const formatImageMap = {
    "33b": "/image/formats/33cl-pet-126x300.png",
    "33g": "/image/formats/33cl-verre-126x300.png",
    "150b": "/image/formats/15l-pet-126x300.png",
  };

  return (
    <div>
      <h3 className="mb-12 text-4xl">Formats:</h3>
      <div className="flex gap-10">
        {formats.map((format) => {
          const imageSrc = formatImageMap[format];
          const formatLabel = format === "150b" ? "1.5 l" : "33 cl"; // Customize this as needed

          return imageSrc ? (
            <div key={format}>
              <Image
                src={imageSrc}
                alt={`Image for format ${format}`}
                width={126}
                height={300}
                className="w-[84px] h-[200px]"
              />
              <p className="pt-2 text-center">{formatLabel}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProductFormats;
