'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import OpenAI from 'openai';
import { personalData } from '../data/personalData';
import { linkedinData } from '../data/linkedinData';

// Initialize TensorFlow.js
tf.setBackend('webgl');

const createOpenAIClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OpenAI API key is missing');
    return null;
  }
  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });
};

const openai = createOpenAIClient();

const AIPlayground = () => {
  const [githubData, setGithubData] = useState(null);
  const [activeDemo, setActiveDemo] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hi! I'm Ram, a Computer Science student specializing in AI/ML at NTU. I'm passionate about developing AI solutions and building innovative applications. What would you like to know about my journey?" 
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [detections, setDetections] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Fetch GitHub data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/r4mp4g3r');
        const userData = await userResponse.json();

        const reposResponse = await fetch('https://api.github.com/users/r4mp4g3r/repos');
        const reposData = await reposResponse.json();

        const dataAutoResponse = await fetch('https://api.github.com/repos/r4mp4g3r/dataauto');
        const dataAutoData = await dataAutoResponse.json();

        setGithubData({
          profile: userData,
          repositories: reposData,
          dataAuto: dataAutoData
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  // Get system prompt with GitHub and LinkedIn data
  const getSystemPrompt = () => {
    let prompt = `You are an AI assistant for Pachigulla Ramtej's portfolio website. You should act as Pachigulla Ramtej (or Ram for short) himself, speaking in first person.

Here's my comprehensive background that you MUST use when responding:

${JSON.stringify(personalData, null, 2)}`;

    if (githubData) {
      prompt += `\n\nGitHub Information:
      Repository: DataAuto (${githubData.dataAuto?.html_url})
      Description: ${githubData.dataAuto?.description}
      Stars: ${githubData.dataAuto?.stargazers_count}
      Language: ${githubData.dataAuto?.language}
      Topics: ${githubData.dataAuto?.topics?.join(', ')}
      
      Other Repositories: ${githubData.repositories?.map(repo => repo.name).join(', ')}
      
      Total Public Repositories: ${githubData.profile?.public_repos}
      GitHub Bio: ${githubData.profile?.bio}`;
    }

    prompt += `\n\nLinkedIn Information:
    Profile: ${linkedinData.profile.url}
    Headline: ${linkedinData.profile.headline}
    Summary: ${linkedinData.profile.summary}
    
    Recommendations:
    ${linkedinData.profile.recommendations.map(rec => `- ${rec.text}`).join('\n')}
    
    IMPORTANT: My name is Pachigulla Ramtej, not Ramtej Pachigulla. You can refer to me as Pachigulla Ramtej or Ram for short.`;

    return prompt;
  };

  const startObjectDetection = async () => {
    console.log('1. Starting object detection...');
    setIsLoading(true);
    setActiveDemo('objectDetection');
    
    try {
      await tf.ready();
      console.log('2. TensorFlow.js initialized');

      console.log('3. Requesting camera access...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      console.log('4. Camera access granted, setting up video stream...');
      
      // Wait for a moment to ensure refs are ready
      await new Promise(resolve => setTimeout(resolve, 100));

      if (!videoRef.current) {
        console.log('Video ref not ready');
        setIsLoading(false);
        return;
      }

      videoRef.current.srcObject = stream;

      // Wait for video to be ready
      await new Promise((resolve) => {
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          resolve();
        };
      });
      console.log('5. Video stream setup complete');

      console.log('6. Loading COCO-SSD model...');
      const model = await cocoSsd.load();
      console.log('7. Model loaded successfully');
      
      setIsLoading(false);

      // Set up canvas
      if (canvasRef.current) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
      }

      console.log('8. Starting detection loop...');
      let animationFrameId;
      
      const detectFrame = async () => {
        if (!videoRef.current || !canvasRef.current) return;

        try {
          // Get predictions
          const predictions = await model.detect(videoRef.current);
          
          // Update detection count
          setDetections(predictions);

          // Get canvas context
          const ctx = canvasRef.current.getContext('2d');
          
          // Clear previous drawings
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          // Draw each detection
          predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;
            
            // Draw bounding box
            ctx.strokeStyle = '#00FFFF';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            
            // Draw label
            ctx.fillStyle = '#00FFFF';
            ctx.font = '16px Arial';
            ctx.fillText(
              `${prediction.class} ${Math.round(prediction.score * 100)}%`,
              x,
              y > 10 ? y - 5 : 10
            );
          });

          // Continue detection loop
          requestAnimationFrame(detectFrame);
        } catch (error) {
          console.error('Error in detection:', error);
          requestAnimationFrame(detectFrame); // Continue even if there's an error
        }
      };

      detectFrame();

      // Cleanup function
      return () => {
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = videoRef.current.srcObject.getTracks();
          tracks.forEach(track => track.stop());
        }
      };
    } catch (error) {
      console.error('Error in object detection:', error);
      setIsLoading(false);
      setError('Failed to start camera. Please ensure camera permissions are granted.');
    }
  };

  // Add scroll to bottom function
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Update handleChat function
  const handleChat = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { role: 'user', content: userInput };
    setChatMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setError(null);
    setIsTyping(true);
    
    // Scroll after user message
    scrollToBottom();

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
          { role: "system", content: getSystemPrompt() },
          { role: "user", content: userInput }
        ]
      });

      const aiResponse = completion.choices[0].message.content;
      setChatMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      
      // Scroll after AI response
      scrollToBottom();
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to get response. Please try again.');
    } finally {
      setIsTyping(false);
    }
  };

  // Add useEffect to scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <section id="ai-playground" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">AI Playground</h2>
          <p className="text-gray-400 text-center mb-12">
            Experience my love for AI here in real-time
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Object Detection Demo */}
            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition-all shadow-lg hover:shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Live Object Detection</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience real-time object detection using your camera
              </p>
              {activeDemo !== 'objectDetection' ? (
                <motion.button
                  onClick={startObjectDetection}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors w-full font-medium flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Starting Camera...
                    </>
                  ) : (
                    <>
                      <svg 
                        className="w-5 h-5 transform group-hover:scale-110 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Start Demo
                    </>
                  )}
                </motion.button>
              ) : (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Detected: {detections.length} objects
                  </div>
                </div>
              )}
            </motion.div>

            {/* AI Assistant Demo */}
            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition-all shadow-lg hover:shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">AI Assistant</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Chat with an AI trained on my experience and background.
              </p>
              <div 
                ref={chatContainerRef}
                className="h-[400px] overflow-y-auto mb-6 space-y-4 pr-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
              >
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700/70 text-gray-200'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    className="flex items-center space-x-2 text-gray-400 pl-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span>Ram is typing</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </motion.div>
                )}
              </div>
              <form onSubmit={handleChat} className="flex gap-3">
                <motion.input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-6 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600/50"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.button
                  type="submit"
                  disabled={isTyping || !userInput.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Send</span>
                  <svg 
                    className="w-5 h-5 transform rotate-90" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPlayground; 
