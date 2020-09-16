import TasksState from "../states/Tasks";
import TasksAction from "../actions/Tasks/Action";
import TasksActionType from "../actions/Tasks/ActionType"
import { stringify } from "querystring";
import OneTaskState from '../states/OneTask'

const initialState: TasksState = [];

var savedReducer: TasksState = [];

const saveData = (rootReducer: TasksState) => {
  // ローカルにデータを保存
  console.log('saved array' + rootReducer.toString());
  const setjson = JSON.stringify(rootReducer);
  localStorage.setItem('tasks', setjson);

  // ローカルからのデータを取得
  const getjson = localStorage.getItem('tasks');
    const json: any = getjson;
    const tasks: TasksState = JSON.parse(json);
    savedReducer = tasks;
}

export default (state: TasksState = initialState, action: TasksAction): TasksState => {
    switch (action.type){
        case TasksActionType.ADD_TASK:
            // console.log('action.task ' + action.taskSet.task);
            saveData([
                ...state,
                action.taskSet
            ]);
            return savedReducer;
        case TasksActionType.DELETE_TASK:
            saveData( [
                ...state.filter((item, index) => item.id !== action.taskId)
            ]);
            return savedReducer;
        case TasksActionType.SWITCH_FINISHED:
        case TasksActionType.CHANGE_COLOR:
            const replacedIndex = state.findIndex(item => item.id === action.taskSet.id);
            if(replacedIndex != -1){
                state.splice(replacedIndex, 1, action.taskSet);
                saveData([
                    // ...state.splice(replacedIndex, 1, action.taskSet)
                    ...state
                ]);
            }else{
                saveData([...state]);
            }
            return savedReducer;
        case TasksActionType.SET_ALL_TASKS:
            console.log('action.tasks ' + action.tasks);
            saveData([
                ...action.tasks
            ]);
            return savedReducer;
        default:
            return state
    }
}