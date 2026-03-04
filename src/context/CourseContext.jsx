import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {

  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      )
    );
  };

  return (
    <CourseContext.Provider
      value={{ courses, addCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};