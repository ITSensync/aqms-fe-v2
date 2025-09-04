import React from 'react'
import GaugeDiagram from './GaugeDiagram'
import { AirQuality } from '../types/Datatypes'

export default function CenterParameterSuperMini({
  sensorData,
}: {
  sensorData: AirQuality
}) {
  return (
    <div className="flex flex-col mt-42">
      <div className="flex flex-col gap-16">
        <GaugeDiagram name="PM25" unit="μg/m3" value={sensorData.pm25}/>
      </div>
    </div>
  )
}
