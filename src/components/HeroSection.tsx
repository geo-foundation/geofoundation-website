// src/components/HeroSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import GlobeComponent from './GlobeComponent';
import { 
  allChatSequences, 
  ChatMessage, 
  chatTimeline, 
  resetDelay, 
  restartDelay 
} from '../data/chatData';

const HeroSection: React.FC = () => {
  const [chatStep, setChatStep] = useState(0);
  
  // State to track which conversation to show
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  
  // Current active sequence
  const chatSequence = allChatSequences[currentSequenceIndex];

  // Animation timing
  useEffect(() => {
    // Reset state when sequence changes
    setChatStep(0);
    
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
      setCurrentSequenceIndex((prevIndex) => (prevIndex + 1) % allChatSequences.length);
      
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
      }, restartDelay);
      
      timeoutIds.push(restartTimeout);
    }, resetDelay);

    timeoutIds.push(resetAnimation);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [currentSequenceIndex]);

  // ChatMessage type is now imported from chatSequences.ts

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
