const Task = require('../models/task')

// Taskları Getirme Fonksiyonu
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find(req.body)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

// Yeni Task Oluşturmak İçin Gerekli Fonksiyon
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        await res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

// Seçili Taskı Getirmek İçin Gerekli Fonksiyon
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json({ msg: `No with task id ${id}` })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Task Düzenlemek İçin Gerekli Fonksiyon
const editTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOneAndUpdate(id, req.body, { new: true })
        if (!task) {
            return res.status(404).json({ msg: `No with task id ${id}` })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Task Silmek İçin Gerekli Fonksiyon
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json({ msg: `No with task id ${id}` })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask
}