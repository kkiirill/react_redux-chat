import React, { memo, useEffect } from "react";
import { db } from "../../../api/api";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setMessages } from "../../../store/slices/messagesSlice";
import { Message } from "../Message/Message";

export const Messages: React.FC = memo(() => {
  const messages = useAppSelector((state) => state.messages.list);
  return (
    <div>
      {messages?.map((message: any, index: any) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
});
