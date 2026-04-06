import React from 'react'

var cities = [
    {id:1, name: "Ahmedabad", pop: 80000000, aqi: 200},
    {id:2, name: "Surat", pop: 50000000, aqi: 190},
    {id:3, name: "Vadodara", pop: 30000000, aqi: 160},
]

export const MapDemo4 = () => {
  return (
    <div style={{textAlign: "center"}}>
        <h1>MAP DEMO 4</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th> 
                    <th>Name</th>
                    <th>Population</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {cities.map((city) => {
                    return (
                        <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <td>{city.aqi}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>

  )
}
