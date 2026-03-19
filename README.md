# Todo App

JavaScriptを使用して作成したシンプルなTodo管理アプリです。  
タスクの追加・削除・完了状態の管理を行うことができます。

このアプリは **JavaScriptのDOM操作とlocalStorageの理解** を目的として制作しました。

---

## Demo

https://UuUuU04.github.io/my-todo-app2/


---

## Features

- Enterキーでタスク追加
- タスク削除
- 完了状態のチェック
- localStorageによるデータ保存
- シンプルで見やすいUI

---

## Technologies Used

| Technology | Description |
|------------|-------------|
| HTML | アプリの構造 |
| CSS | レイアウト・デザイン |
| JavaScript | Todoの追加・削除などの処理 |
| localStorage | データ保存 |

---

## Project Structure

```
todo-app
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
```

---

## Main Functions

### Todo追加

```javascript
function addTodo() {
  const text = input.value;
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  list.appendChild(li);
}
```

DOM操作でリスト要素を動的に追加しています。

---

### localStorage保存

```javascript
localStorage.setItem("todos", JSON.stringify(todos));
```

ブラウザのローカルストレージを使用して  
ページをリロードしてもデータが消えないようにしています。

---

## Learning Points

このアプリを通して以下を学びました。

- JavaScriptのDOM操作
- イベントリスナー
- localStorageを使ったデータ保存
- フロントエンドの基本構造

---

## Future Improvements

今後は以下の機能を追加予定です。

- Todo編集機能
- フィルター機能（完了 / 未完了）
- ドラッグ＆ドロップ並び替え
- Reactでのリファクタリング

---

## Author

Name: UuUuU04
GitHub: https://github.com/UuUuU04