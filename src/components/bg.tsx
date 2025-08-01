import React from "react";

const Bg = () => {
  return (

      <div className="min-h-screen w-full bg-[#591420] relative overflow-hidden">
        {/* Rich Maroon Glow & Depth */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle 600px at 50% 50%, rgba(89,20,32,0.45), transparent 70%),
              radial-gradient(circle 800px at 30% 70%, rgba(60,10,20,0.3), transparent 80%),
              radial-gradient(circle 500px at 70% 20%, rgba(100,30,40,0.25), transparent 70%),
              radial-gradient(circle 900px at 50% 100%, rgba(50,5,15,0.35), transparent 85%),
              radial-gradient(circle 400px at 10% 30%, rgba(120,40,60,0.2), transparent 80%)
            `,
            backgroundBlendMode: 'screen',
          }}
        />
        {/* Your Content/Components */}
      </div>
  
  );
};

export default Bg;
