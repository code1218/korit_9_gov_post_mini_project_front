/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

function Login() {
    return <div css={s.layout}>
        <div css={s.container}>
            <div css={s.leftBackground}></div>
            <div css={s.rightContainer}>
                <h1>Social Board</h1>
                <p>친구들과 함께 사진 또는 글을 공유해보세요.</p>
                <div>
                    <button css={s.google}><FcGoogle />구글 로그인</button>
                    <button css={s.naver}><SiNaver />네이버 로그인</button>
                    <button css={s.kakao}><RiKakaoTalkFill />카카오 로그인</button>
                </div>
            </div>
        </div>
    </div>
}

export default Login;