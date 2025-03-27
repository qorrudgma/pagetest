const pages = {
    home: `
       <section class="image-slider">
            <div class="slider-container" id="slider-container">
                <img src="/public/images/image1.png" alt="image" class="slider-image">
                <img src="/public/images/image2.png" alt="image" class="slider-image">
                <img src="/public/images/image3.png" alt="image" class="slider-image">
            </div>
        </section>

        <!-- 시설 소개 -->
        <section class="main-facility">
            <div id="main-intro">
                <div class="main-title">
                    시설 소개
                </div>
                <div class="title-content">
                    저희 고양이 사랑방은 이런저런 시설들도있고 깨끗하게 관리도하고<br>
                    건강관리도하고 스트레스도 덜받게 잘놀아주고 아주 좋아요~
                </div>
            </div>
            <hr id="main-hr">
            <div>
                여기다가 시설소개 내용이 들어감
            </div>
        </section>

        <!-- 분양 설명 -->
        <section class="main-adoption">
            <div id="main-intro">
                <div class="main-title">
                    분양 소개
                </div>
                <div class="title-content">
                    고양이를 분양하세요~<br>
                    귀엽고 아주 좋아요~
                </div>
            </div>
            <hr id="main-hr">
            <div class="adoption-list">
                <ul class="adoption-list-ul">
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="" alt="고양이">
                        </a>
                    </li>
                </ul>
                <button class="btn1" type="submit" aria-label="더 많은 고양이 사진 보기">더보기</button>
            </div>
        </section>

        <!-- 분양 후기 설명 -->
        <section class="main-stories ">
            <section class="main-adoption">
                <div id="main-intro">
                    <div class="main-title">
                        분양 후기
                    </div>
                    <div class="title-content">
                        여러분들의 분양 후기를 적어주세요~<br>
                        다른분들에게 자랑도할수있고 귀여운 고양이들도 구경할수있어요~
                    </div>
                </div>
                <hr id="main-hr">
                <ul class="story-list">
                    <li>
                        <img src="story1.jpg" alt="고양이 후기 1">
                        <p>이 고양이는 정말 사랑스럽고 집 분위기를 밝게 해줍니다!</p>
                    </li>
                    <li>
                        <img src="story2.jpg" alt="고양이 후기 2">
                        <p>분양 후 처음 며칠은 낯설어했지만, 지금은 너무 잘 적응했어요!</p>
                    </li>
                    <li>
                        <img src="story3.jpg" alt="고양이 후기 3">
                        <p>고양이와 함께한 시간이 정말 행복합니다. 적극 추천해요!</p>
                    </li>
                </ul>
                <button class="btn1" type="submit" aria-label="더 많은 후기 보기">더보기</button>
        </section>

        <!-- 임시보호 서비스 설명 -->
        <section class="main-foster">
            <div class="line"></div>
            <div class="main-title">
                임시보호 서비스
            </div>
            <div class="foster-video">
                <img src="video.png" alt="video">
            </div>
        </section>
    `,
    login: `
    <section class="login-section">
        <h1>로그인</h1>
        <form id="loginForm" onsubmit="handleLogin(event)">
            <div>
                <input type="text" id="id" class="input-field" placeholder="아이디" required>
            </div>
            <div>
                <input type="password" id="password" class="input-field" placeholder="비밀번호" required>
            </div>
            <div id="a">
                <a href="#" onclick="">아이디 찾기</a>|<a href="#" onclick="">비밀번호 찾기</a>|<a onclick="showSignup()">회원가입</a>
            </div>
            <div>
                <button class="btn1" type="submit">로그인</button>
            </div>
        </form>
    </section>
    `,
    signup: `
        <section class="signup-section">
            <h1>회원가입</h1>
            <form id="signupForm" onsubmit="handleLogin(event)">
                <div class="signup-id-check">
                    <div id="div-id">
                        <label for="signup-id" class="signup-label">아이디</label>
                        <input type="text" id="signup-id" class="input-field" placeholder="아이디" required>
                    </div>
                    <div id="div-btn">
                        <button id="id-check" class="btn1">중복 체크</button>
                    </div>
                </div>
                <div id="input-label">
                    <label for="signup-id" class="signup-input-label">
                        아이디는 4~20자의 영문 대/소문자 및 숫자로만 구성해야 하며,<br>띄어쓰기와 특수문자는 사용할 수 없습니다.
                    </label>
                </div>
                <div>
                    <label for="password" class="signup-label">비밀번호</label>
                    <input type="password" id="password" class="input-field" placeholder="비밀번호" required>
                </div>
                <div id="input-label">
                    <label for="password" class="signup-input-label">
                        비밀번호는 8~20자의 영문 대/소문자, 숫자,<br>특수문자를 포함해야 하며,띄어쓰기는 사용할 수 없습니다.
                    </label>
                </div>
                <div>
                    <label for="password-check" class="signup-label">비밀번호 확인</label>
                    <input type="password" id="password-check" class="input-field" placeholder="비밀번호 확인" required>
                </div>
                <div>
                    <label for="signup-name" class="signup-label">이름</label>
                    <input type="text" id="signup-name" class="input-field" placeholder="이름" required>
                </div>
                <div>
                    <label for="signup-tel" class="signup-label">전화번호</label>
                    <input type="number" id="signup-tel" class="input-field" placeholder="숫자만 입력하세요" required>
                </div>
                <div>
                    <label for="signup-birth" class="signup-label">생년월일</label>
                    <input type="number" id="signup-birth" class="input-field" placeholder="생년월일" required>
                </div>
                <div id="input-label">
                    <label for="signup-birth" class="signup-input-label">ex)2000년 01월 01일 -> 20000101</label>
                </div>
                <div>
                    <label for="signup-email" class="signup-label">이메일</label>
                    <input type="email" id="signup-email" class="input-field" placeholder="이메일" required>
                </div>
                <div id="signup-btn">
                    <button class="btn1" type="submit">회원가입</button>
                </div>
            </form>
        </section>
    `,
    intro: `
        <section>
            <h1>소개 페이지</h1>
            <p>고양이 사랑방은 고양이와 사람을 이어주는 따뜻한 공간입니다. 여기는 소개 페이지입니다.</p>
        </section>
    `,

    step: `
        <section class="procedure-section">
            <h1>분양 절차</h1>
            <ol class="procedure-steps">
                <li>1단계: 신청서 작성</li>
                <li>2단계: 상담 및 검토</li>
                <li>3단계: 분양 계약</li>
                <li>4단계: 새로운 가족 맞이</li>
            </ol>
        </section>
    `,
};

function showHome() {
    document.getElementById('app').innerHTML = pages.home;
    history.pushState({ page: 'home' }, '홈', window.location.href);
    $(function() {
        $(".slider-container").bxSlider({
            auto:true
        });
    });
}

function showLogin() {
    document.getElementById('app').innerHTML = pages.login;
    history.pushState({ page: 'login' }, '로그인', window.location.href);
}
// ======================================================

function showSignup() {
    document.getElementById('app').innerHTML = pages.signup;
    history.pushState({ page: 'signup' }, '회원가입', window.location.href);
}

//소개 페이지
function showIntro() {
    document.getElementById('app').innerHTML = pages.intro;
    history.pushState({ page: 'intro' }, '소개', window.location.href);
}

//분양 절차 페이지
function showStep() {
    document.getElementById('app').innerHTML = pages.step;
    history.pushState({ page: 'step' }, '분양 절차', window.location.href);
}

showHome();