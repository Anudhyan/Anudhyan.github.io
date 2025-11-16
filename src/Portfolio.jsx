import React from 'react'

// ---------- PROJECT DATA (CLEAN + VALID) ----------
const projects = [
  {
    id: 1,
    title: 'Comprehensive Air Quality Monitoring System (Kaggle)',
    summary:
      'A team of three, including me, built Smart_Air — an intelligent system that analyzes 48‑hour pollutant data, forecasts the next 24 hours using SMA, provides personalized AQI‑based recommendations, and generates AI‑driven reports using Gemini + RAG.',
    bullets: [
      'Collects 48‑hour AQI, PM2.5, CO, NO₂ via WAQI API',
      '24‑hour AQI forecasting using SMA with time‑of‑day adjustments',
      'Generates personalized recommendations based on AQI and time',
      'Gemini + RAG for dynamic health impact and preventive reports',
      'Plotly dashboards: gauges, pollutant breakdown, trends',
      'ipywidgets UI for city selection and interactive analysis'
    ],
    image: '/airpollutiondasboard.png',
    links: {
      prototype:
        'https://www.kaggle.com/code/anudhyandatta/comprehensive-air-quality-monitoring-system-296191',
      repo: '#',
      writeup:
        'https://www.kaggle.com/code/anudhyandatta/comprehensive-air-quality-monitoring-system-296191'
    }
  },
  {
    id: 2,
    title: 'Parchment Leather — Tiger Skin Pattern (Traditional Drum Renovation)',
    summary:
      'Renovation of traditional parchment leather for Indian dhol using a dual‑tone tiger pattern, stone‑based pattern R&D, and controlled dye techniques developed at CSIR‑CLRI Kolkata.',
    bullets: [
      'Pattern R&D using stone placement for pattern making and colour tests',
      'Selective pigment brushing technique',
      'Craft‑first design workflow',
      'Developed at CSIR‑CLRI Kolkata'
    ],
    image: '/Review-website-request-11-16-2025_10_49_PM.png',
    links: { prototype: '#', repo: '#', writeup: '#' }
  },
  {
    id: 3,
    title: 'LinkedIn Job Scraper (GitHub)',
    summary:
      'Automation tool to scrape LinkedIn job postings with filters, CSV export, and search customization.',
    bullets: ['Python + Selenium', 'CSV Export', 'Search + Filters'],
    image: '/b6ad8d71-d7e9-4d84-81ec-942ca472c360.png',
    links: {
      prototype: '#',
      repo: 'https://github.com/Anudhyan/LinkedInJobScraper',
      writeup: '#'
    }
  }
]

// ---------- COMPONENT ----------
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Anudhyan Datta
          </h1>
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#oss" className="hover:text-blue-600 transition-colors">Open Source</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="/resume.pdf" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md" target="_blank">Resume</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight">
            Designer • Technologist • Builder
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Focused on creating tools for communities, sustainability‑oriented design,
            and blending craftsmanship with technology.
          </p>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8">Selected Work</h3>
        <div className="grid gap-8">
          {projects.map((p) => (
            <article key={p.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-64 lg:h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 lg:h-full text-gray-400">
                      <span className="text-sm">No image available</span>
                    </div>
                  )}
                </div>
                <div className="lg:w-3/5 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h4>
                  <p className="mt-4 text-gray-600 leading-relaxed">{p.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-gray-700">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.prototype && p.links.prototype !== '#' && (
                      <a href={p.links.prototype} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md text-sm font-medium" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                    {p.links.repo && p.links.repo !== '#' && (
                      <a href={p.links.repo} className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md text-sm font-medium" target="_blank" rel="noopener noreferrer">Code</a>
                    )}
                    {p.links.writeup && p.links.writeup !== '#' && (
                      <a href={p.links.writeup} className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">Write-up</a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OPEN SOURCE CONTRIBUTIONS */}
      <section id="oss" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-3xl font-bold mb-4">Open Source Contributions</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I actively contribute to open-source communities by creating tools, improving documentation, and publishing learning resources.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-500 text-2xl mr-4">•</span>
              <p className="text-gray-700">Created multiple blogs focused on <strong className="text-gray-900">Goose</strong>, covering design workflows and insights.</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-2xl mr-4">•</span>
              <p className="text-gray-700">Developed <strong className="text-gray-900">custom Goose recipe templates</strong> to help builders create consistent, clear submissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Empathetic leather technologist passionate about sustainability, global
            peace, environmental responsibility, and helping communities. Skilled in
            Java, Python, Selenium, GCP, and design tools like Figma.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>
          <p className="text-gray-600 mb-6">Feel free to reach out.</p>

          <div className="grid md:grid-cols-2 gap-4">
            <a href="mailto:anudhyandatta2021@gmail.com" className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              <span className="text-gray-700 group-hover:text-blue-600">anudhyandatta2021@gmail.com</span>
            </a>
            
            <a href="mailto:anudhyan@anudhyan.me" className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              <span className="text-gray-700 group-hover:text-blue-600">anudhyan@anudhyan.me</span>
            </a>
            
            <a href="https://www.linkedin.com/in/anudhyan" className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="text-gray-700 group-hover:text-blue-600">LinkedIn</span>
            </a>
            
            <a href="https://github.com/Anudhyan" className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.868 10.907.575.106.782-.25.782-.554 0-.273-.01-1.182-.015-2.144-3.201.696-3.878-1.536-3.878-1.536-.523-1.328-1.278-1.681-1.278-1.681-1.044-.714.08-.699.08-.699 1.155.082 1.764 1.186 1.764 1.186 1.027 1.76 2.693 1.252 3.348.957.104-.744.402-1.253.732-1.542-2.556-.291-5.244-1.278-5.244-5.686 0-1.256.45-2.282 1.186-3.087-.119-.29-.515-1.462.113-3.048 0 0 .967-.31 3.166 1.18a10.86 10.86 0 0 1 2.884-.388c.978.005 1.964.132 2.884.388 2.197-1.49 3.162-1.18 3.162-1.18.63 1.586.235 2.758.116 3.048.74.805 1.184 1.831 1.184 3.087 0 4.42-2.694 5.39-5.258 5.676.41.352.794 1.047.794 2.111 0 1.524-.014 2.752-.014 3.128 0 .307.204.666.79.552C20.213 21.382 23.5 17.082 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"/></svg>
              <span className="text-gray-700 group-hover:text-blue-600">GitHub</span>
            </a>
            
            <a href="https://tidb-champions.pingcap.com/" className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/></svg>
              <span className="text-gray-700 group-hover:text-blue-600">TiDB Champions</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500 border-t border-gray-200">
        <p>© {new Date().getFullYear()} Anudhyan Datta — Built with ♥</p>
      </footer>
    </main>
  )
}
