import { useState } from "react";
import AppNav from "../components/AppNav";
import Lesson from "../components/Lesson";
import LessonNav from "../components/LessonNav";
const lessons = {
  Beginner: {
    title: "Beginner",
    sections: [
      { title: "section 1", ps: ["p1", "p2", "p3"] },
      { title: "section 2", ps: ["p1", "p2", "p3"] },
      { title: "section 3", ps: ["p1", "p2", "p3"] },
    ],
  },
  Essential: {
    title: "Essential",
    sections: [
      { title: "section 1", ps: ["p1", "p2", "p3"] },
      { title: "section 2", ps: ["p1", "p2", "p3"] },
      { title: "section 3", ps: ["p1", "p2", "p3"] },
    ],
  },
  Applying: {
    title: "Applying",
    sections: [
      { title: "section 1", ps: ["p1", "p2", "p3"] },
      { title: "section 2", ps: ["p1", "p2", "p3"] },
      { title: "section 3", ps: ["p1", "p2", "p3"] },
    ],
  },
};
function Lessons() {
  const [currLesson, setCurrLesson] = useState(lessons.Beginner);

  return (
    <div>
      <AppNav />
      <div className="page">
        <LessonNav
          currLesson={currLesson}
          setCurrLesson={setCurrLesson}
          lessons={lessons}
        />
        <div className="main-page">
          <Lesson currLesson={currLesson} />
        </div>
        s
      </div>
    </div>
  );
}

export default Lessons;
