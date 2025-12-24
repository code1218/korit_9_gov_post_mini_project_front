import { css } from "@emotion/react";

export const layout = css`
    padding: 10px;

    & > h2 {
        margin: 10px;
    }
`;

export const commentItemList = css`
    border: 1px solid #dbdbdb;
    border-width: 2px 0;
    margin-bottom: 20px;
    height: 400px;
    overflow-y: scroll;
`;

export const commentItem = css`
    
`;

export const commentInput = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;

    & > input {
        margin-right: 10px;
        box-sizing: border-box;
        border: none;
        outline: none;
        flex-grow: 1;
    }

    & > svg {
        cursor: pointer;
    }
`;