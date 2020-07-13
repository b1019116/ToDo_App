import React from 'react';
import TaskTemplate from '../Templates/TaskTemplate';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import String_root from '../../styles/string_root'
import RootState from '../../states/index';
import { Lang } from '../../styles/Languages';
import String_ja from '../../styles/string_ja';
import String_en from '../../styles/string_en';
import String_ko from '../../styles/string_ko';
type Props = {
    string: String_root;
    onClickJa: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickEn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickKo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TaskPage: React.FC<Props> = (props) => {
    const { string, onClickJa, onClickEn, onClickKo} = props;
    const dispatch = useDispatch();

    return (
        <TaskTemplate string={string} onClickJa={onClickJa} onClickEn={onClickEn} onClickKo={onClickKo}/>
    )
}

export default TaskPage;