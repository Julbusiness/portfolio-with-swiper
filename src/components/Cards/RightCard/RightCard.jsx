import './RightCard.css'

export default function RightCard(props) {
  return (
    <div className='right-card'>
    <div className='right-card-text'>
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
    </div>
    <div className='right-card-image'>
      <img src={props.image} alt='' />
    </div>
  </div>
  )
}