const ExerciseTracker = ({ slice }) => {
  const { heading, progressLabel, paceLabel, yearlyGoal } = slice.primary;

  return (
    <section>
      <h2>{heading}</h2>
      <div className="exercise-tracker">
        <div className="exercise-tracker__progress">
          <div className="exercise-tracker__progress-label">
            {progressLabel}
          </div>
          <div className="exercise-tracker__progress-bar">
            <div className="exercise-tracker__progress-bar-fill" />
          </div>
        </div>
        <div className="exercise-tracker__pace">
          <div className="exercise-tracker__pace-label">{paceLabel}</div>
          <div className="exercise-tracker__pace-bar">
            <div className="exercise-tracker__pace-bar-fill" />
          </div>
        </div>
        <div className="exercise-tracker__yearly-goal">
          <div className="exercise-tracker__yearly-goal-label">
            {yearlyGoal}
          </div>
          <div className="exercise-tracker__yearly-goal-bar">
            <div className="exercise-tracker__yearly-goal-bar-fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseTracker;
