import { useEffect, useState } from 'react'

interface ITheater {
  name: string
}

interface IGeo {
  type: {
    type: string
    enum: ['Point']
    required: true
  }
  coordinates: {
    type: [number, number]
    required: true
  }
}

interface IAddress {
  street1: string
  city: string
  state: string
  zipcode: string
}

interface ILocation {
  address: IAddress
  geo: IGeo
}
interface ITheater {
  theaterId: number
  location: ILocation
}

export default function Theaters(): JSX.Element {
  //   const URL: string = String('http://localhost:8080/theaters/list')
  const [theaters, setTheaters] = useState<ITheater[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/theaters/list')
      .then((res) => res.json())
      .then((data) => setTheaters(data))
    // fetchData()
  }, [])

  //   async function fetchData():Promise<void> {
  //     const FETCHED_DATA = await fetch(URL)
  //     const FETCHED_JSON = await FETCHED_DATA.json()
  //     console.log(FETCHED_JSON)
  //     setTheaters(FETCHED_JSON)
  //   }

  return (
    <div>
      <h1>Theaters ID</h1>
      {theaters.map((d, index) => (
        <div key={index}>
          <h2>{d.theaterId}</h2>
        </div>
      ))}
    </div>
  )
}
