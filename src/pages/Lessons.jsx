import { useState } from "react";
import AppNav from "../components/AppNav";
import Lesson from "../components/Lesson";
import LessonNav from "../components/LessonNav";
import PageTemplate from "../components/PageTemplate";
const lessons = {
  Beginner: {
    title: "Beginner",
    sections: [
      {
        title: "Guitar Parts and Essential Knowledge",
        ps: [
          "How to learn Guitar",
          "Guitar Parts",
          "Technique",
          "Songs",
          "Music Theory",
          "Ear Training, repotior, rythym 'feel' ",
          "String Names",
        ],
      },
      {
        title: "Chords",
        ps: [
          "What do you need to learn and why?",
          "Chord Diagrams and how to read them.",
          "How to practice.",
        ],
      },
      { title: "Strumming", ps: ["Essential Patterns", "How to practice"] },
      {
        title: "Learning Songs",
        ps: ["Learning Songs", "Resources", "How to simplify Songs"],
      },
    ],
  },
  Essential: {
    title: "Essential Music Theory",
    sections: [
      { title: "Notes In Music", ps: ["p1", "p2", "p3"] },
      { title: "Major Scale", ps: ["p1", "p2", "p3"] },
      { title: "How to Make Chords", ps: ["p1", "p2", "p3"] },
      { title: "Keys", ps: ["p1", "p2", "p3"] },
    ],
  },
  Applying: {
    title: "Applying Music Theory to The Fretboard",
    sections: [
      { title: "Prerequisites", ps: ["p1", "p2", "p3"] },
      {
        title: "Learning the Fretboard",
        ps: ["learn the E and A String", "Fretboard Octive Hack", "p3"],
      },
      { title: "Barre Chords and the Caged System", ps: ["p1", "p2", "p3"] },
      { title: "The Pentatonic Scale", ps: ["p1", "p2", "p3"] },
      { title: "Triads", ps: ["p1", "p2", "p3"] },
      { title: "Playing the Changes", ps: ["p1", "p2", "p3"] },
      { title: "Arpeggios", ps: ["p1", "p2", "p3"] },
      { title: "OP Exersice", ps: ["my favorite exersize", "p2", "p3"] },
    ],
  },
};
function Lessons() {
  const [currLesson, setCurrLesson] = useState(lessons.Beginner);

  return (
    <PageTemplate
      nav={<AppNav />}
      settings={
        <LessonNav
          currLesson={currLesson}
          setCurrLesson={setCurrLesson}
          lessons={lessons}
        />
      }
      mainElement={<Lesson currLesson={currLesson} />}
    />
  );
}

export default Lessons;
