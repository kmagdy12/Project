import React from 'react';
import { 
  DollarSign, 
  Briefcase, 
  Users,
  BarChart3,
  TrendingUp,
  Bookmark,
  Target,
  MapPin,
  Building2
} from 'lucide-react';

interface TradingSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed?: boolean;
  showMyInvestmentsGroup: boolean;
}

const TradingSidebar: React.FC<TradingSidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  isCollapsed = false,
  showMyInvestmentsGroup
}) => {
  const mainNavigationTabs = [
    { id: 'trading-dashboard', label: 'Trading Market Dashboard', icon: BarChart3 },
    { id: 'opportunity-marketplace', label: 'Trading Opportunities', icon: TrendingUp },
    { id: 'saved-opportunities', label: 'Saved Opportunities', icon: Bookmark }
  ];

  const investmentNavigationTabs = [
    { id: 'investment-pipeline', label: 'Investment Pipeline', icon: Briefcase },
    { id: 'portfolio-summary', label: 'Portfolio Summary', icon: BarChart3 },
    { id: 'explore-portfolio', label: 'Explore Portfolio', icon: Target },
    { id: 'portfolio-management', label: 'Portfolio Management', icon: Building2 },
    { id: 'saved-investment-opportunities', label: 'Saved Investment Opportunities', icon: Bookmark }
  ];

  const investmentStats = [
    { label: 'Deals', value: '12', icon: Briefcase },
    { label: 'Deal Volume', value: '$15M', icon: DollarSign },
    { label: 'Active Deals', value: '5', icon: Target }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Information (Placeholder - consistent with other sidebars) */}
      <div className={`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-3' : 'p-6'}`}>
        <div className={isCollapsed ? 'flex flex-col items-center' : 'text-center'}>
          <div className="relative inline-block mb-4">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Profile" 
              className={`${isCollapsed ? 'w-10 h-10' : 'w-20 h-20'} rounded-full object-cover border-4 border-linkedin`}
            />
            {!isCollapsed && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          
          {!isCollapsed && (
            <>
              <h3 className="text-lg font-semibold text-white mb-1">John Doe</h3>
              <p className="text-linkedin-light text-sm mb-3">Serial Entrepreneur & Investor</p>
              
              {/* Role Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                  Founder
                </span>
                <span className="bg-linkedin-light/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                  Investor
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Investment Profile Stats */}
      {!isCollapsed && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h4 className="text-white font-semibold mb-4">Your Investment Stats</h4>
          <div className="grid grid-cols-2 gap-4">
            {investmentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-linkedin-light" />
                </div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Collapsed Stats - Show only when collapsed */}
      {isCollapsed && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-3">
          <div className="space-y-3">
            {investmentStats.slice(0, 2).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <stat.icon className="w-4 h-4 text-linkedin-light" />
                </div>
                <div className="text-sm font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className={`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-2' : 'p-4'}`}>
        <nav className="space-y-2"> {/* Main Trading Navigation */}
          {mainNavigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSectionChange(tab.id)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-3 py-2'} rounded-lg transition-all ${
                activeSection === tab.id
                 ? 'bg-linkedin text-white'
                 : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
              }`}
              title={isCollapsed ? tab.label : undefined}
            >
              <tab.icon className="w-4 h-4" />
              {!isCollapsed && <span className="text-sm font-medium">{tab.label}</span>}
            </button>
          ))}

          {showMyInvestmentsGroup && (
            <>
              {!isCollapsed && (
                <div className="border-t border-linkedin-border/50 pt-4 mt-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">My Investments</h4>
                </div>
              )}
              {investmentNavigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onSectionChange(tab.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-3 py-2'} rounded-lg transition-all ${
                    activeSection === tab.id
                     ? 'bg-linkedin text-white'
                     : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
                  }`}
                  title={isCollapsed ? tab.label : undefined}
                >
                  <tab.icon className="w-4 h-4" />
                  {!isCollapsed && <span className="text-sm font-medium">{tab.label}</span>}
                </button>
              ))}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default TradingSidebar;