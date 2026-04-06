import React from 'react'

let cars = ["BMW", "AUDI", "MERCEDES", "TOYOTA", "HONDA"]

export const MapDemo1 = () => {
  return (
    <div>
      <h1>MAP DEMO 1</h1>
      {
        cars.map((c)=>{
           return <h2>{c}</h2>
        })
      }
      </div>
  )
}
