import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import {Chats} from "./components/Chats"
import {Login} from "./components/Login"
import { Home } from './components/Home';
import { Register } from './components/registration';
import { Profile } from './components/Profile';
import {ChatDetails} from './components/ChatDetails'
import {NewChatForm} from './components/NewChat'
const queryClient = new QueryClient();


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <div className="bg-zinc-800 flex-col mx-auto max-w-3xl">
        <header>
        </header>
        <main className="px-4">
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/login/:profileID" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Groups" element={<Groups />} />

        </Routes>
        </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App