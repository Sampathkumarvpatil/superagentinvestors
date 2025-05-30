import React, { useState, useEffect } from 'react';
import './App.css';

const VoiceAgentLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                VoiceAgent
              </span> AI
            </div>
            <div className="hidden md:flex space-x-8 text-slate-300">
              <button onClick={() => scrollToSection('technology')} className="hover:text-blue-400 transition-colors">Technology</button>
              <button onClick={() => scrollToSection('market')} className="hover:text-blue-400 transition-colors">Market</button>
              <button onClick={() => scrollToSection('advantage')} className="hover:text-blue-400 transition-colors">Advantage</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Investors</button>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: 'url(https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg)'}}
        ></div>
        
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
              🚀 World's First Two-Way Voice AI for Meetings
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Revolutionizing
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Meeting Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            VoiceAgent AI enables active voice participation in meetings across any platform, 
            transforming passive recording into intelligent, real-time collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Investor Demo
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="border border-slate-400 text-slate-300 hover:text-white hover:border-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Learn Technology
            </button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-12 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">$2.8T</div>
              <div className="text-slate-400">Meeting Market TAM</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">89%</div>
              <div className="text-slate-400">Meeting Inefficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">First</div>
              <div className="text-slate-400">Voice AI Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                The $2.8 Trillion
                <span className="block text-red-400">Meeting Problem</span>
              </h2>
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Passive Participation</h3>
                    <p>Current AI tools only listen and transcribe, missing opportunities for real-time insights and active contribution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Platform Fragmentation</h3>
                    <p>Teams use multiple meeting platforms, requiring separate solutions for each ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Lost Productivity</h3>
                    <p>89% of meetings lack clear outcomes, resulting in billions in lost productivity annually</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560250163-17506787d971" 
                alt="Business meeting" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Voice Technology
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The world's first AI meeting assistant capable of true two-way voice interaction, 
              actively participating in conversations across any platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Two-Way Voice Interaction</h3>
              <p className="text-slate-300">
                First AI to actively speak and participate in meetings, not just listen and transcribe
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Platform Agnostic</h3>
              <p className="text-slate-300">
                Works seamlessly across Zoom, Teams, Meet, and any meeting platform
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Agent System</h3>
              <p className="text-slate-300">
                Multiple AI agents collaborate with inter-agent communication for complex scenarios
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-slate-300">
                Real-time insights, action items, and meeting effectiveness scoring
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AWS Infrastructure</h3>
              <p className="text-slate-300">
                Enterprise-grade security and scalability on AWS cloud platform
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Processing</h3>
              <p className="text-slate-300">
                Instantaneous voice processing and response with sub-second latency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" 
                alt="Technology infrastructure" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Massive Market
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Opportunity
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.8 Trillion</div>
                  <div className="text-slate-300">Total Addressable Market (TAM) for enterprise productivity</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$127 Billion</div>
                  <div className="text-slate-300">Serviceable Addressable Market (SAM) for meeting solutions</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$12 Billion</div>
                  <div className="text-slate-300">Serviceable Obtainable Market (SOM) target within 5 years</div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-slate-400">Enterprise Prospects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">45%</div>
                  <div className="text-slate-400">YoY Market Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section id="advantage" className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              First-Mover
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              While competitors focus on passive transcription, we've created the world's first 
              AI that actively participates in conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Traditional Solutions</h3>
              <p className="text-slate-300">Passive recording, basic transcription, limited platform support</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">VoiceAgent AI</h3>
              <p className="text-slate-300">Active participation, two-way conversation, platform-agnostic, multi-agent</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Market Position</h3>
              <p className="text-slate-300">Patent-pending technology, 18-month lead advantage, enterprise-ready</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Differentiators</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Patent-pending voice interaction technology</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Platform-agnostic architecture</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Multi-agent collaboration system</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Enterprise-grade security and compliance</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Real-time processing capabilities</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Scalable AWS cloud infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Scalable Revenue
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Model
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Starter</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">$49/user/month</div>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Basic voice interaction</li>
                <li>• 5 meeting platforms</li>
                <li>• Standard analytics</li>
                <li>• Email support</li>
              </ul>
              <div className="text-sm text-slate-400">Target: Mid-market (100-1000 employees)</div>
            </div>

            {/* Professional Tier */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/50 transform scale-105">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Pro</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-6">$99/user/month</div>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Advanced voice AI</li>
                <li>• All platforms</li>
                <li>• Multi-agent capabilities</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
              </ul>
              <div className="text-sm text-slate-400">Target: Large Enterprise (1000+ employees)</div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Custom</h3>
              <div className="text-3xl font-bold text-green-400 mb-6">Custom</div>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Custom integrations</li>
                <li>• On-premise deployment</li>
                <li>• Custom AI training</li>
                <li>• 24/7 dedicated support</li>
                <li>• SLA guarantees</li>
              </ul>
              <div className="text-sm text-slate-400">Target: Fortune 500 companies</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-green-400">$50M</div>
                <div className="text-slate-400">ARR Target Year 3</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">85%</div>
                <div className="text-slate-400">Gross Margin</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">&lt; 5%</div>
                <div className="text-slate-400">Monthly Churn</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400">$500</div>
                <div className="text-slate-400">Customer LTV</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Partner With
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              The Future
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join us in revolutionizing the $2.8 trillion meeting market with the world's first 
            AI that actively participates in conversations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Why Invest Now?</h3>
              <ul className="space-y-4 text-left text-slate-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>First-mover advantage in conversational AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Massive TAM with proven enterprise demand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Patent-pending technology moat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Experienced team with enterprise sales track record</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Investment Highlights</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between">
                  <span>Series A Target:</span>
                  <span className="font-bold text-blue-400">$15M</span>
                </div>
                <div className="flex justify-between">
                  <span>Use of Funds:</span>
                  <span className="font-bold">R&D, Sales, Marketing</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue Run Rate:</span>
                  <span className="font-bold text-green-400">$2M ARR</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise Customers:</span>
                  <span className="font-bold">15+ Fortune 1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule Investor Meeting
            </button>
            <div className="text-slate-400">
              <p>Contact: investors@voiceagent.ai | +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  VoiceAgent
                </span> AI
              </div>
              <p className="text-slate-400">
                Revolutionizing meetings with the world's first two-way voice AI assistant.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Voice AI Platform</li>
                <li>Multi-Agent System</li>
                <li>Platform Integration</li>
                <li>Enterprise Security</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Press</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>investors@voiceagent.ai</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 VoiceAgent AI. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <VoiceAgentLanding />;
}

export default App;