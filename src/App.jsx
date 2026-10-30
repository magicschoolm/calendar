import { useState } from 'react'
import arrowLeftCircle from './assets/arrow-left-circle.svg'
import arrowRightCircle from './assets/arrow-right-circle.svg'


import './App.css'

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = () => {
    const daysArray = []

  const firstDay = new Date(
    selectedDate.getFullYear(), 
    selectedDate.getMonth(), 1)

  const lastDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1, 
    0)


  for (let i = 0; i< firstDay.getDay(); i++) {
    daysArray.push(null)
  }
  for (let i = 1; i< lastDay.getDate(); i++) {
    daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))
  }
  return daysArray
  }
  

  const handlChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
  }
  const handlChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10)
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1))
  }


  return (
    <>
    <div className='calendar'>
    <div className="header">
      <button onClick={() => {setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() -1, 1) )}}>
        <img src={arrowLeftCircle} />
      </button>
      <select value={selectedDate.getMonth()} onChange={handlChangeMonth}>
        {month.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))
        }
      </select>
      <select value={selectedDate.getFullYear()} onChange={handlChangeYear}> 
        {Array.from({ length:10}, (_, i) => selectedDate.getFullYear() -5 + i).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <button onClick={() => {setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() +1, 1) )}}>
        <img src={arrowRightCircle} />
      </button>
    </div>
    <div className="daysOfWeek">
  {daysOfWeek.map((day) => (
    <div key={day}>{day}</div>
  ))}
</div>

<div className="days">
  {daysInMonth().map((date, index) => (
    <div key={index} className={date ? "day" : "empty"}>
      {date ? date.getDate() : ""}
    </div>
  ))}
</div>
    </div>
    </>
  )
}

export default App
