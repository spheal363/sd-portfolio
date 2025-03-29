import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Test() {
  const markdown = `
# 見出し1

これはreact-markdownのサンプルです。

## 見出し2

- リスト1
- リスト2

\`\`\`javascript
const message = "Hello, world!";
console.log(message);
\`\`\`

**太字**

[リンク](https://www.google.com/)

> 引用

## GFMの機能

| ヘッダー1 | ヘッダー2 |
|---|---|
| セル1 | セル2 |

~~取り消し線~~

- [x] タスク完了
- [ ] タスク未完了

[^1]: 脚注

脚注付きテキスト[^1].
  `;

  return (
    <div className="prose">
      <Markdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  );
}
