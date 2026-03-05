/* ============================================
   Bank Loan Academy - Level 5: 融資を断られた時・創業融資
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "融資謝絶対策・創業融資",
    icon: "🔄",
    description: "融資を断られた時の対処法と創業融資の活用法を学ぶ",
    modules: [
        {
            id: 501,
            title: "融資を断られた時の対処法",
            duration: "20分",
            content: `
<h2>融資が断られる主な理由 TOP10</h2>
<ol>
<li>業績が悪い（赤字・債務超過）</li>
<li>自己資金が不足（創業の場合）</li>
<li>資金使途が不明確</li>
<li>返済計画に無理がある</li>
<li>税金・社会保険の滞納がある</li>
<li>信用情報に問題がある（個人の延滞歴等）</li>
<li>事業計画の実現可能性が低い</li>
<li>業歴が短い（実績不足）</li>
<li>担保・保証が不足</li>
<li>業界の将来性に懸念</li>
</ol>

<div class="info-box tip">
<div class="info-box-title">注意</div>
<p>銀行は謝絶理由を明確に教えてくれないことが多いです。担当者との関係性によっては教えてもらえることもあります。</p>
</div>

<h2>断られた後の対処フロー</h2>
<ol>
<li><strong>謝絶理由を確認する</strong>（担当者に聞く）</li>
<li><strong>理由は解消可能か判断する</strong></li>
<li>YES → 問題を改善して再申込</li>
<li>NO → 他の金融機関にアプローチ</li>
</ol>

<h2>状況別 次のアクション</h2>
<table>
<thead><tr><th>断られた理由</th><th>対処法</th></tr></thead>
<tbody>
<tr><td><strong>赤字決算</strong></td><td>経営改善計画を策定して再提出 / 黒字転換の具体策を説明 / 公庫のセーフティネット貸付を検討</td></tr>
<tr><td><strong>自己資金不足</strong>（創業時）</td><td>自己資金を貯めてから再挑戦 / 自己資金比率1/3を目指す / 親族からの支援も検討</td></tr>
<tr><td><strong>事業計画が弱い</strong></td><td>専門家（認定支援機関）に相談 / 計画の根拠を数値で補強 / 商工会議所の支援を活用</td></tr>
<tr><td><strong>信用情報の問題</strong></td><td>情報の回復を待つ（5〜10年） / CIC/JICCで自分の情報を確認</td></tr>
<tr><td><strong>税金滞納</strong></td><td>最優先で滞納を解消 / 分納の場合は証明書を取得 / 完納後に再申込</td></tr>
<tr><td><strong>担保不足</strong></td><td>保証協会付き融資を検討 / 制度融資（無担保枠）を活用 / 公庫の無担保融資を検討</td></tr>
</tbody>
</table>

<h2>活用すべき無料相談窓口</h2>
<table>
<thead><tr><th>機関</th><th>支援内容</th></tr></thead>
<tbody>
<tr><td><strong>商工会議所 / 商工会</strong></td><td>経営相談・融資の斡旋</td></tr>
<tr><td><strong>よろず支援拠点</strong>（各都道府県）</td><td>経営全般の無料相談</td></tr>
<tr><td><strong>認定経営革新等支援機関</strong></td><td>事業計画策定支援</td></tr>
<tr><td><strong>信用保証協会の相談窓口</strong></td><td>保証制度の説明・事前相談</td></tr>
<tr><td><strong>日本政策金融公庫の支店窓口</strong></td><td>融資の事前相談</td></tr>
<tr><td><strong>中小企業基盤整備機構</strong></td><td>経営アドバイス・専門家派遣</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>断られたらまず謝絶理由を確認し、解消可能かを判断する</li>
<li>税金滞納は最優先で解消すべき致命的な問題</li>
<li>商工会議所やよろず支援拠点などの無料相談窓口を積極的に活用する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "融資を断られた時にまず最初にすべきことはどれですか？", options: ["すぐに別の銀行に申し込む", "謝絶理由を確認する", "ビジネスローンに切り替える", "事業を諦める"], answer: 1, explanation: "まず担当者に謝絶理由を確認し、解消可能かどうかを判断することが最初のステップです。" },
                { id: "q501_2", type: "choice", question: "信用情報の問題（延滞歴等）が回復するまでの期間はどれですか？", options: ["1〜2年", "3〜4年", "5〜10年", "回復しない"], answer: 2, explanation: "信用情報の延滞歴等は5〜10年で回復します。CICやJICCで自分の情報を確認できます。" },
                { id: "q501_3", type: "choice", question: "経営全般の無料相談ができる公的機関はどれですか？", options: ["税務署", "よろず支援拠点", "裁判所", "ハローワーク"], answer: 1, explanation: "よろず支援拠点は各都道府県に設置されており、経営全般の無料相談ができます。" }
            ]
        },
        {
            id: 502,
            title: "創業融資の活用法",
            duration: "20分",
            content: `
<h2>創業時の融資選択肢マップ</h2>
<table>
<thead><tr><th>融資制度</th><th>特徴</th><th>融資上限</th></tr></thead>
<tbody>
<tr><td><strong>日本政策金融公庫 新規開業資金</strong></td><td>最もポピュラー</td><td>7,200万円（うち運転資金4,800万）</td></tr>
<tr><td><strong>制度融資（自治体）創業者向け</strong></td><td>金利が最も低い場合あり</td><td>自治体により異なる</td></tr>
<tr><td><strong>信用保証協会 創業関連保証</strong></td><td>銀行との併用</td><td>3,500万円</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ベストプラクティス</div>
<p>公庫 + 制度融資の<strong>併用</strong>がベストプラクティスです。</p>
</div>

<h2>公庫の新規開業資金（2024年制度改定後）</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>対象者</td><td>新たに事業を始める方、事業開始後おおむね7年以内の方</td></tr>
<tr><td>融資限度額</td><td>7,200万円（うち運転資金4,800万円）</td></tr>
<tr><td>返済期間（設備資金）</td><td>20年以内（うち据置期間5年以内）</td></tr>
<tr><td>返済期間（運転資金）</td><td>10年以内（うち据置期間5年以内）</td></tr>
<tr><td>担保・保証人</td><td>原則不要</td></tr>
<tr><td>自己資金要件</td><td>形式的な要件は撤廃（2024年〜）。ただし多いほど有利</td></tr>
</tbody>
</table>

<h2>創業融資の審査で重視される5大ポイント</h2>
<table>
<thead><tr><th>ポイント</th><th>内容</th><th>配点</th></tr></thead>
<tbody>
<tr><td><strong>1. 自己資金</strong></td><td>総投資額の1/3以上が理想。コツコツ貯めた履歴が重要</td><td>★★★★★</td></tr>
<tr><td><strong>2. 経験・スキル</strong></td><td>創業する業種での勤務経験（6年以上が理想）</td><td>★★★★</td></tr>
<tr><td><strong>3. 創業計画の妥当性</strong></td><td>売上見込みの根拠、収支計画の実現可能性</td><td>★★★★</td></tr>
<tr><td><strong>4. 資金使途の明確さ</strong></td><td>設備投資の見積書、運転資金の積算根拠</td><td>★★★</td></tr>
<tr><td><strong>5. 信用情報</strong></td><td>クレジットカードの延滞歴なし、消費者金融の借入なし</td><td>★★★</td></tr>
</tbody>
</table>

<h2>創業融資の申込から実行までの流れ</h2>
<table>
<thead><tr><th>ステップ</th><th>内容</th><th>期間</th></tr></thead>
<tbody>
<tr><td>STEP 1</td><td>事前準備（創業計画書の作成、必要書類の準備）</td><td>2〜4週間</td></tr>
<tr><td>STEP 2</td><td>申込・書類提出</td><td>1日</td></tr>
<tr><td>STEP 3</td><td>面談（支店で約1〜2時間）</td><td>申込から1〜2週間後</td></tr>
<tr><td>STEP 4</td><td>現地調査（店舗予定地の確認等）</td><td>面談後〜1週間</td></tr>
<tr><td>STEP 5</td><td>審査結果通知</td><td>面談から2〜3週間後</td></tr>
<tr><td>STEP 6</td><td>契約・融資実行</td><td>通知から1週間程度</td></tr>
</tbody>
</table>
<p>合計：申込から実行まで約3〜4週間（事前準備を含めると1〜2ヶ月）</p>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>公庫の創業融資が最もポピュラーで利用しやすい</li>
<li>自己資金（コツコツ貯めた履歴）と業界経験が最も重視される</li>
<li>申込から融資実行まで約3〜4週間。事前準備を含めると1〜2ヶ月</li>
</ul>
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "創業融資の審査で最も配点が高いポイントはどれですか？", options: ["経験・スキル", "自己資金", "資金使途の明確さ", "信用情報"], answer: 1, explanation: "自己資金が最も配点が高く（★★★★★）、総投資額の1/3以上が理想です。" },
                { id: "q502_2", type: "choice", question: "公庫の新規開業資金で担保・保証人はどうなっていますか？", options: ["必須", "原則不要", "不動産担保が必要", "連帯保証人が必要"], answer: 1, explanation: "公庫の新規開業資金は担保・保証人が原則不要です。" },
                { id: "q502_3", type: "choice", question: "公庫の創業融資で申込から融資実行までの期間はどのくらいですか？", options: ["即日", "約1週間", "約3〜4週間", "約3ヶ月"], answer: 2, explanation: "公庫の創業融資は申込から融資実行まで約3〜4週間です。事前準備を含めると1〜2ヶ月です。" }
            ]
        },
        {
            id: 503,
            title: "創業計画書の書き方（公庫フォーマット）",
            duration: "15分",
            content: `
<h2>公庫の創業計画書 記入のポイント</h2>

<table>
<thead><tr><th>項目</th><th>記入のポイント</th></tr></thead>
<tbody>
<tr><td><strong>1. 創業の動機</strong></td><td>なぜこの事業なのか、熱意だけでなく論理的に。「前職の経験を活かして」が強い動機</td></tr>
<tr><td><strong>2. 経営者の略歴</strong></td><td>業界経験を詳しく書く（年数・役職・実績）。関連する資格・受賞歴</td></tr>
<tr><td><strong>3. 取扱商品・サービス</strong></td><td>セールスポイント（差別化要因）を明確に。具体的な数字で説明</td></tr>
<tr><td><strong>4. 取引先・取引関係</strong></td><td>既に見込み客がいれば記載（受注書等あれば添付）。仕入先も具体的に</td></tr>
<tr><td><strong>5. 従業員</strong></td><td>採用予定があれば記載</td></tr>
<tr><td><strong>6. 借入の状況</strong></td><td>正直に全て記載（嘘は絶対NG）。住宅ローン・車のローンも含む</td></tr>
<tr><td><strong>7. 必要な資金と調達方法</strong></td><td>設備資金は見積書を添付。運転資金は3ヶ月分が目安。使途と調達が一致</td></tr>
<tr><td><strong>8. 事業の見通し（月間）</strong></td><td>創業当初と軌道に乗った後の2パターン。売上は積み上げ根拠を別紙で説明</td></tr>
</tbody>
</table>

<h2>創業計画書でよくある失敗</h2>
<div class="info-box warning">
<div class="info-box-title">失敗パターン</div>
<table>
<thead><tr><th>失敗パターン</th><th>改善方法</th></tr></thead>
<tbody>
<tr><td>動機が「夢」だけで根拠がない</td><td>業界経験や市場調査データで裏付ける</td></tr>
<tr><td>売上計画が希望的観測</td><td>客単価x客数x営業日数で積み上げる</td></tr>
<tr><td>借入状況を正直に書かない</td><td>信用情報で確認されるので嘘は必ずバレる</td></tr>
<tr><td>運転資金の見積もりが甘い</td><td>最低3ヶ月分、できれば6ヶ月分を計上</td></tr>
<tr><td>差別化要因が不明確</td><td>「なぜ顧客が自社を選ぶか」を明確に</td></tr>
</tbody>
</table>
</div>

<h2>面談で聞かれる質問と準備</h2>
<table>
<thead><tr><th>質問</th><th>準備すべき回答</th></tr></thead>
<tbody>
<tr><td>なぜこの事業を始めるのか？</td><td>経験に基づく論理的な説明</td></tr>
<tr><td>競合との違いは何か？</td><td>具体的な差別化ポイント</td></tr>
<tr><td>売上の根拠は？</td><td>積み上げ計算と市場データ</td></tr>
<tr><td>万が一うまくいかない場合は？</td><td>リスク対策と撤退基準</td></tr>
<tr><td>家族の理解は得ているか？</td><td>家族の協力体制</td></tr>
<tr><td>自己資金はどうやって貯めたか？</td><td>通帳の履歴で証明</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>創業計画書は8項目を漏れなく、具体的な数字で記入する</li>
<li>借入状況は絶対に嘘を書かない（信用情報で確認される）</li>
<li>面談では「万が一の時のリスク対策」も準備しておく</li>
</ul>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "創業計画書の「借入の状況」で最も重要なことはどれですか？", options: ["借入を少なく見せる", "住宅ローンは記載しなくてよい", "正直に全て記載する", "消費者金融だけ記載する"], answer: 2, explanation: "借入の状況は正直に全て記載します。嘘は信用情報で確認されるため必ずバレます。" },
                { id: "q503_2", type: "choice", question: "運転資金として計上すべき最低ラインはどれですか？", options: ["1ヶ月分", "3ヶ月分", "6ヶ月分", "12ヶ月分"], answer: 1, explanation: "運転資金は最低3ヶ月分、できれば6ヶ月分を計上することが推奨されます。" },
                { id: "q503_3", type: "choice", question: "創業計画書で「事業の見通し」は何パターン作成しますか？", options: ["1パターン（通常）", "2パターン（創業当初と軌道に乗った後）", "3パターン（楽観・普通・悲観）", "パターン分けは不要"], answer: 1, explanation: "事業の見通しは「創業当初」と「軌道に乗った後」の2パターンを作成します。" }
            ]
        }
    ]
};
