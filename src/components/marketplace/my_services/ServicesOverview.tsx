import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Clock, 
  Plus, 
  DollarSign,
  Star,
  MessageSquare,
  Bell,
  ArrowRight,
  FileText,
  Briefcase,
  Building2,
  Target,
  Award,
  TrendingUp,
  Eye,
  Heart,
  Bookmark
} from 'lucide-react';

interface ServicesOverviewProps {
  onSectionChange: (section: string) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSectionChange }) => {
  // Mock data for performance metrics
  const performanceMetrics = [
    { label: 'Total Revenue', value: '$24,500', icon: DollarSign, trend: '+15%', trendUp: true },
    { label: 'Active Clients', value: '18', icon: Users, trend: '+3', trendUp: true },
    { label: 'Avg. Rating', value: '4.8', icon: Star, trend: '+0.2', trendUp: true },
    { label: 'Completion Rate', value: '95%', icon: CheckCircle, trend: '+2%', trendUp: true }
  ];

  // Mock data for active sessions
  const activeSessions = [
    {
      id: 1,
      clientName: 'Ahmed Hassan',
      serviceName: 'Startup Strategy Consultation',
      progress: 65,
      nextMilestone: 'Business Model Review',
      date: 'Today, 2:00 PM'
    },
    {
      id: 2,
      clientName: 'Sarah Khalil',
      serviceName: 'Fundraising Advisory',
      progress: 40,
      nextMilestone: 'Pitch Deck Review',
      date: 'Tomorrow, 10:00 AM'
    }
  ];

  // Mock data for pending requests
  const pendingRequests = [
    {
      id: 1,
      clientName: 'Omar Al-Zahra',
      serviceName: 'Product Strategy Session',
      requestDate: '2 hours ago',
      proposedDate: 'May 15, 2025',
      message: 'Looking for guidance on our new fintech product launch strategy.'
    },
    {
      id: 2,
      clientName: 'Layla Mansouri',
      serviceName: 'Growth Marketing Workshop',
      requestDate: '1 day ago',
      proposedDate: 'May 20, 2025',
      message: 'Need help with our customer acquisition strategy for the MENA market.'
    }
  ];

  // Mock data for top performing services
  const topServices = [
    {
      id: 1,
      name: 'Startup Strategy Consultation',
      clients: 12,
      revenue: '$8,500',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Fundraising Advisory',
      clients: 8,
      revenue: '$6,200',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Product Strategy Session',
      clients: 7,
      revenue: '$5,300',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Growth Marketing Workshop',
      clients: 5,
      revenue: '$4,500',
      rating: 4.6
    }
  ];

  // Mock data for market news
  const marketNews = [
    {
      id: 1,
      title: 'Demand for Fintech Advisory Services Surges in MENA',
      intro: 'Experts in financial technology consulting seeing 45% increase in demand across the region',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Virtual Workshops Gaining Popularity Among Startups',
      intro: 'Remote learning and advisory sessions becoming preferred format for early-stage companies',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'Expert Marketplace Platforms See 60% Growth in 2025',
      intro: 'Knowledge economy booming as businesses seek specialized expertise on-demand',
      date: '3 days ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Services Overview</h1>
        <p className="text-gray-300">Manage your service offerings and track performance metrics</p>
      </div>

      {/* Performance Overview */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Performance Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-linkedin-card/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-linkedin/20 rounded-lg flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-linkedin-light" />
                </div>
                <div className={`flex items-center space-x-1 text-xs ${metric.trendUp ? 'text-green-400' : 'text-red-400'}`}>
                  <span>{metric.trend}</span>
                  {metric.trendUp ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Sessions */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Active Sessions
              </h2>
              <button 
                onClick={() => onSectionChange('session-management')}
                className="text-linkedin-light hover:text-linkedin text-sm font-medium flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              {activeSessions.map((session) => (
                <div key={session.id} className="bg-linkedin-card/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-white font-medium">{session.serviceName}</h3>
                      <p className="text-gray-400 text-sm">with {session.clientName}</p>
                    </div>
                    <div className="text-linkedin-light text-sm">{session.date}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{session.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full"
                        style={{ width: `${session.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 mr-1" />
                      <span>Next: {session.nextMilestone}</span>
                    </div>
                    <button className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1 rounded-lg text-sm transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              ))}
              
              {activeSessions.length === 0 && (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">No active sessions at the moment</p>
                </div>
              )}
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Pending Requests
              </h2>
              <button className="text-linkedin-light hover:text-linkedin text-sm font-medium flex items-center">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="bg-linkedin-card/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-white font-medium">{request.clientName}</h3>
                      <p className="text-gray-400 text-sm">{request.serviceName}</p>
                    </div>
                    <div className="text-gray-400 text-xs">{request.requestDate}</div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">"{request.message}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Proposed: {request.proposedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-red-500/20 text-red-400 hover:bg-red-500/30 px-3 py-1 rounded-lg text-sm transition-colors">
                        Decline
                      </button>
                      <button className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {pendingRequests.length === 0 && (
                <div className="text-center py-8">
                  <Bell className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">No pending requests at the moment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={() => onSectionChange('create-service')}
                className="w-full flex items-center justify-between bg-linkedin-card/50 hover:bg-linkedin-card/70 p-3 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center mr-3">
                    <Plus className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-white">Create New Service</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => onSectionChange('create-workshop')}
                className="w-full flex items-center justify-between bg-linkedin-card/50 hover:bg-linkedin-card/70 p-3 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-white">Create New Workshop</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => onSectionChange('session-management')}
                className="w-full flex items-center justify-between bg-linkedin-card/50 hover:bg-linkedin-card/70 p-3 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-white">Schedule Session</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => onSectionChange('client-management')}
                className="w-full flex items-center justify-between bg-linkedin-card/50 hover:bg-linkedin-card/70 p-3 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-white">Message Clients</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between bg-linkedin-card/50 hover:bg-linkedin-card/70 p-3 rounded-lg transition-colors">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-white">View Analytics</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Top Performing Services */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4">Top Performing Services</h2>
            <div className="space-y-3">
              {topServices.map((service) => (
                <div key={service.id} className="bg-linkedin-card/50 rounded-lg p-3 hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium mb-2">{service.name}</h3>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Clients</p>
                      <p className="text-white font-medium">{service.clients}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Revenue</p>
                      <p className="text-green-400 font-medium">{service.revenue}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Rating</p>
                      <div className="flex items-center">
                        <span className="text-white font-medium mr-1">{service.rating}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market News */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4">Market News & Updates</h2>
            <div className="space-y-3">
              {marketNews.map((news) => (
                <div key={news.id} className="bg-linkedin-card/50 rounded-lg p-3 hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium text-sm mb-1">{news.title}</h3>
                  <p className="text-gray-400 text-xs mb-2">{news.intro}</p>
                  <p className="text-gray-500 text-xs">{news.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing CheckCircle and TrendingDown components
const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const TrendingDown = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);

export default ServicesOverview;