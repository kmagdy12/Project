import React, { useState } from 'react';
import { 
  Save, 
  ArrowLeft, 
  ArrowRight,
  Edit2,
  Calendar,
  DollarSign,
  FileText,
  Eye,
  MapPin,
  Users,
  Clock
} from 'lucide-react';

interface CreateWorkshopProps {
  onSectionChange: (section: string) => void;
}

const CreateWorkshop: React.FC<CreateWorkshopProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'logistics' | 'content' | 'preview'>('details');
  const [workshopData, setWorkshopData] = useState({
    details: {
      title: '',
      objectives: '',
      targetAudience: '',
      skillLevel: '',
      agenda: ''
    },
    logistics: {
      capacity: '',
      duration: '',
      pricing: '',
      registrationDeadline: '',
      locationType: ''
    },
    content: {
      materials: '',
      resources: '',
      prerequisites: '',
      certificates: '',
      postWorkshop: ''
    }
  });

  const handleInputChange = (section: 'details' | 'logistics' | 'content', field: string, value: string) => {
    setWorkshopData({
      ...workshopData,
      [section]: {
        ...workshopData[section],
        [field]: value
      }
    });
  };

  const handleSave = () => {
    console.log('Saving workshop:', workshopData);
    // In a real implementation, this would save the workshop to the database
  };

  const handlePublish = () => {
    console.log('Publishing workshop:', workshopData);
    // In a real implementation, this would publish the workshop
    onSectionChange('overview');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create New Workshop</h1>
          <p className="text-gray-300">Design and schedule your workshop offering</p>
        </div>
        <button
          onClick={() => onSectionChange('overview')}
          className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 overflow-x-auto mb-6">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'details'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Workshop Details
          </button>
          <button
            onClick={() => setActiveTab('logistics')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'logistics'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Settings & Logistics
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Content Management
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'preview'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Preview & Publish
          </button>
        </div>

        {/* Workshop Details Tab */}
        {activeTab === 'details' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Workshop Details</h2>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Workshop Title</label>
              <input
                type="text"
                value={workshopData.details.title}
                onChange={(e) => handleInputChange('details', 'title', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                placeholder="e.g., Fundraising Masterclass: From Seed to Series A"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Learning Objectives</label>
              <textarea
                value={workshopData.details.objectives}
                onChange={(e) => handleInputChange('details', 'objectives', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="List the key learning objectives participants will achieve..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Target Audience</label>
              <textarea
                value={workshopData.details.targetAudience}
                onChange={(e) => handleInputChange('details', 'targetAudience', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Describe who would benefit most from this workshop..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Skill Level</label>
              <select
                value={workshopData.details.skillLevel}
                onChange={(e) => handleInputChange('details', 'skillLevel', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="" className="bg-slate-800">Select skill level</option>
                <option value="beginner" className="bg-slate-800">Beginner</option>
                <option value="intermediate" className="bg-slate-800">Intermediate</option>
                <option value="advanced" className="bg-slate-800">Advanced</option>
                <option value="all-levels" className="bg-slate-800">All Levels</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Workshop Agenda</label>
              <textarea
                value={workshopData.details.agenda}
                onChange={(e) => handleInputChange('details', 'agenda', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={5}
                placeholder="Outline the workshop agenda with time allocations..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('logistics')}
                className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
              >
                <span>Continue to Settings & Logistics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Settings & Logistics Tab */}
        {activeTab === 'logistics' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Settings & Logistics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Participant Capacity</label>
                <input
                  type="number"
                  value={workshopData.logistics.capacity}
                  onChange={(e) => handleInputChange('logistics', 'capacity', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  placeholder="e.g., 25"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Duration</label>
                <input
                  type="text"
                  value={workshopData.logistics.duration}
                  onChange={(e) => handleInputChange('logistics', 'duration', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  placeholder="e.g., 4 hours, 2 days"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Pricing Structure</label>
              <textarea
                value={workshopData.logistics.pricing}
                onChange={(e) => handleInputChange('logistics', 'pricing', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Describe your pricing structure, including any early bird or group discounts..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Registration Deadline</label>
              <input
                type="text"
                value={workshopData.logistics.registrationDeadline}
                onChange={(e) => handleInputChange('logistics', 'registrationDeadline', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                placeholder="e.g., 3 days before workshop, December 15, 2025"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Location/Format Type</label>
              <select
                value={workshopData.logistics.locationType}
                onChange={(e) => handleInputChange('logistics', 'locationType', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="" className="bg-slate-800">Select location type</option>
                <option value="virtual" className="bg-slate-800">Virtual</option>
                <option value="in-person" className="bg-slate-800">In-Person</option>
                <option value="hybrid" className="bg-slate-800">Hybrid</option>
              </select>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('details')}
                className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Workshop Details</span>
              </button>
              
              <button
                onClick={() => setActiveTab('content')}
                className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
              >
                <span>Continue to Content Management</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Content Management</h2>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Workshop Materials</label>
              <textarea
                value={workshopData.content.materials}
                onChange={(e) => handleInputChange('content', 'materials', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="Describe the materials participants will receive..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Resource Library</label>
              <textarea
                value={workshopData.content.resources}
                onChange={(e) => handleInputChange('content', 'resources', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="List any additional resources you'll provide..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Prerequisites</label>
              <textarea
                value={workshopData.content.prerequisites}
                onChange={(e) => handleInputChange('content', 'prerequisites', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="List any prerequisites participants should have..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Certificates Setup</label>
              <textarea
                value={workshopData.content.certificates}
                onChange={(e) => handleInputChange('content', 'certificates', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Describe any certificates or credentials participants will receive..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Post-Workshop Content</label>
              <textarea
                value={workshopData.content.postWorkshop}
                onChange={(e) => handleInputChange('content', 'postWorkshop', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Describe any follow-up content or resources participants will receive..."
              />
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('logistics')}
                className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Settings & Logistics</span>
              </button>
              
              <button
                onClick={() => setActiveTab('preview')}
                className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
              >
                <span>Continue to Preview & Publish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Preview & Publish Tab */}
        {activeTab === 'preview' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Preview & Publish</h2>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-xl p-6 border border-linkedin-border/50">
              <h3 className="text-2xl font-bold text-white mb-2">{workshopData.details.title || 'Workshop Title'}</h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{workshopData.logistics.duration || 'Duration'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{workshopData.logistics.capacity || '0'} participants</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{workshopData.logistics.locationType || 'Location type'}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Learning Objectives</h4>
                <p className="text-gray-300">{workshopData.details.objectives || 'No objectives provided.'}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Target Audience</h4>
                <p className="text-gray-300">{workshopData.details.targetAudience || 'No target audience provided.'}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Workshop Agenda</h4>
                <p className="text-gray-300">{workshopData.details.agenda || 'No agenda provided.'}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Pricing</h4>
                <p className="text-gray-300">{workshopData.logistics.pricing || 'No pricing provided.'}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-linkedin/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linkedin/20 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-linkedin-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Workshop Visibility</h4>
                  <p className="text-gray-400 text-sm">Control who can see and register for your workshop</p>
                </div>
              </div>
              <select className="bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin">
                <option value="public" className="bg-slate-800">Public</option>
                <option value="private" className="bg-slate-800">Private</option>
                <option value="invite" className="bg-slate-800">Invite Only</option>
              </select>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('content')}
                className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Content Management</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Draft</span>
                </button>
                
                <button
                  onClick={handlePublish}
                  className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
                >
                  <span>Publish Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Add missing Settings component
const Settings = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default CreateWorkshop;