export const topics = {
 face: {match:/세안|얼굴/, title:'세안하는 방법', steps:['손을 깨끗이 씻어요.','얼굴에 물을 묻혀요.','거품으로 부드럽게 씻어요.','물로 헹구고 수건으로 닦아요.'], icons:['hands','drop','soap','towel'], supplies:'물, 세안제, 깨끗한 수건'},
 hands: {match:/손.*씻|손씻/,title:'손 씻는 방법',steps:['손에 물을 묻혀요.','비누로 거품을 만들어요.','손바닥과 손가락을 씻어요.','물로 헹구고 수건으로 닦아요.'],icons:['drop','soap','hands','towel'],supplies:'물, 비누, 깨끗한 수건'},
 teeth: {match:/양치|이.*닦/,title:'양치하는 방법',steps:['칫솔에 치약을 짜요.','이를 부드럽게 닦아요.','입안을 물로 헹궈요.','칫솔을 씻어 정리해요.'],icons:['brush','brush','drop','check'],supplies:'칫솔, 치약, 물컵'},
};
export function generateDraft(idea, level='short') {
 const input=idea.trim(); if(!input) throw new Error('활동지 주제를 입력해주세요.');
 const preset=Object.values(topics).find(t=>t.match.test(input));
 const title=preset?.title ?? input.replace(/활동지를?\s*만들어\s*줘[.!]?$/,'').trim().slice(0,60);
 return {title,level,custom:!preset,steps:preset?[...preset.steps]:['필요한 물건을 준비해요.','그림을 보며 함께 알아봐요.','한 가지씩 천천히 해봐요.','사용한 물건을 정리해요.'],icons:preset?[...preset.icons]:['bag','look','check','bag'],supplies:preset?.supplies ?? '주제에 맞는 실제 물건이나 사진',type:'order',createdAt:Date.now()};
}
