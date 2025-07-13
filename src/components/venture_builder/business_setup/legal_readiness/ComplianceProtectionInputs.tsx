import React, { useState } from 'react';
import { 
  Edit2, 
  Save,
  Shield,
  Plus,
  Trash2
} from 'lucide-react';

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

interface ComplianceProtectionInputsProps {
  complianceProtectionData: ComplianceProtectionData;
  onUpdateComplianceProtection: (data: ComplianceProtectionData) => void;
}

const ComplianceProtectionInputs: React.FC<ComplianceProtectionInputsProps> = ({ 
  complianceProtectionData, 
  onUpdateComplianceProtection 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(complianceProtectionData);
  const [activeTab, setActiveTab] = useState<'compliance' | 'ip' | 'risk'>('compliance');
  
  // State for adding/editing items
  const [isAddingComplianceItem, setIsAddingComplianceItem] = useState(false);
  const [isAddingIPItem, setIsAddingIPItem] = useState(false);
  const [isAddingRiskItem, setIsAddingRiskItem] = useState(false);
  const [editingComplianceId, setEditingComplianceId] = useState<number | null>(null);
  const [editingIPId, setEditingIPId] = useState<number | null>(null);
  const [editingRiskId, setEditingRiskId] = useState<number | null>(null);
  
  // New item templates
  const [newComplianceItem, setNewComplianceItem] = useState<Partial<ComplianceItem>>({
    name: '',
    description: '',
    status: 'pending'
  });
  const [newIPItem, setNewIPItem] = useState<Partial<IPProtectionItem>>({
    name: '',
    description: '',
    type: 'trademark',
    status: 'pending'
  });
  const [newRiskItem, setNewRiskItem] = useState<Partial<RiskManagementItem>>({
    name: '',
    description: '',
    riskLevel: 'medium',
    mitigationStrategy: '',
    status: 'pending'
  });

  const handleSave = () => {
    onUpdateComplianceProtection(editedData);
    setIsEditing(false);
  };

  // Compliance Items handlers
  const handleAddComplianceItem = () => {
    if (newComplianceItem.name && newComplianceItem.description) {
      const item: ComplianceItem = {
        id: Date.now(),
        name: newComplianceItem.name,
        description: newComplianceItem.description,
        status: newComplianceItem.status as 'pending' | 'in-progress' | 'completed',
        dueDate: newComplianceItem.dueDate,
        assignedTo: newComplianceItem.assignedTo
      };
      
      setEditedData({
        ...editedData,
        complianceItems: [...editedData.complianceItems, item]
      });
      
      setNewComplianceItem({
        name: '',
        description: '',
        status: 'pending'
      });
      
      setIsAddingComplianceItem(false);
    }
  };

  const handleEditComplianceItem = (item: ComplianceItem) => {
    setEditingComplianceId(item.id);
    setNewComplianceItem({...item});
  };

  const handleSaveComplianceEdit = () => {
    if (editingComplianceId && newComplianceItem.name && newComplianceItem.description) {
      const updatedItems = editedData.complianceItems.map(item => 
        item.id === editingComplianceId 
          ? {
              ...item,
              name: newComplianceItem.name || item.name,
              description: newComplianceItem.description || item.description,
              status: newComplianceItem.status as 'pending' | 'in-progress' | 'completed' || item.status,
              dueDate: newComplianceItem.dueDate,
              assignedTo: newComplianceItem.assignedTo
            }
          : item
      );
      
      setEditedData({
        ...editedData,
        complianceItems: updatedItems
      });
      
      setEditingComplianceId(null);
      setNewComplianceItem({
        name: '',
        description: '',
        status: 'pending'
      });
    }
  };

  const handleRemoveComplianceItem = (id: number) => {
    setEditedData({
      ...editedData,
      complianceItems: editedData.complianceItems.filter(item => item.id !== id)
    });
    
    if (editingComplianceId === id) {
      setEditingComplianceId(null);
      setNewComplianceItem({
        name: '',
        description: '',
        status: 'pending'
      });
    }
  };

  // IP Protection Items handlers
  const handleAddIPItem = () => {
    if (newIPItem.name && newIPItem.description && newIPItem.type) {
      const item: IPProtectionItem = {
        id: Date.now(),
        name: newIPItem.name,
        description: newIPItem.description,
        type: newIPItem.type as 'trademark' | 'patent' | 'copyright' | 'trade-secret' | 'other',
        status: newIPItem.status as 'pending' | 'in-progress' | 'completed',
        filingDate: newIPItem.filingDate,
        registrationNumber: newIPItem.registrationNumber
      };
      
      setEditedData({
        ...editedData,
        ipProtectionItems: [...editedData.ipProtectionItems, item]
      });
      
      setNewIPItem({
        name: '',
        description: '',
        type: 'trademark',
        status: 'pending'
      });
      
      setIsAddingIPItem(false);
    }
  };

  const handleEditIPItem = (item: IPProtectionItem) => {
    setEditingIPId(item.id);
    setNewIPItem({...item});
  };

  const handleSaveIPEdit = () => {
    if (editingIPId && newIPItem.name && newIPItem.description && newIPItem.type) {
      const updatedItems = editedData.ipProtectionItems.map(item => 
        item.id === editingIPId 
          ? {
              ...item,
              name: newIPItem.name || item.name,
              description: newIPItem.description || item.description,
              type: newIPItem.type as 'trademark' | 'patent' | 'copyright' | 'trade-secret' | 'other' || item.type,
              status: newIPItem.status as 'pending' | 'in-progress' | 'completed' || item.status,
              filingDate: newIPItem.filingDate,
              registrationNumber: newIPItem.registrationNumber
            }
          : item
      );
      
      setEditedData({
        ...editedData,
        ipProtectionItems: updatedItems
      });
      
      setEditingIPId(null);
      setNewIPItem({
        name: '',
        description: '',
        type: 'trademark',
        status: 'pending'
      });
    }
  };

  const handleRemoveIPItem = (id: number) => {
    setEditedData({
      ...editedData,
      ipProtectionItems: editedData.ipProtectionItems.filter(item => item.id !== id)
    });
    
    if (editingIPId === id) {
      setEditingIPId(null);
      setNewIPItem({
        name: '',
        description: '',
        type: 'trademark',
        status: 'pending'
      });
    }
  };

  // Risk Management Items handlers
  const handleAddRiskItem = () => {
    if (newRiskItem.name && newRiskItem.description && newRiskItem.mitigationStrategy) {
      const item: RiskManagementItem = {
        id: Date.now(),
        name: newRiskItem.name,
        description: newRiskItem.description,
        riskLevel: newRiskItem.riskLevel as 'low' | 'medium' | 'high',
        mitigationStrategy: newRiskItem.mitigationStrategy,
        status: newRiskItem.status as 'pending' | 'in-progress' | 'completed'
      };
      
      setEditedData({
        ...editedData,
        riskManagementItems: [...editedData.riskManagementItems, item]
      });
      
      setNewRiskItem({
        name: '',
        description: '',
        riskLevel: 'medium',
        mitigationStrategy: '',
        status: 'pending'
      });
      
      setIsAddingRiskItem(false);
    }
  };

  const handleEditRiskItem = (item: RiskManagementItem) => {
    setEditingRiskId(item.id);
    setNewRiskItem({...item});
  };

  const handleSaveRiskEdit = () => {
    if (editingRiskId && newRiskItem.name && newRiskItem.description && newRiskItem.mitigationStrategy) {
      const updatedItems = editedData.riskManagementItems.map(item => 
        item.id === editingRiskId 
          ? {
              ...item,
              name: newRiskItem.name || item.name,
              description: newRiskItem.description || item.description,
              riskLevel: newRiskItem.riskLevel as 'low' | 'medium' | 'high' || item.riskLevel,
              mitigationStrategy: newRiskItem.mitigationStrategy || item.mitigationStrategy,
              status: newRiskItem.status as 'pending' | 'in-progress' | 'completed' || item.status
            }
          : item
      );
      
      setEditedData({
        ...editedData,
        riskManagementItems: updatedItems
      });
      
      setEditingRiskId(null);
      setNewRiskItem({
        name: '',
        description: '',
        riskLevel: 'medium',
        mitigationStrategy: '',
        status: 'pending'
      });
    }
  };

  const handleRemoveRiskItem = (id: number) => {
    setEditedData({
      ...editedData,
      riskManagementItems: editedData.riskManagementItems.filter(item => item.id !== id)
    });
    
    if (editingRiskId === id) {
      setEditingRiskId(null);
      setNewRiskItem({
        name: '',
        description: '',
        riskLevel: 'medium',
        mitigationStrategy: '',
        status: 'pending'
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/20';
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'pending':
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'text-red-400 bg-red-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getIPTypeColor = (type: string) => {
    switch (type) {
      case 'trademark':
        return 'text-blue-400 bg-blue-500/20';
      case 'patent':
        return 'text-purple-400 bg-purple-500/20';
      case 'copyright':
        return 'text-green-400 bg-green-500/20';
      case 'trade-secret':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Shield className="w-5 h-5 text-linkedin-light mr-2" />
          Compliance & Protection
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
        Strategic implementation of regulatory compliance frameworks, intellectual property protection strategies, and risk management policies tailored to your industry, business model, and target markets.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('compliance')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'compliance'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Regulatory Compliance
        </button>
        <button
          onClick={() => setActiveTab('ip')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'ip'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          IP Protection
        </button>
        <button
          onClick={() => setActiveTab('risk')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'risk'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Risk Management
        </button>
      </div>
      
      {/* Compliance Items */}
      {activeTab === 'compliance' && (
        <div className="space-y-4">
          {editedData.complianceItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-linkedin-card/30 rounded-lg p-4 ${
                editingComplianceId === item.id ? 'border border-linkedin-light' : ''
              }`}
            >
              {editingComplianceId === item.id ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Compliance Item Name</label>
                    <input
                      type="text"
                      value={newComplianceItem.name}
                      onChange={(e) => setNewComplianceItem({...newComplianceItem, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., GDPR Compliance, Tax Registration"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newComplianceItem.description}
                      onChange={(e) => setNewComplianceItem({...newComplianceItem, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this compliance requirement..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Status</label>
                      <select
                        value={newComplianceItem.status}
                        onChange={(e) => setNewComplianceItem({...newComplianceItem, status: e.target.value as any})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      >
                        <option value="pending" className="bg-slate-800">Pending</option>
                        <option value="in-progress" className="bg-slate-800">In Progress</option>
                        <option value="completed" className="bg-slate-800">Completed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Due Date</label>
                      <input
                        type="date"
                        value={newComplianceItem.dueDate}
                        onChange={(e) => setNewComplianceItem({...newComplianceItem, dueDate: e.target.value})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Assigned To</label>
                      <input
                        type="text"
                        value={newComplianceItem.assignedTo}
                        onChange={(e) => setNewComplianceItem({...newComplianceItem, assignedTo: e.target.value})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="e.g., Legal Team, John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingComplianceId(null);
                        setNewComplianceItem({
                          name: '',
                          description: '',
                          status: 'pending'
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveComplianceEdit}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{item.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                      {isEditing && (
                        <>
                          <button
                            onClick={() => handleEditComplianceItem(item)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleRemoveComplianceItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div>
                      {item.dueDate && <span>Due: {new Date(item.dueDate).toLocaleDateString()}</span>}
                    </div>
                    <div>
                      {item.assignedTo && <span>Assigned to: {item.assignedTo}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isEditing && isAddingComplianceItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Compliance Item Name</label>
                  <input
                    type="text"
                    value={newComplianceItem.name}
                    onChange={(e) => setNewComplianceItem({...newComplianceItem, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., GDPR Compliance, Tax Registration"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Description</label>
                  <textarea
                    value={newComplianceItem.description}
                    onChange={(e) => setNewComplianceItem({...newComplianceItem, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this compliance requirement..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Status</label>
                    <select
                      value={newComplianceItem.status}
                      onChange={(e) => setNewComplianceItem({...newComplianceItem, status: e.target.value as any})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="pending" className="bg-slate-800">Pending</option>
                      <option value="in-progress" className="bg-slate-800">In Progress</option>
                      <option value="completed" className="bg-slate-800">Completed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Due Date</label>
                    <input
                      type="date"
                      value={newComplianceItem.dueDate}
                      onChange={(e) => setNewComplianceItem({...newComplianceItem, dueDate: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Assigned To</label>
                    <input
                      type="text"
                      value={newComplianceItem.assignedTo}
                      onChange={(e) => setNewComplianceItem({...newComplianceItem, assignedTo: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., Legal Team, John Doe"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setIsAddingComplianceItem(false);
                      setNewComplianceItem({
                        name: '',
                        description: '',
                        status: 'pending'
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddComplianceItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {editedData.complianceItems.length === 0 && !isAddingComplianceItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-6">
              <p className="text-gray-400 text-sm">Based on your business model and target markets, I've identified several key compliance requirements you'll need to address:</p>
              <ul className="text-gray-300 text-sm mt-4 space-y-2 list-disc pl-6">
                <li>Data protection and privacy compliance (GDPR, CCPA)</li>
                <li>Industry-specific regulatory requirements</li>
                <li>Employment law compliance</li>
                <li>Tax registration and compliance</li>
                <li>Corporate governance requirements</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">Click the edit button to begin implementing these compliance measures.</p>
            </div>
          )}
          
          {isEditing && !isAddingComplianceItem && (
            <button
              onClick={() => setIsAddingComplianceItem(true)}
              className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Compliance Item</span>
            </button>
          )}
        </div>
      )}
      
      {/* IP Protection Items */}
      {activeTab === 'ip' && (
        <div className="space-y-4">
          {editedData.ipProtectionItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-linkedin-card/30 rounded-lg p-4 ${
                editingIPId === item.id ? 'border border-linkedin-light' : ''
              }`}
            >
              {editingIPId === item.id ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">IP Item Name</label>
                    <input
                      type="text"
                      value={newIPItem.name}
                      onChange={(e) => setNewIPItem({...newIPItem, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., Company Logo, Product Patent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newIPItem.description}
                      onChange={(e) => setNewIPItem({...newIPItem, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this intellectual property..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">IP Type</label>
                      <select
                        value={newIPItem.type}
                        onChange={(e) => setNewIPItem({...newIPItem, type: e.target.value as any})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      >
                        <option value="trademark" className="bg-slate-800">Trademark</option>
                        <option value="patent" className="bg-slate-800">Patent</option>
                        <option value="copyright" className="bg-slate-800">Copyright</option>
                        <option value="trade-secret" className="bg-slate-800">Trade Secret</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Status</label>
                      <select
                        value={newIPItem.status}
                        onChange={(e) => setNewIPItem({...newIPItem, status: e.target.value as any})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      >
                        <option value="pending" className="bg-slate-800">Pending</option>
                        <option value="in-progress" className="bg-slate-800">In Progress</option>
                        <option value="completed" className="bg-slate-800">Completed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Filing Date</label>
                      <input
                        type="date"
                        value={newIPItem.filingDate}
                        onChange={(e) => setNewIPItem({...newIPItem, filingDate: e.target.value})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Registration Number</label>
                      <input
                        type="text"
                        value={newIPItem.registrationNumber}
                        onChange={(e) => setNewIPItem({...newIPItem, registrationNumber: e.target.value})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="e.g., TM123456789"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingIPId(null);
                        setNewIPItem({
                          name: '',
                          description: '',
                          type: 'trademark',
                          status: 'pending'
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveIPEdit}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-white font-medium text-sm">{item.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${getIPTypeColor(item.type)}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                      {isEditing && (
                        <>
                          <button
                            onClick={() => handleEditIPItem(item)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleRemoveIPItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div>
                      {item.filingDate && <span>Filed: {new Date(item.filingDate).toLocaleDateString()}</span>}
                    </div>
                    <div>
                      {item.registrationNumber && <span>Reg #: {item.registrationNumber}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isEditing && isAddingIPItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">IP Item Name</label>
                  <input
                    type="text"
                    value={newIPItem.name}
                    onChange={(e) => setNewIPItem({...newIPItem, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Company Logo, Product Patent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Description</label>
                  <textarea
                    value={newIPItem.description}
                    onChange={(e) => setNewIPItem({...newIPItem, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this intellectual property..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">IP Type</label>
                    <select
                      value={newIPItem.type}
                      onChange={(e) => setNewIPItem({...newIPItem, type: e.target.value as any})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="trademark" className="bg-slate-800">Trademark</option>
                      <option value="patent" className="bg-slate-800">Patent</option>
                      <option value="copyright" className="bg-slate-800">Copyright</option>
                      <option value="trade-secret" className="bg-slate-800">Trade Secret</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Status</label>
                    <select
                      value={newIPItem.status}
                      onChange={(e) => setNewIPItem({...newIPItem, status: e.target.value as any})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="pending" className="bg-slate-800">Pending</option>
                      <option value="in-progress" className="bg-slate-800">In Progress</option>
                      <option value="completed" className="bg-slate-800">Completed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Filing Date</label>
                    <input
                      type="date"
                      value={newIPItem.filingDate}
                      onChange={(e) => setNewIPItem({...newIPItem, filingDate: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Registration Number</label>
                    <input
                      type="text"
                      value={newIPItem.registrationNumber}
                      onChange={(e) => setNewIPItem({...newIPItem, registrationNumber: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., TM123456789"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setIsAddingIPItem(false);
                      setNewIPItem({
                        name: '',
                        description: '',
                        type: 'trademark',
                        status: 'pending'
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddIPItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {editedData.ipProtectionItems.length === 0 && !isAddingIPItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm">No IP protection items added yet.</p>
            </div>
          )}
          
          {isEditing && !isAddingIPItem && (
            <button
              onClick={() => setIsAddingIPItem(true)}
              className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add IP Protection Item</span>
            </button>
          )}
        </div>
      )}
      
      {/* Risk Management Items */}
      {activeTab === 'risk' && (
        <div className="space-y-4">
          {editedData.riskManagementItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-linkedin-card/30 rounded-lg p-4 ${
                editingRiskId === item.id ? 'border border-linkedin-light' : ''
              }`}
            >
              {editingRiskId === item.id ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Risk Item Name</label>
                    <input
                      type="text"
                      value={newRiskItem.name}
                      onChange={(e) => setNewRiskItem({...newRiskItem, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., Data Breach Risk, Regulatory Change Risk"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newRiskItem.description}
                      onChange={(e) => setNewRiskItem({...newRiskItem, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this risk..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Risk Level</label>
                      <select
                        value={newRiskItem.riskLevel}
                        onChange={(e) => setNewRiskItem({...newRiskItem, riskLevel: e.target.value as any})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      >
                        <option value="low" className="bg-slate-800">Low</option>
                        <option value="medium" className="bg-slate-800">Medium</option>
                        <option value="high" className="bg-slate-800">High</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-xs mb-1">Status</label>
                      <select
                        value={newRiskItem.status}
                        onChange={(e) => setNewRiskItem({...newRiskItem, status: e.target.value as any})}
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                      >
                        <option value="pending" className="bg-slate-800">Pending</option>
                        <option value="in-progress" className="bg-slate-800">In Progress</option>
                        <option value="completed" className="bg-slate-800">Completed</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Mitigation Strategy</label>
                    <textarea
                      value={newRiskItem.mitigationStrategy}
                      onChange={(e) => setNewRiskItem({...newRiskItem, mitigationStrategy: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={3}
                      placeholder="Describe the strategy to mitigate this risk..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingRiskId(null);
                        setNewRiskItem({
                          name: '',
                          description: '',
                          riskLevel: 'medium',
                          mitigationStrategy: '',
                          status: 'pending'
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveRiskEdit}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{item.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevelColor(item.riskLevel)}`}>
                        {item.riskLevel.charAt(0).toUpperCase() + item.riskLevel.slice(1)} Risk
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                      {isEditing && (
                        <>
                          <button
                            onClick={() => handleEditRiskItem(item)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleRemoveRiskItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-2">{item.description}</p>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-3">
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Mitigation Strategy</h5>
                    <p className="text-gray-300 text-xs">{item.mitigationStrategy}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isEditing && isAddingRiskItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Risk Item Name</label>
                  <input
                    type="text"
                    value={newRiskItem.name}
                    onChange={(e) => setNewRiskItem({...newRiskItem, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Data Breach Risk, Regulatory Change Risk"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Description</label>
                  <textarea
                    value={newRiskItem.description}
                    onChange={(e) => setNewRiskItem({...newRiskItem, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this risk..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Risk Level</label>
                    <select
                      value={newRiskItem.riskLevel}
                      onChange={(e) => setNewRiskItem({...newRiskItem, riskLevel: e.target.value as any})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="low" className="bg-slate-800">Low</option>
                      <option value="medium" className="bg-slate-800">Medium</option>
                      <option value="high" className="bg-slate-800">High</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Status</label>
                    <select
                      value={newRiskItem.status}
                      onChange={(e) => setNewRiskItem({...newRiskItem, status: e.target.value as any})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="pending" className="bg-slate-800">Pending</option>
                      <option value="in-progress" className="bg-slate-800">In Progress</option>
                      <option value="completed" className="bg-slate-800">Completed</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Mitigation Strategy</label>
                  <textarea
                    value={newRiskItem.mitigationStrategy}
                    onChange={(e) => setNewRiskItem({...newRiskItem, mitigationStrategy: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={3}
                    placeholder="Describe the strategy to mitigate this risk..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setIsAddingRiskItem(false);
                      setNewRiskItem({
                        name: '',
                        description: '',
                        riskLevel: 'medium',
                        mitigationStrategy: '',
                        status: 'pending'
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddRiskItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {editedData.riskManagementItems.length === 0 && !isAddingRiskItem && (
            <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm">No risk management items added yet.</p>
            </div>
          )}
          
          {isEditing && !isAddingRiskItem && (
            <button
              onClick={() => setIsAddingRiskItem(true)}
              className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Risk Management Item</span>
            </button>
          )}
        </div>
      )}
      
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(complianceProtectionData);
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

export default ComplianceProtectionInputs;