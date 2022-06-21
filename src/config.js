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
            "imageUrl": "https://lh3.googleusercontent.com/Y--fMzfRQIeECjBNrGro0UkEgWnKML9l2KYfcLBDXCR6vECau5" +
                "VCvdzlahATtWm0Uwvh4z_4hXegDP6n3kSGaL_7ejZZEWR2h_C71CsCjx2bPNd00ef05ceo8wTyIQzwse7YotZlgJVIah" +
                "5TX69ybFXDFXO26mr0Khi4v9gHYKaSARMvez9k2TD0KfS2pmbexi2MhWX0R3i486aph9qyPyA4S8x-X3_h7HkeLs6ceJ9" +
                "AY4myqmqkCS5lqJjgq7U2o6M5z-P1zpaLxwwGKcDfl5xgeC6qcixri2z74QlXjd7JF9DH_rN213Q0SjQjcZKCvGtAwviiS" +
                "-pcTOjE1sOK6_n8WCYkEiNkDN0psyLSZwQsRSBa4H6IR10NAYqDU6hQ1-wDTC-jnQ0Xx2d_CgyX1-1IQeJadQWIOmg9YwZ" +
                "GUaL-p-9Z8CYt8tlhSe12WTxou9we0CFXJsknTemcqoX8zfz7FjzXo3oe-qZIvaq2VygpOkdaPi_-khQE_ECM9JmfRDH3L" +
                "iQhxrCjNQWam3ARU7pFAh04Rv82A9TG7zDuSv9Lxl1ynZeDISHvUlgC4x5lr5uEPHfBWnAo-zIACZTkNlaXQf_7101M-Ec" +
                "nLYMXipjIAlgct4nFhquX_D9fr3o43evWbRzsTFO2EP9nWTq8Eayv-rbPGje3Z-99BQz686tM-1k24Rbd5ZXo4PRUrgGY_o" +
                "tDFyZ32sPOZIuvGb2G1c4zwr8XfQ1buXt6eDq8EqLAQruzQbi4gGmT_g3sNA=w3584-h2074-no?authuser=0",
                            // Image URL of the project
            "repoUrl": "https://github.com/PrashantBedi/portfolio-template", // Repo URL of the project
            "description": "A template in react to create a portfolio website. Support blogs, projects, " +
                "skills, resume and socials. Also supports mobile view. [Work in Progress]", // Description of the project
            "demoUrl": "https://www.prashantbedi.dev", // Demo URL of the project
        },
    ],
    "resume": "https://drive.google.com/uc?export=download&id=" +
        "1NVUwpCrCBgX2stiDiG40ikU01Gtdz3I4", //This is downloadable link for google drive file. You can create yours by replacing the file id in url
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
}

export default cfg
