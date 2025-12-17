import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const frame = css`
    display: flex;
    box-sizing: border-box;
    border: 3px solid #747474;
    border-radius: 30px;
    padding: 30px;
    width: 1000px;
    height: 650px;
    background-color: #000000;
`;

export const frameContainer = css`
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    overflow: hidden;
`;



////////////<< Loading >>////////////
export const loadingBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: #00000066;
`;

////////////<< LeftSideBar >>////////////

export const sideBarLayout = css`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const sideBarContainer = css`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    background-color: #ffffff;

    & > h1 {
        font-size: 20px;
        text-align: center;
        cursor: default;
    }

    & > ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        gap: 8px;
        flex-grow: 1;
        & > a {
            text-decoration: none;
            color: #222222;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
        padding: 20px;

        & > a {
            text-decoration: none;
            color: #222222;
            font-weight: 500;
            text-shadow: 0 0 10px #00000088;
        }
    }
`;

export const menuListItem = (isSeleted) => css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 35px;
    font-weight: 500;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 100%;
        font-size: 20px;
    }
`;