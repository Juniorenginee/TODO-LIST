// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Ignore empty tasks
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${taskText}
      <span class="delete-btn" onclick="removeTask(this)">Delete</span>
    `;
  
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear the input field
  }
  
  // Function to remove a task
  function removeTask(element) {
    const taskList = document.getElementById('taskList');
    const listItem = element.parentElement;
    taskList.removeChild(listItem);
  }
  