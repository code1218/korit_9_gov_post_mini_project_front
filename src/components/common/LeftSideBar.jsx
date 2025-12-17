/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import * as s from "./styles";

import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useMeQuery } from "../../queries/usersQueries";

function LeftSideBar({children}) {
    const location = useLocation();
    const {pathname} = location;

    const {isLoading, data} = useMeQuery();

    return <div css={s.sideBarLayout}>
        <aside css={s.sideBarContainer}>
            <h1>Social Board</h1>
            <ul>
                <Link to={"/"}><li css={s.menuListItem(pathname === "/")}><div><IoHomeOutline /></div>Home</li></Link>
                <Link to={"/search"}><li css={s.menuListItem(pathname === "/search")}><div><MdOutlineExplore /></div>Explore</li></Link>
                <Link to={"/post/add"}><li css={s.menuListItem(pathname === "/post/add")}><div><IoAddCircleOutline /></div>Add a Post</li></Link>
                {
                    isLoading || <Link to={"/" + data.data.nickname}><li css={s.menuListItem(decodeURI(pathname)=== "/" + data.data.nickname)}><div><div css={s.profileImg(data.data.imgUrl)}></div></div>{data.data.nickname}</li></Link>
                }
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