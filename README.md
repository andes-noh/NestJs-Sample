# NestJs-Sample Project
- NestJs sample-template

## Runtime
- [Node JS](https://nodejs.org/ko/)

## Framework
- [NestJs](https://nestjs.com/)

## 실행
- npm install or yarn
- package.json -> debug
```
"ts-node-dev --respawn --prefer-ts-exts lib/"
```
- ts-node-dev(ts 파일을 미리 컴파일하지 않고 바로 실행 시키는 엔진)

## 빌드
- package.json -> build
```
tsc --build --force
```
- tsc --build(*.ts -> *.js)

## 설명
- cron 설치 
- 매초 현재 시간 출력

## 기타
- 버전 업그레이드 
```
yarn upgrade ts-node-dev@latest ts-node@latest
```



