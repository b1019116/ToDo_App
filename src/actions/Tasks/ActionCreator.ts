import TasksActionType from "./ActionType";
import { AddTask, DeleteTask, ChangeColor, SetAllTasks, SwitchFinished } from "./Action";
import OneTaskState from '../../states/OneTask'
import TasksState from '../../states/Tasks';

export const addTask = (taskSet: OneTaskState): AddTask => {
    // console.log('taskSet: ' + taskSet.task);
    return {
        type: TasksActionType.ADD_TASK,
        taskSet: taskSet
    }
}

export const deleteTask = (taskId: string): DeleteTask => {
    return {
        type: TasksActionType.DELETE_TASK,
        taskId: taskId
    }
}
    
export const changeColor = (taskSet: OneTaskState): ChangeColor => {
    return {
        type: TasksActionType.CHANGE_COLOR,
        taskSet: taskSet
    }
}

export const setAllTasks = (tasks: TasksState): SetAllTasks => {
    return {
        type: TasksActionType.SET_ALL_TASKS,
        tasks: tasks
    }
}

export const switchFinished = (taskSet: OneTaskState): SwitchFinished => {
    return {
        type: TasksActionType.SWITCH_FINISHED,
        taskSet: taskSet
    }
}