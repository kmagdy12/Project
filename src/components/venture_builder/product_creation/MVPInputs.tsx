import React, { useState } from 'react';
import {
  Save,
  ArrowRight,
  ArrowLeft,
  Edit2,
  Package,
  Play,
  Upload
} from 'lucide-react';

interface MVPData {
  prompt: string;
  generatedMVP: string;
}

interface MVPInputsProps {
  mvpData: MVPData;
  onUpdateMVP: (data: MVPData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const MVPInputs: React.FC<MVPInputsProps> = ({
  mvpData,
  onUpdateMVP,
  onContinue,
  onBack,
  onSkip,
  onSaveDraft,
  onExport
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(mvpData);
  const [activeTab, setActiveTab] = useState<'prompt' | 'generation'>('prompt');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleSave = () => {
    onUpdateMVP(editedData);
    setIsEditing(false);
  };

  const handleGenerateMVP = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setEditedData(prev => ({
        ...prev,
        generatedMVP: `// AI-generated MVP code based on prompt:\n// ${prev.prompt}\n\n// This would be a functional MVP application generated by bolt.new\nconsole.log("MVP generated successfully!");\n\n// Example: Basic Node.js Express server\nconst express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello from your MVP!');\n});\n\napp.listen(port, () => {\n  console.log(\`MVP app listening at http://localhost:\${port}\`);\n});\n`
      }));
      setIsGenerating(false);
      setActiveTab('generation');
    }, 2000);
  };

  const handlePublishMVP = () => {
    setIsPublishing(true);
    // Simulate publishing
    setTimeout(() => {
      alert('MVP published successfully!');
      setIsPublishing(false);
    }, 1500);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Package className="w-5 h-5 text-linkedin-light mr-2" />
        Minimum Viable Product (MVP)
      </h3>

      <p className="text-gray-300 text-xs mb-4">
        Define your Minimum Viable Product (MVP). This will be the first version of your product with just enough features to satisfy early users.
      </p>

      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'prompt'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Prompt Generation
        </button>
        <button
          onClick={() => setActiveTab('generation')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'generation'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          MVP Generation
        </button>
      </div>

      {/* Prompt Generation Tab */}
      {activeTab === 'prompt' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">AI Generated Prompt</h4>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Prompt for bolt.new</label>
                <textarea
                  value={editedData.prompt}
                  onChange={(e) => setEditedData({...editedData, prompt: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={8}
                  placeholder="Enter your prompt for bolt.new to generate the MVP. The AI companion will pre-fill this based on your UX and prototype."
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedData(mvpData);
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
            </div>
          ) : (
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <p className="text-gray-300 text-xs whitespace-pre-line">{mvpData.prompt || "No prompt generated yet. The AI companion will generate this based on your UX and prototype."}</p>
            </div>
          )}

          <button
            onClick={handleGenerateMVP}
            disabled={isGenerating || !editedData.prompt}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all mt-4"
          >
            {isGenerating ? 'Generating MVP...' : (
              <>
                <Play className="w-4 h-4" />
                <span>Generate MVP</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* MVP Generation Tab */}
      {activeTab === 'generation' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <h4 className="text-white font-medium text-xs mb-3">AI Generated MVP</h4>
          <div className="bg-linkedin-card/50 rounded-lg p-3 min-h-[200px] overflow-auto">
            <pre className="text-gray-300 text-xs whitespace-pre-wrap">{mvpData.generatedMVP || "MVP will appear here after generation."}</pre>
          </div>

          <button
            onClick={handlePublishMVP}
            disabled={isPublishing || !editedData.generatedMVP}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all mt-4"
          >
            {isPublishing ? 'Publishing MVP...' : (
              <>
                <Play className="w-4 h-4" />
                <span>Publish MVP</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Upload Existing MVP */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing MVP</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload MVP Files</p>
          <p className="text-gray-400 text-xs">Drag & drop files or click to browse</p>
        </button>
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
        <div className="flex items-center space-x-3">
          <button
            onClick={onExport}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Package className="w-3 h-3" />
            <span>Export MVP Code</span>
          </button>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
          >
            <span>Complete Product Creation</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MVPInputs;