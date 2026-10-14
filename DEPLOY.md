# Firebase Hosting 배포

대상 프로젝트: `chageun-worksheet`. Firestore나 데이터베이스 설정 없이 프론트엔드만 배포합니다.

## Google Cloud Shell에서 배포하기

컴퓨터에 Node.js를 설치하지 않고 브라우저에서 진행할 수 있습니다. 프로젝트 소유자 계정으로 [Google Cloud Shell](https://shell.cloud.google.com/)을 열어 다음 명령을 순서대로 실행하세요.

```sh
git clone https://github.com/jyjylee/-.git worksheet-studio
cd worksheet-studio
npm ci
npm run build
npx firebase-tools login --no-localhost
npx firebase-tools deploy --only hosting --project chageun-worksheet
```

로그인 시 CLI가 표시하는 인증 안내를 따르세요. 비밀번호, 인증 코드, 토큰은 채팅이나 저장소에 공유하지 않습니다. GitHub 저장소가 비공개라면 Cloud Shell에서 별도의 GitHub 접근 인증이 필요합니다. Codex의 GitHub 인증은 Cloud Shell로 전달되지 않습니다.

배포에 성공하면 CLI가 출력한 Hosting URL을 열어 확인하세요. 기본 사이트의 예상 주소는 `https://chageun-worksheet.web.app`이며, 실제 배포 성공 전에는 접속 가능한 주소로 간주하지 않습니다.

## 다음 업데이트 배포

같은 Cloud Shell 폴더에서 실행합니다. 로컬 변경 사항이 있다면 보존한 뒤 진행하세요.

```sh
cd ~/worksheet-studio
git pull --ff-only
npm ci
npm run build
npx firebase-tools deploy --only hosting --project chageun-worksheet
```

## 확인할 사항

- 로그인 계정에 해당 Firebase 프로젝트의 Hosting 배포 권한이 있어야 합니다.
- `firebase.json`은 빌드 결과인 `dist`만 업로드합니다. 소스 코드나 PRD는 업로드하지 않습니다.
- 현재 버전은 AI API·구글 로그인·데이터베이스 없이 동작하며, 마지막 초안은 사용한 브라우저에만 저장합니다.
- 배포 후 세안 주제로 생성·수정·새로고침 후 복원·인쇄 기능을 확인하세요.
