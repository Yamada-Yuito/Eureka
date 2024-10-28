/** じゃんけんの判定結果のメッセージが入るHTMLのElementです */
const judgmentElement = document.getElementById("judgment");
/** 「ジャンケンの結果は・・・？」という文字のHTMLのElementです */
const afterJudgmentElement = document.getElementById("afterJudgment");
/** ユーザーが選択した内容を表示するHTMLのElementです */
const resultUserElement = document.getElementById("resultUser");
/** 相手（CPU）が選択した内容を表示するHTMLのElementです */
const resultCPUElement = document.getElementById("resultCPU");
/** じゃんけんの定義です */
const choices = ["グー", "チョキ", "パー"];

/**
 * ユーザーが勝利したかを判定して、判定結果のメッセージを決めます。
 *
 * @param {number} selectedByUser
 * @param {number} selectedByCPU
 * @returns 判定結果のメッセージ
 */
function rockPaperScissorsJudgment(selectedByUser, selectedByCPU) {
	if (selectedByUser || selectedByCPU) {
		if (selectedByCPU === selectedByUser) {
			return "<strong>あいこ</strong> です！あいこで？";
		} else if (selectedByUser === 0 && selectedByCPU === 1) {
			return "あなたの<strong>【勝ち】</strong>です！おめでとうございます！";
		} else if (selectedByUser === 1 && selectedByCPU === 2) {
			return "あなたの<strong>【勝ち】</strong>です！おめでとうございます！";
		} else if (selectedByUser === 2 && selectedByCPU === 0) {
			return "あなたの<strong>【勝ち】</strong>です！おめでとうございます！";
		} else {
			return "あなたの<strong>【負け】</strong>です！残念でした！";
		}
	} else {
		return "バグですYO";
	}
}

/**
 * じゃんけんゲームのメイン処理です。
 *
 * @param {number} selectedByUser
 */
function rockPaperScissors(selectedByUser) {
	// 前回値のリセット
	afterJudgmentElement.style.visibility = "hidden";
	judgmentElement.style.visibility = "hidden";
	judgmentElement.innerHTML = "";
	resultUserElement.innerHTML = "";
	resultCPUElement.innerHTML = "";

	// --------------------------------
	// ↓↓↓ 解答を記述してみてください。↓↓↓
	// --------------------------------
	// TODO: CPU が出す手は毎回ランダムで生成します。


	// TODO: ユーザーが勝利したかを判定して、判定結果のメッセージを決めます。


	// TODO: ユーザーが選択した内容をHTMLへ反映します。


	// TODO: 相手（CPU）が選択した内容をHTMLへ反映します。


	// TODO: じゃんけんの判定結果をHTMLへ反映します。


	// --------------------------------
	// ↑↑↑ 解答を記述してみてください。↑↑↑
	// --------------------------------

	// 「ジャンケンの結果は・・・？」を表示
	afterJudgmentElement.style.visibility = "visible";

	// 見かけ上、待たせて考えているように見せる
	setTimeout(() => {
		// 判定結果を表示
		judgmentElement.style.visibility = "visible";
	}, 100);
}
