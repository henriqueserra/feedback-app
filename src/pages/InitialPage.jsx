import { useState } from 'react'
import FeedbackList from '../components/FeedbackList'
import FeedbackData from '../data/feedbackData'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import AboutIconLink from '../components/AboutIconLink'

function InitialPage() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Confirma que quer remover o item')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <div>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <AboutIconLink />
    </div>
  )
}

export default InitialPage
