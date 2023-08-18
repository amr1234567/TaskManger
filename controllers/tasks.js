const Task = require('../modules/task')
const GetAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


const CreateTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const GetSingleTask = async (req,res)=>{
    try {
        const {id: taskID } =req.params
        
        const task = await Task.findOne({_id:taskID})
        
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const EditTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        console.log(req.body)
        const task = await Task.findOneAndUpdate({_id:taskID},req.body)
        
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const DeleteTask = async (req,res)=>{
    try {
        const {id: taskID } =req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={
    GetAllTasks,CreateTask,GetSingleTask,EditTask,DeleteTask
}