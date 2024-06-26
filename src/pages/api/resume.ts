// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Experience = {
  position: string;
  company: string;
  dates: string;
  responsibilities: string[];
  website: string;
};

type Education = {
  degree: string;
  university: string;
  graduationYear: number;
};

type Achievement = {
  title: string;
  link: string;
};

export type Data = {
  name: string;
  title: string;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  achievements: Achievement[];
  contacts: {
    type: string;
    link: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: 'Teerapat Prommarak',
    title: 'Software Engineer',
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'Node.js',
      'React.js',
      'TypeScript',
      'Serverless (AWS, Google Cloud)',
      'MongoDB',
      'PostgresQL',
      'MySQL',
      'Docker',
      'Kubernetes (Basic)',
      'ORM Tools (Prisma, TypeORM, Sequelize)',
      'RESTful APIs',
      'Version Control with Git (GiHub, Bitbucket)',
    ],
    contacts: [
      {
        type: 'Email',
        link: 'mailto:xeus085@gmail.com',
      },
      {
        type: 'GitHub',
        link: 'https://github.com/xeusteerapat',
      },
      {
        type: 'LinkedIn',
        link: 'https://www.linkedin.com/in/teerapat-prommarak',
      },
      {
        type: 'Twitter',
        link: 'https://twitter.com/xeusteerapat',
      },
    ],
    experiences: [
      {
        position: 'Software Engineer',
        company: 'Krungthai-AXA PCL',
        website: 'https://www.krungthai-axa.co.th/en',
        dates: 'August 2023 - Present',
        responsibilities: [
          'Developed web/mobile applications for over 10,000 insurance agencies using React.js, TypeScript ',
          'API development with modern languges and runtime eg. Node.js, Kotling Spring boot',
          'Utilize Microservices architecture and deploy to Openshift',
          'Implemented monitoring and logging solutions ensuring the reliability and stability of the microservices ecosystem.',
          'Adopt best practices for security, testing, and deployment',
          'Code reviews and provided constructive feedback to improve code quality.',
          'Collaborated with cross-functional teams eg. Business/QA and Product team and participate sprint planning and daily stand-ups',
          'Operation support, investigate & trouble shooting production issues',
        ],
      },
      {
        position: 'Software Engineer/Senior Software Engineer',
        company: 'MOHARA',
        website: 'https://www.mohara.co/',
        dates: 'November 2021 - August 2023',
        responsibilities: [
          'Developed responsive and user-friendly web applications using React.js, TypeScript, and Component Toolkit such as Ant Design, Material-UI',
          'Backend development with Node.js using popular frameworks like Express.js, Fastify and NestJS along with SQL Database and NoSQL database design',
          'Collaborated with cross-functional teams to gather requirements and implement new features.',
          'Design application architecture with popular practice such as Domain-Driven Design',
          'Knowledge of best practices for security, testing, and deployment in backend applications',
          'Conducted code reviews and provided constructive feedback to improve code quality.',
          'Assisted in troubleshooting and resolving bugs, ensuring smooth application functionality.',
          'Actively participated in Agile development processes, including sprint planning and daily stand-ups.',
        ],
      },
      {
        position: 'Software Engineer',
        company: 'Vonder (Thailand) Ltd,.',
        website: 'https://www.vonder.co.th/',
        dates: 'July 2020 - October 2021',
        responsibilities: [
          'Developed applications using Node.js and MongoDB leveraging the Serverless Framework.',
          'Possess a deep understanding of common backend technologies, including REST APIs, databases, and microservices.',
          'Implemented API development and integrated services with third-party APIs such as LINE Messaging API and Firebase Cloud Messaging.',
          'Proficient in application development within cloud environments, specifically AWS (Amazon Web Services).',
          'Collaborated with cross-functional teams such as UX/UI Design and Product Management team',
        ],
      },
      {
        position: '3D CAD Engineer',
        company: 'Samsung Engineering (Thailand)',
        website: 'https://www.samsungengineering.com/en/index',
        dates: 'October 2014 - January 2020',
        responsibilities: [
          'Setup 3D CAD Software (SmartPlant Spoolgen) according to project requirements.',
          'Conducted training program and guide 3D CAD users including providing problem-solving of the software.',
          'Responsible for checking and preparation of Piping Isometric Drawings using SmartPlant Spoolgen.',
          'Coordinating with Engineering and Construction and liaise with the Client on detailed engineering requirements.',
        ],
      },
      {
        position: 'Research Assistant',
        company: 'Mechanical Engineering Department, Chiang Mai University',
        website: 'https://me.eng.cmu.ac.th/',
        dates: 'December 2012 - April 2014',
        responsibilities: [
          'Research and study in biomass gasification technology.',
          'Provide knowledge about the gasification system to be used in the design of prototype.',
          'Test the prototype and prepare data for development to a large scale including resolve the problem.',
        ],
      },
    ],
    educations: [
      {
        degree: 'Full-stack Coding Bootcamp',
        university: 'Thai Programmers Association',
        graduationYear: 2020,
      },
      {
        degree: 'Bachelor of Engineering (Mechanical Engineering)',
        university: 'Chain Mai University',
        graduationYear: 2008,
      },
    ],
    achievements: [
      {
        title: 'Udacity: Cloud Native Application Architecture',
        link: 'https://graduation.udacity.com/api/graduation/certificate/GA2RJKCY/download',
      },
      {
        title: 'Udacity: Cloud Developer Nanodegree',
        link: 'https://graduation.udacity.com/api/graduation/certificate/WNJSXVFM/download',
      },
      {
        title:
          'edX: Introduction to Computer Science and Programming Using Python',
        link: 'https://courses.edx.org/certificates/6a5871267a67410b91ee34e177412746',
      },
      {
        title: 'Coursera: Machine Learning',
        link: 'https://www.coursera.org/account/accomplishments/verify/VK5WKQF6BY7D',
      },
    ],
  });
}
