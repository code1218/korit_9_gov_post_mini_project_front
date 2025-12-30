import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const chatContainer = css`
    position: relative;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 85%; 
    min-height: 75%;
    overflow-y: scroll;
`;

export const inputContainer = css`
    display: flex;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    min-height: 50px;
    max-height: 25%;

    background-color: #fafafa;
    box-shadow: 0 0 10px #00000044;

    & > textarea {
        flex-grow: 1;
        border: none;
        outline: none;
        resize: none;
        background-color: transparent;
        font-size: 16px;
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        width: 35px;
        background-color: #444444;
        cursor: pointer;
        color: #fafafa;
        font-size: 18px;

        &:hover {
            background-color: #232323;
        }

        &:active {
            background-color: #111111;
        }

        &:disabled {
            background-color: #999999;
            cursor: default;
        }
    }
`;

export const answer = css`
    margin-bottom: 10px;
`;

export const question = css`
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 10px;
    background-color: #eeeeee;
    color: #222222;
    width: fit-content;
    max-width: 80%;
    max-height: 300px;
    min-height: 50px;
    overflow-y: auto;
    align-self: flex-end;
    word-wrap: break-word;
    white-space: pre-wrap;
`;