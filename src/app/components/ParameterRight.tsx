import React from 'react'

export default function ParameterRight() {
  return (
    <div className="flex flex-col justify-end items-end">
      {/* PM10 */}
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0 ">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold text-end">CO</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold text-end">NO2</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold text-end">HC</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold text-end">-</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold -mt-3">-</p>
      </div>
    </div>
  )
}
