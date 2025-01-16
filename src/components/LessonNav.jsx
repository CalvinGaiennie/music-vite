import styles from "./LessonNav.module.css";

function LessonNav({ lessons, currLesson, setCurrLesson }) {
  return (
    <div className="settings">
      <h2>Lesson Title</h2>
      <select
        className={styles.select}
        onChange={(e) => {
          const selectedLesson = lessons[e.target.value];
          setCurrLesson(selectedLesson);
        }}
      >
        <option value="Beginner">Beginner Guitar</option>
        <option value="Essential">Essential Music Theory</option>
        <option value="Applying">Applying Theory To the Fretboard</option>
      </select>
      <h2>{currLesson.title}</h2>
      {currLesson.sections.map((section, i) => {
        return <p key={`section-${i}`}>{section.title}</p>;
      })}
    </div>
  );
}

export default LessonNav;
