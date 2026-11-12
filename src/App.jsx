import { useEffect, useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="grid-bg"></div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo"><a href="#hero">LJ<span className="dot">.</span></a></div>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`} id="mobileMenu">
        <a href="#hero" className="mob-link" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" className="mob-link" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#experience" className="mob-link" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#projects" className="mob-link" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" className="mob-link" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-left">
          <div className="hero-tag">Software Tester Intern</div>
          <h1 className="hero-name">
            <span className="line">LONNIS</span>
            <span className="line accent-text">JOHNSON</span>
          </h1>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
            <a
              href="/Lonnis_Johnson_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Lonnis_Johnson_Resume.pdf"
              className="btn-resume"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-frame">
            <img
              src="/profilepicture.png"
              alt="Lonnis Johnson"
              onError={(e) => {
                e.currentTarget.src =
                  'https://ui-avatars.com/api/?name=LJ&size=500&background=0d0d0d&color=aaff00&bold=true&font-size=0.38'
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section reveal">
        <div className="section-header">
          <span className="section-num mono">01</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <p>
            Software Tester Intern with a strong foundation in full-stack web development and hands-on experience
            in designing, developing, and testing web applications. Skilled in manual testing, automation testing
            using Playwright with TypeScript, API testing, test case design, and end-to-end testing. Proficient in
            Python, React.js, JavaScript, Node.js. Possess practical development experience in building responsive
            websites and database-driven applications, with a strong understanding of application functionality,
            debugging, and software quality assurance.
          </p>
          <div className="edu-cards">
            <div className="edu-card reveal">
              <div className="edu-year mono">2024 – 2026</div>
              <div className="edu-degree">Master of Computer Applications (MCA)</div>
              <div className="edu-school">Rajagiri College of Social Science (Autonomous)</div>
              <div className="edu-location">Kalamassery, Ernakulam</div>
              <div className="edu-score">76.6%</div>
            </div>
            <div className="edu-card reveal">
              <div className="edu-year mono">2021 – 2024</div>
              <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
              <div className="edu-school">Rajagiri College of Management and Applied Science</div>
              <div className="edu-location">Kakkanad, Ernakulam</div>
              <div className="edu-score">80.1%</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section reveal">
        <div className="section-header">
          <span className="section-num mono">02</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-flat-grid">
          <div className="skill-tile reveal">
            <i className="devicon-playwright-plain"></i>
            <span>Playwright</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-typescript-plain"></i>
            <span>TypeScript</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-python-plain"></i>
            <span>Python</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-java-plain"></i>
            <span>Java</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-javascript-plain"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-php-plain"></i>
            <span>PHP</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-c-plain"></i>
            <span>C</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-cplusplus-plain"></i>
            <span>C++</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-react-original"></i>
            <span>React.js</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-nodejs-plain"></i>
            <span>Node.js</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-express-original"></i>
            <span>Express.js</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-fastapi-plain"></i>
            <span>REST API</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-postman-plain"></i>
            <span>Postman</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-html5-plain"></i>
            <span>HTML5</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-css3-plain"></i>
            <span>CSS3</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-tailwindcss-original"></i>
            <span>Tailwind CSS</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-django-plain"></i>
            <span>Django</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-laravel-plain"></i>
            <span>Laravel</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-mysql-plain"></i>
            <span>MySQL</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-postgresql-plain"></i>
            <span>PostgreSQL</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-sqlite-plain"></i>
            <span>SQLite</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-docker-plain"></i>
            <span>Docker</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-linux-plain"></i>
            <span>Linux</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-git-plain"></i>
            <span>Git</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-github-original"></i>
            <span>GitHub</span>
          </div>
          <div className="skill-tile reveal">
            <i className="devicon-vscode-plain"></i>
            <span>VS Code</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section reveal">
        <div className="section-header">
          <span className="section-num mono">03</span>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="exp-list">
          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date mono">Oct 2026 – Present</div>
              <div className="exp-badge">Latest</div>
            </div>
            <div className="exp-right">
              <h3>Software Tester Intern</h3>
              <div className="exp-company">Testing Mavens</div>
              <ul>
                <li>
                  Performing manual testing by analyzing requirements, preparing test cases, and executing functional
                  test scenarios.
                </li>
                <li>Developing and executing automated UI test scripts using Playwright and TypeScript.</li>
                <li>Performing API testing using HTML methods and validating request and response data.</li>
              </ul>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date mono">Apr 2026 – Sept 2026</div>
              <div className="exp-location mono">Ireland, Remote</div>
            </div>
            <div className="exp-right">
              <h3>Freelance Full Stack Developer</h3>
              <div className="exp-company">SimtechON</div>
              <ul>
                <li>
                  Developing and maintaining a responsive company website using React.js, with a focus on reusable UI
                  components and modern frontend development practices.
                </li>
                <li>
                  Building and integrating web functionality for a company job portal, including candidate applications
                  and role-based employer and employee portals.
                </li>
                <li>
                  Developing REST APIs using Express.js and MySQL to manage job postings, candidate registrations, and
                  application data.
                </li>
              </ul>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date mono">Jan 2026 – Mar 2026</div>
              <div className="exp-location mono">Kakkanad</div>
            </div>
            <div className="exp-right">
              <h3>React Developer Intern</h3>
              <div className="exp-company">Cubet Techno Labs Pvt Ltd</div>
              <ul>
                <li>
                  Developed and deployed a responsive React.js website for a houseboat business using reusable
                  components and modern frontend practices.
                </li>
                <li>Built reusable React components and interactive UI workflows for responsive booking interfaces.</li>
                <li>
                  Integrated booking functionality with backend data handling and automated email notifications using
                  Google Apps Script.
                </li>
              </ul>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date mono">Apr 2025 – May 2025</div>
              <div className="exp-location mono">Bangalore</div>
            </div>
            <div className="exp-right">
              <h3>Web Development Intern</h3>
              <div className="exp-company">Revstar Solutions</div>
              <ul>
                <li>Built and deployed a responsive company website using HTML, CSS, and modern web development technologies.</li>
                <li>Implemented basic SEO optimizations to improve search engine visibility and indexing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <div className="section-header">
          <span className="section-num mono">04</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          <a href="https://www.simtechon.com" target="_blank" rel="noopener noreferrer">
            <div className="project-card reveal">
              <div className="project-number mono">01</div>
              <div className="project-body">
                <div className="project-tags">
                  <span>React.js</span>
                  <span>Express.js</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                </div>
                <h3>Simtechon Company Website</h3>
                <p>
                  Developing a full-stack company website with an integrated job portal for candidate applications.
                  Building REST APIs using Express.js and MySQL for job postings, candidate registration, and
                  application management. Implementing separate employer and employee portals for applicant tracking
                  and hiring workflows.
                </p>
              </div>
            </div>
          </a>

          <a href="https://galileahouseboat.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-card reveal">
              <div className="project-number mono">02</div>
              <div className="project-body">
                <div className="project-tags">
                  <span>React</span>
                  <span>Tailwind CSS</span>
                </div>
                <h3>Houseboat Website</h3>
                <p>
                  Developed a responsive React-based website with reusable components and modern UI design. Integrated a
                  booking system using Google Apps Script and Google Sheets for backend data handling, along with
                  automated email notifications to streamline user bookings.
                </p>
              </div>
            </div>
          </a>

          <div className="project-card reveal">
            <div className="project-number mono">03</div>
            <div className="project-body">
              <div className="project-tags">
                <span>Java</span>
                <span>SQLite</span>
              </div>
              <h3>Student Management System</h3>
              <p>
                Developed a student management system using Java and SQLite. Implemented complete CRUD functionality
                for managing student records through a user-friendly graphical interface.
              </p>
            </div>
          </div>

          <div className="project-card reveal">
            <div className="project-number mono">04</div>
            <div className="project-body">
              <div className="project-tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>MediaPipe</span>
                <span>PyAutoGUI</span>
              </div>
              <h3>Gesture-Based Game Controller</h3>
              <p>
                Real-time hand gesture recognition system controlling PC gameplay via webcam. Tracked hand landmarks with
                MediaPipe and mapped gestures to keyboard actions with cooldown logic for smooth, stable controls.
              </p>
            </div>
          </div>

          <div className="project-card reveal">
            <div className="project-number mono">05</div>
            <div className="project-body">
              <div className="project-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <h3>E-Commerce Website</h3>
              <p>
                Developed a full-featured e-commerce platform using Laravel MVC architecture. Implemented secure user
                authentication, product management, shopping cart functionality, and order processing with MySQL
                database integration.
              </p>
            </div>
          </div>

          <div className="project-card reveal">
            <div className="project-number mono">06</div>
            <div className="project-body">
              <div className="project-tags">
                <span>Python</span>
                <span>Django</span>
              </div>
              <h3>Apartment Rental Management System</h3>
              <p>
                Developed an apartment rental management system using Django and MySQL. Implemented complete CRUD
                functionality for apartment listings, tenant management, and rental agreements with a user-friendly
                interface.
              </p>
            </div>
          </div>

          <div className="project-card reveal">
            <div className="project-number mono">07</div>
            <div className="project-body">
              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <h3>Light Store</h3>
              <p>
                Developed a light store management system using PHP and MySQL. Implemented complete CRUD functionality for
                light products, inventory management, and sales tracking with a user-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section reveal">
        <div className="section-header">
          <span className="section-num mono">05</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="certs-list">
          <div className="cert-row reveal">
            <span className="cert-name">AI Aware</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">AI For All (Intel &amp; Digital India) · June 2025</span>
          </div>
          <div className="cert-row reveal">
            <span className="cert-name">AI Appreciate</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">AI For All (Intel &amp; Digital India) · June 2025</span>
          </div>
          <div className="cert-row reveal">
            <span className="cert-name">Advanced AI Program</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">Hands-on ML · June 2025</span>
          </div>
          <div className="cert-row reveal">
            <span className="cert-name">Database Administration Workshop</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">Design &amp; Security · Oct 2024</span>
          </div>
          <div className="cert-row reveal">
            <span className="cert-name">Power Communication Workshop</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">Professional Comms · July 2024</span>
          </div>
          <div className="cert-row reveal">
            <span className="cert-name">Core Python &amp; Data Science</span>
            <span className="cert-line"></span>
            <span className="cert-meta mono">Value Added Course · March 2023</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section reveal">
        <div className="section-header">
          <span className="section-num mono">06</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-inner">
          <div className="contact-links">
            <a href="mailto:lonnisjohnson@gmail.com" className="contact-link reveal">
              <span className="contact-type mono">Email</span>
              <span className="contact-value">lonnisjohnson@gmail.com</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="tel:+919633155080" className="contact-link reveal">
              <span className="contact-type mono">Phone</span>
              <span className="contact-value">+91 9633155080</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/lonnisjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link reveal"
            >
              <span className="contact-type mono">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/lonnisjohnson</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a
              href="https://github.com/lonnisjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link reveal"
            >
              <span className="contact-type mono">GitHub</span>
              <span className="contact-value">github.com/lonnisjohnson</span>
              <span className="cl-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 Lonnis Johnson · Software Tester &amp; Full Stack Developer</span>
      </footer>

      {/* BACK TO TOP */}
      <button
        id="backToTop"
        className={showBackToTop ? 'visible' : ''}
        title="Top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  )
}
