/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";

import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

function LeftSideBar({children}) {
    return <div css={s.sideBarLayout}>
        <aside css={s.sideBarContainer}>
            <h1>Social Board</h1>
            <ul>
                <Link to={"/"}><li css={s.menuListItem(true)}><div><IoHomeOutline /></div>Home</li></Link>
                <Link to={"/search"}><li css={s.menuListItem(false)}><div><MdOutlineExplore /></div>Explore</li></Link>
                <Link to={"/post/add"}><li css={s.menuListItem(false)}><div><IoAddCircleOutline /></div>Add a Post</li></Link>
                <Link to={"/:username"}><li css={s.menuListItem(false)}><div></div>Profile</li></Link>
            </ul>
            <div>
                <Link to={"/logout"}>Logout</Link>
            </div>
        </aside>
        <div>
            {children}
        </div>
    </div>
}

export default LeftSideBar;