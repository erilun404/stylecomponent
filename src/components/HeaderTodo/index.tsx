import styled from "styled-components"

const StyledHeader = styled.header`
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 8px;
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>My ToDo app</h1>
        </StyledHeader>
    )
}

export default Header;