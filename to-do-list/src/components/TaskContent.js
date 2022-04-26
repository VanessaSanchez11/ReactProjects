import { Header, Icon, Grid } from "semantic-ui-react";
import Task from "./Task";

const TaskContent = (props) => {
  const { tasks, deleteTask } = props;
  if (tasks.length === 0) {
    return null;
  }
  return (
    <Grid className="tasks-content">
      <Header as="h2" icon textAlign="center">
        <Icon name="settings" />
        Administra tareas
      </Header>

      <Grid.Row>
        {tasks.map((task, index) => (
          <Task task={task} deleteTask={deleteTask}/>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default TaskContent;
