// Create a new task by adding to the arrays
// A new task will be created as incomplete
// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("clean cat litter", "Take out all the poo out of ht elitter box");
const task2 = newTask("Do laundry", "yikes");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();


