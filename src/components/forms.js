import styled from "styled-components"

export default function Forms (props) {
    return (
        <Form {...props}>
            {props.children}
        </Form>
    )
}

const Form = styled.form`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;

    input {
        height: 60px;
        width: 769px;
        left: 346px;
        top: 325px;
        border-radius: 12px;
        border: 1px solid #78B15940;

        padding: 20px;
        margin-top: 20px;

        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #9C9C9C;
    }
    
    button {
        height: 60px;
        width: 182px;
        left: 640px;
        top: 701px;
        border-radius: 12px;
        background-color: #5D9040;
        border: none;
        
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        
        p {
            font-family: Lexend Deca;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            color: #FFFFFF;

            display: block
        }
    }

    span {
        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #EA4F4F;

        display: block;
        margin-top: 10px;
    }
`