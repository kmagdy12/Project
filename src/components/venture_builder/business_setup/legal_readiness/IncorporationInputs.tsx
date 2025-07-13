import React, { useState } from 'react';
import { 
  Edit2, 
  Save,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Building2
} from 'lucide-react';

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

interface IncorporationInputsProps {
  incorporationData: IncorporationData;
  onUpdateIncorporation: (data: IncorporationData) => void;
}

const IncorporationInputs: React.FC<IncorporationInputsProps> = ({ 
  incorporationData, 
  onUpdateIncorporation 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(incorporationData);

  const handleSave = () => {
    onUpdateIncorporation(editedData);
    setIsEditing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'pending':
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-yellow-400';
      case 'pending':
      default:
        return 'text-gray-400';
    }
  };

  const updateStatus = (field: keyof Omit<IncorporationData, 'articlesOfIncorporation'>, status: 'pending' | 'in-progress' | 'completed') => {
    setEditedData({
      ...editedData,
      [field]: {
        ...editedData[field],
        status
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Building2 className="w-5 h-5 text-linkedin-light mr-2" />
          Incorporation
        </h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Formal establishment of the business as a legal entity, including choosing the optimal structure type (LLC, Corporation, etc.) based on your business model, tax considerations, and liability requirements.
      </p>
      
      {/* Articles of Incorporation */}
      <div className="bg-linkedin-card/30 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs flex items-center">
            <FileText className="w-4 h-4 text-linkedin-light mr-2" />
            1. Articles of Incorporation
          </h4>
          <div className="text-green-400 text-xs font-medium">AI Generated & Jurisdiction-Optimized</div>
        </div>
        
        {isEditing ? (
          <div className="space-y-3">
            <textarea
              value={editedData.articlesOfIncorporation}
              onChange={(e) => setEditedData({...editedData, articlesOfIncorporation: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={10}
              placeholder="Enter the articles of incorporation..."
            />
          </div>
        ) : (
          <div className="bg-linkedin-card/50 rounded-lg p-3">
            <pre className="text-gray-300 text-xs whitespace-pre-wrap">{incorporationData.articlesOfIncorporation || "I've analyzed your business model and prepared customized Articles of Incorporation optimized for your jurisdiction and business structure. The document will appear here once generated."}</pre>
          </div>
        )}
      </div>
      
      {/* Status Updates */}
      <div className="space-y-4">
        {/* Registered Agent */}
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium text-xs">2. Appointing a Registered Agent</h4>
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateStatus('registeredAgent', 'pending')}
                  className={`px-2 py-1 rounded text-xs ${editedData.registeredAgent.status === 'pending' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => updateStatus('registeredAgent', 'in-progress')}
                  className={`px-2 py-1 rounded text-xs ${editedData.registeredAgent.status === 'in-progress' ? 'bg-yellow-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus('registeredAgent', 'completed')}
                  className={`px-2 py-1 rounded text-xs ${editedData.registeredAgent.status === 'completed' ? 'bg-green-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Completed
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {getStatusIcon(incorporationData.registeredAgent.status)}
                <span className={`text-xs font-medium ${getStatusColor(incorporationData.registeredAgent.status)}`}>
                  {incorporationData.registeredAgent.status.charAt(0).toUpperCase() + incorporationData.registeredAgent.status.slice(1)}
                </span>
              </div>
            )}
          </div>
          
          {isEditing ? (
            <textarea
              value={editedData.registeredAgent.details}
              onChange={(e) => setEditedData({
                ...editedData,
                registeredAgent: {
                  ...editedData.registeredAgent,
                  details: e.target.value
                }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Enter details about the registered agent..."
            />
          ) : (
            <p className="text-gray-300 text-xs">{incorporationData.registeredAgent.details || "No details provided yet."}</p>
          )}
        </div>
        
        {/* Filing Documents */}
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium text-xs">3. Filing the Incorporation Documents</h4>
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateStatus('filingDocuments', 'pending')}
                  className={`px-2 py-1 rounded text-xs ${editedData.filingDocuments.status === 'pending' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => updateStatus('filingDocuments', 'in-progress')}
                  className={`px-2 py-1 rounded text-xs ${editedData.filingDocuments.status === 'in-progress' ? 'bg-yellow-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus('filingDocuments', 'completed')}
                  className={`px-2 py-1 rounded text-xs ${editedData.filingDocuments.status === 'completed' ? 'bg-green-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Completed
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {getStatusIcon(incorporationData.filingDocuments.status)}
                <span className={`text-xs font-medium ${getStatusColor(incorporationData.filingDocuments.status)}`}>
                  {incorporationData.filingDocuments.status.charAt(0).toUpperCase() + incorporationData.filingDocuments.status.slice(1)}
                </span>
              </div>
            )}
          </div>
          
          {isEditing ? (
            <textarea
              value={editedData.filingDocuments.details}
              onChange={(e) => setEditedData({
                ...editedData,
                filingDocuments: {
                  ...editedData.filingDocuments,
                  details: e.target.value
                }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Enter details about filing the incorporation documents..."
            />
          ) : (
            <p className="text-gray-300 text-xs">{incorporationData.filingDocuments.details || "No details provided yet."}</p>
          )}
        </div>
        
        {/* Permits and Licenses */}
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium text-xs">4. Obtaining Required Permits and Licenses</h4>
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateStatus('permitsLicenses', 'pending')}
                  className={`px-2 py-1 rounded text-xs ${editedData.permitsLicenses.status === 'pending' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => updateStatus('permitsLicenses', 'in-progress')}
                  className={`px-2 py-1 rounded text-xs ${editedData.permitsLicenses.status === 'in-progress' ? 'bg-yellow-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus('permitsLicenses', 'completed')}
                  className={`px-2 py-1 rounded text-xs ${editedData.permitsLicenses.status === 'completed' ? 'bg-green-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Completed
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {getStatusIcon(incorporationData.permitsLicenses.status)}
                <span className={`text-xs font-medium ${getStatusColor(incorporationData.permitsLicenses.status)}`}>
                  {incorporationData.permitsLicenses.status.charAt(0).toUpperCase() + incorporationData.permitsLicenses.status.slice(1)}
                </span>
              </div>
            )}
          </div>
          
          {isEditing ? (
            <textarea
              value={editedData.permitsLicenses.details}
              onChange={(e) => setEditedData({
                ...editedData,
                permitsLicenses: {
                  ...editedData.permitsLicenses,
                  details: e.target.value
                }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Enter details about obtaining required permits and licenses..."
            />
          ) : (
            <p className="text-gray-300 text-xs">{incorporationData.permitsLicenses.details || "No details provided yet."}</p>
          )}
        </div>
        
        {/* Issuing Shares */}
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium text-xs">5. Issuing Shares (for Corporations)</h4>
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateStatus('issuingShares', 'pending')}
                  className={`px-2 py-1 rounded text-xs ${editedData.issuingShares.status === 'pending' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => updateStatus('issuingShares', 'in-progress')}
                  className={`px-2 py-1 rounded text-xs ${editedData.issuingShares.status === 'in-progress' ? 'bg-yellow-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus('issuingShares', 'completed')}
                  className={`px-2 py-1 rounded text-xs ${editedData.issuingShares.status === 'completed' ? 'bg-green-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Completed
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {getStatusIcon(incorporationData.issuingShares.status)}
                <span className={`text-xs font-medium ${getStatusColor(incorporationData.issuingShares.status)}`}>
                  {incorporationData.issuingShares.status.charAt(0).toUpperCase() + incorporationData.issuingShares.status.slice(1)}
                </span>
              </div>
            )}
          </div>
          
          {isEditing ? (
            <textarea
              value={editedData.issuingShares.details}
              onChange={(e) => setEditedData({
                ...editedData,
                issuingShares: {
                  ...editedData.issuingShares,
                  details: e.target.value
                }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Enter details about issuing shares..."
            />
          ) : (
            <p className="text-gray-300 text-xs">{incorporationData.issuingShares.details || "No details provided yet."}</p>
          )}
        </div>
      </div>
      
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(incorporationData);
            }}
            className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
          >
            <Save className="w-3 h-3" />
            <span>Save</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default IncorporationInputs;