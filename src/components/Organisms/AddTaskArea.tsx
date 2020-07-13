import React from 'react'
import AddTask from '../Molecules/AddTask'
import GridArea from '../../styles/GridArea'
import String_root from '../../styles/string_root'

type Props = {
    area: string;
    string: String_root;
}

const AddTaskArea: React.FC<Props> = (props) => {
    const { area, string } = props;
    return (
        <GridArea area={area}>
            <AddTask string={string}/>
        </GridArea>
    )
}

export default AddTaskArea;