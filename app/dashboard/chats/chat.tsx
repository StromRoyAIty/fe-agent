"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";


export const Chat = (obj) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://10.10.151.146:3001/${obj.name}/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: input,
            userId: "user",
            userName: "User",
          }),
        },
      );

      const message = await response.json();
      setMessages([...messages, message]);
      setInput("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };
  console.log(messages);

  return (
    <div>
      <div className="flex items-center gap-4 mt-4">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={() => sendMessage()} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Send
        </Button>
      </div>
      <div>
        {messages.length > 0 &&
          messages.map((message) => {
            return message.map((msg) => {
              return <div key={msg.text}>{msg.text}</div>;
            });
          })}
      </div>
    </div>
  );
};
