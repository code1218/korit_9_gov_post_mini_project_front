/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function Home() {
    return <div css={s.layout}>
        <div css={s.feedContainer}>
            <div css={s.feedItemContainer}>
                <header>
                    <div css={s.profileImage}></div>
                    <div css={s.userInfo}>
                        <div>닉네임</div>
                        <div>작성일자</div>
                    </div>
                </header>
                <main></main>
                <footer></footer>
            </div>
        </div>
        <div css={s.followInfoContainer}>

        </div>
    </div>
}

export default Home;