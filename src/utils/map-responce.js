
export default (item, dateType) => {
  const isWeek = typeof item.temp === 'object';
  const date = new Date(item.dt * 1000)

  const formatDate = getDate(item.dt, dateType);

  const temperature = isWeek ? item.temp.day : item.temp;

  return {
    ...item,
    date: formatDate,
    icon: item.weather[0].icon,
    temperature: temperature.toFixed(0),
    description: item.weather[0].description,
    sunrise: item.sunrise ? getDate(item.sunrise, 'hs') : null,
    sunset: item.sunrise ? getDate(item.sunset, 'hs') : null,
    pressure: item.pressure ? (item.pressure / 1000).toFixed(1) : null
  }
}


const getDate = (dt, type) => {
  const date = new Date(dt * 1000);

  switch (type) {
    case 'd':
      return getNameOfWeekday(date.getDay())

    case 'h':
      return `${date.getHours()}:00`

    case 'dh':
      return `${getNameOfWeekday(date.getDay())} ${date.getHours()}:${date.getMinutes()}`

    case 'hs':
      let minutes = `${date.getMinutes()}`;
      if (minutes.length < 2) minutes = `${minutes}0`
      return `${date.getHours()}:${minutes}`

    default:
      return dt
  }
}


const getNameOfWeekday = (day) => {
  switch (day) {
    case 0:
      return 'Sun'
    case 1:
      return 'Mon'
    case 2:
      return 'Tue'
    case 3:
      return 'Wed'
    case 4:
      return 'Thu'
    case 5:
      return 'Fri'
    case 6:
      return 'Sat'
  }
}


