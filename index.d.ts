type Task<T> = Promise<T>;

global.Task = Task;
window.Task = Task;