import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  ArrowLeft, 
  Search, 
  Filter, 
  Star, 
  Calendar, 
  Clock, 
  Mail, 
  Phone,
  Plus,
  Edit2,
  Trash2,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';

interface ClientManagementProps {
  onSectionChange: (section: string) => void;
}

const ClientManagement: React.FC<ClientManagementProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState<'crm' | 'communication'>('crm');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedClientId, setExpandedClientId] = useState<number | null>(null);

  // Mock data for clients
  const clients = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      company: 'TechStart Dubai',
      email: 'ahmed@techstart.ae',
      phone: '+971 50 123 4567',
      location: 'Dubai, UAE',
      industry: 'Technology',
      status: 'active',
      lastInteraction: '2 days ago',
      totalSessions: 5,
      totalRevenue: '$2,500',
      rating: 4.9,
      notes: 'Working on Series A funding. Needs help with pitch deck and investor relations.',
      projects: [
        { id: 1, name: 'Pitch Deck Creation', status: 'completed', date: '2025-04-15' },
        { id: 2, name: 'Investor Relations Strategy', status: 'in-progress', date: '2025-05-10' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Khalil',
      company: 'FinanceFlow',
      email: 'sarah@financeflow.com',
      phone: '+971 55 987 6543',
      location: 'Abu Dhabi, UAE',
      industry: 'Fintech',
      status: 'active',
      lastInteraction: '1 week ago',
      totalSessions: 3,
      totalRevenue: '$1,800',
      rating: 4.8,
      notes: 'Focusing on product-market fit. Needs guidance on user research and product strategy.',
      projects: [
        { id: 1, name: 'User Research Plan', status: 'completed', date: '2025-04-20' },
        { id: 2, name: 'Product Strategy Workshop', status: 'scheduled', date: '2025-05-25' }
      ]
    },
    {
      id: 3,
      name: 'Omar Al-Zahra',
      company: 'HealthTech Solutions',
      email: 'omar@healthtech.com',
      phone: '+971 52 456 7890',
      location: 'Riyadh, Saudi Arabia',
      industry: 'Healthcare',
      status: 'inactive',
      lastInteraction: '3 months ago',
      totalSessions: 2,
      totalRevenue: '$1,200',
      rating: 4.7,
      notes: 'Looking to expand to new markets in GCC. Currently on hold due to regulatory approvals.',
      projects: [
        { id: 1, name: 'Market Entry Strategy', status: 'completed', date: '2025-02-10' }
      ]
    },
    {
      id: 4,
      name: 'Layla Mansouri',
      company: 'EduTech MENA',
      email: 'layla@edutech.com',
      phone: '+971 54 789 0123',
      location: 'Cairo, Egypt',
      industry: 'Education',
      status: 'active',
      lastInteraction: '3 days ago',
      totalSessions: 4,
      totalRevenue: '$2,200',
      rating: 5.0,
      notes: 'Scaling operations across MENA. Needs help with growth marketing and team building.',
      projects: [
        { id: 1, name: 'Growth Marketing Strategy', status: 'in-progress', date: '2025-05-05' },
        { id: 2, name: 'Team Building Workshop', status: 'scheduled', date: '2025-06-10' }
      ]
    }
  ];

  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mock data for messages
  const messages = [
    {
      id: 1,
      clientId: 1,
      clientName: 'Ahmed Hassan',
      clientCompany: 'TechStart Dubai',
      clientAvatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Thanks for the session yesterday. I found it very helpful!',
      timestamp: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      clientId: 4,
      clientName: 'Layla Mansouri',
      clientCompany: 'EduTech MENA',
      clientAvatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Looking forward to our next session on growth marketing.',
      timestamp: '1 day ago',
      unread: false
    },
    {
      id: 3,
      clientId: 2,
      clientName: 'Sarah Khalil',
      clientCompany: 'FinanceFlow',
      clientAvatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Can we reschedule our meeting to next week?',
      timestamp: '3 days ago',
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'inactive':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400';
      case 'scheduled':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
          <p className="text-gray-300">Manage your client relationships and communications</p>
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
            onClick={() => setActiveTab('crm')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'crm'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Client Relationship Management
          </button>
          <button
            onClick={() => setActiveTab('communication')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'communication'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Communication
          </button>
        </div>

        {/* CRM Tab */}
        {activeTab === 'crm' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clients by name, company, or industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                />
              </div>
              <button className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-3 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Client</span>
              </button>
            </div>

            {/* Client Directory */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-linkedin-card/30 rounded-xl overflow-hidden">
                <thead className="bg-linkedin-card/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Interaction</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-linkedin-border/30">
                  {filteredClients.map((client) => (
                    <React.Fragment key={client.id}>
                      <tr className="hover:bg-linkedin-card/50 transition-colors cursor-pointer" onClick={() => setExpandedClientId(expandedClientId === client.id ? null : client.id)}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-linkedin/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">{client.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-white font-medium">{client.name}</div>
                              <div className="text-gray-400 text-sm">{client.company}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{client.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{client.industry}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{client.lastInteraction}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-medium">{client.totalRevenue}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                            {expandedClientId === client.id ? (
                              <ChevronUp className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Client Details */}
                      {expandedClientId === client.id && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-linkedin-card/30">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Contact Information */}
                              <div className="bg-linkedin-card/50 rounded-lg p-4">
                                <h4 className="text-white font-medium mb-3">Contact Information</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-300">{client.email}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-300">{client.phone}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Client Notes */}
                              <div className="bg-linkedin-card/50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-white font-medium">Notes</h4>
                                  <button className="text-gray-400 hover:text-white transition-colors">
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                </div>
                                <p className="text-gray-300 text-sm">{client.notes}</p>
                              </div>
                              
                              {/* Client Stats */}
                              <div className="bg-linkedin-card/50 rounded-lg p-4">
                                <h4 className="text-white font-medium mb-3">Client Stats</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <p className="text-gray-400 text-xs">Total Sessions</p>
                                    <p className="text-white font-medium">{client.totalSessions}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400 text-xs">Total Revenue</p>
                                    <p className="text-green-400 font-medium">{client.totalRevenue}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400 text-xs">Rating</p>
                                    <div className="flex items-center">
                                      <span className="text-white font-medium mr-1">{client.rating}</span>
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-gray-400 text-xs">Status</p>
                                    <p className={`font-medium ${client.status === 'active' ? 'text-green-400' : 'text-gray-400'}`}>
                                      {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Projects */}
                              <div className="md:col-span-3 bg-linkedin-card/50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-white font-medium">Projects</h4>
                                  <button className="flex items-center space-x-1 text-linkedin-light hover:text-linkedin text-sm">
                                    <Plus className="w-4 h-4" />
                                    <span>Add Project</span>
                                  </button>
                                </div>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full">
                                    <thead>
                                      <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Project Name</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Status</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Date</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {client.projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-linkedin-card/30">
                                          <td className="px-4 py-2 text-white">{project.name}</td>
                                          <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                                              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                            </span>
                                          </td>
                                          <td className="px-4 py-2 text-gray-300">{project.date}</td>
                                          <td className="px-4 py-2">
                                            <div className="flex items-center space-x-2">
                                              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                                                <Eye className="w-4 h-4" />
                                              </button>
                                              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Communication Tab */}
        {activeTab === 'communication' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-300px)]">
            {/* Message List */}
            <div className="bg-linkedin-card/30 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-linkedin-border/30">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-9 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">Messages</h3>
                  <button className="text-linkedin-light hover:text-linkedin">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-80px)]">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className="p-4 border-b border-linkedin-border/30 hover:bg-linkedin-card/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <img 
                        src={message.clientAvatar} 
                        alt={message.clientName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-medium text-sm truncate">{message.clientName}</h4>
                          <span className="text-gray-400 text-xs">{message.timestamp}</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-1">{message.clientCompany}</p>
                        <p className="text-gray-300 text-sm truncate">{message.lastMessage}</p>
                      </div>
                      {message.unread && (
                        <div className="w-2 h-2 bg-linkedin-light rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message Content */}
            <div className="lg:col-span-2 bg-linkedin-card/30 rounded-lg flex flex-col">
              <div className="p-4 border-b border-linkedin-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                      alt="Ahmed Hassan"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium">Ahmed Hassan</h4>
                      <p className="text-gray-400 text-sm">TechStart Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Video className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {/* Date Separator */}
                  <div className="flex items-center justify-center">
                    <div className="bg-linkedin-card/50 text-gray-400 text-xs px-3 py-1 rounded-full">
                      Yesterday
                    </div>
                  </div>
                  
                  {/* Their Message */}
                  <div className="flex items-end space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                      alt="Ahmed Hassan"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="bg-linkedin-card/50 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-gray-300 text-sm">Hi! I wanted to follow up on our last session. I've implemented the changes we discussed to the pitch deck.</p>
                      <p className="text-gray-500 text-xs mt-1">10:30 AM</p>
                    </div>
                  </div>
                  
                  {/* My Message */}
                  <div className="flex items-end justify-end space-x-3">
                    <div className="bg-linkedin rounded-lg rounded-br-none p-3 max-w-[80%]">
                      <p className="text-white text-sm">That's great to hear! How did the investor meeting go?</p>
                      <p className="text-linkedin-light/70 text-xs mt-1">10:45 AM</p>
                    </div>
                  </div>
                  
                  {/* Their Message */}
                  <div className="flex items-end space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                      alt="Ahmed Hassan"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="bg-linkedin-card/50 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-gray-300 text-sm">It went really well! They were impressed with the deck and we've been invited for a second meeting next week.</p>
                      <p className="text-gray-500 text-xs mt-1">11:02 AM</p>
                    </div>
                  </div>
                  
                  {/* Date Separator */}
                  <div className="flex items-center justify-center">
                    <div className="bg-linkedin-card/50 text-gray-400 text-xs px-3 py-1 rounded-full">
                      Today
                    </div>
                  </div>
                  
                  {/* Their Message */}
                  <div className="flex items-end space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                      alt="Ahmed Hassan"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="bg-linkedin-card/50 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-gray-300 text-sm">Thanks for the session yesterday. I found it very helpful!</p>
                      <p className="text-gray-500 text-xs mt-1">10:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-linkedin-border/30">
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <textarea
                      placeholder="Type your message..."
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                      rows={2}
                    ></textarea>
                  </div>
                  <button className="bg-linkedin hover:bg-linkedin-dark text-white p-3 rounded-lg transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Add missing components
const Video = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const Eye = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const Send = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default ClientManagement;