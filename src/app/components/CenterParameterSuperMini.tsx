import React from 'react'
import GaugeDiagram from './GaugeDiagram'

export default function CenterParameterSuperMini() {
  return (
    <div className="flex flex-col mt-42">
      <div className="flex flex-col gap-16">
        <GaugeDiagram name="PM10" unit="μg/m3"/>
      </div>
    </div>
  )
}
