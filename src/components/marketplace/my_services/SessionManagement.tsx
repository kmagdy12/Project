import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  FileText, 
  MessageSquare,
  ArrowLeft,
  CheckCircle,
  Target,
  Edit2,
  Plus
} from 'lucide-react';

interface SessionManagementProps {
  onSectionChange: (section: string) => void;
}

const SessionManagement: React.FC<SessionManagementProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'workspace' | 'client'>('calendar');

  // Mock data for sessions
  const sessions = [
    {
      id: 1,
      clientName: 'Ahmed Hassan',
      serviceName: 'Startup Strategy Consultation',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM',
      status: 'upcoming',
      progress: 0
    },
    {
      id: 2,
      clientName: 'Sarah Khalil',
      serviceName: 'Fundraising Advisory',
      date: '2025-05-16',
      time: '2:00 PM - 4:00 PM',
      status: 'upcoming',
      progress: 0
    },
    {
      id: 3,
      clientName: 'Omar Al-Zahra',
      serviceName: 'Product Strategy Session',
      date: '2025-05-10',
      time: '11:00 AM - 12:30 PM',
      status: 'completed',
      progress: 100
    },
    {
      id: 4,
      clientName: 'Layla Mansouri',
      serviceName: 'Growth Marketing Workshop',
      date: '2025-05-12',
      time: '3:00 PM - 6:00 PM',
      status: 'in-progress',
      progress: 65
    }
  ];

  // Filter sessions by status
  const upcomingSessions = sessions.filter(session => session.status === 'upcoming');
  const inProgressSessions = sessions.filter(session => session.status === 'in-progress');
  const completedSessions = sessions.filter(session => session.status === 'completed');

  // Mock data for client notes
  const clientNotes = [
    {
      id: 1,
      clientName: 'Layla Mansouri',
      serviceName: 'Growth Marketing Workshop',
      notes: 'Focusing on customer acquisition strategies for MENA market. Needs help with social media marketing and influencer partnerships.',
      progress: 'Completed initial assessment. Working on market segmentation and channel strategy.',
      actionItems: [
        'Develop social media content calendar',
        'Research top 10 MENA influencers in their space',
        'Analyze competitor marketing strategies'
      ],
      nextSession: '2025-05-20'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Session Management</h1>
          <p className="text-gray-300">Schedule, track, and manage your client sessions</p>
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
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Calendar & Tracking
          </button>
          <button
            onClick={() => setActiveTab('workspace')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'workspace'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Session Workspace
          </button>
          <button
            onClick={() => setActiveTab('client')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'client'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Client Interaction
          </button>
        </div>

        {/* Calendar & Tracking Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Session Calendar & Tracking</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar Placeholder */}
              <div className="lg:col-span-2 bg-linkedin-card/50 rounded-lg p-4 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Calendar view would be displayed here</p>
                </div>
              </div>
              
              {/* Session Status */}
              <div className="space-y-4">
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Upcoming Sessions</h3>
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-3">
                      {upcomingSessions.map(session => (
                        <div key={session.id} className="bg-linkedin-card/30 rounded-lg p-3 hover:bg-linkedin-card/50 transition-colors cursor-pointer">
                          <h4 className="text-white font-medium text-sm">{session.serviceName}</h4>
                          <p className="text-gray-400 text-xs">with {session.clientName}</p>
                          <div className="flex items-center justify-between mt-2 text-xs">
                            <div className="flex items-center text-gray-400">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{session.date}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{session.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No upcoming sessions</p>
                  )}
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">In Progress</h3>
                  {inProgressSessions.length > 0 ? (
                    <div className="space-y-3">
                      {inProgressSessions.map(session => (
                        <div key={session.id} className="bg-linkedin-card/30 rounded-lg p-3 hover:bg-linkedin-card/50 transition-colors cursor-pointer">
                          <h4 className="text-white font-medium text-sm">{session.serviceName}</h4>
                          <p className="text-gray-400 text-xs">with {session.clientName}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-white">{session.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="bg-gradient-to-r from-linkedin to-linkedin-light h-1.5 rounded-full"
                                style={{ width: `${session.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No sessions in progress</p>
                  )}
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Completed</h3>
                  {completedSessions.length > 0 ? (
                    <div className="space-y-3">
                      {completedSessions.map(session => (
                        <div key={session.id} className="bg-linkedin-card/30 rounded-lg p-3 hover:bg-linkedin-card/50 transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-medium text-sm">{session.serviceName}</h4>
                              <p className="text-gray-400 text-xs">with {session.clientName}</p>
                            </div>
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          </div>
                          <div className="flex items-center text-gray-400 text-xs mt-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{session.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No completed sessions</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-linkedin/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linkedin/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-linkedin-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Availability Settings</h4>
                  <p className="text-gray-400 text-sm">Set your available hours for client sessions</p>
                </div>
              </div>
              <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors">
                Manage Availability
              </button>
            </div>
          </div>
        )}

        {/* Session Workspace Tab */}
        {activeTab === 'workspace' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Video className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Session Workspace</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Session Tools */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Video Conferencing</h3>
                  <div className="bg-linkedin-card/30 rounded-lg p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 mb-4">Start or join a video conference with your client</p>
                      <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                        Start Meeting
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-linkedin-card/50 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">Screen Sharing</h3>
                    <div className="bg-linkedin-card/30 rounded-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                        <p className="text-gray-400 text-sm">Share your screen during the session</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">Digital Whiteboard</h3>
                    <div className="bg-linkedin-card/30 rounded-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <PenTool className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                        <p className="text-gray-400 text-sm">Collaborate on a shared whiteboard</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">File Sharing</h3>
                  <div className="bg-linkedin-card/30 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium">Shared Files</h4>
                      <button className="flex items-center space-x-1 text-linkedin-light hover:text-linkedin text-sm">
                        <Plus className="w-4 h-4" />
                        <span>Add File</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-linkedin-light" />
                          <div>
                            <p className="text-white text-sm">Strategy_Document.pdf</p>
                            <p className="text-gray-400 text-xs">Uploaded 2 days ago</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-white">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-linkedin-light" />
                          <div>
                            <p className="text-white text-sm">Market_Analysis.xlsx</p>
                            <p className="text-gray-400 text-xs">Uploaded 1 week ago</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-white">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Session Info */}
              <div className="space-y-6">
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Current Session</h3>
                  <div className="space-y-4">
                    <div className="bg-linkedin-card/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Growth Marketing Workshop</h4>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                        <Users className="w-4 h-4" />
                        <span>with Layla Mansouri</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Today, 3:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">65%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2">Session Agenda</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                          <span className="text-gray-300 text-sm">Introduction and goals review</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                          <span className="text-gray-300 text-sm">Market analysis presentation</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-4 h-4 border-2 border-linkedin-light rounded-full mt-0.5"></div>
                          <span className="text-gray-300 text-sm">Channel strategy development</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-4 h-4 border-2 border-gray-600 rounded-full mt-0.5"></div>
                          <span className="text-gray-400 text-sm">Content calendar planning</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-4 h-4 border-2 border-gray-600 rounded-full mt-0.5"></div>
                          <span className="text-gray-400 text-sm">Next steps and action items</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Session Recording</h3>
                  <div className="bg-linkedin-card/30 rounded-lg p-4 flex items-center justify-center h-32">
                    <div className="text-center">
                      <Record className="w-10 h-10 text-red-500 mx-auto mb-2" />
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Start Recording
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Interaction Tab */}
        {activeTab === 'client' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="w-5 h-5 text-linkedin-light" />
              <h2 className="text-xl font-bold text-white">Client Interaction</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Client Notes */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Client Notes</h3>
                    <button className="flex items-center space-x-1 text-linkedin-light hover:text-linkedin text-sm">
                      <Edit2 className="w-4 h-4" />
                      <span>Edit Notes</span>
                    </button>
                  </div>
                  
                  {clientNotes.length > 0 ? (
                    <div className="space-y-4">
                      {clientNotes.map(note => (
                        <div key={note.id} className="bg-linkedin-card/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="text-white font-medium">{note.clientName}</h4>
                              <p className="text-gray-400 text-sm">{note.serviceName}</p>
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>Next: {note.nextSession}</span>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <h5 className="text-linkedin-light text-sm font-medium mb-1">Notes</h5>
                            <p className="text-gray-300 text-sm">{note.notes}</p>
                          </div>
                          
                          <div className="mb-3">
                            <h5 className="text-linkedin-light text-sm font-medium mb-1">Progress</h5>
                            <p className="text-gray-300 text-sm">{note.progress}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-linkedin-light text-sm font-medium mb-1">Action Items</h5>
                            <div className="space-y-1">
                              {note.actionItems.map((item, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <div className="w-4 h-4 border-2 border-linkedin-light rounded-full mt-0.5"></div>
                                  <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                      <p className="text-gray-400">No client notes available</p>
                    </div>
                  )}
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Progress Tracking</h3>
                  <div className="space-y-4">
                    <div className="bg-linkedin-card/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">Growth Marketing Workshop</h4>
                        <div className="text-linkedin-light text-sm">65% Complete</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full"
                            style={{ width: '65%' }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <div>
                            <h5 className="text-white text-sm font-medium">Market Analysis</h5>
                            <p className="text-gray-400 text-xs">Completed on May 10, 2025</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <div>
                            <h5 className="text-white text-sm font-medium">Target Audience Definition</h5>
                            <p className="text-gray-400 text-xs">Completed on May 12, 2025</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-linkedin/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-linkedin-light rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="text-white text-sm font-medium">Channel Strategy</h5>
                            <p className="text-gray-400 text-xs">In progress</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="text-gray-400 text-sm font-medium">Content Calendar</h5>
                            <p className="text-gray-500 text-xs">Not started</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="text-gray-400 text-sm font-medium">Performance Metrics</h5>
                            <p className="text-gray-500 text-xs">Not started</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Items and Follow-up */}
              <div className="space-y-6">
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Action Items</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-linkedin-light rounded mt-0.5"></div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Add a new action item..."
                          className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-sm"
                        />
                      </div>
                      <button className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-linkedin-light rounded mt-0.5"></div>
                      <div>
                        <p className="text-white text-sm">Develop social media content calendar</p>
                        <p className="text-gray-400 text-xs">Due: May 18, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-linkedin-light rounded mt-0.5"></div>
                      <div>
                        <p className="text-white text-sm">Research top 10 MENA influencers</p>
                        <p className="text-gray-400 text-xs">Due: May 20, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-linkedin-light rounded mt-0.5"></div>
                      <div>
                        <p className="text-white text-sm">Analyze competitor marketing strategies</p>
                        <p className="text-gray-400 text-xs">Due: May 25, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Follow-up Scheduling</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Next Session Date</label>
                      <input
                        type="date"
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Time</label>
                      <input
                        type="time"
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Session Focus</label>
                      <input
                        type="text"
                        placeholder="e.g., Content Calendar Review"
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                      />
                    </div>
                    
                    <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg transition-colors">
                      Schedule Follow-up
                    </button>
                  </div>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Feedback Collection</h3>
                  <div className="bg-linkedin-card/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-4">Request feedback from your client after completing a session</p>
                    <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg transition-colors">
                      Send Feedback Request
                    </button>
                  </div>
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
const Monitor = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const PenTool = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const Download = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Record = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
  </svg>
);

export default SessionManagement;