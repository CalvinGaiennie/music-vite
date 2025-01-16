function Lesson({ currLesson }) {
  return (
    <div>
      <h1>{currLesson.title}</h1>
      <div>
        {currLesson.sections.map((section, i) => (
          <div key={`section-${i}`}>
            <h2>{section.title}</h2>
            {section.ps.map((p, j) => (
              <p key={`p-${j}`}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson;
