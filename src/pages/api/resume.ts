// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Experience = {
  position: string;
  company: string;
  dates: string;
  responsibilities: string[];
};

type Education = {
  degree: string;
  university: string;
  graduationYear: number;
};

type Achievement = {
  title: string;
};

export type Data = {
  name: string;
  title: string;
  skills: string[];
  experiences: Experience[];
  education: Education;
  achievements: Achievement[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: 'Your Name',
    title: 'Software Engineer',
    skills: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'RESTful APIs',
      'Git',
    ],
    experiences: [
      {
        position: 'Software Engineer',
        company: 'XYZ Company',
        dates: '[Dates]',
        responsibilities: [
          'Developed responsive and user-friendly web applications using React.js, TypeScript, and Tailwind CSS.',
          'Collaborated with cross-functional teams to gather requirements and implement new features.',
          'Implemented state management using Redux, ensuring efficient data flow and application stability.',
          'Optimized application performance through code refactoring and performance tuning techniques.',
          'Conducted code reviews and provided constructive feedback to improve code quality.',
          'Assisted in troubleshooting and resolving bugs, ensuring smooth application functionality.',
          'Actively participated in Agile development processes, including sprint planning and daily stand-ups.',
        ],
      },
      {
        position: 'Front-End Developer',
        company: 'ABC Solutions',
        dates: '[Dates]',
        responsibilities: [
          'Built dynamic and interactive user interfaces using React.js and TypeScript.',
          'Worked closely with design teams to implement pixel-perfect UI designs.',
          'Collaborated with back-end developers to integrate front-end interfaces with RESTful APIs.',
          'Implemented responsive designs using Tailwind CSS, ensuring consistent user experiences across devices.',
          'Conducted thorough testing and debugging to identify and resolve issues promptly.',
          'Assisted in the creation of reusable UI components to improve development efficiency.',
        ],
      },
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      university: '[University Name]',
      graduationYear: 2023,
    },
    achievements: [
      {
        title:
          '[List any relevant achievements, such as awards, honors, or recognition]',
      },
      {
        title: '[List any relevant certificates or courses completed]',
      },
    ],
  });
}
