// @flow
import React from 'react'

type Props = {
  title: string,
  handleDeleteTask: () => void
}

export const TodoItem = ({handleDeleteTask, title}: Props) => (
    <article className="todo-item">
        <span className="todo-item__title">{title}</span>
        <button
            type="button"
            className="todo-add-item__submit"
            onClick={handleDeleteTask}
        >
          Supprimer
        </button>
    </article>
)
