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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Anudhyan Datta — Portfolio</h1>
        <nav className="space-x-4 text-sm">
          <a href="/resume.pdf" className="hover:underline" target="_blank">Resume</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-bold">Designer • Technologist • Builder</h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          Focused on creating tools for communities, sustainability‑oriented design,
          and blending craftsmanship with technology.
        </p>
        
      </section>

      {/* WORK SECTION */}
      <section id="work" className="max-w-4xl mx-auto p-6">
        <h3 className="text-2xl font-semibold">Selected Work</h3>
        <div className="mt-6 grid gap-6">
          {projects.map((p) => (
            <article key={p.id} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/5 bg-gray-100 rounded">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-40 rounded"
                    />
                  ) : (
                    <div className="p-6 text-sm text-gray-500">No image available</div>
                  )}
                </div>
                <div className="md:w-3/5">
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="mt-2 text-gray-700">{p.summary}</p>
                  <ul className="mt-3 text-sm list-disc list-inside text-gray-600">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex gap-3">
                    {p.links.prototype && p.links.prototype !== '#' && (
                      <a href={p.links.prototype} className="text-sm px-3 py-1 border rounded">Live Demo</a>
                    )}
                    {p.links.repo && p.links.repo !== '#' && (
                      <a href={p.links.repo} className="text-sm px-3 py-1 border rounded">Code</a>
                    )}
                    {p.links.writeup && p.links.writeup !== '#' && (
                      <a href={p.links.writeup} className="text-sm px-3 py-1 border rounded">Write-up</a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OPEN SOURCE CONTRIBUTIONS */}
      <section id="oss" className="max-w-4xl mx-auto p-6">
        <h3 className="text-2xl font-semibold">Open Source Contributions</h3>
        <p className="mt-2 text-gray-700 max-w-2xl">I actively contribute to open-source communities by creating tools, improving documentation, and publishing learning resources.</p>
        <div className="mt-4 space-y-3 text-gray-800">
          <p>• Created multiple blogs focused on <strong>Goose</strong>, covering design workflows and insights.</p>
          <p>• Developed <strong>custom Goose recipe templates</strong> to help builders create consistent, clear submissions.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto p-6">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <p className="mt-2 text-gray-700 max-w-2xl">
          Empathetic leather technologist passionate about sustainability, global
          peace, environmental responsibility, and helping communities. Skilled in
          Java, Python, Selenium, GCP, and design tools like Figma.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto p-6">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-2 text-gray-700">Feel free to reach out.</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>Email: <a className="underline" href="mailto:anudhyandatta2021@gmail.com">anudhyandatta2021@gmail.com</a></p>
          <p>Email: <a className="underline" href="mailto:anudhyan@anudhyan.me">anudhyan@anudhyan.me</a></p>
          <p className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg><a href="https://www.linkedin.com/in/anudhyan" className="underline">LinkedIn</a></p>
          <p className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.868 10.907.575.106.782-.25.782-.554 0-.273-.01-1.182-.015-2.144-3.201.696-3.878-1.536-3.878-1.536-.523-1.328-1.278-1.681-1.278-1.681-1.044-.714.08-.699.08-.699 1.155.082 1.764 1.186 1.764 1.186 1.027 1.76 2.693 1.252 3.348.957.104-.744.402-1.253.732-1.542-2.556-.291-5.244-1.278-5.244-5.686 0-1.256.45-2.282 1.186-3.087-.119-.29-.515-1.462.113-3.048 0 0 .967-.31 3.166 1.18a10.86 10.86 0 0 1 2.884-.388c.978.005 1.964.132 2.884.388 2.197-1.49 3.162-1.18 3.162-1.18.63 1.586.235 2.758.116 3.048.74.805 1.184 1.831 1.184 3.087 0 4.42-2.694 5.39-5.258 5.676.41.352.794 1.047.794 2.111 0 1.524-.014 2.752-.014 3.128 0 .307.204.666.79.552C20.213 21.382 23.5 17.082 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"/></svg><a href="https://github.com/Anudhyan" className="underline">GitHub</a></p>
          <p className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/></svg><a href="https://tidb-champions.pingcap.com/" className="underline">TiDB Champions</a></p>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Anudhyan Datta — Built with ♥
      </footer>
    </main>
  )
}
