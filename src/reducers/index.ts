import { combineReducers } from "redux";
import tasks from './Tasks';
import language from './Languages';

const rootReducer = combineReducers({
    tasks,
    language
});

export default rootReducer;