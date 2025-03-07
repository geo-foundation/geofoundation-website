// src/components/HeroSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import GlobeComponent from './GlobeComponent';

const HeroSection: React.FC = () => {
  const [chatStep, setChatStep] = useState(0);
  
  // Define multiple chat sequences to showcase different capabilities
  const supplyChainSequence = [
    { type: 'user', content: 'Identify supply chain risks in Southeast Asia' },
    { type: 'ai', content: 'Processing geospatial risk analysis...', isLoading: true, replace: true },
    { type: 'ai', content: "GEOPOLITICAL RISK ANALYSIS\n\n• Port congestion in Singapore (↑28% last week)\n• Political instability in Myanmar impacting logistics\n• Severe weather alerts for Vietnam's manufacturing hubs\n• Labor disputes detected in Thailand industrial zones" },
    { type: 'user', content: 'Calculate impact on quarterly operations' },
    { type: 'ai', content: 'Quantifying business impact...', isLoading: true, replace: true },
    { type: 'ai', content: "OPERATIONAL IMPACT ASSESSMENT\n\n• 15% increased transit time for Singapore routes\n• 30% risk of delays from Vietnam suppliers\n• $1.2M potential revenue impact\n• 3 critical component shortages predicted\n\nRECOMMENDATION: Activate contingency plan B-7 for affected routes" }
  ];

  const regulatorySequence = [
    { type: 'user', content: 'Monitor regulatory changes in EU carbon markets' },
    { type: 'ai', content: 'Scanning regulatory environment...', isLoading: true, replace: true },
    { type: 'ai', content: "REGULATORY INTELLIGENCE\n\n• New EU carbon tax proposal (72% likelihood of passage)\n• Germany accelerating emissions standards timeline\n• France introducing stricter reporting requirements\n• 3 major industry competitors announcing carbon neutrality targets" },
    { type: 'user', content: 'How will this affect our compliance costs?' },
    { type: 'ai', content: 'Calculating compliance impact...', isLoading: true, replace: true },
    { type: 'ai', content: "COMPLIANCE IMPACT FORECAST\n\n• €2.3M additional annual compliance costs expected\n• 18% increase in carbon credit requirements\n• 4 facilities requiring emissions technology upgrades\n• 9-month window to implement new reporting systems\n\nRECOMMENDATION: Accelerate green energy transition in EU facilities" }
  ];

  const marketEntrySequence = [
    { type: 'user', content: 'Analyze risks for market entry in South America' },
    { type: 'ai', content: 'Evaluating market conditions...', isLoading: true, replace: true },
    { type: 'ai', content: "MARKET ENTRY RISK ASSESSMENT\n\n• Currency volatility in Argentina (±12% monthly fluctuation)\n• Brazil introducing new foreign investment regulations\n• Chile experiencing political transition period\n• Colombia showing strong economic indicators with 5.2% growth" },
    { type: 'user', content: 'Recommend optimal entry strategy' },
    { type: 'ai', content: 'Formulating strategic recommendations...', isLoading: true, replace: true },
    { type: 'ai', content: "STRATEGIC RECOMMENDATION\n\n• Colombia identified as optimal initial market\n• Chile as secondary expansion target (12-month timeline)\n• Joint venture model reduces regulatory exposure by 65%\n• Currency hedging strategy estimated to save $3.4M annually\n\nRECOMMENDATION: Phase 1 launch in Bogotá with local partnership" }
  ];

  // Array of all sequences for cycling
  const allSequences = [supplyChainSequence, regulatorySequence, marketEntrySequence];
  
  // State to track which conversation to show
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  
  // Current active sequence
  const chatSequence = allSequences[currentSequenceIndex];

  // Animation timing
  useEffect(() => {
    // Reset state when sequence changes
    setChatStep(0);
    
    // No blinking cursor effect anymore
    
    // Chat sequence timing - much slower pace with immediate response after question
    const chatTimeline = [2000, 2500, 12000, 18000, 18500, 28000];
    
    // Clear any existing timeouts to avoid conflicts
    const timeoutIds: NodeJS.Timeout[] = [];
    
    chatTimeline.forEach((time, index) => {
      const timeoutId = setTimeout(() => {
        setChatStep(index + 1);
      }, time);
      timeoutIds.push(timeoutId);
    });

    // Reset animation after completion with longer pause and switch to next sequence
    const resetAnimation = setTimeout(() => {
      // First clear the chat
      setChatStep(0);
      
      // Advance to next conversation sequence
      setCurrentSequenceIndex((prevIndex) => (prevIndex + 1) % allSequences.length);
      
      // Start again after longer delay
      const restartTimeout = setTimeout(() => {
        // Force scroll to top before starting new animation
        if (messagesEndRef.current?.parentElement) {
          messagesEndRef.current.parentElement.scrollTop = 0;
        }
        
        const newTimeoutIds: NodeJS.Timeout[] = [];
        chatTimeline.forEach((time, index) => {
          const newTimeoutId = setTimeout(() => {
            setChatStep(index + 1);
          }, time);
          newTimeoutIds.push(newTimeoutId);
        });
        
        timeoutIds.push(...newTimeoutIds);
      }, 8000);
      
      timeoutIds.push(restartTimeout);
    }, 35000);

    timeoutIds.push(resetAnimation);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [currentSequenceIndex]);

  // Define the message type
  type ChatMessage = {
    type: string;
    content: string;
    isLoading?: boolean;
    replace?: boolean;
  };

  // Render messages up to the current step
  // Reference for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.parentElement;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };
  
  // Scroll when messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [chatStep]);

  const renderMessages = () => {
    // Create a processed array where loading messages are replaced by their results
    const processedMessages: ChatMessage[] = [];
    let skipNextMessage = false;
    
    chatSequence.slice(0, chatStep).forEach((message, idx) => {
      if (skipNextMessage) {
        skipNextMessage = false;
        return;
      }
      
      // If this is a loading message and has replace flag, check if next message should replace it
      if (message.isLoading && message.replace && 
          idx + 1 < chatStep && 
          chatSequence[idx].type === chatSequence[idx+1].type) {
        processedMessages.push(chatSequence[idx+1]);
        skipNextMessage = true;
      } else {
        processedMessages.push(message);
      }
    });
    
    return processedMessages.map((message, index) => {
      return (
        <div key={index} className={`chat-message ${message.type}-message ${message.isLoading ? 'loading-message' : ''}`}>
          <div className="message-content">
            {message.isLoading ? (
              <>
                {message.content} <span className="loading-dots"><span></span><span></span><span></span></span>
              </>
            ) : (
              <div className="message-text">
                {message.content.split('\n').map((line, i) => (
                  line.trim() === '' ? <br key={i} /> : <div key={i}>{line}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">Navigate Global Uncertainty With AI-Driven Intelligence</h1>
        <div className="hero-cta">
          <a href="#contact" className="cta-button" onClick={() => {
            // Pre-fill the contact form message
            const messageElement = document.getElementById('message') as HTMLTextAreaElement;
            if (messageElement) {
              messageElement.value = "I'm interested in getting early access to GeoFoundation's platform.";
              // Trigger the onChange event to update React state
              messageElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }}>Get Early Access</a>
          <a href="#platform" className="text-link">Learn More &rarr;</a>
        </div>
        <div className="chat-demo-container">
          <div className="chat-messages">
            {renderMessages()}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <GlobeComponent />
      </div>
    </section>
  );
};

export default HeroSection;
