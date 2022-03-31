import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  // Validações
  const handleTextChange = (e) => {
    if (text === '' || text.trim().length === 0) {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length > 0 && text.trim().length <= 9) {
      setMessage('Text must be at least 10 characters long')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      newFeedback.id = uuidv4()
      handleAdd(newFeedback)
      setText('')
      setRating(0)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        {/* @todo - rating select component */}
        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        {/*  */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
