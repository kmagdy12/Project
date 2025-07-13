import React, { useState } from 'react';
import { 
  Edit2, 
  Save,
  FileText,
  Plus,
  Trash2,
  Download
} from 'lucide-react';

interface LegalTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
  category: 'founder' | 'employee' | 'customer' | 'vendor' | 'other';
}

interface TemplatesInputsProps {
  templates: LegalTemplate[];
  onUpdateTemplates: (templates: LegalTemplate[]) => void;
}

const TemplatesInputs: React.FC<TemplatesInputsProps> = ({ 
  templates, 
  onUpdateTemplates 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTemplateId, setEditingTemplateId] = useState<number | null>(null);
  const [newTemplate, setNewTemplate] = useState<Partial<LegalTemplate>>({
    name: '',
    description: '',
    content: '',
    category: 'other'
  });
  const [isAddingTemplate, setIsAddingTemplate] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'founder' | 'employee' | 'customer' | 'vendor' | 'other'>('all');

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleAddTemplate = () => {
    if (newTemplate.name && newTemplate.content && newTemplate.category) {
      const template: LegalTemplate = {
        id: Date.now(),
        name: newTemplate.name,
        description: newTemplate.description || '',
        content: newTemplate.content,
        category: newTemplate.category as 'founder' | 'employee' | 'customer' | 'vendor' | 'other'
      };
      
      onUpdateTemplates([...templates, template]);
      setNewTemplate({
        name: '',
        description: '',
        content: '',
        category: 'other'
      });
      setIsAddingTemplate(false);
    }
  };

  const handleEditTemplate = (template: LegalTemplate) => {
    setEditingTemplateId(template.id);
    setNewTemplate({...template});
  };

  const handleSaveEdit = () => {
    if (editingTemplateId && newTemplate.name && newTemplate.content && newTemplate.category) {
      const updatedTemplates = templates.map(template => 
        template.id === editingTemplateId 
          ? {
              ...template,
              name: newTemplate.name || template.name,
              description: newTemplate.description || template.description,
              content: newTemplate.content || template.content,
              category: newTemplate.category as 'founder' | 'employee' | 'customer' | 'vendor' | 'other' || template.category
            }
          : template
      );
      
      onUpdateTemplates(updatedTemplates);
      setEditingTemplateId(null);
      setNewTemplate({
        name: '',
        description: '',
        content: '',
        category: 'other'
      });
    }
  };

  const handleRemoveTemplate = (id: number) => {
    onUpdateTemplates(templates.filter(template => template.id !== id));
    
    if (editingTemplateId === id) {
      setEditingTemplateId(null);
      setNewTemplate({
        name: '',
        description: '',
        content: '',
        category: 'other'
      });
    }
  };

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'founder':
        return 'Founder Agreements';
      case 'employee':
        return 'Employee Contracts';
      case 'customer':
        return 'Customer Terms';
      case 'vendor':
        return 'Vendor Agreements';
      case 'other':
        return 'Other Documents';
      default:
        return 'All Templates';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <FileText className="w-5 h-5 text-linkedin-light mr-2" />
          Legal Templates
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
        AI-generated legal document templates customized for your specific business model, industry requirements, and jurisdictional context. These templates protect your business interests while ensuring regulatory compliance.
      </p>
      
      {/* Category Filter */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          All Templates
        </button>
        <button
          onClick={() => setActiveCategory('founder')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'founder'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Founder Agreements
        </button>
        <button
          onClick={() => setActiveCategory('employee')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'employee'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Employee Contracts
        </button>
        <button
          onClick={() => setActiveCategory('customer')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'customer'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Customer Terms
        </button>
        <button
          onClick={() => setActiveCategory('vendor')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'vendor'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Vendor Agreements
        </button>
        <button
          onClick={() => setActiveCategory('other')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'other'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Other Documents
        </button>
      </div>
      
      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTemplates.map((template) => (
          <div 
            key={template.id} 
            className={`bg-linkedin-card/30 rounded-lg p-4 ${
              editingTemplateId === template.id ? 'border border-linkedin-light' : ''
            }`}
          >
            {editingTemplateId === template.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Template Name</label>
                  <input
                    type="text"
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Founder Agreement, Employment Contract"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Category</label>
                  <select
                    value={newTemplate.category}
                    onChange={(e) => setNewTemplate({...newTemplate, category: e.target.value as any})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                  >
                    <option value="founder" className="bg-slate-800">Founder Agreements</option>
                    <option value="employee" className="bg-slate-800">Employee Contracts</option>
                    <option value="customer" className="bg-slate-800">Customer Terms</option>
                    <option value="vendor" className="bg-slate-800">Vendor Agreements</option>
                    <option value="other" className="bg-slate-800">Other Documents</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Description</label>
                  <textarea
                    value={newTemplate.description}
                    onChange={(e) => setNewTemplate({...newTemplate, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this template..."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Template Content</label>
                  <textarea
                    value={newTemplate.content}
                    onChange={(e) => setNewTemplate({...newTemplate, content: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={6}
                    placeholder="Enter the template content..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setEditingTemplateId(null);
                      setNewTemplate({
                        name: '',
                        description: '',
                        content: '',
                        category: 'other'
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
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
                  <div>
                    <h4 className="text-white font-medium text-sm">{template.name}</h4>
                    <p className="text-gray-400 text-xs">{getCategoryLabel(template.category)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isEditing && (
                      <>
                        <button
                          onClick={() => handleEditTemplate(template)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleRemoveTemplate(template.id)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </>
                    )}
                    <button
                      className="p-1 text-gray-400 hover:text-linkedin-light transition-colors"
                    >
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {template.description && (
                  <p className="text-gray-300 text-xs mb-2">{template.description}</p>
                )}
                
                <div className="bg-linkedin-card/50 rounded-lg p-3 max-h-32 overflow-y-auto">
                  <pre className="text-gray-300 text-xs whitespace-pre-wrap">{template.content.substring(0, 200)}...<span className="text-linkedin-light">(click edit to view full template)</span></pre>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Add Template Form */}
        {isEditing && isAddingTemplate && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Template Name</label>
                <input
                  type="text"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Founder Agreement, Employment Contract"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Category</label>
                <select
                  value={newTemplate.category}
                  onChange={(e) => setNewTemplate({...newTemplate, category: e.target.value as any})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                >
                  <option value="founder" className="bg-slate-800">Founder Agreements</option>
                  <option value="employee" className="bg-slate-800">Employee Contracts</option>
                  <option value="customer" className="bg-slate-800">Customer Terms</option>
                  <option value="vendor" className="bg-slate-800">Vendor Agreements</option>
                  <option value="other" className="bg-slate-800">Other Documents</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Description</label>
                <textarea
                  value={newTemplate.description}
                  onChange={(e) => setNewTemplate({...newTemplate, description: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe this template..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Template Content</label>
                <textarea
                  value={newTemplate.content}
                  onChange={(e) => setNewTemplate({...newTemplate, content: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={6}
                  placeholder="Enter the template content..."
                />
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingTemplate(false);
                    setNewTemplate({
                      name: '',
                      description: '',
                      content: '',
                      category: 'other'
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTemplate}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                >
                  <Save className="w-3 h-3" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm">I'm ready to generate customized legal templates for your business. Based on your business model, I recommend starting with founder agreements, employment contracts, and customer terms of service. Click the edit button to begin.</p>
          </div>
        )}
      </div>
      
      {/* Add Template Button */}
      {isEditing && !isAddingTemplate && (
        <button
          onClick={() => setIsAddingTemplate(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Template</span>
        </button>
      )}
      
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => {
              setIsEditing(false);
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

export default TemplatesInputs;