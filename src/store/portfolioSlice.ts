import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Skill, Project, Education } from '../types';

interface PortfolioState {
  skills: Skill[];
  projects: Project[];
  education: Education[];
}

const initialState: PortfolioState = {
  skills: [
    {
      category: 'Programming and Development',
      items: ['JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'MySQL', 'MongoDB', 'C', 'C++', 'Java', 'Node.js', 'Express.js'],
    },
    {
      category: 'Software Engineering',
      items: ['Software Engineering Practices', 'Systems Design', 'Operating Systems', 'Algorithms', 'Data Structures'],
    },
    {
      category: 'CMS & Tools',
      items: ['WordPress', 'Elementor Pro'],
    },
    {
      category: 'Soft Skills',
      items: ['Analytical Skills'],
    },
  ],
  projects: [
    {
      title: 'Tour Booking Management System',
      description: 'Built an industry-ready platform using React.js, Node.js, Express.js, and MongoDB. It offers seamless booking, customer management, and reservation functionalities.',
      githubLink: 'https://github.com/md-shafiuddin-shajib/travelbooking.git',
    },
    {
      title: 'Food Delivery Website',
      description: 'Designed a dynamic platform with React.js, Redux, and Tailwind CSS for browsing menus, managing orders, and tracking deliveries.',
      githubLink: 'https://github.com/md-shafiuddin-shajib/Food-Delivery.git',
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a feature-rich e-commerce platform using React.js, Redux, and Tailwind CSS for product listings, shopping cart, and checkout processes.',
      githubLink: 'https://github.com/md-shafiuddin-shajib/Ecommer-react.git',
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Computer Science and Engineering",
      institution: 'International University of Business Agriculture and Technology',
      period: 'Jan 2021 - Dec 2024',
      grade: 'CGPA: 3.73/4.00',
    },
    {
      degree: 'High School Certificate (HSC)',
      institution: 'Adhyapak Abdul Majid College, Cumilla',
      period: 'Jul 2017 - Apr 2019',
      grade: 'GPA: 5.00/5.00',
    },
  ],
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;