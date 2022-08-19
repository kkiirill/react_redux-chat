import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store';
import { Message } from '../Message/Message';

export default function Messages() {
  const messages = useAppSelector((state) => state.messages.list);
  
  return (
    <div>
      {messages?.map((message: any, index: React.Key | null | undefined) => (
        <Message message={message} key={index}/>
      ))}
    </div>
  )
}
