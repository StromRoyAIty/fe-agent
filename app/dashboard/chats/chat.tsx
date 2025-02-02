"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Chat = (obj) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    try {
      const response = await fetch(
        `http://10.10.151.146:3002/${obj.name}/message`,
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

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => sendMessage()}>Send</Button>
    </div>
  );
};
