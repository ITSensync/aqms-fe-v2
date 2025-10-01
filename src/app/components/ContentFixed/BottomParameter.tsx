import React from 'react'
import WeatherTextValue from './WeatherTextValue'
import { FaCompass } from 'react-icons/fa'
import { GiSpeedometer, GiWindsock } from 'react-icons/gi'
import { FaTemperatureHalf } from 'react-icons/fa6'
import { RiWaterPercentFill } from 'react-icons/ri'
import { IoRainyOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'
import { TbUvIndex } from 'react-icons/tb'

export default function BottomParameter() {
  return (
    <div className='text-cyan-500 grid grid-cols-8 h-[calc(100vh-600px)] p-3 gap-4'>
      <WeatherTextValue icon={<FaCompass size={50}/>} param='Arah Angin' value='150' unit='°'/>
      <WeatherTextValue icon={<GiWindsock size={50}/>} param='Kec. Angin' value='150' unit='mph'/>
      <WeatherTextValue icon={<FaTemperatureHalf size={50}/>} param='Suhu' value='150' unit='°C'/>
      <WeatherTextValue icon={<RiWaterPercentFill size={50}/>} param='Kelembapan' value='150' unit='%'/>
      <WeatherTextValue icon={<IoRainyOutline size={50}/>} param='Curah Hujan' value='150' unit='mm/jam'/>
      <WeatherTextValue icon={<GiSpeedometer size={50}/>} param='Tekanan' value='150' unit='mBar'/>
      <WeatherTextValue icon={<MdOutlineWbSunny size={50}/>} param='Radiasi' value='150' unit='w/m2'/>
      <WeatherTextValue icon={<TbUvIndex size={50}/>} param='UV' value='150'/>
    </div>
  )
}
