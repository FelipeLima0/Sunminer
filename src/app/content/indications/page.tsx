'use client'

import { useIndications } from '@/hooks/useIndications'

export default function Indications() {
  const { indicationsDetails } = useIndications()

  return (
    <div className="flex w-full	border-2	text-center  text-white">
      <div className="flex flex-col">
        <div>
          <span>{indicationsDetails?.teamNumber}</span>
          <div className="m-auto grid grid-cols-3 gap-2">
            {indicationsDetails?.teamList.map((item, index) => (
              <div
                key={index}
                className="flex h-10 w-28 rounded bg-stone-800 text-xs"
              >
                <span className="m-auto">{item.username}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
