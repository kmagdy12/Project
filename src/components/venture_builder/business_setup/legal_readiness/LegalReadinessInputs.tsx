import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Shield
} from 'lucide-react';
import IncorporationInputs from './IncorporationInputs';
import TemplatesInputs from './TemplatesInputs';
import ComplianceProtectionInputs from './ComplianceProtectionInputs';

// Incorporation Data Types
interface IncorporationData {
  articlesOfIncorporation: string;
  registeredAgent: {
    status: 'pending' | 'in-progress' | 'completed';
    details: string;
  };
  filingDocuments: {
    status: 'pending' | 'in-progress' | 'completed';
    details: string;
  };
  permitsLicenses: {
    status: 'pending' | 'in-progress' | 'completed';
    details: string;
  };
  issuingShares: {
    status: 'pending' | 'in-progress' | 'completed';
    details: string;
  };
}

// Templates Data Types
interface LegalTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
  category: 'founder' | 'employee' | 'customer' | 'vendor' | 'other';
}

// Compliance & Protection Data Types
interface ComplianceItem {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: string;
  assignedTo?: string;
}

interface IPProtectionItem {
  id: number;
  name: string;
  description: string;
  type: 'trademark' | 'patent' | 'copyright' | 'trade-secret' | 'other';
  status: 'pending' | 'in-progress' | 'completed';
  filingDate?: string;
  registrationNumber?: string;
}

interface RiskManagementItem {
  id: number;
  name: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  mitigationStrategy: string;
  status: 'pending' | 'in-progress' | 'completed';
}

interface ComplianceProtectionData {
  complianceItems: ComplianceItem[];
  ipProtectionItems: IPProtectionItem[];
  riskManagementItems: RiskManagementItem[];
}

// Combined Legal Readiness Data
interface LegalReadinessData {
  incorporation: IncorporationData;
  templates: LegalTemplate[];
  complianceProtection: ComplianceProtectionData;
}

interface LegalReadinessInputsProps {
  legalReadinessData: LegalReadinessData;
  onUpdateLegalReadiness: (data: LegalReadinessData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const LegalReadinessInputs: React.FC<LegalReadinessInputsProps> = ({ 
  legalReadinessData, 
  onUpdateLegalReadiness, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [activeTab, setActiveTab] = useState<'incorporation' | 'templates' | 'compliance'>('incorporation');

  const handleUpdateIncorporation = (data: IncorporationData) => {
    onUpdateLegalReadiness({
      ...legalReadinessData,
      incorporation: data
    });
  };

  const handleUpdateTemplates = (templates: LegalTemplate[]) => {
    onUpdateLegalReadiness({
      ...legalReadinessData,
      templates
    });
  };

  const handleUpdateComplianceProtection = (data: ComplianceProtectionData) => {
    onUpdateLegalReadiness({
      ...legalReadinessData,
      complianceProtection: data
    });
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Shield className="w-5 h-5 text-linkedin-light mr-2" />
        Legal Readiness
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Legal implementation workspace where AI suggests required legal actions and generates actual legal templates and documents.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('incorporation')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'incorporation'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Incorporation
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'templates'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab('compliance')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'compliance'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Compliance & Protection
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="bg-linkedin-card/30 rounded-lg p-4">
        {activeTab === 'incorporation' && (
          <IncorporationInputs 
            incorporationData={legalReadinessData.incorporation}
            onUpdateIncorporation={handleUpdateIncorporation}
          />
        )}
        
        {activeTab === 'templates' && (
          <TemplatesInputs 
            templates={legalReadinessData.templates}
            onUpdateTemplates={handleUpdateTemplates}
          />
        )}
        
        {activeTab === 'compliance' && (
          <ComplianceProtectionInputs 
            complianceProtectionData={legalReadinessData.complianceProtection}
            onUpdateComplianceProtection={handleUpdateComplianceProtection}
          />
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Save className="w-3 h-3" />
            <span>Save draft</span>
          </button>
        </div>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to Commercial Readiness</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default LegalReadinessInputs;