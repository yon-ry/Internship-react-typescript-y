# React 環境構築手順
1. ターミナルで以下のコードを実行
```bash
npm create vite@latest
```
2. プロジェクト名、フレームワーク、言語を選択
3. 以下のコードで依存パッケージをインストール
```bash
npm install
```
4. 以下のコードでサーバー起動
```bash
npm run dev
```
# GitHub 使い方 初回
1. リポジトリの初期化
```bash
git init
```
2. 現在のリポジトリ内のステータス状況を確認
```bash
git status
```
3. ファイルをステージングに追加
```bash
git add .
```
4. ステージングにあるファイルをローカルリポジトリに追加
```bash
git commit -m Initial commit
```
5. GitHubと連携
```bash
git remote add origin url
```
6. ブランチ名を強制書き換え
```bash
git branch -M main
```
7. GitHubへアップロード
```bash
git push -u origin main
```

# GitHub 使い方 2回目以降
1. 状態確認
```bash
git status
```
2. ステージング
```bash
git add .
```
3. コミット
```bash
git commit -m "コメント"
```
4. プッシュ
```bash
git push
```