import {test} from 'node:test';
import assert from 'node:assert/strict';
import {generateDraft} from '../src/generator.js';
test('세안과 양치에 서로 다른 생활 순서를 제공한다',()=>{const face=generateDraft('세안하는 방법 활동지를 만들어줘');const teeth=generateDraft('양치하는 방법');assert.equal(face.title,'세안하는 방법');assert.equal(face.steps.length,4);assert.match(teeth.steps[0],/칫솔/);assert.notDeepEqual(face.steps,teeth.steps);});
test('알 수 없는 주제는 기본 틀로 구분하고 입력을 보존한다',()=>{const d=generateDraft('버스 타기','picture');assert.equal(d.custom,true);assert.equal(d.title,'버스 타기');assert.equal(d.level,'picture');});
test('빈 입력은 생성하지 않는다',()=>assert.throws(()=>generateDraft('  ')));
test('편집한 결과가 다음 생성의 원본을 변경하지 않는다',()=>{const d=generateDraft('세안');d.steps[0]='수정';assert.notEqual(generateDraft('세안').steps[0],'수정');});
