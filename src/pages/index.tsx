import Badge from '@/components/Badge';
import { GetServerSideProps } from 'next';
import { Data } from './api/resume';

export default function Home({ data }: { data: Data }) {
  const { name, title, skills, experiences, educations, achievements } = data;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <div className='w-full mx-6 overflow-hidden bg-white rounded-lg shadow-lg max-w-7xl'>
        <div className='p-5'>
          <h1 className='text-3xl font-semibold'>{name}</h1>
          <p className='text-lg text-gray-600'>{title}</p>
          <p className='text-gray-800'>
            Software engineer experienced in designing, developing, and
            maintaining high-quality applications. Proficient in Node.js,
            Typescript, Javascript, and modern database technology both SQL and
            NoSQL. Passionate about solving complex problems and delivering
            solutions that meet the needs of users and stakeholders. Also have
            experience in cloud technologies such as AWS and Google Cloud
            Platform. Eager to learn new technology and build innovative and
            cutting-edge business solutions.
          </p>
        </div>
        <div className='p-5 bg-gray-100'>
          <h2 className='text-2xl font-semibold'>Skills</h2>
          <div className='mt-4'>
            {skills.map((skill, index) => (
              <Badge key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div className='p-5 bg-white'>
          <h2 className='text-2xl font-semibold'>Work Experience</h2>
          {experiences.map((experience, index) => (
            <div key={index} className='mt-4'>
              <h3 className='font-semibold text-md'>
                {experience.position} |{' '}
                <a
                  href={experience.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {experience.company}
                </a>
              </h3>
              <p className='text-gray-600'>{experience.dates}</p>
              <ul className='mt-2 ml-6 list-disc'>
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='p-5 bg-gray-100'>
          <h2 className='text-2xl font-semibold'>Education</h2>
          {educations.map((edu, index) => (
            <div key={index} className='mt-4'>
              <p>{edu.degree}</p>
              <p className='text-gray-600'>{edu.university}</p>
              <p className='text-gray-600'>{edu.graduationYear}</p>
            </div>
          ))}
        </div>

        <div className='p-5 bg-white'>
          <h2 className='text-2xl font-semibold'>
            Achievements and Certificates
          </h2>
          <ul className='mt-4'>
            {achievements.map((achievement, index) => (
              <li key={index}>
                <a
                  href={achievement.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {achievement.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/resume`);
  const data = await res.json();
  return { props: { data } };
};
