import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useHttp from '../../hooks/use-http'
import { getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentsList from '../comments/CommentsList'

import classes from './Comments.module.css'
import NewCommentForm from './NewCommentForm'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams()
  const { quoteId } = params

  const { status, sendRequest, data: loadedComments } = useHttp(getAllComments)
  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }
  const addedcommentHandler = () => {}

  let comments

  if (status === 'pending') {
    comments(
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }
  if (status === 'completed' && loadedComments) {
    comments = <CommentsList comments={loadedComments} />
  }
  if (status === 'completed' && (!loadedComments || loadedComments === 0)) {
    comments = <p className='centered'>No comments added</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddcomment={addedcommentHandler}
        />
      )}
      <p>{comments}</p>
    </section>
  )
}

export default Comments
