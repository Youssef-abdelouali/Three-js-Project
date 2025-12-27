import React from "react";
import useMacbookStore from "../store";
import clsx from "clsx";

const Productviewer = () => {
    const { color , scale, setColor, setScale}= useMacbookStore((state) => ({ color: state.color, scale: state.scale, setColor: state.setColor, setScale: state.setScale, reset: state.reset }));

  return ( 
    <section
      className="text-white bg-black w-[90%] mx-auto"
      id="product-viewer"
    >
      <h2 className="text-5xl">Take a closer look.</h2>

      <div className="controls">
        <p>MacBook Pro 16” in Space Black</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div onClick={() => setColor("#adb5BD")} 
                 className={clsx("bg-neutral-300", color === "#adb5BD" && 'active')} />
            <div onClick={() => setColor("#2E2C2E")} 
                 className={clsx("bg-neutral-900", color === "#2E2C2E" && 'active')} />
          </div>
          <div className="size-control"> 
            <div>
              <p>16"</p>
            </div>
            <div>
              <p>14"</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-4xl">Render canvas</p>
    </section>
  );
};

export default Productviewer;
