// btnというHTML要素から代入する
const btn = document.getElementById('btn');

// イベントを指定する
btn.addEventListener('click',() => {
  setTimeout(() => {
      text.textContent = 'ボタンをクリックしました';

  }, 2000);
});