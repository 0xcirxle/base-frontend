import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from 'lucide-react';
import notification from './assets/notification.png';
import gas from './assets/gas.png';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import NFT from './components/NFTs';
import Tokens from './components/Tokens';
import Transactions from './components/Transactions';

const App = () => {
  return (
    <Router>
      <div className="flex bg-black text-white min-h-screen">
        <div className="fixed left-0 top-0 h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 ml-[25vw] mt-[8vh] p-8">
          <h1 className="text-[36px] font-inter ml-4 mt-[-8px] font-semibold" style={{ color: 'rgba(255, 255, 255, 0.70)' }}>Welcome Back, Anon</h1>
          <header className="flex mt-4 justify-end items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search an address..."
                  className="bg-[#131313] rounded-md border-[1px] border-solid border-[rgba(52,52,52,0.58)] py-2 px-4 pr-10"
                />
              </div>
              <div className="bg-[#131313] rounded-md border-[1px] border-solid border-[rgba(52,52,52,0.58)] p-2 flex">
              <img src={gas} alt="gas Icon" class="h-6 w-6 mr-1" />
                <span>
                  | 12
                </span>
              </div>
              <div className="bg-[#131313] rounded-md border-[1px] border-solid border-[rgba(52,52,52,0.58)] p-2 relative">
                <img src={notification} alt="Wallet Icon" class="h-6 w-6" />
              </div>
              <button className="bg-[#DA0046] text-white font-bold rounded-md w-32 px-4 py-2">
                Connect
              </button>
            </div>
          </header>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/nft" element={<NFT />} />
              <Route path="/tokens" element={<Tokens />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
