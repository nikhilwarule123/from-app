import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: false });

    setMessages(data);
  };

  const addMessage = async () => {
    if (message.trim() === '') return;

    await supabase.from('messages').insert([{ content: message }]);
    setMessage('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>From App – Supabase + React</h2>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={addMessage}>Send</button>

      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
