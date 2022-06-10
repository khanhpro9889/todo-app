import React from 'react'
import { Btn } from './styles';

export default function Button({text, action}) {
  return (
    <Btn onClick={() => { action() }}>{text}</Btn>
  )
}
