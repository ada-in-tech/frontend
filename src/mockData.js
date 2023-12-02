// src/mockData.js
export const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
    { id: 2, title: 'Backend Developer', company: 'Innovatech', location: 'New York' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignPro', location: 'San Francisco' },
    { id: 4, title: 'Data Scientist', company: 'DataWiz', location: 'Remote' },
    { id: 5, title: 'DevOps Engineer', company: 'CloudNet', location: 'Austin' },
    { id: 6, title: 'Product Manager', company: 'ProdManage', location: 'Seattle' },
    // ... more job data
];

export const mentors = [
    { id: 1, name: 'Jane Doe', expertise: 'Full Stack Development' },
    { id: 2, name: 'John Smith', expertise: 'Cloud Computing' },
    { id: 3, name: 'Emma Jones', expertise: 'Cybersecurity' },
    { id: 4, name: 'James Brown', expertise: 'Data Science' },
    { id: 5, name: 'Alice Johnson', expertise: 'UI/UX Design' },
    { id: 6, name: 'Michael Davis', expertise: 'Mobile App Development' },
    // ... more mentor data
];

export const communityFeeds = [
    {
        id: 1,
        user: { name: "Alice Smith", avatarUrl: "/path/to/avatar1.png" },
        postContent: "Excited to join the community!",
        timestamp: "10 mins ago"
    },
    {
        id: 2,
        user: { name: "Bob Jones", avatarUrl: "/path/to/avatar2.png" },
        postContent: "Just finished my first coding project, feeling proud!",
        timestamp: "1 hour ago"
    },
    {
        id: 3,
        user: { name: "Charlie Davis", avatarUrl: "/path/to/avatar3.png" },
        postContent: "Looking for recommendations on JavaScript tutorials.",
        timestamp: "2 hours ago"
    },
    {
        id: 4,
        user: { name: "Diana Evans", avatarUrl: "/path/to/avatar4.png" },
        postContent: "Who's going to the virtual tech meetup this Friday?",
        timestamp: "1 day ago"
    },
    {
        id: 5,
        user: { name: "Ethan Brown", avatarUrl: "/path/to/avatar5.png" },
        postContent: "Can someone help me with Python socket programming?",
        timestamp: "2 days ago"
    },
    {
        id: 6,
        user: { name: "Fiona Green", avatarUrl: "/path/to/avatar6.png" },
        postContent: "Thrilled to be part of this empowering tech community!",
        timestamp: "3 days ago"
    }
    // ...add as many more as you need
];

export const events = [
    { id: 1, title: 'Women in Tech Summit', date: '2023-06-20', description: 'A summit to discuss the role of women in modern tech industries.' },
    { id: 2, title: 'Equality in Tech Workshop', date: '2023-07-15', description: 'Workshop focusing on promoting gender equality in tech.' },
    { id: 3, title: 'Diversity in Tech Panel', date: '2023-08-05', description: 'Panel discussion with leaders advocating for diversity.' },
    { id: 4, title: 'Coding Bootcamp for Women', date: '2023-09-10', description: 'An intensive coding bootcamp targeted at aspiring female developers.' },
    { id: 5, title: 'Tech Mentorship Program Launch', date: '2023-10-25', description: 'Launching a mentorship program for young women in tech.' },
    { id: 6, title: 'Annual Charity Tech Gala', date: '2023-11-30', description: 'A gala event to raise funds for tech education for underprivileged women.' }
];

export const courses = [
    { id: 1, title: 'Intro to Python', description: 'A beginner-friendly introduction to Python.', imageUrl: '/images/python-course.jpg' },
    { id: 2, title: 'Frontend Development', description: 'Learn HTML, CSS, and JavaScript.', imageUrl: '/images/frontend-course.jpg' },
    { id: 3, title: 'Data Science Basics', description: 'Explore the fundamentals of data analysis.', imageUrl: '/images/data-science-course.jpg' },
    { id: 4, title: 'React for Beginners', description: 'Build dynamic web apps with React.', imageUrl: '/images/react-course.jpg' },
    { id: 5, title: 'UI/UX Design Principles', description: 'Learn the basics of user interface design.', imageUrl: '/images/uiux-course.jpg' },
    { id: 6, title: 'Mobile App Development', description: 'Create your first mobile app.', imageUrl: '/images/mobile-app-course.jpg' }
];

export const workshops = [
    { id: 1, title: 'Advanced JavaScript', instructor: 'John Doe', date: '2023-06-15', description: 'Deep dive into modern JavaScript features.' },
    { id: 2, title: 'Cloud Computing Essentials', instructor: 'Alice Smith', date: '2023-07-20', description: 'Introduction to cloud services and deployment.' },
    { id: 3, title: 'Machine Learning Workshop', instructor: 'Emma Johnson', date: '2023-08-10', description: 'Hands-on machine learning techniques and tools.' },
    { id: 4, title: 'Effective Testing Strategies', instructor: 'David Brown', date: '2023-09-05', description: 'Learn how to write efficient and reliable tests.' },
    { id: 5, title: 'DevOps Fundamentals', instructor: 'Sarah Lee', date: '2023-10-12', description: 'Understanding the basics of DevOps practices.' },
    { id: 6, title: 'Web Accessibility Workshop', instructor: 'Michael Davis', date: '2023-11-18', description: 'Ensuring your web content is accessible to all users.' }
];


export const currentMentees = [
    { id: 1, name: 'Emily Chen', details: 'Interested in Web Development' },
    { id: 2, name: 'Luisa Gomez', details: 'Exploring Data Science' },
    { id: 3, name: 'Aarav Singh', details: 'Passionate about AI' },
    { id: 4, name: 'Nadia Ali', details: 'Beginner in Python Programming' },
    { id: 5, name: 'Leo Zhang', details: 'Aspiring Mobile App Developer' },
    { id: 6, name: 'Sophia Johnson', details: 'Learning Cloud Technologies' },
];

export const potentialMentees = [
    { id: 1, name: 'Isla Hughes', details: 'Curious about JavaScript' },
    { id: 2, name: 'Mason Wright', details: 'Seeking guidance in UI/UX Design' },
    { id: 3, name: 'Zara Patel', details: 'Interested in Cybersecurity' },
    { id: 4, name: 'Ethan Brown', details: 'Looking for a mentor in DevOps' },
    { id: 5, name: 'Grace Lim', details: 'Enthusiastic about Full Stack Development' },
    { id: 6, name: 'Oliver Smith', details: 'Eager to learn about Blockchain' },
];

export const advancedWorkshops = [
    { id: 1, title: 'Advanced React Techniques', description: 'Deep dive into React hooks and state management.' },
    { id: 2, title: 'Mastering Python for AI', description: 'Explore AI algorithms with Python.' },
    { id: 3, title: 'Cloud Computing with AWS', description: 'Comprehensive guide to AWS services and architecture.' },
    { id: 4, title: 'Big Data Analytics', description: 'Analyzing large datasets using modern tools.' },
    { id: 5, title: 'DevOps Best Practices', description: 'Enhance your DevOps strategies for efficient workflows.' },
    { id: 6, title: 'UI/UX Design Trends', description: 'Exploring the latest trends in user interface and experience design.' },
];

export const submittedCourses = [
    { id: 1, title: 'Basics of Machine Learning', status: 'Under Review' },
    { id: 2, title: 'Introduction to Kubernetes', status: 'Approved' },
    { id: 3, title: 'JavaScript for Beginners', status: 'Pending' },
    { id: 4, title: 'Effective Testing Strategies', status: 'Rejected' },
    { id: 5, title: 'Building Scalable Web Apps', status: 'Approved' },
    { id: 6, title: 'Blockchain Fundamentals', status: 'Under Review' },
];

export const jobPostings = [
    { id: 1, title: 'Software Engineer', location: 'San Francisco', description: 'Seeking an experienced software engineer...' },
    { id: 2, title: 'Data Analyst', location: 'New York', description: 'Looking for a data analyst with a strong background in statistics...' },
    { id: 3, title: 'Product Manager', location: 'Remote', description: 'Seeking a product manager with experience in SaaS products...' },
    { id: 4, title: 'UX Designer', location: 'Seattle', description: 'UX designer with a passion for creating intuitive user interfaces...' },
    { id: 5, title: 'DevOps Engineer', location: 'Austin', description: 'DevOps engineer with experience in cloud platforms and CI/CD pipelines...' }
];

export const talentSearchResults = [
    { id: 1, name: 'Jane Doe', skills: ['JavaScript', 'React'] },
    { id: 2, name: 'John Smith', skills: ['Python', 'Django'] },
    { id: 3, name: 'Emily Davis', skills: ['Java', 'Spring Boot'] },
    { id: 4, name: 'Chris Wong', skills: ['Angular', 'TypeScript'] },
    { id: 5, name: 'Alexa Johnson', skills: ['AWS', 'Node.js'] }
];

export const collaborationOpportunities = [
    { id: 1, title: 'Hackathon Sponsorship', description: 'Looking for sponsors for an upcoming hackathon...' },
    { id: 2, title: 'Webinar Partnership', description: 'Seeking partners for a webinar series on emerging tech trends...' },
    { id: 3, title: 'Tech Conference Co-Host', description: 'Inviting companies to co-host our annual tech conference...' },
    { id: 4, title: 'Joint Research Project', description: 'Interested in collaborating on a research project in AI...' },
    { id: 5, title: 'Internship Program', description: 'Offering an internship program in collaboration with tech companies...' }
];

export const companyEvents = [
    { id: 1, title: 'Tech Meetup', date: '2023-04-15', description: 'Join us for a tech meetup...' },
    { id: 2, title: 'Coding Workshop', date: '2023-05-20', description: 'Workshop on modern web development techniques...' },
    { id: 3, title: 'Networking Event', date: '2023-06-10', description: 'An evening of networking with tech professionals...' },
    { id: 4, title: 'Innovation Talk', date: '2023-07-05', description: 'Discussion on the latest innovations in tech...' },
    { id: 5, title: 'Tech Career Fair', date: '2023-08-18', description: 'Connect with top tech companies at our career fair...' }
];

export const companyProfile = {
    name: 'TechCorp',
    industry: 'Software Development',
    about: 'Innovating the future of tech...',
    location: 'Silicon Valley',
    website: 'www.techcorp.com'
};

export const resources = [
    { id: 1, title: 'Beginner’s Guide to Coding', link: 'path/to/resource1', description: 'A comprehensive guide for beginners in coding.' },
    { id: 2, title: 'Career Paths in Tech', link: 'path/to/resource2', description: 'Exploring various career opportunities in the tech industry.' },
    { id: 3, title: 'Women Leadership in Tech', link: 'path/to/resource3', description: 'Inspiring stories of women leaders in tech.' },
    { id: 4, title: 'Scholarships for Women in Tech', link: 'path/to/resource4', description: 'A list of scholarships available for women in tech fields.' },
    { id: 5, title: 'Tech Interview Preparation', link: 'path/to/resource5', description: 'Resources to help prepare for tech job interviews.' },
    { id: 6, title: 'Remote Work Best Practices', link: 'path/to/resource6', description: 'Tips and tricks for effective remote work in tech.' }
];

export const collaborations = [
    { id: 1, title: 'Joint Research Initiative', description: 'Seeking partners for research on diversity in tech.', status: 'Active' },
    { id: 2, title: 'Community Tech Fair', description: 'Collaborate on organizing a local tech fair to promote tech education.', status: 'Pending' },
    { id: 3, title: 'Tech for Good Campaign', description: 'Join our campaign to use tech for social good initiatives.', status: 'Completed' },
    { id: 4, title: 'Startup Incubator Program', description: 'Inviting partners to mentor and support tech startups.', status: 'Active' },
    { id: 5, title: 'Youth Coding Workshop', description: 'Collaborate on a workshop to teach coding to youths.', status: 'Upcoming' },
    { id: 6, title: 'Tech Accessibility Project', description: 'Partnership opportunity to improve tech accessibility.', status: 'Active' }
];

export const communityPosts = [
    {
        id: 1,
        user: { name: "Sarah Lee", avatarUrl: "/avatars/sarah.jpg" },
        postContent: "Excited to join this amazing community!",
        timestamp: "10 mins ago"
    },
    {
        id: 2,
        user: { name: "David Kim", avatarUrl: "/avatars/david.jpg" },
        postContent: "Great discussion on the latest tech trends at today's webinar.",
        timestamp: "1 hour ago"
    },
    {
        id: 3,
        user: { name: "Mia Turner", avatarUrl: "/avatars/mia.jpg" },
        postContent: "Anyone attending the AI conference next week?",
        timestamp: "3 hours ago"
    },
    {
        id: 4,
        user: { name: "Carlos Ruiz", avatarUrl: "/avatars/carlos.jpg" },
        postContent: "Looking for collaborators on an open-source project.",
        timestamp: "1 day ago"
    },
    {
        id: 5,
        user: { name: "Anita Desai", avatarUrl: "/avatars/anita.jpg" },
        postContent: "Just published a new article on women in tech. Check it out!",
        timestamp: "2 days ago"
    },
    {
        id: 6,
        user: { name: "Jordan Smith", avatarUrl: "/avatars/jordan.jpg" },
        postContent: "Thrilled about the impact of our latest community project!",
        timestamp: "3 days ago"
    }
];

export const groupProfile = {
    name: 'Tech Women United',
    description: 'An organization dedicated to promoting women in technology.',
    contactInfo: 'contact@techwomenunited.org',
    website: 'www.techwomenunited.org'
};

// src/mockData.js
export const users = [
    { id: 1, name: 'Alice Smith', role: 'Newcomer', email: 'alice@example.com' },
    { id: 2, name: 'Bob Johnson', role: 'Professional', email: 'bob@example.com' },
    { id: 3, name: 'Carol Davis', role: 'Company', email: 'carol@example.com' },
    { id: 4, name: 'Dave Wilson', role: 'Community Group', email: 'dave@example.com' },
    { id: 5, name: 'Eva Brown', role: 'Admin', email: 'eva@example.com' },
    { id: 6, name: 'Frank Miller', role: 'Newcomer', email: 'frank@example.com' },
    // ... more user data
];

export const content = [
    { id: 1, title: 'Introduction to Python', status: 'Pending' },
    { id: 2, title: 'Advanced JavaScript', status: 'Approved' },
    { id: 3, title: 'Machine Learning Basics', status: 'Rejected' },
    { id: 4, title: 'Cloud Computing 101', status: 'Pending' },
    { id: 5, title: 'Web Development for Beginners', status: 'Approved' },
    { id: 6, title: 'Cybersecurity Fundamentals', status: 'Under Review' },
    // ... more content data
];

export const analyticsData = {
    totalUsers: 500,
    activeUsers: 350,
    newSignUps: 150,
    // ... more analytics data
};


export const feedbacks = [
    { id: 1, user: 'John Doe', content: 'Great platform!' },
    { id: 2, user: 'Jane Smith', content: 'Very helpful courses.' },
    { id: 3, user: 'Mike Ross', content: 'Excellent community support.' },
    { id: 4, user: 'Rachel Green', content: 'Useful for job hunting.' },
    { id: 5, user: 'Chandler Bing', content: 'Love the interactive workshops!' },
    { id: 6, user: 'Monica Geller', content: 'Awesome mentoring program.' },
    // ... more feedback data
];

export const financials = {
    totalRevenue: 20000,
    monthlyRevenue: 1500,
    annualProfit: 5000,
    // ... more financial data
};

export const detailedCourses = [
    {
        id: 101,
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build your first web page.',
        imageUrl: '/path/to/web-dev-course-image.jpg',
        content: [
            'Chapter 1: Introduction to HTML',
            'Chapter 2: Styling with CSS',
            'Chapter 3: Interactive Websites with JavaScript',
            // ... more chapters
        ]
    },
    // ... other detailed courses
];

export const detailedWorkshops = [
    {
        id: 201,
        title: 'Data Science with Python',
        description: 'Explore data science techniques and tools using Python.',
        imageUrl: '/path/to/data-science-workshop-image.jpg',
        agenda: [
            'Session 1: Python Basics for Data Science',
            'Session 2: Data Analysis with Pandas',
            'Session 3: Data Visualization with Matplotlib',
            // ... more sessions
        ]
    },
    // ... other detailed workshops
];

export const jobListings = [
    {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Innovatech Solutions',
        location: 'Remote',
        description: 'Seeking an experienced front-end developer with expertise in React, Redux, and modern JavaScript frameworks. Must have a solid understanding of responsive design and 5+ years of professional experience.',
        requirements: ['5+ years in front-end development', 'Expertise in React & Redux', 'Strong knowledge of HTML, CSS, JavaScript'],
        salaryRange: '$90,000 - $120,000'
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: 'DataWiz Analytics',
        location: 'New York, NY',
        description: 'DataWiz is looking for a talented Data Scientist with a strong background in statistical analysis and machine learning. Proficiency in Python and R is a must.',
        requirements: ['Advanced degree in Statistics or related field', 'Experience with Python and R', 'Proven track record in data analysis'],
        salaryRange: '$110,000 - $150,000'
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        company: 'Creative Minds Inc.',
        location: 'San Francisco, CA',
        description: 'Join our dynamic team as a UI/UX Designer to create user-centric designs for our digital products. Must have a portfolio showcasing design thinking and problem-solving skills.',
        requirements: ['3+ years in UI/UX design', 'Proficiency in design tools like Sketch and Figma', 'Strong portfolio required'],
        salaryRange: '$80,000 - $100,000'
    },
    {
        id: 4,
        title: 'Full Stack Developer',
        company: 'TechAdvance',
        location: 'Austin, TX',
        description: 'We are seeking a Full Stack Developer with expertise in both front-end and back-end technologies. Must be comfortable working with Node.js, Express, React, and relational databases.',
        requirements: ['4+ years of full stack development', 'Experience with Node.js, React', 'Familiarity with SQL and NoSQL databases'],
        salaryRange: '$95,000 - $125,000'
    },
    {
        id: 5,
        title: 'DevOps Engineer',
        company: 'CloudTech Solutions',
        location: 'Seattle, WA',
        description: 'CloudTech Solutions is on the hunt for a skilled DevOps Engineer to join our team. The role involves automating deployments, scaling and managing cloud environments, particularly in AWS.',
        requirements: ['Experience with AWS services', 'Knowledge of CI/CD pipelines', 'Experience with Docker and Kubernetes'],
        salaryRange: '$100,000 - $130,000'
    },
    {
        id: 6,
        title: 'Cybersecurity Analyst',
        company: 'SecureNet',
        location: 'Chicago, IL',
        description: 'SecureNet is looking for a Cybersecurity Analyst to help protect our digital assets. The ideal candidate will have experience in threat analysis, incident response, and security monitoring.',
        requirements: ['3+ years in cybersecurity', 'Familiarity with security protocols and frameworks', 'Experience with SIEM tools'],
        salaryRange: '$85,000 - $115,000'
    }
];

export const contentToModerate = [
    { id: 1, title: 'Introduction to JavaScript', author: 'Jane Doe', status: 'Pending Review' },
    { id: 2, title: 'Understanding Cloud Computing', author: 'John Smith', status: 'Approved' },
    { id: 3, title: 'Python for Beginners', author: 'Emma Wilson', status: 'Pending Review' },
    { id: 4, title: 'Advanced Machine Learning', author: 'Raj Patel', status: 'Rejected' },
    { id: 5, title: 'Web Development Best Practices', author: 'Alice Johnson', status: 'Approved' },
    { id: 6, title: 'Cybersecurity Essentials', author: 'Mohammed Ali', status: 'Pending Review' }
];

export const reportsAndFeedback = [
    { id: 1, user: 'Emily Chen', issue: 'Course content outdated', status: 'Open' },
    { id: 2, user: 'Luis Gomez', issue: 'Technical issue with platform', status: 'Resolved' },
    { id: 3, user: 'Aarav Singh', issue: 'Inaccurate course description', status: 'Open' },
    { id: 4, user: 'Nadia Ali', issue: 'Payment processing error', status: 'In Progress' },
    { id: 5, user: 'Leo Zhang', issue: 'Feedback on UI/UX', status: 'Closed' },
    { id: 6, user: 'Sophia Johnson', issue: 'Request for new course topics', status: 'Open' }
];

export const campaigns = [
    { id: 1, title: 'Code for All', description: 'A campaign to promote coding education.', targetDate: '2023-08-01' },
    { id: 2, title: 'Women in Tech', description: 'Increasing the representation of women in tech.', targetDate: '2023-09-15' },
    { id: 3, title: 'Tech Green Initiative', description: 'Promoting sustainable practices in tech companies.', targetDate: '2023-10-20' },
    { id: 4, title: 'Youth Tech Leaders', description: 'Fostering tech leadership among the youth.', targetDate: '2023-11-05' },
    { id: 5, title: 'Diversity in AI', description: 'Encouraging diversity in AI development teams.', targetDate: '2023-12-10' },
    { id: 6, title: 'Tech Accessibility', description: 'Making technology accessible to people with disabilities.', targetDate: '2024-01-18' }
];
export const newcomers = [
    {
        id: 1,
        name: 'Emily Chen',
        skills: ['HTML', 'CSS', 'Basic JavaScript'],
        interests: 'Web Development',
        bio: 'Aspiring web developer, passionate about creating responsive and user-friendly websites.'
    },
    {
        id: 2,
        name: 'Luisa Gomez',
        skills: ['Python', 'Data Analysis'],
        interests: 'Data Science',
        bio: 'Interested in data science and looking to expand my skills in machine learning.'
    },
    {
        id: 3,
        name: 'Aarav Singh',
        skills: ['Java', 'C++', 'Problem Solving'],
        interests: 'Software Development',
        bio: 'Enthusiastic about building efficient and scalable software solutions.'
    },
    {
        id: 4,
        name: 'Nadia Ali',
        skills: ['Python', 'Beginner AI Concepts'],
        interests: 'Artificial Intelligence',
        bio: 'Curious about AI and its applications in daily life, looking for mentorship in this field.'
    },
    {
        id: 5,
        name: 'Leo Zhang',
        skills: ['UI/UX Design', 'Adobe Suite'],
        interests: 'Design',
        bio: 'Passionate about designing intuitive user interfaces and improving user experiences.'
    },
    {
        id: 6,
        name: 'Sophia Johnson',
        skills: ['Cloud Computing Basics', 'AWS'],
        interests: 'Cloud Technologies',
        bio: 'Eager to explore cloud technologies and learn more about cloud architecture.'
    }
];

export const collaborations1 = [
    {
        id: 1,
        partner: 'Tech Corp',
        type: 'Workshop Sponsorship',
        status: 'Ongoing',
        description: 'Partnering for an online tech workshop series.'
    },
    {
        id: 2,
        partner: 'Innovatech',
        type: 'Research Project',
        status: 'Completed',
        description: 'Joint research on AI-driven analytics tools.'
    },
    {
        id: 3,
        partner: 'DesignPro',
        type: 'Design Hackathon',
        status: 'Upcoming',
        description: 'Collaboration for a design-focused hackathon event.'
    },
    // ...add more collaboration data as needed
];

export const resources1 = [
    {
        id: 1,
        title: 'Introduction to Web Development',
        description: 'A comprehensive guide covering the basics of HTML, CSS, and JavaScript.',
        link: '/resources/web-dev-basics'
    },
    {
        id: 2,
        title: 'Data Science for Beginners',
        description: 'An introductory resource for understanding the fundamentals of data science and machine learning.',
        link: '/resources/data-science-beginners'
    },
    {
        id: 3,
        title: 'UI/UX Design Principles',
        description: 'A resource that explores key concepts in user interface and user experience design.',
        link: '/resources/uiux-design-principles'
    },
    {
        id: 4,
        title: 'Python Programming Essentials',
        description: 'A beginner-friendly resource to learn Python programming for various applications.',
        link: '/resources/python-programming'
    },
    {
        id: 5,
        title: 'Cloud Computing Overview',
        description: 'An overview of cloud computing, including fundamental concepts and major cloud service providers.',
        link: '/resources/cloud-computing'
    },
    {
        id: 6,
        title: 'Cybersecurity Basics',
        description: 'A resource providing foundational knowledge on cybersecurity threats and best practices.',
        link: '/resources/cybersecurity-basics'
    }
];

export const communityGroups = [
    {
        id: 1,
        name: 'Women in Tech Alliance',
        description: 'A global network supporting women in technology through networking, mentorship, and career development.',
        link: '/community-groups/wit-alliance'
    },
    {
        id: 2,
        name: 'Code for Equality',
        description: 'An initiative focused on bridging the gender gap in tech through workshops and advocacy.',
        link: '/community-groups/code-for-equality'
    },
    {
        id: 3,
        name: 'Diversity in AI',
        description: 'A community promoting diversity and inclusion in the field of artificial intelligence.',
        link: '/community-groups/diversity-in-ai'
    },
    {
        id: 4,
        name: 'NextGen Tech Women',
        description: 'A platform for young women in tech to connect, learn, and grow together.',
        link: '/community-groups/nextgen-tech-women'
    },
    {
        id: 5,
        name: 'Tech Mamas',
        description: 'Supporting mothers in technology fields with resources, networking, and mentorship.',
        link: '/community-groups/tech-mamas'
    },
    {
        id: 6,
        name: 'InnovateHer',
        description: 'Empowering female tech entrepreneurs through workshops, funding, and community support.',
        link: '/community-groups/innovateher'
    }
];

export const companies = [
    {
        id: 1,
        name: 'TechVision',
        description: 'An innovative software company specializing in AI and machine learning solutions.',
        link: '/companies/techvision'
    },
    {
        id: 2,
        name: 'CloudScape',
        description: 'A leading cloud services provider offering scalable solutions for businesses.',
        link: '/companies/cloudscape'
    },
    {
        id: 3,
        name: 'DataWise',
        description: 'Data analytics firm focused on transforming business data into actionable insights.',
        link: '/companies/datawise'
    },
    {
        id: 4,
        name: 'GreenCode',
        description: 'Sustainable software development company with a focus on environmental impact.',
        link: '/companies/greencode'
    },
    {
        id: 5,
        name: 'SecureNet',
        description: 'Cybersecurity experts providing cutting-edge protection for digital assets.',
        link: '/companies/securenet'
    },
    {
        id: 6,
        name: 'InnoTech',
        description: 'A tech startup known for its innovative approach to consumer technology.',
        link: '/companies/innotech'
    }
];
