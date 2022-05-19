import React from 'react'

function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'test'}</strong>
      <p>{props.repository.description}</p>
      <a>{props.repository?.link}</a>
    </li>
  )
}

export { RepositoryItem }
