import React from 'react'
import Image from 'next/image'
const Review = ({item}) => {
  return (
    <>
        <div
                  className="min-w-[400px] py-3 px-3 bg-gray-100 rounded-2xl border border-gray-50"
                >
                  <div className="flex gap-5 items-start">
                    <Image src={item.img} height={40} width={40} alt="image" />
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xl font-medium text-gray-800">
                        {item.username}
                      </span>
                      <div className="max-w-80 text-lg font-medium text-gray-700 break-words whitespace-normal">
                        {item.body}
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Review