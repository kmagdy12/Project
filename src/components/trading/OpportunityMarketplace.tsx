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
  Star,
  Eye,
  Bookmark,
  Share2,
  ArrowRight
} from 'lucide-react';

interface OpportunityMarketplaceProps {
  onSectionChange: (section: string) => void;
}

const OpportunityMarketplace: React.FC<OpportunityMarketplaceProps> = ({ onSectionChange }) => {
  const [activeFilter, setActiveFilter] = useState('recommended');
  const [sortBy, setSortBy] = useState('relevance');

  const activeDealStats = [
    { label: 'Active Deals', value: '320' },
    { label: 'Total Deal Size', value: '$150M' },
    { label: 'Average Deal Size', value: '$470K' },
    { label: 'Average Deal Valuation', value: '$5M' }
  ];

  const filterTabs = [
    { id: 'recommended', label: 'Recommended Deals' },
    { id: 'trending', label: 'Trending Deals' },
    { id: 'new', label: 'New Deals' },
    { id: 'all', label: 'All Deals' },
    { id: 'secondary', label: 'Secondary Deals' },
    { id: 'primary', label: 'Primary Deals' }
  ];

  const opportunities = [
    {
      id: 1,
      name: 'AgriTech Innovations',
      description: 'Developing sustainable farming solutions using AI and IoT for arid regions.',
      relevanceScore: 95,
      industry: 'AgriTech',
      hq: 'Dubai, UAE',
      postDate: '2 days ago',
      dealType: 'Primary',
      primaryDetails: {
        round: 'Seed',
        ask: '$1.5M',
        valuation: '$8M',
        equity: '18.75%',
        stage: 'Traction'
      },
      progress: 'Traction',
      traction: { arr: '$120K', growth: '20%', users: '500+', teamSize: '10' },
      opportunityStats: { views: 1200, saves: 80, closingIn: 30 },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'HealthFlow Solutions',
      description: 'AI-powered platform for personalized healthcare management and remote patient monitoring.',
      relevanceScore: 88,
      industry: 'HealthTech',
      hq: 'Riyadh, KSA',
      postDate: '5 days ago',
      dealType: 'Secondary',
      secondaryDetails: {
        sharesAvailable: '10,000',
        askingPrice: '$25/share',
        originalRound: 'Series A',
        originalDate: '2023-03-15',
        sellerType: 'Early Investor',
        sellerName: 'Investor B',
        currentValuation: '$25M'
      },
      progress: 'Product',
      traction: { arr: '$50K', growth: '15%', users: '1000+', teamSize: '15' },
      opportunityStats: { views: 800, saves: 50, closingIn: 45 },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'EduSpark',
      description: 'Interactive online learning platform for K-12 students with gamified content.',
      relevanceScore: 92,
      industry: 'EdTech',
      hq: 'Cairo, Egypt',
      postDate: '1 week ago',
      dealType: 'Primary',
      primaryDetails: {
        round: 'Pre-Seed',
        ask: '$800K',
        valuation: '$4M',
        equity: '20%',
        stage: 'Foundation'
      },
      progress: 'Foundation',
      traction: { arr: '$5K', growth: '5%', users: '200+', teamSize: '5' },
      opportunityStats: { views: 600, saves: 30, closingIn: 60 },
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'LogiChain',
      description: 'Blockchain-powered supply chain management solution for enhanced transparency and efficiency.',
      relevanceScore: 85,
      industry: 'Logistics',
      hq: 'Abu Dhabi, UAE',
      postDate: '1.5 weeks ago',
      dealType: 'Secondary',
      secondaryDetails: {
        sharesAvailable: '5,000',
        askingPrice: '$50/share',
        originalRound: 'Seed',
        originalDate: '2022-10-01',
        sellerType: 'Founder',
        sellerName: 'Founder D',
        currentValuation: '$50M'
      },
      progress: 'GTM',
      traction: { arr: '$200K', growth: '25%', users: '100+', teamSize: '20' },
      opportunityStats: { views: 950, saves: 65, closingIn: 20 },
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const topActiveDeals = [
    { name: 'AgriTech Innovations', industry: 'AgriTech', dealType: 'Primary' },
    { name: 'HealthFlow Solutions', industry: 'HealthTech', dealType: 'Secondary' },
    { name: 'EduSpark', industry: 'EdTech', dealType: 'Primary' }
  ];

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500/20 text-green-400';
    if (score >= 80) return 'bg-blue-500/20 text-blue-400';
    return 'bg-yellow-500/20 text-yellow-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Trading Opportunities Dashboard</h1>
        <p className="text-gray-300">Discover and screen potential deals in primary and secondary markets</p>
      </div>

      {/* Active Deals Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeDealStats.map((stat, index) => (
          <div key={index} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Opportunities List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters and Sort By */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center space-x-2 overflow-x-auto mb-4">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                      : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <label className="block text-gray-300 text-sm mr-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="relevance" className="bg-slate-800">Relevance</option>
                <option value="date" className="bg-slate-800">Date</option>
                <option value="size" className="bg-slate-800">Size</option>
                <option value="valuation" className="bg-slate-800">Valuation</option>
              </select>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all group">
                <div className="relative mb-4">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-linkedin text-white px-3 py-1 rounded-full text-sm font-medium">
                      {opportunity.dealType}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getMatchScoreColor(opportunity.relevanceScore)}`}>
                      {opportunity.relevanceScore}% Match
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{opportunity.name}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{opportunity.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Building2 className="w-4 h-4" />
                    <span>{opportunity.industry}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.hq}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.postDate}</span>
                  </div>
                </div>

                {opportunity.dealType === 'Primary' && opportunity.primaryDetails && (
                  <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Primary Deal Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <span>Round: <span className="text-white">{opportunity.primaryDetails.round}</span></span>
                      <span>Ask: <span className="text-white">{opportunity.primaryDetails.ask}</span></span>
                      <span>Valuation: <span className="text-white">{opportunity.primaryDetails.valuation}</span></span>
                      <span>Equity: <span className="text-white">{opportunity.primaryDetails.equity}</span></span>
                      <span>Stage: <span className="text-white">{opportunity.primaryDetails.stage}</span></span>
                    </div>
                  </div>
                )}

                {opportunity.dealType === 'Secondary' && opportunity.secondaryDetails && (
                  <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Secondary Deal Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <span>Shares Available: <span className="text-white">{opportunity.secondaryDetails.sharesAvailable}</span></span>
                      <span>Asking Price: <span className="text-white">{opportunity.secondaryDetails.askingPrice}</span></span>
                      <span>Original Round: <span className="text-white">{opportunity.secondaryDetails.originalRound}</span></span>
                      <span>Original Date: <span className="text-white">{opportunity.secondaryDetails.originalDate}</span></span>
                      <span>Seller Type: <span className="text-white">{opportunity.secondaryDetails.sellerType}</span></span>
                      <span>Seller Name: <span className="text-white">{opportunity.secondaryDetails.sellerName}</span></span>
                      <span>Current Valuation: <span className="text-white">{opportunity.secondaryDetails.currentValuation}</span></span>
                    </div>
                  </div>
                )}

                <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Traction</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <span>ARR/MRR: <span className="text-white">{opportunity.traction.arr}</span></span>
                    <span>Growth %: <span className="text-white">{opportunity.traction.growth}</span></span>
                    <span>Users: <span className="text-white">{opportunity.traction.users}</span></span>
                    <span>Team Size: <span className="text-white">{opportunity.traction.teamSize}</span></span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{opportunity.opportunityStats.views} views</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Bookmark className="w-4 h-4" />
                      <span>{opportunity.opportunityStats.saves} saves</span>
                    </span>
                  </div>
                  <span className="text-linkedin-light">Closing in {opportunity.opportunityStats.closingIn} days</span>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onSectionChange('investment-pipeline')} // Direct to investment-pipeline when adding to pipeline
                    className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Add to Pipeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar for Charts */}
        <div className="space-y-6">
          {/* Top Active Deals */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Top Active Deals</h3>
            <div className="space-y-3">
              {topActiveDeals.map((deal, index) => (
                <div key={index} className="p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                  <h4 className="text-white font-medium text-sm">{deal.name}</h4>
                  <p className="text-gray-400 text-xs">{deal.industry} • {deal.dealType}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Deals per Industry */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Active Deals per Industry</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Pie Chart Placeholder]
            </div>
          </div>

          {/* Active Deals per Market (Geo) */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Active Deals per Market (Geo)</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Pie Chart Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityMarketplace;