import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from  'react-redux';
import Button from '../Atoms/Button';
import Form from '../Atoms/Form';
import { addTask } from '../../actions/Tasks/ActionCreator';
import String_root from '../../styles/string_root'
import TasksState from '../../states/Tasks';
import OneTaskState from '../../states/OneTask';
import RootState from '../../states/index';
import Color from '../../styles/Color'

type Props= {
    string: String_root;
}


const AddTask: React.FC<Props> = (props) => {
    const {string} = props;
    const dispatch = useDispatch();
    const [inputTask, setInputTask] = useState<OneTaskState>({id: '', task: '',color: Color.Gray, finished: false});
    // const [inputTaskId, setInputTaskId] = useState<OneTaskState['id']>('');
    const [inputTaskText, setInputTaskText] = useState<OneTaskState['task']>('');
    // const [inputTaskColor, setInputTaskColor] = useState<OneTaskState['color']>(Color.Gray);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputTaskText(e.currentTarget.value);
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(inputTaskText === ''){
            return;
        }
        // console.log('inputTaskText ' + inputTaskText);
        // setId();
        // setColor();
        // console.log('color ' + inputTaskColor);
        // inputTask.id = inputTaskId;
        // inputTask.task = inputTaskText;
        // inputTask.color = inputTaskColor;
        inputTask.id = Date();
        inputTask.task = inputTaskText;
        inputTask.color = Color.Palegreen;
        inputTask.finished = false;
        // console.log('inputTask ' + inputTask.color + ' ' + inputTask.task);
        dispatch(addTask(inputTask));
        setInputTask({id: '', task: '', color: Color.Gray, finished: false});
        setInputTaskText('');
    }

    return (
        <div>
            <Form value = {inputTaskText} onChange={onChange} onSubmit={onClick} />
            <Button label = {string.add_button} onClick={onClick} />
        </div>
    );
}

export default AddTask;