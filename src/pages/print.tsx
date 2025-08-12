import Badge from '@/components/Badge';
import { GetServerSideProps } from 'next';
import { Data } from './api/resume';
import Head from 'next/head';

export default function PrintResume({ data }: { data: Data }) {
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
    <>
      <Head>
        <title>{name} - Resume</title>
        <style jsx global>{`
          @media print {
            @page {
              margin: 0.5in;
              size: A4;
            }
            
            body {
              background: white !important;
              color: black !important;
              font-size: 12px;
              line-height: 1.4;
            }
            
            .no-print {
              display: none !important;
            }
            
            .page-break {
              page-break-before: always;
            }
            
            .avoid-break {
              page-break-inside: avoid;
            }
            
            a {
              color: black !important;
              text-decoration: none !important;
            }
            
            .print-link:after {
              content: " (" attr(href) ")";
              font-size: 10px;
              color: #666;
            }
          }
          
          body {
            background: white;
            color: black;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
        `}</style>
      </Head>
      
      <div className="max-w-4xl mx-auto bg-white p-8">
        {/* Header Section */}
        <div className="mb-6 avoid-break">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <p className="text-xl text-gray-700 mb-4">{title}</p>
          <p className="text-sm text-gray-800 mb-4 leading-relaxed">
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

        {/* Contact Information */}
        <div className="mb-6 avoid-break">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">Contact Information</h2>
          <div className="grid grid-cols-2 gap-2">
            {contacts.map((contact, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{contact.type}:</span>{' '}
                <span className="text-gray-700">
                  {contact.type === 'Email'
                    ? contact.link.replace('mailto:', '')
                    : contact.link}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-6 avoid-break">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">Technical Skills</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4 avoid-break">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-base">
                  {experience.position} | {experience.company}
                </h3>
                <span className="text-sm text-gray-600">{experience.dates}</span>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-gray-800">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements and Certificates */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">Achievements and Certificates</h2>
          <div className="grid grid-cols-1 gap-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-sm flex items-center">
                <span className="font-medium mr-2">•</span>
                <span>{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6 avoid-break">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">Education</h2>
          {educations.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium text-sm">{edu.degree}</p>
              <p className="text-sm text-gray-700">{edu.university}</p>
              <p className="text-sm text-gray-600">{edu.graduationYear}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async (context) => {
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  
  try {
    const res = await fetch(`${baseUrl}/api/resume`);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return { notFound: true };
  }
};