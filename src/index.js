document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get the task description from the input field
    const taskDescription = document.getElementById('new-task-description').value;

    // Create a new <li> element to display the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Append the new task <li> element to the task list <ul>
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    document.getElementById('new-task-description').value = '';
  });
});
