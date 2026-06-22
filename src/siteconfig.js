export const siteconfig={
    // nav section >
    logoType : "text", // option: "text" "image"
    logoText : "Phyo Wai Aung",// Text Logo (use if logoType = "text")
    logoImage: "./example.svg", // Image Logo Path(place file in /public folder)
    navlinks: ["Home","About", "Projects","Contact"], //change the text

    //hero section >
    heroTitle: "Hi, I’m Phyo Wai Aung",//change title
    heroSubTitle: "Frontend Developer | React & TailwindCSS",//change sub title
    shortIntro: "I build responsive, modern UIs and enjoy turning ideas into clean code.",//change short intro text
    heroBtnText: "View My Work",//change hero button text
    socialLinks: [
        {name: "facebook", url: "https://www.facebook.com/phyo.wai.aung.997975"},
        {name: "instagram", url: "https://www.instagram.com/phyowaiaung_leo"},
        {name: "github", url: "https://github.com/Leo15th"},
        {name: "linkedin", url: "https://www.linkedin.com/in/phyo-wai-aung-1ba327405"},
        {name: "upwork", url: "https://www.upwork.com/freelancers/~0182e7fa9e41df0122?mp_source=share"},
        {name: "email", url: "mailto:pwaiaung2023@gmail.com"}
    ],
    heroImage: "./profile.webp",//change the photo for hero image
    
    //about section >
    firstParaText: "I’m Phyo Wai Aung, an aspiring frontend developer passionate about building responsive and modern user interfaces. My main tools are React, TailwindCSS, and JavaScript, which I use to turn ideas into clean, functional code.",// change the text
    secondParaText: "I began my journey by learning the fundamentals of HTML, CSS, and JavaScript, and gradually expanded into frameworks like React to create dynamic, interactive applications. Along the way, I’ve built projects such as personal portfolios and small business websites, focusing on performance, usability, and clean design.", // change the text
    thirdParaText: "Beyond coding, I enjoy solving problems and continuously improving my skills. My goal is to grow as a developer, contribute to meaningful projects, and eventually build products that make everyday life easier for people.", //change the text

    //projects section >
    projectsIntro: "Here are some of the projects I’ve built to practice and showcase my frontend development skills. Each project focuses on responsive design, clean code, and usability.",//change text
    projects: [
    {
      title: "Fatty House Restaurant Website",
      description: "A responsive restaurant landing page built with HTML, TailwindCSS and JavaScript.",
      img: "./project1.webp",
      imgAlt: "Responsive Restaurant Landing Page with laptop and mobile view",
      tech: "HTML, TailwindCSS, Vanilla JavaScript, GitHub Pages",
      links: [
        { label: "Live Demo", url: "https://leo15th.github.io/Fatty-House/" },
        { label: "GitHub", url: "https://github.com/Leo15th/Fatty-House" }
      ]
    },
    {
      title: "To-Do List App",
      description: "A responsive to-do app built with HTML, CSS and Vanilla JavaScript.",
      img: "./project2.webp",//need to edit
      imgAlt: "Responsive To-Do List Application Picture with laptop and mobile",
      tech: "HTML, CSS, Vanilla JavaScript, GitHub Pages",
      links: [
        { label: "Live Demo", url: "https://leo15th.github.io/To-Do-List/" },
        { label: "GitHub", url: "https://github.com/Leo15th/To-Do-List" }
      ]
    },
    {
      title: "Joy Cafe Website",
      description: "A responsive coffee shop restaurant (full website) built with HTML, TailwindCSS and Vanilla JavaScript.",
      img: "./project3.webp",
      imgAlt: "Coffee shop website preview image",
      tech: "HTML, CSS, Vanilla JavaScript, GitHub Pages",
      links:[
        { label: "Live Demo", url: "https://leo15th.github.io/Joy-Cafe/" },
        { label: "GitHub", url: "https://github.com/Leo15th/Joy-Cafe" }
      ]
    }
    ],

    // contact section
    contactLinks: [
      {name: "email", url: "mailto:pwaiag2023@gmail.com", text:"pwaiag2023@gmail.com"},
      {name: "phone", url: "tel:+6649407681", text:"+66949407681"},
      {name: "address", url: "https://maps.app.goo.gl/GaQMKKDhhXSd6MLL9" , text: "Click to see"}
    ],
    contactSocialLinks: [
      {name: "facebook", url: "https://www.facebook.com/phyo.wai.aung.997975"},
      {name: "instagram", url: "https://www.instagram.com/phyowaiaung_leo"},
      {name: "github", url: "https://github.com/Leo15th"},
      {name: "linkedin", url: "https://www.linkedin.com/in/phyo-wai-aung-1ba327405"},
      {name: "upwork", url: "https://www.upwork.com/freelancers/~0182e7fa9e41df0122?mp_source=share"},
    ]

}