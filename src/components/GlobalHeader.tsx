import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Building2, 
  TrendingUp, 
  Brain, 
  ChevronDown,
  Star
} from 'lucide-react';

interface GlobalHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profileCompleted: boolean;
  onReturnToOnboarding: () => void;
  setShowProfileView: (show: boolean) => void;
  setShowMyVentures: (show: boolean) => void;
  setShowVentureBuilder: (show: boolean) => void;
  setShowMyServices: (show: boolean) => void;
  setActiveTradingSection: (section: string) => void;
  mockProfileData?: any;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  activeTab,
  setActiveTab,
  profileCompleted,
  onReturnToOnboarding,
  setShowProfileView,
  setShowMyVentures,
  setShowVentureBuilder,
  setShowMyServices,
  setActiveTradingSection
}) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { id: 'social', label: 'Social Network', icon: Users },
    { id: 'trading', label: 'Equity Trading', icon: TrendingUp },
    { id: 'intelligence', label: 'Market Intelligence', icon: Brain },
    { id: 'experts', label: 'Expert Marketplace', icon: MessageSquare }
  ];

  return (
    <>
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border bg-linkedin-background/50 backdrop-blur-lg relative z-[50]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">VentureHub</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-linkedin text-white'
                    : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6">
            {!profileCompleted && (
              <button
                onClick={onReturnToOnboarding}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Complete Profile
              </button>
            )}
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5 relative z-[50]" />
            </button>
            
            {/* Profile Dropdown */}
            <div className="relative z-[50]" ref={dropdownRef}>
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
                />
                <div className="hidden md:block">
                  <p className="text-white font-medium text-sm">John Doe</p>
                  <p className="text-gray-400 text-xs">Entrepreneur & Investor</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              
              {showProfileDropdown && (
                <div className="fixed right-0 mt-2 w-64 bg-linkedin-card rounded-lg shadow-lg border border-linkedin-border z-[9999]" style={{top: '60px', right: '20px'}}>
                  <div className="p-4 border-b border-linkedin-border">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Profile" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                      />
                      <div>
                        <p className="text-white font-semibold">John Doe</p>
                        <p className="text-gray-400 text-sm">Entrepreneur & Investor</p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300 text-sm">Profile Completion</span>
                        <span className="text-linkedin-light text-sm">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-linkedin to-linkedin-light px-2 py-1 rounded text-xs text-white">
                        VentureHub Pro
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button 
                      onClick={() => {
                        setShowProfileView(true);
                        setShowProfileDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                    >
                      View/Edit Profile
                    </button>
                    <button 
                      onClick={() => {
                        setShowMyVentures(true);
                        setShowProfileDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                    >
                      My Ventures
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                      onClick={() => {
                        setActiveTab('trading'); 
                        setActiveTradingSection('investment-pipeline'); 
                        setShowProfileDropdown(false);
                      }}
                    >
                      My Investments
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                      onClick={() => {
                        setShowMyServices(true);
                        setShowProfileDropdown(false);
                      }}
                    >
                      My Services
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]">
                      Privacy Controls
                    </button>
                  </div>
                  
                  <div className="p-3 border-t border-linkedin-border">
                    <button 
                      className="w-full bg-linkedin-background/50 hover:bg-linkedin-background text-white px-4 py-2 rounded-lg text-sm transition-colors relative z-[9999]"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-linkedin-border bg-linkedin-background/50 backdrop-blur-lg">
        <div className="flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center space-y-1 py-3 transition-all ${
                activeTab === item.id
                  ? 'text-linkedin-light border-b-2 border-linkedin-light'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default GlobalHeader;