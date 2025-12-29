import { css } from "@emotion/react";

export const modalLayout = css`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 600px;

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
        overflow-y: auto;
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

export const saveButton = css`
    text-shadow: 0 0 10px #000000aa;
`;

export const profileImageContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px 0;
`;

export const profileImage = (url) => css`
    margin-bottom: 15px;
    border: 3px solid #dbdbdb;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-image: url(${url});
    background-position: center;
    background-size: cover;
    background-color: #f5f5f5;
`;

export const imageUploadButton = css`
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    padding: 8px 16px;
    background-color: #ffffff;
    color: #555555;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }

    & > svg {
        font-size: 18px;
    }
`;

export const profileInfoContainer = css`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const infoRow = css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > label {
        font-size: 14px;
        font-weight: 600;
        color: #555555;
    }
`;

export const infoValue = css`
    box-sizing: border-box;
    padding: 10px 15px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    background-color: #f9f9f9;
    color: #222222;
    font-size: 15px;
`;

export const infoInput = css`
    box-sizing: border-box;
    padding: 10px 15px;
    border: 1px solid #cccccc;
    border-radius: 6px;
    outline: none;
    font-size: 15px;
    color: #222222;

    &:focus {
        border-color: #888888;
    }
`;
