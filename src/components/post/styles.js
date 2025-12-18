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
            cursor: pointer;
            font-size: 16px;
        }
    }
`;

export const postButton = css`
    text-shadow: 0 0 10px #000000aa;
`;