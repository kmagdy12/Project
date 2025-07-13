import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3,
  AlertTriangle,
  Star,
  Calendar,
  ExternalLink,
  PieChart,
  Activity,
  Target,
  Award,
  Briefcase,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Newspaper,
  Plus,
  ChevronRight,
  Filter,
  Search
} from 'lucide-react';
import VenturesSidebar from './VenturesSidebar';

interface MyVenturesProps {
  onBack: () => void;
  onCreateNewVenture: () => void;
}

const MyVentures: React.FC<MyVenturesProps> = ({ onBack, onCreateNewVenture }) => {
  const [selectedDuration, setSelectedDuration] = useState('1y');
  const [activeSection, setActiveSection] = useState('portfolio-dashboard');

  const durationOptions = [
    { id: '1m', label: '1M' },
    { id: '3m', label: '3M' },
    { id: '6m', label: '6M' },
    { id: '1y', label: '1Y' },
    { id: 'all', label: 'All' }
  ];

  const portfolioOverview = {
    totalValue: '$12.5M',
    totalVentures: 5,
    totalFundsRaised: '$3.8M',
    totalExits: 1,
    totalGainFromExits: '$1.2M'
  };

  const industrySegmentation = [
    { industry: 'Fintech', percentage: 40, value: '$5M', color: 'bg-blue-500' },
    { industry: 'HealthTech', percentage: 25, value: '$3.1M', color: 'bg-green-500' },
    { industry: 'EdTech', percentage: 15, value: '$1.9M', color: 'bg-yellow-500' },
    { industry: 'CleanTech', percentage: 12, value: '$1.5M', color: 'bg-purple-500' },
    { industry: 'AgriTech', percentage: 8, value: '$1M', color: 'bg-pink-500' }
  ];

  const stageSegmentation = [
    { stage: 'Idea', percentage: 20, count: 1, color: 'bg-gray-500' },
    { stage: 'MVP', percentage: 20, count: 1, color: 'bg-orange-500' },
    { stage: 'Traction', percentage: 40, count: 2, color: 'bg-blue-500' },
    { stage: 'Scaling', percentage: 20, count: 1, color: 'bg-green-500' }
  ];

  const performanceSegmentation = [
    { performance: 'High Performers', percentage: 40, count: 2, color: 'bg-green-500' },
    { performance: 'Stable', percentage: 40, count: 2, color: 'bg-blue-500' },
    { performance: 'Underperforming', percentage: 20, count: 1, color: 'bg-red-500' }
  ];

  const alerts = [
    {
      id: 1,
      title: 'FinPay: 30% revenue decline',
      description: 'Quarterly revenue dropped significantly due to increased competition',
      severity: 'high',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'EduSpark: 1 month delay in product release',
      description: 'Product launch postponed due to technical challenges',
      severity: 'medium',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'HealthFlow: New partnership announced',
      description: 'Strategic partnership with major healthcare provider',
      severity: 'low',
      date: '3 days ago'
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'FinPay',
      logo: '💳',
      growthRate: '+180%',
      currentValue: '$5M',
      industry: 'Fintech'
    },
    {
      id: 2,
      name: 'HealthFlow',
      logo: '🏥',
      growthRate: '+120%',
      currentValue: '$3.1M',
      industry: 'HealthTech'
    },
    {
      id: 3,
      name: 'EduSpark',
      logo: '📚',
      growthRate: '+90%',
      currentValue: '$1.9M',
      industry: 'EdTech'
    },
    {
      id: 4,
      name: 'CleanEnergy',
      logo: '☀️',
      growthRate: '+75%',
      currentValue: '$1.5M',
      industry: 'CleanTech'
    },
    {
      id: 5,
      name: 'AgriTech',
      logo: '🌱',
      growthRate: '+60%',
      currentValue: '$1M',
      industry: 'AgriTech'
    }
  ];

  const marketUpdates = [
    {
      id: 1,
      title: 'MENA Fintech Investment Reaches Record High in Q4 2024',
      intro: 'Regional fintech startups raised $1.2B in the fourth quarter, marking a 45% increase from the previous year',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Saudi Arabia Launches $2B Innovation Fund',
      intro: 'New government initiative aims to support early-stage startups across technology sectors',
      date: '6 hours ago'
    },
    {
      id: 3,
      title: 'UAE Central Bank Updates Fintech Regulations',
      intro: 'New regulatory framework provides clearer guidelines for digital payment platforms',
      date: '1 day ago'
    },
    {
      id: 4,
      title: 'HealthTech Sector Shows Strong Growth Across MENA',
      intro: 'Healthcare technology investments up 60% as region focuses on digital health solutions',
      date: '2 days ago'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">My Ventures</h1>
            <p className="text-gray-300">Manage and track your venture portfolio</p>
          </div>
          <button 
            onClick={onCreateNewVenture}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Venture</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <VenturesSidebar 
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onCreateNewVenture={onCreateNewVenture}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Portfolio Value Overview */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Portfolio Value Overview</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-linkedin-light mb-2">{portfolioOverview.totalValue}</div>
                  <div className="text-gray-400 text-sm">Total Portfolio Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalVentures}</div>
                  <div className="text-gray-400 text-sm"># Ventures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalFundsRaised}</div>
                  <div className="text-gray-400 text-sm">Total Funds Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalExits}</div>
                  <div className="text-gray-400 text-sm"># of Exits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{portfolioOverview.totalGainFromExits}</div>
                  <div className="text-gray-400 text-sm">Total Gain (Exit Value)</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Portfolio Performance Growth */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Portfolio Performance Growth</span>
                    </h3>
                    <div className="flex items-center space-x-2">
                      {durationOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedDuration(option.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            selectedDuration === option.id
                              ? 'bg-linkedin text-white'
                              : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Portfolio Performance Growth Chart - {selectedDuration.toUpperCase()}]
                  </div>
                </div>

                {/* Portfolio Breakdown */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                    <PieChart className="w-5 h-5" />
                    <span>Portfolio Breakdown</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Industry Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Industry Segmentation</h4>
                      <div className="space-y-3">
                        {industrySegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.industry}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stage Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Stage Segmentation</h4>
                      <div className="space-y-3">
                        {stageSegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.stage}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.count} ventures</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Performance Segmentation</h4>
                      <div className="space-y-3">
                        {performanceSegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.performance}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.count} ventures</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Alerts */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Alerts</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {alerts.map((alert) => (
                      <div key={alert.id} className={`p-3 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                        <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                        <p className="text-xs mb-2 opacity-80">{alert.description}</p>
                        <span className="text-xs opacity-60">{alert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performers */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Top Performers</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {topPerformers.map((performer, index) => (
                      <div key={performer.id} className="flex items-center space-x-3 p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                        <div className="text-2xl">{performer.logo}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">{performer.name}</h4>
                          <p className="text-gray-400 text-xs">{performer.industry}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-semibold text-sm">{performer.growthRate}</div>
                          <div className="text-gray-400 text-xs">{performer.currentValue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Updates */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Newspaper className="w-5 h-5" />
                    <span>Market Updates</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {marketUpdates.map((update) => (
                      <div key={update.id} className="p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                        <h4 className="text-white font-medium text-sm mb-2">{update.title}</h4>
                        <p className="text-gray-300 text-xs mb-2">{update.intro}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">{update.date}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVentures;