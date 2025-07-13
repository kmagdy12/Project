import React, { useState } from 'react';
import { 
  Filter, 
  ChevronDown, 
  DollarSign, 
  BarChart3, 
  Users, 
  Clock,
  Newspaper,
  Calendar,
  MapPin,
  Building2,
  TrendingUp,
  TrendingDown,
  Briefcase
} from 'lucide-react';

interface TradingDashboardProps {
  onSectionChange: (section: string) => void;
}

const TradingDashboard: React.FC<TradingDashboardProps> = ({ onSectionChange }) => {
  const [durationFilter, setDurationFilter] = useState('monthly'); // Keep this state for filters
  const [dealFilter, setDealFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [geoFilter, setGeoFilter] = useState('all');

  const generalStats = [
    { label: 'Total Traded Volume', value: '$1.2B', icon: DollarSign, trend: 'up' }, // Keep this for filters
    { label: 'Total Number of Trades', value: '8,500', icon: Users, trend: 'up' },
    { label: 'Average Trade Volume', value: '$140K', icon: DollarSign, trend: 'up' },
    { label: 'Number of Active Deals', value: '320', icon: Briefcase, trend: 'up' }
  ];

  const recentUpdates = [
    {
      id: 1,
      title: 'New Regulatory Sandbox for Fintech in UAE',
      intro: 'The Central Bank of UAE announced a new regulatory sandbox to foster fintech innovation...',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Saudi Arabia\'s PIF Invests in Regional Tech Fund',
      intro: 'Saudi Arabia\'s Public Investment Fund (PIF) has committed significant capital to a new regional tech fund...',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'E-commerce Venture Secures Series B Funding',
      intro: 'A leading MENA e-commerce venture successfully closed its Series B round, signaling strong investor confidence...',
      date: '3 days ago'
    }
  ];

  const recentTrades = [
    {
      id: 1,
      date: '2024-12-10 14:30',
      type: 'Primary',
      ventureName: 'AgriTech Innovations',
      buyer: 'MENA Ventures',
      seller: '-',
      value: '$1.5M'
    },
    {
      id: 2,
      date: '2024-12-09 10:00',
      type: 'Secondary',
      ventureName: 'HealthFlow Solutions',
      buyer: 'Private Investor A',
      seller: 'Early Investor B',
      value: '$250K'
    },
    {
      id: 3,
      date: '2024-12-08 16:45',
      type: 'Primary',
      ventureName: 'EduSpark',
      buyer: 'EdTech Fund',
      seller: '-',
      value: '$800K'
    },
    {
      id: 4,
      date: '2024-12-07 11:15',
      type: 'Secondary',
      ventureName: 'LogiChain',
      buyer: 'Institutional Buyer C',
      seller: 'Founder D',
      value: '$500K'
    },
    {
      id: 5,
      date: '2024-12-06 09:00',
      type: 'Primary',
      ventureName: 'CleanEnergy MENA',
      buyer: 'Impact Fund X',
      seller: '-',
      value: '$2.0M'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Trading Market Dashboard</h1>
        <p className="text-gray-300">Real-time market activity and analysis of equity trading</p>
      </div>

      {/* Filter Panel */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-linkedin-light" />
          <h3 className="text-lg font-bold text-white">Market Filters</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Duration</label>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="daily" className="bg-slate-800">Daily Insights</option>
              <option value="weekly" className="bg-slate-800">Weekly Insights</option>
              <option value="monthly" className="bg-slate-800">Monthly Insights</option>
              <option value="quarterly" className="bg-slate-800">Quarterly Insights</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Deal Type</label>
            <select
              value={dealFilter}
              onChange={(e) => setDealFilter(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="all" className="bg-slate-800">All Deals</option>
              <option value="primary" className="bg-slate-800">Primary Market</option>
              <option value="secondary" className="bg-slate-800">Secondary Market</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Industry Focus</label>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="all" className="bg-slate-800">All Industries</option>
              <option value="fintech" className="bg-slate-800">Fintech</option>
              <option value="healthtech" className="bg-slate-800">HealthTech</option>
              <option value="ecommerce" className="bg-slate-800">E-commerce</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Geographic Focus</label>
            <select
              value={geoFilter}
              onChange={(e) => setGeoFilter(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="all" className="bg-slate-800">All Geographies</option>
              <option value="uae" className="bg-slate-800">UAE</option>
              <option value="saudi" className="bg-slate-800">Saudi Arabia</option>
              <option value="egypt" className="bg-slate-800">Egypt</option>
            </select>
          </div>
        </div>
      </div>

      {/* General Market Trading Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {generalStats.map((stat, index) => (
          <div key={index} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              {React.createElement(stat.icon, { className: "w-6 h-6 text-linkedin-light" })}
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
            {stat.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-400 mx-auto mt-2" />}
            {stat.trend === 'down' && <TrendingDown className="w-5 h-5 text-red-400 mx-auto mt-2" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trades per Market (Geo) */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Trades per Market (Geo)</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Pie Chart Placeholder]
            </div>
          </div>

          {/* Trades per Industry */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Trades per Industry</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Pie Chart Placeholder]
            </div>
          </div>

          {/* Trading Growth */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Trading Growth (Volume)</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Growth Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Right Sidebar for News/Updates */}
        <div className="space-y-6">
          {/* Recent Updates */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Newspaper className="w-5 h-5" />
              <span>Recent Updates</span>
            </h3>
            <div className="space-y-4">
              {recentUpdates.map((update) => (
                <div key={update.id} className="p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                  <h4 className="text-white font-medium text-sm mb-1">{update.title}</h4>
                  <p className="text-gray-300 text-xs mb-2">{update.intro}</p>
                  <span className="text-gray-500 text-xs">{update.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trades Table */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-4">Recent Trades</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-linkedin-border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trade Date/Time</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trade Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Venture Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Buyer</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Seller</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trade Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linkedin-border">
              {recentTrades.map((trade) => (
                <tr key={trade.id} className="hover:bg-linkedin-card/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{trade.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      trade.type === 'Primary' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-medium">{trade.ventureName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{trade.buyer}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{trade.seller}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-400 font-semibold">{trade.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;