"use client";

import { useState } from "react";
import { FiSend, FiMic } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

type Conversation = {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
};

type Message = {
  id: number;
  text: string;
  sender: "me" | "them";
};

export default function ChatPage() {
  const conversations: Conversation[] = [
    { id: 1, name: "Priya Sharma", lastMessage: "Hi there!" },
    { id: 2, name: "Alex Doe", lastMessage: "No messages yet" },
    { id: 3, name: "Deepak Singh", lastMessage: "No messages yet" },
    { id: 4, name: "Riya Mehta", lastMessage: "No messages yet" },
    { id: 5, name: "John Carter", lastMessage: "No messages yet" },
  ];

  const [selectedChat, setSelectedChat] = useState<Conversation>(conversations[0]);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi 👋", sender: "them" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">

      {/* LEFT SIDEBAR */}
      <div className="w-80 border-r bg-white overflow-y-auto">
        <h2 className="px-6 py-4 font-bold text-xl text-gray-900 border-b">
          Conversations
        </h2>

        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedChat(c)}
            className={`flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-gray-50 ${
              selectedChat.id === c.id ? "bg-emerald-50" : ""
            }`}
          >
            {/* Avatar */}
            {c.avatar ? (
              <img
                src={c.avatar}
                className="w-10 h-10 rounded-full object-cover"
                alt={c.name}
              />
            ) : (
              <FaUserCircle className="w-10 h-10 text-gray-400" />
            )}

            {/* User Info */}
            <div>
              <p className="font-medium text-gray-900">{c.name}</p>
              <p className="text-sm text-gray-500">{c.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>



      {/* CHAT WINDOW */}
      <div className="flex flex-col flex-1">

        {/* TOP HEADER */}
        <div className="flex items-center gap-3 px-6 py-4 border-b bg-white">
          {selectedChat.avatar ? (
            <img
              src={selectedChat.avatar}
              className="w-10 h-10 rounded-full object-cover"
              alt={selectedChat.name}
            />
          ) : (
            <FaUserCircle className="w-10 h-10 text-gray-400" />
          )}

          <p className="font-semibold text-gray-800 text-lg">
            {selectedChat.name}
          </p>
        </div>


        {/* MESSAGES */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`max-w-xs mb-3 px-4 py-2 rounded-2xl shadow-sm
                ${
                  m.sender === "me"
                    ? "ml-auto bg-emerald-600 text-white rounded-br-none"
                    : "mr-auto bg-white text-gray-800 rounded-bl-none"
                }`}
            >
              {m.text}
            </div>
          ))}
        </div>


        {/* INPUT BOX */}
        <div className="border-t bg-white px-6 py-3 flex items-center gap-3">

          <input
            className="flex-1 border rounded-xl px-4 py-3 outline-none text-gray-700 focus:ring-2 focus:ring-emerald-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          {/* Voice Icon */}
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <FiMic size={22} />
          </button>

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className="p-2 text-white bg-emerald-600 rounded-full hover:bg-emerald-700"
          >
            <FiSend size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}
