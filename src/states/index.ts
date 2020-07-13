import TasksState from './Tasks';
import LanguageState from './Languages';

type RootState = {
    tasks: TasksState,
    language: LanguageState
}

export default RootState;