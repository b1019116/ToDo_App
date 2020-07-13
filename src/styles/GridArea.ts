import styled from "styled-components";

type Props = {
    area: String
}

const gridArea = styled.div<Props>(props => `
    grid-area: ${props.area};
    position: relative;
`);

export default gridArea;