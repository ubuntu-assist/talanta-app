interface PillProps {
  image: string
  text: string
  onClick: () => void
}

const Pill: React.FC<PillProps> = ({ image, text, onClick }) => {
  return (
    <span className='user-pill' onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  )
}

export default Pill
