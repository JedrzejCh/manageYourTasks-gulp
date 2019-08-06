const taskList = {
  todosArr: [],
  displayTasks: function () {
    if (this.todosArr.length === 0) {

      alert("Tablica zadań jest pusta");
    } else {
      console.log("Moje toDos:");

      for (let i = 0; i < this.todosArr.length; i++) {
        if (this.todosArr[i].completed === true) {

          console.log("(+)", this.todosArr[i].taskText);
        } else {
          console.log("( )", this.todosArr[i].taskText);
        }
      }
      taskContener.textContent = "";
      this.addTaskInToLi();
    }
  },
  addTask: function (taskText) {
    this.todosArr.push({
      taskText: taskText,
      completed: false
    });
    this.displayTasks();
  },

  addTaskInToLi: function () {

    this.todosArr.forEach((todoLi) => {
      const taskInLi = document.createElement("li");
      taskInLi.textContent = todoLi.taskText;
      if (todoLi.completed === false) {
        taskInLi.classList.add("notDone");
        taskInLi.textContent = todoLi.taskText + " - do zrobienia";
      } else {
        taskInLi.classList.add("done");
        taskInLi.textContent = todoLi.taskText + " - zrobione";
      }

      taskContener.appendChild(taskInLi);
    });
  },

  changeTask: function (position, taskText) {
    this.todosArr[position].taskText = taskText;
    this.displayTasks();
  },

  deleteTask: function (position) {
    this.todosArr.splice(position, 1);
    this.displayTasks();
  },

  toggleCompleted: function (position) {
    const toDo = this.todosArr[position];
    toDo.completed = !toDo.completed;
    this.displayTasks();
  },

  toggleAll: function () {
    const totalTasks = this.todosArr.length;
    let completedTasks = 0;

    //We are getting info about number of completed todos
    for (let i = 0; i < totalTasks; i++) {
      if (this.todosArr[i].completed === true) {
        completedTasks++;
      }
    }
    //If all of todos are true
    if (completedTasks === totalTasks) {
      for (let i = 0; i < totalTasks; i++) {
        this.todosArr[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTasks; i++) {
        this.todosArr[i].completed = true;
      }
    }
    this.displayTasks();
  }
};
const taskContener = document.querySelector(".taskContener");


const displayTaskBtn = document.querySelector(".btn__display");
displayTaskBtn.addEventListener("click", () => {
  // for (let i = 0; i < todosArr.length; i++) {
  //   taskList.addTaskInToLi();
  //   // taskList.displayTasks();

  // }
  // taskList.addTaskInToLi();
  taskList.displayTasks();
});

const toggleAllTaskBtn = document.querySelector(".btn__toggleAll");
toggleAllTaskBtn.addEventListener("click", () => {
  taskList.toggleAll();
});

const addTaskBtn = document.querySelector(".btn__add");
addTaskBtn.addEventListener("click", () => {
  const addTaskInpt = document.querySelector(".inpt__add");
  if (addTaskInpt.value === "") {
    alert("Nie masz nic do zrobienia?");
  } else {
    taskList.addTask(addTaskInpt.value);
    taskList.addTaskInToLi();
  }
  addTaskInpt.value = "";
  taskContener.textContent = "";
});


const changeTaskBtn = document.querySelector(".btn__change");
changeTaskBtn.addEventListener("click", () => {
  const changePositionInpt = document.querySelector(".inpt__changePosition");
  const changeTextInpt = document.querySelector(".inpt__changeText");

  //TO FIX
  if (changePositionInpt.value === "" || changeTextInpt.value === "") {
    alert("wymagane wpisanie wartości w obu polach");
  } else if (!(taskList.todosArr.length === 0)) {
    taskList.changeTask(changePositionInpt.value, changeTextInpt.value);
    changePositionInpt.value = "";
    changeTextInpt.value = "";
  }
});

const deleteTaskBtn = document.querySelector(".btn__delete");
deleteTaskBtn.addEventListener("click", () => {
  const deletePositionInpt = document.querySelector(".inpt__deletePosition");
  taskList.deleteTask(deletePositionInpt.value);
  deletePositionInpt.value = "";
});

const toggleTaskBtn = document.querySelector(".btn__toggle");
toggleTaskBtn.addEventListener('click', () => {
  const toggleTaskInpt = document.querySelector('.inpt__togglePosition');
  if (toggleTaskInpt.value === "") {
    alert("Tablica zadań jest pusta");
  } else {
    taskList.toggleCompleted(toggleTaskInpt.value);
  }
  toggleTaskInpt.value = '';
});



