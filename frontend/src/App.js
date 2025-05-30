import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/technology', label: 'Technology' },
    { path: '/market', label: 'Market Analysis' },
    { path: '/business', label: 'Business Model' },
    { path: '/investors', label: 'Investors' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VoiceAgent
            </span> AI
          </Link>
          
          <div className="hidden md:flex space-x-8 text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-blue-400 transition-colors ${
                  location.pathname === item.path ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/investors"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  const [currentMetric, setCurrentMetric] = React.useState(0);
  const [meetingSimulation, setMeetingSimulation] = React.useState({
    isActive: false,
    participants: [],
    messages: [],
    currentSpeaker: null
  });

  // Animated metrics
  const metrics = [
    { value: 2800, suffix: 'B', label: 'Global Market TAM', color: 'text-blue-400' },
    { value: 89, suffix: '%', label: 'Meeting Inefficiency', color: 'text-cyan-400' },
    { value: 127, suffix: 'B', label: 'Serviceable Market', color: 'text-indigo-400' },
    { value: 45, suffix: '%', label: 'YoY Growth Rate', color: 'text-green-400' }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Meeting simulation data
  const simulationData = {
    participants: [
      { id: 1, name: 'Sarah Chen', role: 'Product Manager', type: 'human', avatar: '👩‍💼' },
      { id: 2, name: 'VoiceAgent Pro', role: 'AI Assistant', type: 'ai', avatar: '🤖' },
      { id: 3, name: 'Legal AI', role: 'Legal Specialist', type: 'ai', avatar: '⚖️' },
      { id: 4, name: 'Analytics AI', role: 'Data Analyst', type: 'ai', avatar: '📊' }
    ],
    conversation: [
      { speaker: 'Sarah Chen', message: 'Let\'s review our Q4 product roadmap and compliance requirements.', timestamp: '10:30:15' },
      { speaker: 'VoiceAgent Pro', message: 'I\'ve analyzed the roadmap. There are 3 key compliance checkpoints that need Legal AI review.', timestamp: '10:30:18' },
      { speaker: 'Legal AI', message: 'Confirmed. I see GDPR implications in features 2 and 5. Recommendations: implement data anonymization.', timestamp: '10:30:22' },
      { speaker: 'Analytics AI', message: 'Historical data shows 23% faster delivery when compliance is addressed early. Shall I generate a timeline?', timestamp: '10:30:26' },
      { speaker: 'Sarah Chen', message: 'Yes please. And VoiceAgent Pro, can you summarize action items?', timestamp: '10:30:30' },
      { speaker: 'VoiceAgent Pro', message: 'Action items: 1) Legal review by Friday 2) Data anonymization spec 3) Timeline from Analytics AI', timestamp: '10:30:33' }
    ]
  };

  const startMeetingDemo = () => {
    setMeetingSimulation({ isActive: true, participants: simulationData.participants, messages: [], currentSpeaker: null });
    
    // Animate conversation
    simulationData.conversation.forEach((msg, index) => {
      setTimeout(() => {
        setMeetingSimulation(prev => ({
          ...prev,
          messages: [...prev.messages, msg],
          currentSpeaker: msg.speaker
        }));
      }, index * 2500);
    });

    // End simulation
    setTimeout(() => {
      setMeetingSimulation(prev => ({ ...prev, currentSpeaker: null }));
    }, simulationData.conversation.length * 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: 'url(https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg)'}}
        ></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
              🚀 World's First Real-Time Voice AI for Meetings
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Meeting Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            VoiceAgent AI revolutionizes meetings with real-time voice interaction, 
            multi-agent collaboration, and intelligent conversation across all platforms.
          </p>

          {/* Live Metrics Animation */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-700/50 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-lg text-slate-400 mb-2">Live Market Data</div>
              <div className={`text-4xl font-bold ${metrics[currentMetric].color} mb-2`}>
                ${metrics[currentMetric].value}{metrics[currentMetric].suffix}
              </div>
              <div className="text-slate-300">{metrics[currentMetric].label}</div>
              <div className="flex justify-center mt-4 space-x-2">
                {metrics.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentMetric ? 'bg-blue-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎧 Experience Our Technology</h3>
            <p className="text-slate-300 mb-4">Listen to VoiceAgent AI's revolutionary voice technology in action</p>
            <audio controls className="w-full mb-4" style={{filter: 'invert(1) hue-rotate(180deg)'}}>
              <source src="https://aimeetingsuperagent.s3.eu-north-1.amazonaws.com/podcast.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-slate-400">Demo showcasing real-time multi-agent voice interaction</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/investors"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Investor Demo
            </Link>
            <button 
              onClick={startMeetingDemo}
              className="border border-slate-400 text-slate-300 hover:text-white hover:border-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              🎬 Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Live Meeting Simulation */}
      {meetingSimulation.isActive && (
        <section className="py-12 bg-slate-800/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-slate-900/90 rounded-2xl p-8 border border-blue-500/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">🔴 Live Meeting Simulation</h3>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm animate-pulse">LIVE</span>
              </div>
              
              {/* Participants */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {meetingSimulation.participants.map((participant) => (
                  <div 
                    key={participant.id}
                    className={`bg-slate-800 rounded-xl p-4 border transition-all duration-300 ${
                      meetingSimulation.currentSpeaker === participant.name 
                        ? 'border-green-400 shadow-lg shadow-green-400/20' 
                        : 'border-slate-700'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{participant.avatar}</div>
                      <div className="text-white font-semibold text-sm">{participant.name}</div>
                      <div className={`text-xs ${participant.type === 'ai' ? 'text-blue-400' : 'text-slate-400'}`}>
                        {participant.role}
                      </div>
                      {meetingSimulation.currentSpeaker === participant.name && (
                        <div className="flex justify-center mt-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-green-400 animate-pulse"></div>
                            <div className="w-1 h-3 bg-green-400 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1 h-5 bg-green-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1 h-2 bg-green-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Messages */}
              <div className="bg-slate-800/50 rounded-xl p-6 h-64 overflow-y-auto">
                <div className="space-y-4">
                  {meetingSimulation.messages.map((msg, index) => {
                    const participant = meetingSimulation.participants.find(p => p.name === msg.speaker);
                    return (
                      <div key={index} className="flex items-start space-x-3 animate-fadeInUp">
                        <div className="text-xl">{participant?.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`font-semibold ${participant?.type === 'ai' ? 'text-blue-400' : 'text-white'}`}>
                              {msg.speaker}
                            </span>
                            <span className="text-xs text-slate-500">{msg.timestamp}</span>
                          </div>
                          <p className="text-slate-300 text-sm">{msg.message}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="text-sm text-slate-400">
                  Real-time AI agents collaborating in live meeting • Multi-agent communication • Instant transcription
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Technology Dashboard */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Live Technology Metrics</h2>
            <p className="text-xl text-slate-300">Real-time performance indicators from our AI platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-400 text-2xl">🤖</div>
                <div className="text-green-400 text-sm">● ACTIVE</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                <span className="counter" data-target="1247">1,247</span>
              </div>
              <div className="text-slate-400">AI Agents Online</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-cyan-400 text-2xl">⚡</div>
                <div className="text-green-400 text-sm">● LIVE</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">147ms</div>
              <div className="text-slate-400">Response Latency</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-400 text-2xl">📈</div>
                <div className="text-green-400 text-sm">● GROWING</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">98.7%</div>
              <div className="text-slate-400">Voice Accuracy</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-purple-400 text-2xl">🌐</div>
                <div className="text-green-400 text-sm">● SCALING</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                <span className="counter" data-target="45">45</span>
              </div>
              <div className="text-slate-400">Enterprise Customers</div>
            </div>
          </div>

          {/* Revolutionary Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Voice Interaction</h3>
              <p className="text-slate-300 mb-4">AI agents join meetings and actively participate in conversations with natural voice responses</p>
              <div className="bg-blue-900/30 rounded-lg p-3">
                <div className="text-sm text-blue-400 font-semibold">ROI Impact:</div>
                <div className="text-sm text-slate-300">3-5x premium pricing vs transcription tools</div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Agent Collaboration</h3>
              <p className="text-slate-300 mb-4">Multiple AI agents can join simultaneously and communicate with each other during live meetings</p>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <div className="text-sm text-cyan-400 font-semibold">Market Advantage:</div>
                <div className="text-sm text-slate-300">18-month technology lead over competitors</div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Universal Platform Support</h3>
              <p className="text-slate-300 mb-4">Works seamlessly across Zoom, Teams, Google Meet, and any meeting platform</p>
              <div className="bg-green-900/30 rounded-lg p-3">
                <div className="text-sm text-green-400 font-semibold">TAM Access:</div>
                <div className="text-sm text-slate-300">Entire $127B meeting software market</div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Transcription</h3>
              <p className="text-slate-300 mb-4">Real-time transcription with context awareness and instant export capabilities</p>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <div className="text-sm text-purple-400 font-semibold">Revenue Stream:</div>
                <div className="text-sm text-slate-300">Data monetization + compliance value</div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Meeting Chatbot</h3>
              <p className="text-slate-300 mb-4">Query any meeting data with natural language and get instant intelligent responses</p>
              <div className="bg-yellow-900/30 rounded-lg p-3">
                <div className="text-sm text-yellow-400 font-semibold">Enterprise Value:</div>
                <div className="text-sm text-slate-300">Institutional memory + knowledge management</div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-slate-300 mb-4">Deep insights into meeting effectiveness, participation patterns, and action items</p>
              <div className="bg-red-900/30 rounded-lg p-3">
                <div className="text-sm text-red-400 font-semibold">Customer Stickiness:</div>
                <div className="text-sm text-slate-300">96% annual retention rate</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/technology"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Technology Page Component
const TechnologyPage = () => {
  const [activeDemo, setActiveDemo] = React.useState('voice');
  const [voiceWave, setVoiceWave] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [voiceDemo, setVoiceDemo] = React.useState({
    isPlaying: false,
    currentText: '',
    audioIndex: 0
  });

  React.useEffect(() => {
    // Simulate voice wave animation
    const interval = setInterval(() => {
      setVoiceWave(Array.from({length: 20}, () => Math.random() * 100));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const demoOptions = [
    { 
      id: 'voice', 
      title: 'Real-Time Voice AI', 
      icon: '🗣️',
      description: 'Experience natural conversation with AI agents',
      metrics: { latency: '147ms', accuracy: '98.7%', languages: '12' }
    },
    { 
      id: 'multi-agent', 
      title: 'Multi-Agent System', 
      icon: '👥',
      description: 'Watch AI agents collaborate in real-time',
      metrics: { agents: '4', communication: 'Live', specialties: '8' }
    },
    { 
      id: 'transcription', 
      title: 'Smart Transcription', 
      icon: '📝',
      description: 'Intelligent context-aware transcription',
      metrics: { accuracy: '99.2%', speed: 'Real-time', features: '15+' }
    }
  ];

  // Sample voice demo messages
  const voiceDemoMessages = [
    "Hello, I'm VoiceAgent AI. I can actively participate in your meetings with natural voice responses.",
    "I understand context and can collaborate with other AI agents in real-time to provide comprehensive insights.",
    "My voice synthesis technology enables human-like conversation with adaptive tone modulation.",
    "I can join any meeting platform and start contributing immediately. Let me demonstrate our multi-agent capabilities."
  ];

  const simulateProcessing = () => {
    setIsProcessing(true);
    
    if (activeDemo === 'voice') {
      // Voice demo with text-to-speech simulation
      setVoiceDemo({ isPlaying: true, currentText: '', audioIndex: 0 });
      
      const message = voiceDemoMessages[Math.floor(Math.random() * voiceDemoMessages.length)];
      
      // Simulate typing effect
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex < message.length) {
          setCurrentMessage(message.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setVoiceDemo({ isPlaying: false, currentText: '', audioIndex: 0 });
            setCurrentMessage('');
          }, 1000);
        }
      }, 80);
      
      setTimeout(() => {
        setIsProcessing(false);
      }, message.length * 80 + 1000);
      
    } else {
      setTimeout(() => setIsProcessing(false), 3000);
    }
  };

  // Text-to-Speech function (for browsers that support it)
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      // Try to use a more natural voice
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google') || 
        voice.name.includes('Microsoft') || 
        voice.lang.includes('en-US')
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      speechSynthesis.speak(utterance);
      return true;
    }
    return false;
  };

  const runVoiceDemo = () => {
    const message = voiceDemoMessages[Math.floor(Math.random() * voiceDemoMessages.length)];
    
    setIsProcessing(true);
    setVoiceDemo({ isPlaying: true, currentText: '', audioIndex: 0 });
    
    // Attempt to play audio
    const canSpeak = speakText(message);
    
    // Visual typing effect
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        setCurrentMessage(message.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setVoiceDemo({ isPlaying: false, currentText: '', audioIndex: 0 });
          setCurrentMessage('');
          setIsProcessing(false);
        }, 2000);
      }
    }, 60);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Voice AI Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Breakthrough innovations that enable the world's first real-time conversational AI for meetings
            </p>
          </div>

          {/* Interactive Demo Selector */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔬 Interactive Technology Demo</h3>
            
            {/* Demo Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {demoOptions.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {demo.icon} {demo.title}
                </button>
              ))}
            </div>

            {/* Active Demo Display */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {demoOptions.find(d => d.id === activeDemo)?.title}
                </h4>
                <p className="text-slate-300 mb-6">
                  {demoOptions.find(d => d.id === activeDemo)?.description}
                </p>
                
                {/* Live Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(demoOptions.find(d => d.id === activeDemo)?.metrics || {}).map(([key, value]) => (
                    <div key={key} className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {activeDemo === 'voice' ? (
                    <button 
                      onClick={runVoiceDemo}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 w-full"
                    >
                      {isProcessing ? '🔊 Speaking...' : '🎤 Hear Voice AI'}
                    </button>
                  ) : (
                    <button 
                      onClick={simulateProcessing}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 w-full"
                    >
                      {isProcessing ? '🔄 Processing...' : '▶️ Run Demo'}
                    </button>
                  )}
                  
                  {activeDemo === 'voice' && (
                    <div className="text-xs text-slate-400 text-center">
                      🔊 Enable audio in your browser to hear AI voice synthesis
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
                {activeDemo === 'voice' && (
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-4xl mb-2">🎤</div>
                      <div className="text-white font-semibold">Voice AI Processing</div>
                      {voiceDemo.isPlaying && (
                        <div className="text-sm text-blue-400 mt-1">🔊 Audio Playing</div>
                      )}
                    </div>
                    
                    {/* Animated Voice Wave */}
                    <div className="flex justify-center items-end space-x-1 h-32 mb-4">
                      {voiceWave.map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-sm transition-all duration-150"
                          style={{
                            width: '4px',
                            height: `${Math.max(height * 0.8, 10)}px`,
                            opacity: isProcessing ? 1 : 0.3
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Live Voice Output */}
                    {currentMessage && (
                      <div className="bg-slate-800/50 rounded-lg p-4 mb-4 min-h-[60px]">
                        <div className="text-sm text-slate-400 mb-1">AI Voice Output:</div>
                        <div className="text-slate-200 text-sm leading-relaxed">
                          "{currentMessage}"
                          {isProcessing && <span className="animate-pulse">|</span>}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Status:</span>
                        <span className={isProcessing ? 'text-green-400' : 'text-slate-400'}>
                          {isProcessing ? '● Processing Voice' : '○ Ready'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Latency:</span>
                        <span className="text-blue-400">147ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Confidence:</span>
                        <span className="text-green-400">98.7%</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'multi-agent' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">🤖 Multi-Agent Network</div>
                    </div>
                    
                    {/* Agent Network Visualization */}
                    <div className="relative h-48">
                      <div className="absolute top-4 left-4 bg-blue-600 rounded-full p-3 text-white text-sm font-semibold">
                        AI1
                      </div>
                      <div className="absolute top-4 right-4 bg-cyan-600 rounded-full p-3 text-white text-sm font-semibold">
                        AI2
                      </div>
                      <div className="absolute bottom-4 left-4 bg-green-600 rounded-full p-3 text-white text-sm font-semibold">
                        AI3
                      </div>
                      <div className="absolute bottom-4 right-4 bg-purple-600 rounded-full p-3 text-white text-sm font-semibold">
                        AI4
                      </div>
                      
                      {/* Connection Lines */}
                      {isProcessing && (
                        <>
                          <div className="absolute top-8 left-16 w-20 h-0.5 bg-blue-400 animate-pulse"></div>
                          <div className="absolute top-16 right-8 w-0.5 h-20 bg-cyan-400 animate-pulse"></div>
                          <div className="absolute bottom-16 left-8 w-0.5 h-20 bg-green-400 animate-pulse"></div>
                          <div className="absolute bottom-8 left-16 w-20 h-0.5 bg-purple-400 animate-pulse"></div>
                        </>
                      )}
                    </div>
                    
                    <div className="text-xs text-slate-400 text-center">
                      {isProcessing ? 'Agents communicating in real-time' : 'Multi-agent collaboration ready'}
                    </div>
                  </div>
                )}

                {activeDemo === 'transcription' && (
                  <div>
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">📝 Smart Transcription</div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-4 h-32 overflow-y-auto">
                      {isProcessing ? (
                        <div className="space-y-2 animate-fadeInUp">
                          <div className="text-blue-400 text-sm">Speaker 1: "Let's discuss the Q4 roadmap..."</div>
                          <div className="text-cyan-400 text-sm">AI Agent: "I've identified 3 key compliance checkpoints..."</div>
                          <div className="text-green-400 text-sm">Legal AI: "GDPR implications detected in features 2 and 5..."</div>
                        </div>
                      ) : (
                        <div className="text-slate-500 text-center">Real-time transcription will appear here</div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex justify-between text-xs text-slate-400">
                      <span>Words/min: {isProcessing ? '180' : '0'}</span>
                      <span>Accuracy: 99.2%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1717501217710-775828219832" 
                alt="AI Technology" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Core Technology Stack</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Advanced NLP Engine</h3>
                  <p className="text-slate-300">Real-time natural language processing with context understanding and multi-turn conversation capabilities</p>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Voice Synthesis Technology</h3>
                  <p className="text-slate-300">Human-like voice generation with emotional intelligence and adaptive tone modulation</p>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">Multi-Agent Architecture</h3>
                  <p className="text-slate-300">Distributed AI system enabling multiple agents to collaborate and communicate intelligently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive Feature Set
          </h2>

          <div className="space-y-16">
            {/* Feature 1: Real-Time Voice AI */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Real-Time Voice Interaction</h3>
                <div className="space-y-4 text-slate-300">
                  <p className="text-lg"><strong className="text-blue-400">Revolutionary Capability:</strong> Unlike traditional meeting tools that only record and transcribe, our AI agents actively participate in conversations with natural voice responses.</p>
                  
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Benefits for Investors:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>First-Mover Advantage:</strong> Only solution in market with true two-way voice interaction</li>
                      <li>• <strong>High Switching Costs:</strong> Deep integration creates customer stickiness</li>
                      <li>• <strong>Premium Pricing:</strong> Unique capability commands 3-5x higher pricing than transcription tools</li>
                      <li>• <strong>Viral Growth:</strong> Meeting participants experience the technology organically</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Technical Implementation:</h4>
                    <ul className="space-y-2">
                      <li>• Sub-200ms latency for real-time conversation flow</li>
                      <li>• Advanced speech recognition with 98.5% accuracy</li>
                      <li>• Context-aware response generation</li>
                      <li>• Natural interruption handling and turn-taking</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11" 
                  alt="Voice AI Technology" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Feature 2: Multi-Agent System */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" 
                  alt="Multi-Agent Collaboration" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Multi-Agent Collaboration</h3>
                <div className="space-y-4 text-slate-300">
                  <p className="text-lg"><strong className="text-cyan-400">Breakthrough Innovation:</strong> Multiple AI agents can join simultaneously and have conversations with each other during live meetings, creating complex collaborative scenarios.</p>
                  
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Market Opportunity:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Enterprise Scalability:</strong> Serve multiple departments simultaneously</li>
                      <li>• <strong>Complex Use Cases:</strong> Legal reviews, technical discussions, multi-stakeholder negotiations</li>
                      <li>• <strong>Revenue Multiplication:</strong> Charge per agent, not per meeting</li>
                      <li>• <strong>Competitive Moat:</strong> Extremely difficult technical challenge to replicate</li>
                    </ul>
                  </div>
                  
                  <div className="bg-cyan-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Use Cases:</h4>
                    <ul className="space-y-2">
                      <li>• Legal agent + Technical agent in contract reviews</li>
                      <li>• Sales agent + Product agent in customer calls</li>
                      <li>• Translator agents for multilingual meetings</li>
                      <li>• Specialist agents for domain-specific expertise</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Platform Agnostic */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Universal Platform Compatibility</h3>
                <div className="space-y-4 text-slate-300">
                  <p className="text-lg"><strong className="text-green-400">Strategic Advantage:</strong> Works across Zoom, Microsoft Teams, Google Meet, WebEx, and any meeting platform through our proprietary audio bridging technology.</p>
                  
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Business Impact:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Total Addressable Market:</strong> Access to entire $127B meeting software market</li>
                      <li>• <strong>Enterprise Adoption:</strong> No platform switching required for customers</li>
                      <li>• <strong>Vendor Lock-in Prevention:</strong> Customers aren't forced to choose platforms</li>
                      <li>• <strong>Rapid Deployment:</strong> Zero infrastructure changes needed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Supported Platforms:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <li>• Zoom (all tiers)</li>
                        <li>• Microsoft Teams</li>
                        <li>• Google Meet</li>
                        <li>• WebEx</li>
                      </div>
                      <div>
                        <li>• GoToMeeting</li>
                        <li>• BlueJeans</li>
                        <li>• Custom platforms</li>
                        <li>• Phone conferences</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407" 
                  alt="Enterprise Meeting Room" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Feature 4: Smart Transcription */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Data Analytics" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Intelligent Transcription & Analytics</h3>
                <div className="space-y-4 text-slate-300">
                  <p className="text-lg"><strong className="text-purple-400">Beyond Basic Transcription:</strong> Context-aware transcription with real-time analysis, sentiment detection, and actionable insights generation.</p>
                  
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Revenue Drivers:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Data Monetization:</strong> Anonymized insights for industry benchmarking</li>
                      <li>• <strong>Compliance Value:</strong> Automated compliance reporting for regulated industries</li>
                      <li>• <strong>Productivity Metrics:</strong> ROI tracking for enterprise customers</li>
                      <li>• <strong>Integration APIs:</strong> Premium data feeds to CRM/ERP systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Advanced Features:</h4>
                    <ul className="space-y-2">
                      <li>• Real-time sentiment analysis and mood tracking</li>
                      <li>• Automatic action item extraction and assignment</li>
                      <li>• Speaker identification and engagement scoring</li>
                      <li>• Custom keyword and topic alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: AI Chatbot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Intelligent Meeting Chatbot</h3>
                <div className="space-y-4 text-slate-300">
                  <p className="text-lg"><strong className="text-yellow-400">Game-Changing Interface:</strong> Natural language queries across all meeting data - "What did we decide about the budget in last week's board meeting?"</p>
                  
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Enterprise Value:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Knowledge Management:</strong> Institutional memory preservation and retrieval</li>
                      <li>• <strong>Onboarding Acceleration:</strong> New employees access historical context instantly</li>
                      <li>• <strong>Decision Tracking:</strong> Audit trail of all decisions and rationale</li>
                      <li>• <strong>Cross-Team Insights:</strong> Breaking down information silos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Query Examples:</h4>
                    <ul className="space-y-2">
                      <li>• "What were the main concerns raised about the Q4 budget?"</li>
                      <li>• "Show me all decisions made by the product team this month"</li>
                      <li>• "Who committed to the marketing deliverables?"</li>
                      <li>• "What compliance issues were discussed with legal?"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg" 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Architecture</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built for scale, security, and reliability with enterprise requirements in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• AWS enterprise-grade hosting</li>
                <li>• Auto-scaling for demand spikes</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Global edge deployment</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR and CCPA compliant</li>
                <li>• End-to-end encryption</li>
                <li>• HIPAA ready deployment</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• &lt; 200ms voice response latency</li>
                <li>• 10,000+ concurrent meetings</li>
                <li>• Real-time processing at scale</li>
                <li>• 24/7 monitoring and alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Market Analysis Page Component
const MarketPage = () => {
  const [roiInputs, setROIInputs] = React.useState({
    employees: 1000,
    meetingsPerWeek: 20,
    avgMeetingDuration: 60,
    currentSolution: 'basic'
  });
  
  const [roiResults, setROIResults] = React.useState({});

  React.useEffect(() => {
    calculateROI();
  }, [roiInputs]);

  const calculateROI = () => {
    const { employees, meetingsPerWeek, avgMeetingDuration } = roiInputs;
    
    // Current costs (inefficient meetings)
    const avgSalary = 75000; // Average employee salary
    const hourlyRate = avgSalary / (52 * 40);
    const weeklyMeetingHours = (meetingsPerWeek * avgMeetingDuration) / 60;
    const currentWeeklyCost = weeklyMeetingHours * hourlyRate * employees * 0.35; // 35% meeting inefficiency
    const currentAnnualCost = currentWeeklyCost * 52;
    
    // VoiceAgent AI benefits
    const efficiencyImprovement = 0.4; // 40% efficiency improvement
    const annualSavings = currentAnnualCost * efficiencyImprovement;
    const voiceAgentCost = employees * 99 * 12; // $99/user/month
    const netBenefit = annualSavings - voiceAgentCost;
    const roi = ((netBenefit / voiceAgentCost) * 100).toFixed(0);
    const paybackMonths = (voiceAgentCost / (annualSavings / 12)).toFixed(1);
    
    setROIResults({
      currentAnnualCost: currentAnnualCost.toLocaleString(),
      annualSavings: annualSavings.toLocaleString(),
      voiceAgentCost: voiceAgentCost.toLocaleString(),
      netBenefit: netBenefit.toLocaleString(),
      roi,
      paybackMonths
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Massive Market
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              The convergence of AI advancement and remote work adoption creates an unprecedented opportunity in the meeting technology space
            </p>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">💰 Enterprise ROI Calculator</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Your Organization</h4>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-300 mb-2">Number of Employees</label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={roiInputs.employees}
                      onChange={(e) => setROIInputs({...roiInputs, employees: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-blue-400 font-semibold text-lg mt-1">{roiInputs.employees.toLocaleString()} employees</div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 mb-2">Meetings per Week</label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={roiInputs.meetingsPerWeek}
                      onChange={(e) => setROIInputs({...roiInputs, meetingsPerWeek: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-cyan-400 font-semibold text-lg mt-1">{roiInputs.meetingsPerWeek} meetings/week</div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 mb-2">Average Meeting Duration (minutes)</label>
                    <input
                      type="range"
                      min="30"
                      max="120"
                      step="15"
                      value={roiInputs.avgMeetingDuration}
                      onChange={(e) => setROIInputs({...roiInputs, avgMeetingDuration: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-green-400 font-semibold text-lg mt-1">{roiInputs.avgMeetingDuration} minutes</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">ROI Analysis</h4>
                
                <div className="space-y-4">
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="text-red-400 font-semibold">Current Annual Cost (Meeting Inefficiency)</div>
                    <div className="text-2xl font-bold text-white">${roiResults.currentAnnualCost}</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-400 font-semibold">Annual Savings with VoiceAgent AI</div>
                    <div className="text-2xl font-bold text-white">${roiResults.annualSavings}</div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-blue-400 font-semibold">VoiceAgent AI Annual Cost</div>
                    <div className="text-2xl font-bold text-white">${roiResults.voiceAgentCost}</div>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/30">
                    <div className="text-yellow-400 font-semibold">Net Annual Benefit</div>
                    <div className="text-2xl font-bold text-white">${roiResults.netBenefit}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30 text-center">
                      <div className="text-purple-400 font-semibold">ROI</div>
                      <div className="text-2xl font-bold text-white">{roiResults.roi}%</div>
                    </div>
                    
                    <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30 text-center">
                      <div className="text-cyan-400 font-semibold">Payback</div>
                      <div className="text-2xl font-bold text-white">{roiResults.paybackMonths}mo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-slate-400 text-sm">
                Calculation based on 35% meeting inefficiency reduction and average enterprise salary of $75,000
              </div>
            </div>
          </div>

          {/* Market Size */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">$2.8T</div>
              <div className="text-xl font-semibold text-white mb-2">Total Addressable Market</div>
              <div className="text-slate-300">Global productivity software and enterprise communication market</div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-4">$127B</div>
              <div className="text-xl font-semibold text-white mb-2">Serviceable Addressable Market</div>
              <div className="text-slate-300">Meeting software, collaboration tools, and AI-powered productivity solutions</div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-4">$12B</div>
              <div className="text-xl font-semibold text-white mb-2">Serviceable Obtainable Market</div>
              <div className="text-slate-300">Enterprise AI meeting solutions - our target market within 5 years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Market Trends Driving Growth</h2>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Remote Work Revolution</h3>
                  <p className="text-slate-300">74% of companies plan to permanently maintain remote work options, driving 300% increase in virtual meetings</p>
                  <div className="text-sm text-green-400 mt-2">+300% virtual meeting volume since 2020</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">AI Adoption Acceleration</h3>
                  <p className="text-slate-300">Enterprise AI spending projected to reach $500B by 2027, with 85% of meetings to include AI by 2026</p>
                  <div className="text-sm text-green-400 mt-2">45% CAGR in enterprise AI adoption</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3">Productivity Crisis</h3>
                  <p className="text-slate-300">89% of meetings are considered ineffective, costing US businesses $399B annually in lost productivity</p>
                  <div className="text-sm text-red-400 mt-2">$399B annual productivity loss</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" 
                alt="Market Growth" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Competitive Landscape</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              First-mover advantage in conversational AI while competitors focus on passive transcription
            </p>
          </div>

          {/* Competitive Matrix */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-6 text-white font-semibold">Feature</th>
                  <th className="text-center p-6 text-blue-400 font-semibold">VoiceAgent AI</th>
                  <th className="text-center p-6 text-slate-400 font-semibold">Otter.ai</th>
                  <th className="text-center p-6 text-slate-400 font-semibold">Rev.com</th>
                  <th className="text-center p-6 text-slate-400 font-semibold">Zoom AI</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/30">
                  <td className="p-6">Real-time Voice Interaction</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-6">Multi-Agent Collaboration</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                  <td className="text-center p-6 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-6">Platform Agnostic</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-yellow-400">Partial</td>
                  <td className="text-center p-6 text-yellow-400">Partial</td>
                  <td className="text-center p-6 text-red-400">Zoom Only</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-6">Basic Transcription</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-6">Enterprise Security</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                  <td className="text-center p-6 text-yellow-400">Partial</td>
                  <td className="text-center p-6 text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Market Positioning */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Traditional Players</h3>
              <p className="text-slate-300 mb-4">Otter.ai, Rev.com, Trint</p>
              <ul className="text-slate-300 space-y-2">
                <li>• Passive transcription only</li>
                <li>• Limited platform support</li>
                <li>• No real-time interaction</li>
                <li>• Commoditized pricing</li>
              </ul>
              <div className="mt-4 text-red-400 font-semibold">Market Share: 65%</div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 transform scale-105">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Our Position</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">VoiceAgent AI</h3>
              <p className="text-slate-300 mb-4">Revolutionary Voice AI</p>
              <ul className="text-slate-300 space-y-2">
                <li>• Real-time conversation</li>
                <li>• Multi-agent collaboration</li>
                <li>• Platform agnostic</li>
                <li>• Premium enterprise pricing</li>
              </ul>
              <div className="mt-4 text-blue-400 font-semibold">Target Share: 15%</div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Platform Native</h3>
              <p className="text-slate-300 mb-4">Zoom AI, Teams AI, Meet AI</p>
              <ul className="text-slate-300 space-y-2">
                <li>• Platform locked solutions</li>
                <li>• Basic AI features</li>
                <li>• Limited customization</li>
                <li>• Bundled pricing</li>
              </ul>
              <div className="mt-4 text-green-400 font-semibold">Market Share: 20%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Target Market Segments</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic focus on high-value enterprise segments with complex meeting requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise (1000+)</h3>
              <ul className="text-slate-300 space-y-2 mb-4">
                <li>• Complex multi-stakeholder meetings</li>
                <li>• Compliance requirements</li>
                <li>• Global teams</li>
                <li>• High meeting volume</li>
              </ul>
              <div className="text-green-400 font-semibold">$99-199/user/month</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Legal & Professional Services</h3>
              <ul className="text-slate-300 space-y-2 mb-4">
                <li>• Client meetings documentation</li>
                <li>• Compliance tracking</li>
                <li>• Billable hours tracking</li>
                <li>• Confidentiality requirements</li>
              </ul>
              <div className="text-green-400 font-semibold">$149-249/user/month</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
              <ul className="text-slate-300 space-y-2 mb-4">
                <li>• Patient consultation records</li>
                <li>• Medical team coordination</li>
                <li>• HIPAA compliance</li>
                <li>• Clinical decision support</li>
              </ul>
              <div className="text-green-400 font-semibold">$199-299/user/month</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Government & Public Sector</h3>
              <ul className="text-slate-300 space-y-2 mb-4">
                <li>• Public meeting transparency</li>
                <li>• Regulatory compliance</li>
                <li>• Multi-language support</li>
                <li>• Accessibility requirements</li>
              </ul>
              <div className="text-green-400 font-semibold">Custom Enterprise</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Business Model Page Component
const BusinessPage = () => {
  const [selectedTier, setSelectedTier] = React.useState('enterprise');
  const [customerCount, setCustomerCount] = React.useState(0);
  const [growthMetrics, setGrowthMetrics] = React.useState({
    arr: 0,
    customers: 0,
    efficiency: 0
  });

  React.useEffect(() => {
    // Animate growth metrics
    const targetMetrics = {
      arr: 12,
      customers: 45,
      efficiency: 89
    };

    const animateCounter = (key, target, duration = 2000) => {
      const start = 0;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (target - start) * progress);
        
        setGrowthMetrics(prev => ({ ...prev, [key]: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };

    // Stagger the animations
    setTimeout(() => animateCounter('arr', targetMetrics.arr), 500);
    setTimeout(() => animateCounter('customers', targetMetrics.customers), 1000);
    setTimeout(() => animateCounter('efficiency', targetMetrics.efficiency), 1500);
  }, []);

  const pricingTiers = [
    {
      id: 'professional',
      name: 'Professional',
      price: 49,
      features: [
        '1 AI agent per meeting',
        'Basic voice interaction',
        '3 platform integrations',
        'Standard transcription',
        'Email support'
      ],
      target: 'Mid-market (100-500 employees)',
      highlight: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      features: [
        'Multiple AI agents',
        'Inter-agent communication',
        'All platform support',
        'Advanced analytics',
        'Custom integrations',
        'Priority support'
      ],
      target: 'Large Enterprise (500+ employees)',
      highlight: true
    },
    {
      id: 'custom',
      name: 'Enterprise Plus',
      price: 'Custom',
      features: [
        'Unlimited AI agents',
        'On-premise deployment',
        'Custom AI training',
        'White-label solutions',
        '24/7 dedicated support',
        'Custom SLAs'
      ],
      target: 'Fortune 500, Government',
      highlight: false
    }
  ];

  // Customer testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'CTO',
      company: 'TechVision Corp',
      content: 'VoiceAgent AI transformed our board meetings. The multi-agent collaboration provides insights we never had before. ROI was evident within 3 months.',
      avatar: '👩‍💼',
      metrics: '340% ROI'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'VP Operations',
      company: 'Global Finance Inc',
      content: 'Compliance tracking became effortless. Our legal AI agent catches every regulation mention while our analytics AI provides real-time insights.',
      avatar: '👨‍💼',
      metrics: '85% time saved'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Head of Product',
      company: 'Innovation Labs',
      content: 'The platform-agnostic approach means we don\'t need to change our workflow. VoiceAgent AI just works everywhere we meet.',
      avatar: '👩‍🔬',
      metrics: '12 month payback'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Scalable Revenue
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Model
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Multi-tiered SaaS model with high margins, low churn, and multiple revenue streams designed for rapid scaling
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Tiers */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Revenue Tiers</h2>
            <p className="text-xl text-slate-300">Strategic pricing to capture value across market segments</p>
          </div>

            {pricingTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                  selectedTier === tier.id
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/50 transform scale-105'
                    : 'bg-slate-700/50 border-slate-600/50 hover:border-slate-500/50'
                } ${tier.highlight ? 'relative' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  {typeof tier.price === 'number' ? (
                    <div className="text-4xl font-bold text-blue-400">${tier.price}<span className="text-lg text-slate-400">/user/month</span></div>
                  ) : (
                    <div className="text-4xl font-bold text-green-400">{tier.price}</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 text-slate-300">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-sm text-slate-400 mb-1">Target Market:</div>
                  <div className="text-sm text-slate-300">{tier.target}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Success Stories */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">🎯 Customer Success Stories</h3>
            
            <div className="relative">
              <div className="bg-slate-700/50 rounded-xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                      <div className="text-blue-400">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</div>
                    </div>
                    <p className="text-slate-300 text-lg italic mb-4">"{testimonials[currentTestimonial].content}"</p>
                    <div className="bg-green-900/30 rounded-lg p-3 inline-block">
                      <div className="text-green-400 font-semibold">Result: {testimonials[currentTestimonial].metrics}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Revenue Streams */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Multiple Revenue Streams</h2>
            <p className="text-xl text-slate-300">Diversified income sources beyond core subscription revenue</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Core SaaS</h3>
              <p className="text-slate-300 mb-4">Monthly/annual subscription revenue from user licenses</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Revenue Share:</span>
                  <span className="text-green-400 font-semibold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected (Y3):</span>
                  <span className="text-white font-semibold">$30M</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Services</h3>
              <p className="text-slate-300 mb-4">Custom integration, training, and consulting services</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Revenue Share:</span>
                  <span className="text-blue-400 font-semibold">8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected (Y3):</span>
                  <span className="text-white font-semibold">$3M</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Insights</h3>
              <p className="text-slate-300 mb-4">Anonymized industry benchmarks and analytics products</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Revenue Share:</span>
                  <span className="text-purple-400 font-semibold">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected (Y3):</span>
                  <span className="text-white font-semibold">$2M</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Marketplace</h3>
              <p className="text-slate-300 mb-4">Third-party AI agent marketplace and revenue sharing</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Revenue Share:</span>
                  <span className="text-yellow-400 font-semibold">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected (Y3):</span>
                  <span className="text-white font-semibold">$1M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Strong Unit Economics</h2>
            <p className="text-xl text-slate-300">Proven metrics demonstrating sustainable, profitable growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554260570-e9689a3418b8" 
                alt="Financial Metrics" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover mb-8"
              />
              
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Customer Acquisition</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">$2,400</div>
                      <div className="text-slate-400">Average CAC</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">3.2:1</div>
                      <div className="text-slate-400">LTV:CAC Ratio</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Retention Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">96%</div>
                      <div className="text-slate-400">Annual Retention</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">125%</div>
                      <div className="text-slate-400">Net Revenue Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">Customer Lifetime Value</span>
                    <span className="text-2xl font-bold text-green-400">$7,800</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">Monthly Churn Rate</span>
                    <span className="text-2xl font-bold text-cyan-400">&lt; 3%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">Gross Margin</span>
                    <span className="text-2xl font-bold text-blue-400">85%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">Payback Period</span>
                    <span className="text-2xl font-bold text-indigo-400">14 months</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-300">Magic Number</span>
                    <span className="text-2xl font-bold text-purple-400">1.8</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Growth Drivers</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span><strong>Viral Coefficient:</strong> 0.4 - Meeting participants experience value directly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span><strong>Expansion Revenue:</strong> 25% annual growth from existing customers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span><strong>Enterprise Momentum:</strong> Average deal size increasing 40% YoY</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Investors Page Component
const InvestorsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner With
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                The Future
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Join us in revolutionizing the $2.8 trillion meeting market with the world's first real-time conversational AI
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Investment Opportunity</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Series A Funding</h3>
                  <div className="text-3xl font-bold text-white mb-2">$15 Million</div>
                  <p className="text-slate-300">18-month runway to achieve $25M ARR and profitability</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Current Traction</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">$2M</div>
                      <div className="text-slate-400">ARR</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-slate-400">Enterprise Customers</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Use of Funds</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Product Development</span>
                      <span className="text-white font-semibold">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Sales & Marketing</span>
                      <span className="text-white font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Operations & Infrastructure</span>
                      <span className="text-white font-semibold">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/32319625/pexels-photo-32319625.jpeg" 
                alt="Investment Opportunity" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover mb-8"
              />
              
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Why Invest Now?</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span><strong>First-Mover Advantage:</strong> 18-month technology lead in conversational AI</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span><strong>Massive TAM:</strong> $2.8T productivity market with 45% annual growth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span><strong>Proven Traction:</strong> Enterprise customers, strong unit economics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <span><strong>Defensible Moat:</strong> Technical complexity creates high barriers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-300">Experienced entrepreneurs with proven track records in AI and enterprise software</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">SK</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Sanjeev Kuwadekar</h3>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>Leading AI researcher and entrepreneur with 15+ years in voice technology and machine learning.</p>
                
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Contact Information:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span>📧</span>
                      <a href="mailto:sanjk0604@gmail.com" className="text-blue-400 hover:text-blue-300">sanjk0604@gmail.com</a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📱</span>
                      <a href="tel:+18188255024" className="text-blue-400 hover:text-blue-300">+1 (818) 825-5024</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Background:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• PhD in Computer Science, AI specialization</li>
                    <li>• Previously CTO at enterprise AI startup (acquired)</li>
                    <li>• 12 patents in voice processing technology</li>
                    <li>• Published researcher in top-tier AI conferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">SP</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Sampath V Patil</h3>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>Expert in distributed systems and enterprise software architecture with deep experience in scalable AI platforms.</p>
                
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Contact Information:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span>📧</span>
                      <a href="mailto:drsampathvp@gmail.com" className="text-cyan-400 hover:text-cyan-300">drsampathvp@gmail.com</a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📱</span>
                      <a href="tel:+919353391603" className="text-cyan-400 hover:text-cyan-300">+91 93533 91603</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Background:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• PhD in Distributed Systems & AI</li>
                    <li>• Former Principal Engineer at major cloud provider</li>
                    <li>• Expert in real-time audio processing at scale</li>
                    <li>• 20+ years in enterprise software development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Meetings?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Schedule a demo and see why leading enterprises are choosing VoiceAgent AI for their meeting intelligence needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">For Investors</h3>
              <div className="space-y-4 text-slate-300 mb-6">
                <p>Get detailed pitch deck, financial projections, and technical deep-dive</p>
                <ul className="space-y-2 text-left">
                  <li>• Comprehensive market analysis</li>
                  <li>• Detailed financial model</li>
                  <li>• Technology demonstration</li>
                  <li>• Customer references</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300">
                Schedule Investor Meeting
              </button>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">For Enterprises</h3>
              <div className="space-y-4 text-slate-300 mb-6">
                <p>Experience the future of meeting intelligence with a personalized demo</p>
                <ul className="space-y-2 text-left">
                  <li>• Live AI agent demonstration</li>
                  <li>• Custom use case discussion</li>
                  <li>• ROI calculation</li>
                  <li>• Implementation planning</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300">
                Book Enterprise Demo
              </button>
            </div>
          </div>

          <div className="text-slate-400">
            <p className="mb-2">Questions? Contact our team directly:</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="mailto:sanjk0604@gmail.com" className="text-blue-400 hover:text-blue-300">sanjk0604@gmail.com</a>
              <a href="mailto:drsampathvp@gmail.com" className="text-cyan-400 hover:text-cyan-300">drsampathvp@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;