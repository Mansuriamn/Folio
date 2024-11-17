import React from 'react'
import './Folio.css'
import AmanNew from './Aman-new.jpg';
export default function Folio() {
  return (
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Template - About me</title>
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <nav className="nav-mobile">
      <div className="navbar-brand">
        <img
          src="https://i.postimg.cc/nrn1rVW3/logo.jpg"
          alt="logo"
          className="brand-img"
        />
        <h1 className="brand-name">John Doe</h1>
      </div>
      <ion-icon name="menu-outline" className="menu-toggler" />
    </nav>
    <div className="side-bar">
      <img
      src={AmanNew}
        alt="logo"
        className="brand-img"
      />
      <h1 className="brand-name">
        Aman <br /> Mansuri
      </h1>
      <nav>
        <ul className="nav">
          <li>
            <a href="#" className="active">
              About
            </a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="social-btn-groups">
        <a href="#" className="btn">
          <ion-icon name="logo-twitter" />
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-linkedin" />
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-facebook" />
        </a>
      </div>
      <div className="side-bar-footer">
        <p className="copyright">
          © 2024 All rights <br />
          reserved
        </p>
      </div>
    </div>
    <section className="about page active">
      <div className="hero">
        <div className="hero-img-box">
          <img src={AmanNew} alt="hero img" />
        </div>
        <div className="hero-content">
          <div className="hero-content-wrapper">
            <p className="title">Web Developer</p>
            <h1 className="name">Aman Mansuri</h1>
            <div className="description">
              <p>How to describe yourself? </p>
              <p>
               **"I would describe myself as a Computer Science student with a strong passion for full stack development. I love creating projects that solve real-world problems, and I’m actively building my skills in React, Express, and MySQL. My journey in coding began with web development, and I’ve since completed various projects, including innovative solutions for hackathons. Academically, I’m pursuing B.Tech at Shri Ram Group of Institutions, Jabalpur.

Beyond my studies, I enjoy participating in hackathons and technical communities like GDG, which has been a fantastic way to grow and network. When I’m not coding, I like exploring YouTube live streaming and gaming setups, which is a fun and creative outlet for me. I’m always eager to learn new technologies and take on exciting challenges!"**
              </p>
              <p>
                Remember, your portfolio is a reflection of both your work and
                your personality. Be authentic, approachable, and confident.
              </p>
            </div>
            <a href="#" className="btn-primary">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="about-inner">
        <div className="service">
          <h2>What I do</h2>
          <div className="grid-item">
            <div className="item">
              <div className="item-icon">
                <ion-icon name="storefront-outline" />
              </div>
              <div className="item-wrapper">
                {/* Examples */}
                <h3>E-commerce</h3>
                <p>
                  I can create, maintain, and enhance platforms that cater to
                  businesses and their customers. I worked closely with
                  designers, other developers, and stakeholders to align the
                  website with business goals and user needs.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <ion-icon name="reader-outline" />
              </div>
              <div className="item-wrapper">
                {/* Examples */}
                <h3>Copywritting</h3>
                <p>
                  I can create user-focused content that resonates with the
                  target audience by strategically place CTAs throughout the
                  website—whether it's encouraging users to sign up, make a
                  purchase, or explore more content.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <ion-icon name="desktop-outline" />
              </div>
              <div className="item-wrapper">
                {/* Examples */}
                <h3>Web Design</h3>
                <p>
                  I can work on the visual part of the website - the pages
                  visitors see and interact with. I design the layout, integrate
                  graphics, and use HTML, CSS, and JavaScript to enhance the
                  site's user interface. Also, I ensure that websites adapt
                  gracefully to different screen sizes by adjusting font sizes,
                  image dimensions, and navigation menus to provide a consistent
                  experience regardless of the user's device.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <ion-icon name="file-tray-stacked-outline" />
              </div>
              <div className="item-wrapper">
                {/* Examples */}
                <h3>Management</h3>
                <p>
                  I can collaborate with project managers to define project
                  scope, objectives, and deliverables. This contribute to
                  project timelines by estimating development time and ensuring
                  realistic deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-row">
            <div className="testimonials-content">
              <div className="testimonials-text">
                <blockquote>
                  <i>
                    John built a project website for our fundraising campaign.
                    It's modern, clean and a beatiful design that got a lot of
                    praises from colleagues and visitors.
                  </i>
                </blockquote>
              </div>
              <div className="testimonials-author">
                <img
                  src="https://i.postimg.cc/W4jxRZmy/testimonial-1.jpg"
                  alt="author"
                  className="author-img"
                />
                <div className="author-info">
                  <h4 className="author-name">Herbert DeVilla</h4>
                </div>
              </div>
            </div>
            <div className="testimonials-content">
              <div className="testimonials-text">
                <blockquote>
                  <i>
                    Working with John has been an absolute pleasure. I was
                    impressed with his attention to detail, his communication
                    skills and his professional approach to our timelines and
                    processes.
                  </i>
                </blockquote>
              </div>
              <div className="testimonials-author">
                <img
                  src="https://i.postimg.cc/MpJFRBLG/testimonial-2.jpg"
                  alt="author"
                  className="author-img"
                />
                <div className="author-info">
                  <h4 className="author-name">Oliver Benjamin</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clients">
          <h2>Clients</h2>
          <div className="clients-row">
            <img
              src="https://i.postimg.cc/bJPyBddY/client-1.png"
              alt="client"
            />
            <img
              src="https://i.postimg.cc/PJtmTtVT/client-2.png"
              alt="client"
            />
            <img
              src="https://i.postimg.cc/Y0bQSJTg/client-3.png"
              alt="client"
            />
            <img
              src="https://i.postimg.cc/h4rLMdhj/client-4.png"
              alt="client"
            />
            <img
              src="https://i.postimg.cc/8PzhYzrb/client-5.png"
              alt="client"
            />
            <img
              src="https://i.postimg.cc/yYpFCCmC/client-6.png"
              alt="client"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="resume page">
      <h1 className="section-heading">Resume</h1>
      <h4 className="section-sub-heading">5 Years of Experience</h4>
      <div className="resume-row">
        <div className="wrapper">
          <div className="education">
            <h2>Education</h2>
            <div className="grid-item">
              <h4 className="year">2019</h4>
              <h4 className="education-name">Front End Development</h4>
              <p className="company">University of Studies</p>
              <p className="education-description">
                {" "}
                Front-end web developers work on the visual part of the
                website—the pages visitors see and interact with. They design
                the layout, integrate graphics, and use HTML, CSS, and
                JavaScript to enhance the site's user interface. Their goal is
                to create an appealing and responsive design across various
                devices and browsers.
              </p>
              <div className="divider" />
            </div>
            <div className="grid-item">
              <h4 className="year">2018</h4>
              <h4 className="education-name">Graphics Design</h4>
              <p className="company">University of Studies</p>
              <p className="education-description">
                {" "}
                Graphic design involves creating visuals—such as typography,
                images, colors, and shapes—to convey information or messages
                effectively.
              </p>
              <div className="divider" />
            </div>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <div className="grid-item">
              <h4 className="year">2022 - Current</h4>
              <h4 className="experience-name">Lead Soft Engineer</h4>
              <p className="company">Google</p>
              <p className="experience-description">
                {" "}
                I lead the entire development team toward creating a successful
                product. Also, I encourage a collaborative work environment
                where everyone knows each other's progress.
              </p>
              <div className="divider" />
            </div>
            <div className="grid-item">
              <h4 className="year">2018 - 2022</h4>
              <h4 className="experience-name">Senior Software Engineer</h4>
              <p className="company">Facebook</p>
              <p className="experience-description">
                {" "}
                I can design complex software systems. My decisions impact
                scalability, maintainability, and overall system architecture.
                Also, I mentor less experienced team members, helping them grow
                and learn.
              </p>
              <div className="divider" />
            </div>
            <div className="grid-item">
              <h4 className="year">2012 - 2018</h4>
              <h4 className="experience-name">Junior Software Engineer</h4>
              <p className="company">Amazon</p>
              <p className="experience-description">
                I learnt to code in an existing codebase, dive into the project,
                understand its structure, and become comfortable with the code.
                Also I worked closely with senior software engineers that guide
                me, answered my questions and helped me grow.
              </p>
              <div className="divider" />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="design-skill">
            <h2>Design Skills</h2>
            <div className="progress-detail">
              <div className="progress-name">Web Design</div>
              <div className="progress-percent">95%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "95%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">Print Design</div>
              <div className="progress-percent">65%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "65%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">Logo Design</div>
              <div className="progress-percent">80%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">Graphics Design</div>
              <div className="progress-percent">90%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }} />
            </div>
          </div>
          <div className="coding-skill">
            <h2>Coding Skills</h2>
            <div className="progress-detail">
              <div className="progress-name">Javascript</div>
              <div className="progress-percent">90%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">MongoDB</div>
              <div className="progress-percent">70%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">Python</div>
              <div className="progress-percent">60%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">React/Redux</div>
              <div className="progress-percent">50%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">HTML/CSS</div>
              <div className="progress-percent">100%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }} />
            </div>
            <div className="progress-detail">
              <div className="progress-name">Bootstrap</div>
              <div className="progress-percent">95%</div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn-primary">
        Download CV
      </a>
    </section>
    <section className="portfolio page ">
      <h1 className="section-heading">Portfolio</h1>
      <h4 className="section-sub-heading">My Works</h4>
      <ul className="filter-box">
        <li className="filter-item active">All</li>
        <li className="filter-item">Media</li>
        <li className="filter-item">Mockups</li>
        <li className="filter-item">SoundCloud</li>
        <li className="filter-item">Vimeo Videos</li>
        <li className="filter-item">Youtube Videos</li>
      </ul>
      <div className="portfolio-items-group">
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/N0mGDRsP/1.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">SoundCloud Audio</h4>
          <div className="item-icon">
            <ion-icon name="volume-high" />
          </div>
          <div className="item-category">SoundCloud</div>
        </div>
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/Qxd1NpZ7/2.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">Media Project 1</h4>
          <div className="item-icon">
            <ion-icon name="film" />
          </div>
          <div className="item-category">Media</div>
        </div>
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/CLrDRzwQ/3.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">Vimeo Video 1</h4>
          <div className="item-icon">
            <ion-icon name="videocam" />
          </div>
          <div className="item-category">Vimeo Videos</div>
        </div>
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/nLBQS2By/4.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">Media Project 2</h4>
          <div className="item-icon">
            <ion-icon name="film" />
          </div>
          <div className="item-category">Media</div>
        </div>
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/1tKVszWM/5.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">Mockup Design 1</h4>
          <div className="item-icon">
            <ion-icon name="image" />
          </div>
          <div className="item-category">Mockups</div>
        </div>
        <div className="portfolio-item active">
          <img
            src="https://i.postimg.cc/x8TJCShQ/6.jpg"
            alt="image"
            className="item-img"
          />
          <h4 className="item-name">Youtube Video 1</h4>
          <div className="item-icon">
            <ion-icon name="videocam" />
          </div>
          <div className="item-category">Youtube Videos</div>
        </div>
      </div>
    </section>
    <section className="blog page">
      <h1 className="section-heading">Blog</h1>
      <h4 className="section-sub-heading">My Diary</h4>
      <div className="blog-container">
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/8z72Wj8n/blog_post_1.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">UI</div>
          <div className="blog-info">
            <p className="publish-date">06 Apr 2023</p>
            <a href="#" className="blog-title">
              Best Practices for Animated Progress Indicators
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/44vXZ2bW/blog-post-2.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">E-Commerce</div>
          <div className="blog-info">
            <p className="publish-date">02 Apr 2023</p>
            <a href="#" className="blog-title">
              Designing the Perfect Feature Comparison Table
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/yYTwxkdR/blog-post-3.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">E-Commerce</div>
          <div className="blog-info">
            <p className="publish-date">25 Mar 2023</p>
            <a href="#" className="blog-title">
              An Overview of E-Commerce Platforms
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/DwjKz8ZZ/blog-post-5.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">Design</div>
          <div className="blog-info">
            <p className="publish-date">19 Mar 2023</p>
            <a href="#" className="blog-title">
              Why I switched to sketch for UI design
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/s2LZdYZ4/blog-post-6.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">UI</div>
          <div className="blog-info">
            <p className="publish-date">10 Mar 2023</p>
            <a href="#" className="blog-title">
              Creative and Innovative Navigation Designs
            </a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-img-box">
            <img
              src="https://i.postimg.cc/8z72Wj8n/blog_post_1.jpg"
              alt="blog image"
            />
          </div>
          <div className="blog-category">UI</div>
          <div className="blog-info">
            <p className="publish-date">01 Mar 2023</p>
            <a href="#" className="blog-title">
              6 Easy Steps to Better Icon Design
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="contact page">
      <h1 className="section-heading">Contact</h1>
      <h4 className="section-sub-heading">Get in Touch</h4>
      <div className="contact-info">
        <div className="info-box">
          <ion-icon name="call-outline" />
          <p>123-456-7890</p>
        </div>
        <div className="info-box">
          <ion-icon name="location-outline" />
          <p>California</p>
        </div>
        <div className="info-box">
          <ion-icon name="mail-outline" />
          <p>john.doe@email.com</p>
        </div>
        <div className="info-box">
          <ion-icon name="checkmark-outline" />
          <p>Hire Available</p>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <div className="form-grid">
            <div className="grid-left">
              <input
                type="text"
                required=""
                placeholder="Full Name"
                autoComplete="off"
              />
              <input
                type="email"
                required=""
                placeholder="Email Address"
                autoComplete="off"
              />
              <input
                type="text"
                required=""
                placeholder="Subject"
                autoComplete="off"
              />
            </div>
            <div className="grid-right">
              <textarea placeholder="Your Message" defaultValue={""} />
            </div>
          </div>
          <a href="#" className="btn-primary">
            Send Message
          </a>
        </form>
      </div>
    </section>
  </div>
</>

  )
}
