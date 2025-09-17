import axios from "axios";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
export const API_URL = "http://localhost:8080/tasks";
export async function getAllTask(): Promise<Task[]> {
  const res = await axios.get(API_URL);
  return res.data;
}
export async function getItnProgress(): Promise<Task[]> {
  const res = await axios.get(`${API_URL}?completed=false`);
  return res.data;
}
export async function getCompleted(): Promise<Task[]> {
  const res = await axios.get(`${API_URL}?completed=true`);
  return res.data;
}
export async function deleteTaskId(id: number) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
export async function deleteAllTask(tasks: Task[]) {
  const promises = tasks.map((t) => axios.delete(`${API_URL}/${t.id}`));
  await Promise.all(promises);
}
export async function editCompletedTask(id: number, completed: boolean) {
  const res = await axios.patch(`${API_URL}/${id}`, {
    completed: completed,
  });
  return res.data;
}
export async function deleteCompleted() {
  const res = await axios.get(`${API_URL}?completed=true`);
  const completedTasks = res.data;
  const promises = completedTasks.map((t: { id: number }) =>
    axios.delete(`${API_URL}/${t.id}`)
  );

  await Promise.all(promises);
  return true;
}
export async function addTask(task: { title: string; completed: boolean }) {
  try {
    const res = await axios.post(API_URL, {
      title: task.title,
      completed: task.completed,
    });
    return res.data;
  } catch (err) {
    console.error("Error adding task:", err);
    throw err;
  }
}
