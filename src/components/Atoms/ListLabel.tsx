import React from 'react';
import { FontSize, FontFamily } from '../../styles/Font';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteTask, changeColor, switchFinished } from '../../actions/Tasks/ActionCreator';
import String_root from '../../styles/string_root'
import Color from '../../styles/Color';
import RootState from '../../states/index'
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import OneTaskState from '../../states/OneTask'

type Props = {
    fontSize?: FontSize,
    text: string | number,
    taskId: string,
    string: String_root,
    color: Color,
    finished: boolean,
    index: number
}

const ListLabel: React.FC<Props> = (props) => {
    const { fontSize = FontSize.Medium, text, taskId, string, color, finished, index } = props;
    console.log('props ' + text + ' ' + taskId + ' ' + string);
    const dispatch = useDispatch();
    const tasks = useSelector<RootState, RootState['tasks']>(state => state.tasks);


    const onClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(deleteTask(taskId));
    }
    const rotateColor = (color: Color) => {
        switch (color) {
            case Color.Lavender:
                return Color.Palegreen;
            case Color.Palegreen:
                return Color.LemonChiffom;
            case Color.LemonChiffom:
                return Color.LightPink;
            case Color.LightPink:
                return Color.Lavender;
            default:
                return Color.Palegreen;
        }
    }

    const onClickChangeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const targetobj = tasks.find(item => item.id === taskId);
        if (targetobj !== undefined) {
            dispatch(changeColor({ id: targetobj.id, task: targetobj.task, color: rotateColor(targetobj.color), finished: targetobj.finished }));
        }
    }

    const onClickTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const targetobj = tasks.find(item => item.id === taskId);
        const isFinished: boolean = !finished;
        if (targetobj !== undefined) {
            dispatch(switchFinished({ id: targetobj.id, task: targetobj.task, color: targetobj.color, finished: isFinished }));
        }
    }

    return (
        <Draggable draggableId={taskId} index={index}>
            {provided => (
                <div>
                    <StyledLabel ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} fontSize={fontSize} color={color} finished={finished} >
                        <StyledPart3>
                            <ListAsButton onClick={onClickTask}>
                                {(finished == true)　? '☑' : '☐'}            
                            </ListAsButton>
                        </StyledPart3>
                        <StyledPart2 finished={finished}>
                                <Strikethrough finished={finished}>{text}</Strikethrough>
                        </StyledPart2>
                        <StyledPart>
                            <Button color={Color.RoyalBlue} label={string.change_color} onClick={onClickChangeColor} />
                            <Button color={Color.Crimson} label={string.delete_button} onClick={onClickDelete} />
                        </StyledPart>
                    </StyledLabel>
                </div>
            )}
        </Draggable>
    );
};

export default ListLabel;

type StyledListLabelProps = {
    fontSize: FontSize,
    color: Color,
    finished: boolean
}

const StyledLabel = styled.li<StyledListLabelProps>(props => `
    font-size: ${props.fontSize}px;
    font-family: ${FontFamily.Roboto};
    background-color: ${props.color};
    filter: opacity(${(props.finished != true) ? '100' : '50' }%);
    margin-top: 10px;
    margin-left: 10px;
    display:flex;
    justify-content:  space-between;
    align-items: center;
    box-shadow: 1px 1px 5px 0px;
`);

type StyledPart2Props = {
    finished: boolean
}

const StyledPart3 = styled.span`
    flex-basis: 5%;
`

const StyledPart2 = styled.span<StyledPart2Props>(props => `
    flex-basis: 80%;
`);


const StyledPart = styled.span`
    flex-basis: 15%;
`
type StrikethroughProps = {
    finished: boolean
}

const Strikethrough = styled.span<StrikethroughProps>(props => `
    text-decoration: ${(props.finished == true) ? "line-through" : "none"};
`);

const ListAsButton = styled.button(props => `
    background: rgba(45, 45, 45, 0.0);
    border: none;
    font-size: 30px;
    width: 100%;
    height: 100%;
    text-align: left;
`);