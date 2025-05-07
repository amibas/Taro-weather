import './index.scss'

export const CityInfo = () => {
  return (
    <div className='city-info-card'>
      <section className='left'>
        <div className='location'>锦华路四段</div>
        <div className='weather'>小雨</div>
      </section>
      <section className='right'>
        <div className='current-temperature'>20°</div>
        <div className='temperature'>25°/17°</div>
      </section>
    </div>
  )
}
