const Task = require("../models/task-model");

createTask = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a task.",
    });
  }

  const task = new Task(body);

  if (!task) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  task
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: task._id,
        message: "Task created!",
      });
    })

    .catch((error) => {
      console.log(error)
      return res.status(400).json({
        error,
        message: error,
      });
    });
};

updateTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a task to update.",
    });
  }

  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Task not found",
      });
    }
    task.title = body.title;
    task.time = body.time;
    task.genre = body.genre;
    task.due = body.due;
    task.priority = body.priority;
    task.checked = body.checked;

    task
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: task._id,
          message: "Task updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Task not updated!",
        });
      });
  });
};

deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!task) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }

    return res
      .status(200)
      .json({
        success: true,
        data: task,
      }) 
      .catch((err) => console.log(err));
  });
};

getTaskById = async (req, res) => {
    await Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!task) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: task })
    }).catch(err => console.log(err))
}

getTasks = async (req, res) => {
    await Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        // if (!tasks.length) {
        //     return res
        //         .status(404)
        //         .json({ success: false, error: `Task not found` })
        // }
        return res.status(200).json({ success: true, data: tasks })
    }).catch(err => console.log(err))
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTasks,
    getTaskById,
}
