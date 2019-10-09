// @flow
import React from 'react'

type Props = {
  title: string
}

export const todoItem = ({title}: Props) => (
  <div className="todoItem">
    <span className="todoItem__title">{title}</span>
  </div>
)
