"use client";

import { useIndications } from "../../../hook/useIndications";

export default function Indications() {
  const { indicationsDetails } = useIndications();

  return (
    <div className="flex w-full	text-center	border-2  text-white">
      <div className="flex flex-col">
        <div>
          <span>{indicationsDetails?.teamNumber}</span>
          <div className="grid grid-cols-3 gap-2 m-auto">
            {indicationsDetails?.teamList.map((item, index) => (
              <div
                key={index}
                className="flex w-28 h-10 rounded text-xs bg-stone-800"
              >
                <span className="m-auto">{item.username}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
