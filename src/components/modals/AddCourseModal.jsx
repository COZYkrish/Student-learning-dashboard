import { useState, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";

function AddCourseModal({ close }) {

  const { addCourse } = useContext(CourseContext);

  const [title, setTitle] = useState("");
  const [lessons, setLessons] = useState("");

  const handleSubmit = () => {

    const newCourse = {
      id: Date.now(),
      title,
      lessons: Number(lessons),
      completed: 0,
      progress: 0,
      category: "Custom"
    };

    addCourse(newCourse);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="bg-slate-900 p-6 rounded-xl w-96">

        <h2 className="text-xl mb-4">Add Course</h2>

        <input
          className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="Course Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="Total Lessons"
          onChange={(e) => setLessons(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 px-4 py-2 rounded"
        >
          Add Course
        </button>

      </div>
    </div>
  );
}

export default AddCourseModal;