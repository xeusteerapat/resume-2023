interface BadgeProps {
  skill: string;
}

const Badge: React.FC<BadgeProps> = ({ skill }) => {
  return (
    <span className='inline-block px-2 py-1 mb-2 mr-2 text-xs font-semibold text-white bg-blue-500 rounded-full'>
      {skill}
    </span>
  );
};

export default Badge;
