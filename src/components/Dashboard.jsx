import React from 'react';
import {Bitcoin} from 'lucide-react';
import GradientLineChart from './Chart';
import FloatingOverlay from './Dash';

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
                <div className="grid grid-cols-3 gap-3">
                {['Net Worth', 'Tokens Worth', 'NFTs Worth'].map((title) => (
                    <div key={title} className="bg-[#232323] ml-[-18px] rounded-lg mr-[25px] p-4 py-2">
                    <h3 className="text-white font-inter font-semibold mb-2">{title}</h3>
                    <div className="flex flex-col">
                        <span className="text-4xl font-inter font-bold mb-2">$7,414.91</span>
                        <div className="text-green-500 font-inter font-semibold text-sm">+3.99% ($284.26)</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            
            <div className="bg-transparent pt-8 p-4 ml-[-6px] rounded-lg mt-[-52px]">
                <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-[#1E1E1E] rounded-lg pt-6 pb-0 pl-8 pr-0">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Tokens Worth</h3>
                    <div className="flex space-x-1 pr-9">
                        <button className="bg-transparent px-2 py-1 rounded-md text-sm font-bold">
                        24H
                        </button>
                        <button className="bg-white px-3 h-[20px] mt-1 rounded-md text-black text-sm font-bold">
                        7D
                        </button>
                        {['30D', '6M'].map((period) => (
                        <button key={period} className="bg-transparent px-2 py-1 rounded-md text-sm font-bold">
                            {period}
                        </button>
                        ))}
                    </div>
                    </div>
                    <GradientLineChart />
                </div>
                <div className="bg-[#1E1E1E] rounded-lg p-4">
                    <h3 className="font-bold mb-4">NFTS</h3>
                    <div className="flex justify-between mb-4">
                    <div className="bg-[#373737] p-3 w-40 rounded-md">
                        <p className="text-gray-400">Collections</p>
                        <p className="text-xl font-bold">22</p>
                    </div>
                    <div className='bg-[#373737] p-3 w-28 rounded-md'>
                        <p className="text-gray-400">NFTS</p>
                        <p className="text-xl font-bold">34</p>
                    </div>
                    </div>
                    <button className="w-full mt-32 bg-[#DA0046] text-white font-bold rounded-md py-2">
                    OPEN NFTS
                    </button>
                </div>
                </div>
            </div>

            <div className="bg-transparent p-4 ml-[-6px] rounded-lg mt-[-20px]">
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
