삼선FC 골 타임 기록기 v1.9 PWA — GitHub Pages 배포용

1. ZIP을 풀고 index.html, app.js, style.css, pwa.js, sw.js, manifest.webmanifest, icon.svg, icons 폴더, .nojekyll을 저장소 최상위에 올립니다. 폴더를 한 겹 더 올리지 마세요.
2. 저장소: evan090909/samsun-fc-goal-timer
3. GitHub Settings → Pages → Deploy from a branch → main / (root) → Save.
4. 배포가 완료되면 https://evan090909.github.io/samsun-fc-goal-timer/ 에 접속합니다. 현재 실제 배포 완료 여부는 확인하지 않았습니다.

Android: Chrome에서 위 주소 접속 → 메뉴 → 앱 설치 또는 홈 화면에 추가.
iPhone: Safari에서 위 주소 접속 → 공유 → 홈 화면에 추가 → 표시되는 경우 웹 앱으로 열기 활성화 → 추가.
메뉴 이름은 OS와 브라우저 버전에 따라 다를 수 있습니다.
처음에는 인터넷 연결 상태에서 앱을 열어 캐싱을 완료하고, 비행기 모드에서 앱을 다시 열어 확인해 주세요.

기존 디자인, 홈/목록 이동, 경기 기록, 수정/취소/복원, 설정, CSV/XLSX/TXT/ZIP 내보내기 코드를 보존했습니다.
기록은 해당 기기와 웹주소의 브라우저 저장소에 저장됩니다. 다른 주소나 기기로 자동 이동하지 않습니다. 삭제/브라우저 데이터 정리 시 소실될 수 있으므로 경기 종료 후 ZIP으로 내보내 주세요. 내보낸 ZIP을 앱으로 복원하는 기능은 원본에 없습니다.
파일 공유는 기기 지원 여부에 따라 다운로드로 대체됩니다.
새 버전은 경기 기록 중에는 업데이트 안내를 보류하고, 종료 후 동의를 받아 적용합니다. 거절하면 현재 세션에서는 다시 묻지 않으며 앱을 완전히 닫고 다시 열면 적용될 수 있습니다.
여러 창을 동시에 열어 기록하지 마세요. 원본에는 여러 창 간 기록 병합 기능이 없습니다.
업데이트 배포 시 sw.js의 VERSION도 바꿔야 합니다. 이 앱 범위의 캐시만 정리하며 localStorage 기록은 삭제하지 않습니다.
스마트폰 실기기 설치/공유와 실제 GitHub 배포 후 동작은 별도 확인이 필요합니다.

참고: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
