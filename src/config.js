const cfg = {
    "title": "Prashant's Wiki", //title of the window tab
    "name": "PrashantBedi", //name of website
    "imageURL": "https://lh3.googleusercontent.com/pw/AM-JKLWkNjHdlwf4XAG-3q0Clk-xUq03_w9GcCdAXct0T-pj4VamRsECMN" +
        "s2SkyX2cYE8A24SSU7J5ETaqUSfCGl-zHVqU3T7YN5zmBwyNJUnB2f_l-nMn1yDYqXHiWU-DUOhFlNKRul_tQ9wchdCF1XF03H=w840-" +
        "h1090-no?authuser=0", //your image url
    "description": [ //description about you
        "I am a software developer interested in physics, gaming and tech. " +
        "I like to explore the depths of universe and how it works. A big fan of Nikola Tesla and the Einsteins " +
        "'Theory of Relativity'"
    ], // each element in array will be on new line
    "socials": { //keep value "" to hide a social from ui
        "github": "https://www.github.com/Prashant2411",
        "linkedin": "https://www.linkedin.com/in/prashant-bedi-620738178",
        "instagram": "https://www.instagram.com/_mr.psycho_21_/",
        "email": "prashantbedi241197@gmail.com",
        "youtube": "https://www.youtube.com/channel/UCjoExLiPcSXkNYAtpe-OBdg",
        "facebook": "", // value hides facebook icon from ui
        "twitter": "https://twitter.com/p_bedi_21"
    },
    "projects": [
        {
            "title": "Template Portfolio", // title of the project
            "imageUrl": "https://lh3.googleusercontent.com/pw/AL9nZEX4PgidnCQjEEN7GiyKma6uDrvs6SA9ETJZ9jdh2b3r75KJ" +
                "MnWwv3-Z3j27kkFw4_qeHIidAZIj2Vaz_VYk2Sxt3i0CelqDvytD4OUax6dd2QuuTHX6B5Ht3gNyLoaO5GrR8QfptlO0m8n1D" +
                "i6b8AMV=w1912-h963-no?authuser=0", // Image URL of the project
            "repoUrl": "https://github.com/PrashantBedi/portfolio-template", // Repo URL of the project
            "description": "A template in react to create a portfolio website. Support blogs, projects, " +
                "skills, resume and socials. Also supports mobile view. [Work in Progress]", // Description of the project
            "demoUrl": "https://www.prashantbedi.dev", // Demo URL of the project
        },
    ],
    "education": [
        {
            "institution": "Chinmaya Vidhayalaya Tarapur", //Institution name
            "degree": "10th", //Degree name
            "major": "", //Major name if any
            "graduationYear": "2012-2013", //Graduation year
            "place": "Boisar, Maharashtra, India" //Place of study
        },
        {
            "institution": "Chinmaya Vidhayalaya Tarapur",
            "degree": "12th",
            "major": "Science",
            "graduationYear": "2014-2015",
            "place": "Boisar, Maharashtra, India"
        },
        {
            "institution": "G.H Raisoni College of Engineering and Management",
            "degree": "B.E",
            "major": "Information Technology",
            "graduationYear": "2015-2019",
            "place": "Pune, Maharashtra, India"
        }
    ], // Can create multiple education entries
    "skills": [
        "Java",
        "Go",
        "React",
        "AWS",
        "Docker",
        "Kubernetes",
        "Shell",
        "Terraform",
        "Flutter",
    ], // List down all you skills and add corresponding icon url to icon.js
    "strengths": [
        "Fast learner",
        "Easy adaptability to new tech",
        "Logical Analysis",
    ], // List down all your strengths
    "hobbies": [
        "Gaming",
        "Gym",
        "Exploring Physics",
        "Learning new things",
    ], // List down all your hobbies
    "experience": [
        {
            "orgName": "ThoughtWorks",
            "position": "Developer and Consultant",
            "duration": "1 year 8 months",
            "description": ["Worked on project that saved time and staffing in iteration 0",
                "It was also helpful to people new to Tech to get some basic understanding",
                "I worked on go, java, flutter and infra tech during the duration"
            ]
        },
        {
            "orgName": "ThoughtWorks",
            "position": "Intern Developer and Consultant",
            "duration": "6 months",
            "description": ["Worked on project that saved time and staffing in iteration 0",
                "It was also helpful to people new to Tech to get some basic understanding",
                "I worked on java tech during the duration"
            ]
        },
        {
            "orgName": "BridgeLabz",
            "position": "Trainee",
            "duration": "6 months",
            "description": ["Learned about basics of clean coding and best practices to be followed",
                "Took training on developing web app using react js, java and postgresql",
                "Created a book store application to sell books online",
            ]
        }
    ],
    "blogs": [
        {
            "image": "image",
            "url": "url",
            "topic": "Signing APK with JKS"
        },
        {
          "image": "image",
          "url": "url",
          "topic": "Topic"
        },

    ]
}

export default cfg
