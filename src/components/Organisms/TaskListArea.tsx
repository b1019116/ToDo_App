import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksState from '../../states/Tasks';
import OneTaskState from '../../states/OneTask';
import Label from '../Atoms/Label';
import ListLabel from '../Atoms/ListLabel';
import GridArea from '../../styles/GridArea';
import String_root from '../../styles/string_root'
import RootState from '../../states/index';
import {FontSize} from '../../styles/Font';
import Color from '../../styles/Color';
import {DragDropContext, Droppable } from 'react-beautiful-dnd';
import {setAllTasks} from '../../actions/Tasks/ActionCreator'

const reorder = (
    list: TasksState,
    startIndex: number,
    endIndex: number
): TasksState => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

type Props = {
    area: string;
    string: String_root;
}

const TaskListArea: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { area, string } = props;
    const tasks = useSelector<RootState, RootState['tasks']>(state => state.tasks);
    const language =useSelector<RootState, RootState['language']>(state => state.language);
    console.log('tasks ' + tasks);

    const [state, setState] = useState({items: tasks});
    state.items = tasks;
    console.log('state.items ' + state.items);
    // resultの型がわかり次第any解除せよ
    const onDragEnd = (result: any )=> {
        if(!result.destination){
            return;
        }

        if(result.destination.index === result.source.index){
            return;
        }

        const items = reorder(
            state.items,
            result.source.index,
            result.destination.index
        );
            console.log('sortable tasks ' + state.items);
        setState({items});
        state.items = items;
        dispatch(setAllTasks(state.items));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <GridArea area = {area}>
                            <Label fontSize={FontSize.Large} text={string.todo_head} />
                            {state.items.map((task, index) => {
                                return <ListLabel key={task.task + index} text = {task.task} taskId={task.id} string={string} color={task.color} index={index}/>
                            })}
                            {provided.placeholder}
                        </GridArea>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskListArea;