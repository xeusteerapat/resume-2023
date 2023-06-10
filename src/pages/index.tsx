import Image from 'next/image';
import { Inter } from 'next/font/google';
import Badge from '@/components/Badge';
import { GetStaticProps } from 'next';
import { Data } from './api/resume';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }: { data: Data }) {
  console.log(data);
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <div className='w-full max-w-5xl mx-6 overflow-hidden bg-white rounded-lg shadow-lg'>
        <div className='p-6'>
          <h1 className='text-2xl font-semibold'>Teerapat Prommarak</h1>
          <p className='text-gray-600'>Software Engineer</p>
        </div>

        <div className='p-6 bg-gray-100'>
          <h2 className='text-lg font-semibold'>Skills</h2>
          <div className='mt-4'>
            <Badge skill='React.js' />
            <Badge skill='TypeScript' />
            <Badge skill='Tailwind CSS' />
            <Badge skill='HTML' />
            <Badge skill='CSS' />
            <Badge skill='JavaScript' />
            <Badge skill='Redux' />
            <Badge skill='RESTful APIs' />
            <Badge skill='Git' />
          </div>
        </div>

        <div className='p-6 bg-white'>
          <h2 className='text-lg font-semibold'>Work Experience</h2>

          <div className='mt-4'>
            <h3 className='font-semibold text-md'>
              Software Engineer | XYZ Company
            </h3>
            <p className='text-gray-600'>[Dates]</p>
            <ul className='mt-2 ml-6 list-disc'>
              <li>
                Developed responsive and user-friendly web applications using
                React.js, TypeScript, and Tailwind CSS.
              </li>
              <li>
                Collaborated with cross-functional teams to gather requirements
                and implement new features.
              </li>
              <li>
                Implemented state management using Redux, ensuring efficient
                data flow and application stability.
              </li>
              <li>
                Optimized application performance through code refactoring and
                performance tuning techniques.
              </li>
              <li>
                Conducted code reviews and provided constructive feedback to
                improve code quality.
              </li>
              <li>
                Assisted in troubleshooting and resolving bugs, ensuring smooth
                application functionality.
              </li>
              <li>
                Actively participated in Agile development processes, including
                sprint planning and daily stand-ups.
              </li>
            </ul>
          </div>

          <div className='mt-4'>
            <h3 className='font-semibold text-md'>
              Front-End Developer | ABC Solutions
            </h3>
            <p className='text-gray-600'>[Dates]</p>
            <ul className='mt-2 ml-6 list-disc'>
              <li>
                Built dynamic and interactive user interfaces using React.js and
                TypeScript.
              </li>
              <li>
                Worked closely with design teams to implement pixel-perfect UI
                designs.
              </li>
              <li>
                Collaborated with back-end developers to integrate front-end
                interfaces with RESTful APIs.
              </li>
              <li>
                Implemented responsive designs using Tailwind CSS, ensuring
                consistent user experiences across devices.
              </li>
              <li>
                Conducted thorough testing and debugging to identify and resolve
                issues promptly.
              </li>
              <li>
                Assisted in the creation of reusable UI components to improve
                development efficiency.
              </li>
            </ul>
          </div>
        </div>

        <div className='p-6 bg-gray-100'>
          <h2 className='text-lg font-semibold'>Education</h2>
          <p className='mt-4'>Bachelor of Science in Computer Science</p>
          <p className='text-gray-600'>[University Name]</p>
          <p className='text-gray-600'>[Year of Graduation]</p>
        </div>

        <div className='p-6 bg-white'>
          <h2 className='text-lg font-semibold'>
            Achievements and Certificates
          </h2>
          <ul className='mt-4'>
            <li>
              [List any relevant achievements, such as awards, honors, or
              recognition]
            </li>
            <li>[List any relevant certificates or courses completed]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
