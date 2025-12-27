import React, { useRef, useEffect } from "react";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section className="text-center text-white py-30 flex flex-col items-center gap-10 bg-black">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl">MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro Title" className="w-200" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        className="w-full max-w-5xl rounded-lg shadow-lg"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:cursor-pointer">
        Buy Now
      </button>
      <p className="text-lg max-w-2xl">From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  );
};

export default Hero;
