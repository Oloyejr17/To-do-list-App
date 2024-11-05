document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            // Add event listener to mark task as completed
            taskSpan.addEventListener('click', () => {
                taskSpan.classList.toggle('completed');
            });

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            // Add event listener to delete the task
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            // Append elements to the list item and then to the task list
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        }
    };

    // Add task on button click
    addTaskButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});