import React, { useState } from 'react';
import ActivityFeed from './social/ActivityFeed';
import NetworkDiscovery from './social/NetworkDiscovery';
import Events from './social/Events';
import Communities from './social/Communities';
import SavedPosts from './social/SavedPosts';
import Messaging from './social/Messaging';
import OpportunityMarketplace from './trading/OpportunityMarketplace';
import TradingDashboard from './trading/TradingDashboard';
import SavedOpportunities from './trading/SavedOpportunities';
import MyInvestments from './investments/MyInvestments';
import ExpertsMarketplace from './marketplace/ExpertsMarketplace';
import MarketIntelligence from './intelligence/MarketIntelligence';
import LeftSidebar from './social/LeftSidebar';
import RightSidebar from './social/RightSidebar';
import TradingSidebar from './trading/TradingSidebar';
import ExpertsMarketplaceSidebar from './marketplace/ExpertsMarketplaceSidebar';
import MarketIntelligenceSidebar from './intelligence/MarketIntelligenceSidebar';
import SocialAICompanionChat from './social/SocialAICompanionChat';
import GlobalHeader from './GlobalHeader';

interface MainPlatformProps {
  profileCompleted: boolean;
  onReturnToOnboarding: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setShowProfileView: (show: boolean) => void;
  setShowMyVentures: (show: boolean) => void;
  setShowVentureBuilder: (show: boolean) => void;
  setShowMyServices: (show: boolean) => void;
  setActiveTradingSection: (section: string) => void;
}

const MainPlatform: React.FC<MainPlatformProps> = ({ 
  profileCompleted, 
  onReturnToOnboarding,
  activeTab,
  setActiveTab,
  setShowProfileView,
  setShowMyVentures,
  setShowVentureBuilder,
  setShowMyServices,
  setActiveTradingSection
}) => {
  // Social Network state
  const [activeSocialSection, setActiveSocialSection] = useState('feed');
  const [isSocialAICompanionOpen, setIsSocialAICompanionOpen] = useState(false);
  
  // Experts Marketplace state
  const [activeExpertsMarketplaceSection, setActiveExpertsMarketplaceSection] = useState('discover-experts');
  
  // Trading state
  const [activeTradingSection, setActiveTradingSection] = useState('trading-dashboard');
  
  // Market Intelligence state
  const [activeMarketIntelligenceSection, setActiveMarketIntelligenceSection] = useState('intelligence-dashboard');

  // Update parent component's trading section state
  const handleTradingSectionChange = (section: string) => {
    setActiveTradingSection(section);
    setActiveTradingSection(section);
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'social':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <LeftSidebar 
                  activeSection={activeSocialSection} 
                  onSectionChange={setActiveSocialSection} 
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                {activeSocialSection === 'feed' && <ActivityFeed />}
                {activeSocialSection === 'network' && <NetworkDiscovery />}
                {activeSocialSection === 'events' && <Events />}
                {activeSocialSection === 'communities' && <Communities />}
                {activeSocialSection === 'saved' && <SavedPosts />}
                {activeSocialSection === 'messaging' && <Messaging />}
              </div>
              
              {/* Right Sidebar or AI Companion */}
              <div className="lg:col-span-1">
                {isSocialAICompanionOpen ? (
                  <SocialAICompanionChat 
                    activeSocialSection={activeSocialSection}
                    activeTab={activeTab}
                    onClose={() => setIsSocialAICompanionOpen(false)}
                  />
                ) : (
                  <RightSidebar />
                )}
              </div>
            </div>
          </div>
        );
        
      case 'trading':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <TradingSidebar 
                  activeSection={activeTradingSection} 
                  onSectionChange={handleTradingSectionChange}
                  showMyInvestmentsGroup={true}
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                {activeTradingSection === 'trading-dashboard' && <TradingDashboard onSectionChange={handleTradingSectionChange} />}
                {activeTradingSection === 'opportunity-marketplace' && <OpportunityMarketplace onSectionChange={handleTradingSectionChange} />}
                {activeTradingSection === 'saved-opportunities' && <SavedOpportunities onSectionChange={handleTradingSectionChange} />}
                {(activeTradingSection === 'investment-pipeline' || 
                  activeTradingSection === 'portfolio-summary' || 
                  activeTradingSection === 'explore-portfolio' || 
                  activeTradingSection === 'portfolio-management' || 
                  activeTradingSection === 'saved-investment-opportunities') && 
                  <MyInvestments 
                    activeSection={activeTradingSection} 
                    onSectionChange={handleTradingSectionChange}
                    isSocialAICompanionOpen={false}
                    setIsSocialAICompanionOpen={() => {}}
                  />
                }
              </div>
            </div>
          </div>
        );
        
      case 'experts':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <ExpertsMarketplaceSidebar 
                  activeSection={activeExpertsMarketplaceSection} 
                  onSectionChange={setActiveExpertsMarketplaceSection}
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <ExpertsMarketplace 
                  activeSection={activeExpertsMarketplaceSection} 
                  onSectionChange={setActiveExpertsMarketplaceSection}
                />
              </div>
            </div>
          </div>
        );
        
      case 'intelligence':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <MarketIntelligenceSidebar 
                  activeSection={activeMarketIntelligenceSection} 
                  onSectionChange={setActiveMarketIntelligenceSection}
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <MarketIntelligence 
                  activeSection={activeMarketIntelligenceSection} 
                  onSectionChange={setActiveMarketIntelligenceSection}
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <LeftSidebar 
                  activeSection={activeSocialSection} 
                  onSectionChange={setActiveSocialSection} 
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ActivityFeed />
              </div>
              
              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                <RightSidebar />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <GlobalHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profileCompleted={profileCompleted}
        onReturnToOnboarding={onReturnToOnboarding}
        setShowProfileView={setShowProfileView}
        setShowMyVentures={setShowMyVentures}
        setShowVentureBuilder={setShowVentureBuilder}
        setShowMyServices={setShowMyServices}
        setActiveTradingSection={setActiveTradingSection}
      />
      {renderContent()}
    </div>
  );
};

export default MainPlatform;