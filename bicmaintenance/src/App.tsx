import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';

interface ApiResponse {
  message: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate a backend response
    const mockBackendResponse: ApiResponse = { message: 'Hello from the backend (mocked)!' };

    // Simulate a delay (like a real API call)
    setTimeout(() => {
      setMessage(mockBackendResponse.message);
      setIsLoading(false);
    }, 1000); // 1-second delay
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <h1>React + Vite + Express</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
};

export default App;