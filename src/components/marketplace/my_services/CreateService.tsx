import React, { useState } from 'react';
import { 
  Save, 
  ArrowLeft, 
  ArrowRight,
  Edit2,
  Briefcase,
  DollarSign,
  FileText,
  Eye
} from 'lucide-react';

interface CreateServiceProps {
  onSectionChange: (section: string) => void;
}

const CreateService: React.FC<CreateServiceProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'pricing' | 'content' | 'preview'>('details');
  const [serviceData, setServiceData] = useState({
    details: {
      title: '',
      tagline: '',
      category: '',
      description: '',
      targetAudience: '',
      objectives: ''
    },
    pricing: {
      pricingModel: '',
      rate: '',
      packages: '',
      deliveryFormat: '',
      duration: ''
    },
    content: {
      prerequisites: '',
      deliverables: '',
      methodology: '',
      successCriteria: '',
      terms: ''
    }
  });

  const handleInputChange = (section: 'details' | 'pricing' | 'content', field: string, value: string) => {
    setServiceData({
      ...serviceData,
      [section]: {
        ...serviceData[section],
        [field]: value
      }
    });
  };

  const handleSave = () => {
    console.log('Saving service:', serviceData);
    // In a real implementation, this would save the service to the database
  };

  const handlePublish = () => {
    console.log('Publishing service:', serviceData);
    // In a real implementation, this would publish the service
    onSectionChange('overview');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create New Service</h1>
          <p className="text-gray-300">Define your service offering and pricing strategy</p>
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
            Service Details
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'pricing'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Pricing & Delivery
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Content Definition
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

        {/* Service Details Tab */}
        {activeTab === 'details' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Service Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Service Title</label>
                <input
                  type="text"
                  value={serviceData.details.title}
                  onChange={(e) => handleInputChange('details', 'title', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  placeholder="e.g., Startup Strategy Consultation"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Tagline</label>
                <input
                  type="text"
                  value={serviceData.details.tagline}
                  onChange={(e) => handleInputChange('details', 'tagline', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  placeholder="e.g., Expert guidance for early-stage startups"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Category</label>
              <select
                value={serviceData.details.category}
                onChange={(e) => handleInputChange('details', 'category', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="" className="bg-slate-800">Select a category</option>
                <option value="strategy" className="bg-slate-800">Business Strategy</option>
                <option value="fundraising" className="bg-slate-800">Fundraising</option>
                <option value="marketing" className="bg-slate-800">Marketing</option>
                <option value="product" className="bg-slate-800">Product Development</option>
                <option value="technology" className="bg-slate-800">Technology</option>
                <option value="legal" className="bg-slate-800">Legal</option>
                <option value="finance" className="bg-slate-800">Finance</option>
                <option value="operations" className="bg-slate-800">Operations</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Detailed Description</label>
              <textarea
                value={serviceData.details.description}
                onChange={(e) => handleInputChange('details', 'description', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={5}
                placeholder="Provide a comprehensive description of your service..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Target Audience</label>
              <textarea
                value={serviceData.details.targetAudience}
                onChange={(e) => handleInputChange('details', 'targetAudience', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Describe who would benefit most from this service..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Service Objectives</label>
              <textarea
                value={serviceData.details.objectives}
                onChange={(e) => handleInputChange('details', 'objectives', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="List the key objectives clients will achieve..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('pricing')}
                className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
              >
                <span>Continue to Pricing & Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Pricing & Delivery Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Pricing & Delivery</h2>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Pricing Model</label>
              <select
                value={serviceData.pricing.pricingModel}
                onChange={(e) => handleInputChange('pricing', 'pricingModel', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="" className="bg-slate-800">Select a pricing model</option>
                <option value="hourly" className="bg-slate-800">Hourly Rate</option>
                <option value="fixed" className="bg-slate-800">Fixed Price</option>
                <option value="retainer" className="bg-slate-800">Monthly Retainer</option>
                <option value="subscription" className="bg-slate-800">Subscription</option>
                <option value="tiered" className="bg-slate-800">Tiered Pricing</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Rate Settings</label>
              <input
                type="text"
                value={serviceData.pricing.rate}
                onChange={(e) => handleInputChange('pricing', 'rate', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                placeholder="e.g., $200/hour or $1,500 fixed price"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Package Options</label>
              <textarea
                value={serviceData.pricing.packages}
                onChange={(e) => handleInputChange('pricing', 'packages', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="Describe any package options or tiers you offer..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Delivery Format</label>
                <select
                  value={serviceData.pricing.deliveryFormat}
                  onChange={(e) => handleInputChange('pricing', 'deliveryFormat', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
                >
                  <option value="" className="bg-slate-800">Select a format</option>
                  <option value="virtual" className="bg-slate-800">Virtual Meeting</option>
                  <option value="in-person" className="bg-slate-800">In-Person</option>
                  <option value="hybrid" className="bg-slate-800">Hybrid</option>
                  <option value="written" className="bg-slate-800">Written Consultation</option>
                  <option value="recorded" className="bg-slate-800">Recorded Session</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Duration Settings</label>
                <input
                  type="text"
                  value={serviceData.pricing.duration}
                  onChange={(e) => handleInputChange('pricing', 'duration', e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  placeholder="e.g., 1 hour, 90 minutes, 2 weeks"
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('details')}
                className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Service Details</span>
              </button>
              
              <button
                onClick={() => setActiveTab('content')}
                className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg transition-all"
              >
                <span>Continue to Content Definition</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Content Definition Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Content Definition</h2>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Prerequisites</label>
              <textarea
                value={serviceData.content.prerequisites}
                onChange={(e) => handleInputChange('content', 'prerequisites', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="List any prerequisites clients should have before engaging with this service..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Deliverables</label>
              <textarea
                value={serviceData.content.deliverables}
                onChange={(e) => handleInputChange('content', 'deliverables', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="List all deliverables clients will receive..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Methodology</label>
              <textarea
                value={serviceData.content.methodology}
                onChange={(e) => handleInputChange('content', 'methodology', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="Describe your approach and methodology..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Success Criteria</label>
              <textarea
                value={serviceData.content.successCriteria}
                onChange={(e) => handleInputChange('content', 'successCriteria', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={3}
                placeholder="Define how success will be measured..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Terms and Conditions</label>
              <textarea
                value={serviceData.content.terms}
                onChange={(e) => handleInputChange('content', 'terms', e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
                placeholder="Outline your terms and conditions..."
              />
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('pricing')}
                className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Pricing & Delivery</span>
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
              <h3 className="text-2xl font-bold text-white mb-2">{serviceData.details.title || 'Service Title'}</h3>
              <p className="text-linkedin-light text-lg mb-4">{serviceData.details.tagline || 'Service Tagline'}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Description</h4>
                <p className="text-gray-300">{serviceData.details.description || 'No description provided.'}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Pricing</h4>
                  <p className="text-gray-300">{serviceData.pricing.rate || 'No pricing provided.'}</p>
                  <p className="text-gray-400 text-sm mt-1">{serviceData.pricing.pricingModel || 'No pricing model selected.'}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Duration & Format</h4>
                  <p className="text-gray-300">{serviceData.pricing.duration || 'No duration provided.'}</p>
                  <p className="text-gray-400 text-sm mt-1">{serviceData.pricing.deliveryFormat || 'No delivery format selected.'}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Deliverables</h4>
                <p className="text-gray-300">{serviceData.content.deliverables || 'No deliverables provided.'}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Target Audience</h4>
                <p className="text-gray-300">{serviceData.details.targetAudience || 'No target audience provided.'}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-linkedin/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linkedin/20 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-linkedin-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Service Visibility</h4>
                  <p className="text-gray-400 text-sm">Control who can see and book your service</p>
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
                <span>Back to Content Definition</span>
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
                  <span>Publish Service</span>
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

export default CreateService;