import Badge from '@/components/Badge';
import { GetServerSideProps } from 'next';
import { Data } from './api/resume';

export default function Home({ data }: { data: Data }) {
  const {
    name,
    title,
    skills,
    experiences,
    educations,
    achievements,
    contacts,
  } = data;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <div className='w-full mx-6 overflow-hidden bg-white shadow-lg max-w-7xl'>
        <div className='p-5'>
          <h1 className='text-3xl font-semibold'>{name}</h1>
          <p className='text-lg text-gray-600'>{title}</p>
          <p className='mb-2 text-gray-800'>
            Software engineer experienced in designing, developing, and
            maintaining high-quality applications. Proficient in Node.js,
            Typescript, Javascript, and modern database technology both SQL and
            NoSQL. Passionate about solving complex problems and delivering
            solutions that meet the needs of users and stakeholders. Also have
            experience in cloud technologies such as AWS and Google Cloud
            Platform. Eager to learn new technology and build innovative and
            cutting-edge business solutions.
          </p>
          <h2 className='text-2xl font-semibold'>Contacts</h2>
          <div className='mt-2'>
            {contacts.map((contact, index) => (
              <p key={index} className='text-gray-600'>
                {contact.type}:{' '}
                <a
                  href={contact.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {contact.type === 'Email'
                    ? contact.link.replace('mailto:', '')
                    : contact.link}
                </a>
              </p>
            ))}
          </div>
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
          <h2 className='text-2xl font-semibold'>
            Achievements and Certificates
          </h2>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {achievements.map((achievement, index) => (
              <div key={index} className='flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow'>
                <div className='flex-shrink-0 w-12 h-12 mr-4 flex items-center justify-center'>
                  <img
                    src={`/${achievement.provider === 'aws' ? 'aws_saac03_logo.png' : `${achievement.provider}_logo.${achievement.provider === 'coursera' || achievement.provider === 'udacity' ? 'svg' : 'png'}`}`}
                    alt={`${achievement.provider} logo`}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
                <div className='flex-grow'>
                  <a
                    href={achievement.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors'
                  >
                    {achievement.title}
                  </a>
                </div>
              </div>
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
