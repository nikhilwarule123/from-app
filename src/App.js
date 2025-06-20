import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  //fetchmessages used to message desc order //setMessages(data) message state used
  const fetchMessages = async () => {
    const { data } = await supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: false });

    setMessages(data);
  };

  //addMessage Function->message insert 
  const addMessage = async () => {
    if (message.trim() === '') return;

    await supabase.from('messages').insert([{ content: message }]);
    setMessage('');//setMessage('') empty input field 
    fetchMessages();//fetchMessages() call new list purchase
  };

  //used to featch data database text message show
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
