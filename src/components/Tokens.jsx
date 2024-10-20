import React from 'react';
import {Bitcoin} from 'lucide-react';
import FloatingOverlay from './Tkn';

const Dashboard = () => {
    const tokens = [
        { name: 'WBTC', percentage: '60.20%', priceChange: '+$547(32.25%)', price: '$66,708.61', balance: '0.0456 BTC' },
        { name: 'ETH', percentage: '20.35%', priceChange: '+$257(40.99%)', price: '$2,708.61', balance: '0.456 ETH' },
        { name: 'USDC', percentage: '10.25%', priceChange: '+$0(0.02%)', price: '$1', balance: '524 USD' },
        { name: 'USDT', percentage: '9.20%', priceChange: '+$0(0.05%)', price: '$1', balance: '489 USD' },
    ];
  return (
    <div>
        <main className='bg-[#131313] p-2 rounded-3xl rounded-tl-none pt-6 mt-[60px]'>
            <div className="bg-[#1E1E1E] p-4 pl-10 ml-[10px] mr-[15px] pr-0 mb-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#232323] ml-[-25px] rounded-lg w-[460px] p-4 py-2">
                    <h3 className="text-white font-inter font-semibold mb-2">Net Worth</h3>
                      <div className="flex flex-col">
                          <span className="text-4xl font-inter font-bold mb-2">$7,414.91</span>
                          <div className="text-green-500 font-inter font-semibold text-sm">+3.99% ($296.26)</div>
                      </div>
                  </div>
                  <div className="bg-[#232323] ml-[-25px] rounded-lg w-[460px] p-4 py-2">
                    <h3 className="text-white font-inter font-semibold mb-2">Token Worth</h3>
                      <div className="flex flex-col">
                          <span className="text-4xl font-inter font-bold mb-2">$3,414.91</span>
                          <div className="text-green-500 font-inter font-semibold text-sm">+6.72% ($229.42)</div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="bg-transparent p-4 ml-[-6px] rounded-lg mt-[-38px]">
                <div className="bg-[#1E1E1E] rounded-lg p-4">
                {tokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between py-4 px-3 bg-[#232323] rounded-lg mb-2">
                    <div className="flex items-center">
                        <div className="w-8 h-8 mr-3 bg-gray-600 rounded-full flex items-center justify-center">
                        <Bitcoin size={20} />
                        </div>
                        <div>
                        <div className="font-semibold">{token.name}</div>
                        <div className="text-sm text-gray-400">Bitcoin</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div>{token.percentage}</div>
                        <div className="text-green-500 text-sm">{token.priceChange}</div>
                    </div>
                    <div className="text-right">
                        <div>{token.price}</div>
                        <div className="text-sm text-gray-400">{token.balance}</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </main>
        <FloatingOverlay /> 
      </div>
  );
};

export default Dashboard;
