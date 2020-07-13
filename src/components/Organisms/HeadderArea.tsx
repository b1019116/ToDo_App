import React from 'react';
import { useSelector } from 'react-redux';
import TasksState from '../../states/Tasks';
import Label from '../Atoms/Label';
import ListLabel from '../Atoms/ListLabel';
import GridArea from '../../styles/GridArea';
import String_root from '../../styles/string_root'
import Button from '../Atoms/Button'
import { FontSize } from '../../styles/Font';
import Color from '../../styles/Color';

type Props = {
    area: string;
    string: String_root;
    onClickJa: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickEn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickKo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

const HeadderArea: React.FC<Props> = (props) => {
    const { area, string, onClickJa, onClickEn, onClickKo } = props;
    var tasks: TasksState = useSelector<TasksState, TasksState>(state => state);
    return (
        <GridArea area = {area}>
            <Label fontSize={FontSize.Large}  text={string.title} />
            <Label fontSize={FontSize.Medium}  text={string.lang_menu}/>
            <Button color = {Color.LightSteelBlue} label='日本語' onClick={onClickJa}/>
            <Button color = {Color.LightSteelBlue} label='English' onClick={onClickEn}/>
            <Button color = {Color.LightSteelBlue} label='한국어' onClick={onClickKo}/>
        </GridArea>
    );
}

export default HeadderArea;