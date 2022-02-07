import Task from '../interfaces/Task';
import checkActivity from '../scripts/checkActivity';

export default function TaskCard(task: Task) {
  return (
    <div className="card">
      <div className="user">
        <input
          type="checkbox"
          onClick={() => {
            console.log(`user id: ${task.id}`, `task id: ${task.taskId}`);
            checkActivity(task);
          }}
        />
        <div className="username">
          {task.name} - {task.roomNumber}
        </div>
      </div>
      <div className="task-info">{task.taskName}</div>
      <style jsx>{`
        .user {
          display: flex;
          align-items: center;
        }
        .card {
          box-shadow: 0 0 4px silver;
          margin: 8px 4px;
          padding: 4px;
        }
        input {
          cursor: pointer;
          margin-right: 4px;
          min-width: 18px;
          min-height: 18px;
        }
        .task-info {
          margin-left: 16px;
          text-decoration: italic;
        }
        .username {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
