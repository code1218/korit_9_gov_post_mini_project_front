import { css } from "@emotion/react";

export const layout = css`
    padding: 10px;

    & > h2 {
        margin: 10px;
    }
`;

export const commentItemList = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-width: 2px 0;
    margin-bottom: 20px;
    padding-left: 5px;
    height: 350px;
    overflow-y: scroll;
`;

export const commentItem = (level, isRecomment) => css`
    box-sizing: border-box;
    margin: 10px 0;
    border: 2px solid ${isRecomment ? "#dbdbdbff" : "#dbdbdb00"};
    border-radius: 5px;
    padding: 3px;
    width: 100%;
    padding-left: calc(20px * ${level});

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        cursor: default;
    }

    & > div:nth-of-type(2) {
        padding-left: 5px;
        font-size: 14px;
        word-wrap: break-word;

        & > span {
            color: #1781ba;
        }
    }

    & > div:nth-of-type(3) {
        padding-left: 5px;
        font-size: 10px;
        color: #777777;
        cursor: default;

        & > span {
            padding-left: 5px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;

export const commentProfileImage = (url) => css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-image: url("${url}");
    background-position: center;
    background-size: cover;
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