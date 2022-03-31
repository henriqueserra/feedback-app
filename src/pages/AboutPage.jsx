import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/shared/Card'

const AboutPage = (props) => {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
      </div>
    </Card>
  )
}

AboutPage.propTypes = {}

export default AboutPage
