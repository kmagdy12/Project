import React from 'react';
import VentureProgress from './VentureProgress';

interface VentureBuildingLayoutProps {
  currentStage: string;
  completionPercentage: number;
  leftColumn: React.ReactNode;
  middleColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}

const VentureBuildingLayout: React.FC<VentureBuildingLayoutProps> = ({
  currentStage,
  completionPercentage,
  leftColumn,
  middleColumn,
  rightColumn
}) => {
  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <VentureProgress 
        currentStage={currentStage}
        completionPercentage={completionPercentage}
      />
      
      {/* Three-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - AI Chat History */}
        <div className="lg:col-span-2">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border h-[calc(100vh-220px)] overflow-y-auto text-sm">
            {leftColumn}
          </div>
        </div>
        
        {/* Middle Column - Main AI Interaction */}
        <div className="lg:col-span-4">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border h-[calc(100vh-220px)] overflow-y-auto text-sm">
            {middleColumn}
          </div>
        </div>
        
        {/* Right Column - User Input Fields */}
        <div className="lg:col-span-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border h-[calc(100vh-220px)] overflow-y-auto text-sm">
            {rightColumn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureBuildingLayout;