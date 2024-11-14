// btnというidを持つHTML要素を取得し、定数に代入する
const btn=document.getElementById('btn');

btn.addEventListener('click', () => { 
  // クリック後のメッセージを変更
  text.textContent = 'ボタンをクリックしました';
});


