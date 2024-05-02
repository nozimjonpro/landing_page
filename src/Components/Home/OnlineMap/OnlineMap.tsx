import Button from "@/Components/Customs/Button/Button";
import React from "react";

function OnlineMap() {
  return (
    <section className="mb-24">
      <div className="layout_container bg-silver rounded-60 relative overflow-y-hidden">
        <div className="flex items-center">
          <div className="max-w-xl pl-16 py-20">
            <h3 className="common__heading mb-2" style={{ textAlign: "start" }}>
              Online xarita yordamida o&apos;zingizga kerakli servisni toping
            </h3>
            <p
              className="common_text text-start mb-auto"
              style={{ maxWidth: "534px", width: "100%" }}
            >
              Yoningizda bor restoran va klinikalarni bir joyda ko&apos;ring. Endi
              eslab o&apos;tirishga xojat yo&apos;q
            </p>
            <div className="mt-7 w-full">
              <Button />
            </div>
          </div>
          <div className="relative bg-brand">
            {/* <img
              className=""
              src="https://via.placeholder.com/296x610"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineMap;
