import React from 'react'

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

const repository = {
  name: 'nomeRepositorio',
  description: 'repositoryDescription',
  link: 'aleale'
}

function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

export { RepositoryList }
