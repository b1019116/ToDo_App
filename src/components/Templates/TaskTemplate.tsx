import React from 'react';
import TaskListArea from '../Organisms/TaskListArea';
import AddTaskArea from '../Organisms/AddTaskArea';
import HeadderArea from '../Organisms/HeaderArea';
import styled from 'styled-components';
import String_root from '../../styles/string_root'

enum Area {
    TaskList = 'TaskList',
    AddTask = 'AddTask',
    Headder = 'Headder'
}

type Props = {
    string: String_root;
    onClickJa: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickEn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickKo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const taskTemplate: React.FC<Props> = (props) => {
    const {string, onClickJa, onClickEn, onClickKo} = props;
    return (
        <GridLayout>
            <div>
            <HeadderArea area = {Area.Headder} string={string} onClickJa={onClickJa} onClickEn={onClickEn} onClickKo={onClickKo}/>
            </div>
            <div>
            <AddTaskArea area = {Area.AddTask} string={string}/>
            </div>
            <div>
            <TaskListArea area = {Area.TaskList} string={string}/>
            </div>
        </GridLayout>
    )
}
// areaについてちょっとわからないかも。領域に名前を付けて位置関係を操作するために使用するのはなんとなくわかる。

export default taskTemplate

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    grid-template-areas:
        " Headder "
         "AddTask "
        " TaskList";
    width: 960px;
    margin: 0 auto;
`;