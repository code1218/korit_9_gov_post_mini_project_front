import { css } from "@emotion/react";

export const modalLayout = css`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;

    & > header {
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;

        & > h2 {
            margin: 0;
            color: #222222;
            cursor: default;
        }
    }

    & > main {
        box-sizing: border-box;
        padding: 10px 20px;
        flex-grow: 1;
    }

    & > footer {
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;

        & > button {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border: none;
            background-color: transparent;
            color: #222222;
            cursor: pointer;
            font-size: 16px;
        }
    }
`;

export const postButton = css`
    text-shadow: 0 0 10px #000000aa;
`;

export const profileContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
    cursor: default;
`;

export const profileImg = (url) => css`
    margin-right: 10px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-image: url(${url});
    background-position: center;
    background-size: cover;
`;

export const contentInputBox = css`
    margin: 10px 0;

    & > textarea {
        box-sizing: border-box;
        outline: none;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 5px 10px;
        width: 100%;
        height: 100px;
        resize: none;
        font-size: 15px;
        color: #222222;
        cursor: pointer;
    }
`;

export const uploadBox = css`
    
`;