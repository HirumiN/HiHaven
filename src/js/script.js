document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('newTaskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const newTaskId = 'todo' + (taskList.children.length + 1);

        const li = document.createElement('li');
        li.classList.add('py-4');

        li.innerHTML = `
            <div class="flex items-center">
                <input id="${newTaskId}" name="${newTaskId}" type="checkbox"
                    class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mr-3">
                <label for="${newTaskId}" class="block text-gray-900 flex-grow">
                    <span class="text-lg font-medium">${taskText}</span>
                </label>
                <button class="deleteTaskButton text-red-500 hover:text-red-600 ml-3">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
});

document.getElementById('resetButton').addEventListener('click', function () {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
});

document.getElementById('taskList').addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('deleteTaskButton') || target.closest('.deleteTaskButton')) {
        const li = target.closest('li');
        li.remove();
    } else if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const label = target.nextElementSibling;
        label.classList.toggle('line-through');
    }
});