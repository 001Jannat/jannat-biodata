'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, User, GraduationCap, Briefcase, Users, Heart, ExternalLink, Linkedin, Github, Star, Trophy, Eye } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('personal')
  const biodataRef = useRef<HTMLDivElement>(null)

  // Calculate age
  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  // Function to show complete biodata view
  const showCompleteView = () => {
    setActiveSection('all')
  }

  // Function to go back to navigation view
  const goBackToNavigation = () => {
    setActiveSection('personal')
  }

  const age = calculateAge('2001-07-11')

  const navigationButtons = [
    { id: 'personal', label: 'About Me', icon: User },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Star },
    { id: 'family', label: 'Family', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
      {/* Mobile-First Design */}
      <div ref={biodataRef} className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200 to-transparent rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200 to-transparent rounded-tr-full opacity-60"></div>
        
        {/* Header Section with Profile */}
        <div className="relative pt-12 pb-8 px-6 text-center bg-gradient-to-b from-pink-50 to-white">
          {/* Single View Button or Back Button */}
          {activeSection !== 'all' ? (
            // Single button to view complete biodata
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={showCompleteView}
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg flex items-center gap-2"
                title="View Complete Biodata"
              >
                <span className="text-sm font-medium">View</span>
                <Eye size={12} />
              </button>
            </div>
          ) : (
            // Just back button when in complete view
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={goBackToNavigation}
                className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-all duration-300 shadow-lg"
                title="Back to Navigation"
              >
                <span className="text-sm">←</span>
              </button>
            </div>
          )}

          {/* Profile Image */}
          <div className="relative mb-6 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full shadow-xl border-4 border-gradient-to-br from-pink-400 via-purple-400 to-pink-500 overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500">
                <img 
                  src="/image.jpeg" 
                  alt="Jannat Khatoon" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500" style={{display: 'none'}}>
                  <User size={48} className="text-white" />
                </div>
              </div>
            
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Jannat Khatoon</h1>
          <p className="text-lg text-pink-600 font-medium mb-4">Developer</p>
          
          {/* Horizontal Gradient Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>

          {/* Navigation Buttons - Only show when not in complete view */}
          {activeSection !== 'all' && (
            <>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {navigationButtons.map((nav) => {
                  const IconComponent = nav.icon
                  return (
                    <button
                      key={nav.id}
                      onClick={() => setActiveSection(nav.id)}
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        activeSection === nav.id
                          ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent size={20} className="mx-auto" />
                    </button>
                  )
                })}
              </div>
              
              {/* Navigation Labels */}
              <div className="grid grid-cols-5 gap-2 text-xs text-gray-500">
                {navigationButtons.map((nav) => (
                  <div key={nav.id} className="text-center">{nav.label}</div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Sections */}
        <div className="px-6 pb-8">
          
          {/* Personal Information */}
          {(activeSection === 'personal' || activeSection === 'all') && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
                <p className="text-gray-600 leading-relaxed">
                  Passionate Full Stack Developer with 1+ years of experience in creating beautiful and functional web applications. 
                  Currently pursuing B.Tech in Computer Science with expertise in modern web technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Date of Birth</div>
                  <div className="font-semibold text-gray-800">11-07-2001</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Age</div>
                  <div className="font-semibold text-gray-800">{age} years</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Height</div>
                  <div className="font-semibold text-gray-800">5.1 ft</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Religion</div>
                  <div className="font-semibold text-gray-800">Islam</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Nationality</div>
                  <div className="font-semibold text-gray-800">Indian</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className="font-semibold text-gray-800">Single</div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          {(activeSection === 'contact' || activeSection === 'all') && (
            <div className={`space-y-6 animate-fade-in ${activeSection === 'all' ? 'mt-8' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a href="mailto:jannatkhatoon.dev@gmail.com" className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold text-gray-800">jkhatoon276@gmail.com</div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-semibold text-gray-800 text-sm leading-relaxed">
                      Kasiyatand Basti, PO- Bhelatand,<br />
                      PS- Jogta, Dhanbad, Jharkhand
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <div className="text-center text-gray-500 text-sm mb-4">Connect with me</div>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/jannat-khatoon-aa1102212/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/001Jannat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Education Timeline */}
          {(activeSection === 'education' || activeSection === 'all') && (
            <div className={`space-y-6 animate-fade-in ${activeSection === 'all' ? 'mt-8' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Educational Journey</h2>
              
              <div className="space-y-4">
                {[
                  { year: "2025", degree: "B.Tech Computer Science", result: "1st Div", status: "current", institution: "Dumka Engineering College" },
                  { year: "2022", degree: "Diploma in Computer Science", result: "1st Div", status: "completed", institution: "Government Women's Polytechnic, Jamshedpur" },
                  { year: "2019", degree: "Intermediate", result: "1st Div", status: "completed", institution: "SSVM Shyamdih" },
                  { year: "2017", degree: "Matriculation", result: "1st Div", status: "completed", institution: "High School" }
                ].map((edu, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute left-0 top-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                      edu.status === 'current' ? 'bg-pink-500' : 'bg-green-500'
                    }`}></div>
                    {index < 3 && <div className="absolute left-2 top-10 w-0.5 h-16 bg-gray-200"></div>}
                    
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                          <p className="text-sm text-gray-500">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                        <div className="ml-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            edu.status === 'current' ? 'bg-pink-100 text-pink-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {edu.result}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {(activeSection === 'achievements' || activeSection === 'all') && (
            <div className={`space-y-6 animate-fade-in ${activeSection === 'all' ? 'mt-8' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">My Achievements</h2>
              
              {/* Professional Achievements */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Professional Excellence</h3>
                    <p className="text-gray-600">Full Stack Developer at Lawazia Tech</p>
                    <p className="text-sm text-gray-500">1+ Years of Industry Experience</p>
                  </div>
                </div>
              </div>

              {/* Professional Awards */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} />
                  Professional Awards
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy size={16} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Best Achiever Award</span>
                      <p className="text-sm text-gray-500">Lawazia Tech (2023)</p>
                      <p className="text-xs text-gray-400">Outstanding Performance & Dedication</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <span className="font-medium text-gray-800">1+ Years Professional Experience</span>
                      <p className="text-sm text-gray-500">Full Stack Development</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <span className="font-medium text-gray-800">Consistent Academic Excellence</span>
                      <p className="text-sm text-gray-500">1st Division throughout educational journey</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Achievements */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <Heart className="text-pink-500" size={20} />
                  Personal Milestones
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star size={14} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Youngest Developer in Team</span>
                      <p className="text-sm text-gray-600">Started professional career at age 22 with strong technical foundation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star size={14} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Consistent Academic Excellence</span>
                      <p className="text-sm text-gray-600">Maintained 1st Division throughout academic journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star size={14} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Self-taught Developer</span>
                      <p className="text-sm text-gray-600">Mastered modern web technologies through dedication and continuous learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Family Information */}
          {(activeSection === 'family' || activeSection === 'all') && (
            <div className={`space-y-6 animate-fade-in ${activeSection === 'all' ? 'mt-8' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Family Information</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Father</h3>
                      <p className="text-gray-600">Md Halim Ansari</p>
                      <p className="text-sm text-gray-500">Mechanic</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <Heart size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Mother</h3>
                      <p className="text-gray-600">Jahana Bibi</p>
                      <p className="text-sm text-gray-500">House Wife</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Siblings</h3>
                      <p className="text-gray-600">2 Brothers, 1 Sister</p>
                      <p className="text-sm text-gray-500">Close-knit family</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-100 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span className="font-medium">by Jannat Khatoon</span>
            </div>
            
            <div className="text-sm text-gray-500 italic font-medium">
              &ldquo;Passionate • Dedicated&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
