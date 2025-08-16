'use client'
import { useEffect, useState, useRef } from 'react';
import Image from "next/image"; // Importando o componente Image do Next.js
import './prometheus.scss';

export default function Home() {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [message, setMessage] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Efeito para rolar para baixo quando novas mensagens chegarem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Conecta-se ao WebSocket ao carregar a página
    const socketConnection = new WebSocket('wss://prometheus-chat-server-production.up.railway.app');
    
    socketConnection.onopen = () => {
      console.log('Conexão WebSocket aberta!');
      // Mensagem de boas-vindas
      setMessages(prev => [...prev, {text: "Olá! Sou o Prometheus. Como posso te ajudar hoje?", isUser: false}]);
    };

    socketConnection.onmessage = (event) => {
      console.log('Mensagem recebida:', event.data);
      setMessages(prev => [...prev, {text: event.data, isUser: false}]);
    };

    socketConnection.onerror = (error) => {
      console.log('Erro:', error);
    };

    socketConnection.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    setSocket(socketConnection);

    // Cleanup ao desmontar o componente
    return () => {
      if (socketConnection) {
        socketConnection.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.send(message);
      setMessages(prev => [...prev, {text: message, isUser: true}]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="prometheus-chat">
      {/* Header */}
      <header className="chat-header">
        <div className="header-content">
          <div className="logo">
            {/* Substituindo o "P" por uma imagem de Prometheus */}
            <Image src="/negon.png" alt="Prometheus logo" width={50} height={50} style={{ borderRadius: '50%' }}  />
            <h1>_Prometheus</h1>
          </div>
          <p className="subtitle">Converse com Doidao das bolacha que ama calistenicos</p>
        </div>
      </header>

      {/* Chat Box */}
      <div className="chat-container">
        {/* Messages Area */}
        <div className="messages-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
              <div className="message-content">
                {msg.text}
              </div>
              <div className="message-time">
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="input-area">
          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="message-input"
            />
            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              className="send-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
