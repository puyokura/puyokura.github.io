document.addEventListener('DOMContentLoaded', (event) => {
  // すべてのハイライトされたコードブロックを取得
  const highlights = document.querySelectorAll('div.highlight');

  highlights.forEach((div) => {
    // コードブロックをラップするコンテナを作成
    const container = document.createElement('div');
    container.style.position = 'relative';
    div.parentNode.insertBefore(container, div);
    container.appendChild(div);

    // コピーボタンを作成
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-btn';
    copyButton.textContent = 'Copy'; // アイコンの代わりにテキストを使用（後でCSSでアイコンに置き換えも可能）
    container.appendChild(copyButton);

    copyButton.addEventListener('click', () => {
      const code = div.querySelector('pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }, (err) => {
        copyButton.textContent = 'Failed';
        console.error('Could not copy text: ', err);
      });
    });
  });
});
