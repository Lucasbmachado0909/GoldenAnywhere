import CourseCard from './CourseCard';
import { type Course } from '../../../data/courses/courseData';

interface CourseGridProps {
  courses: Course[];
  columns?: 1 | 2 | 3 | 4;
}

const CourseGrid = ({ courses, columns = 3 }: CourseGridProps) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  return (
    <div className={`grid ${columnClasses[columns]} gap-8`}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;