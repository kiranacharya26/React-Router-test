import React, { Fragment, useEffect } from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

const QuoteDetail = () => {
  const params = useParams()
  const { quoteID } = params

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  )
  useEffect(() => {
    sendRequest(quoteID)
  }, [sendRequest, quoteID])
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }
  if (error) {
    ;<p className='centered'>{error}</p>
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${params.id}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.id}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
