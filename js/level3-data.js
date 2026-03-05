/* ============================================
   Bank Loan Academy - Level 3: 事業計画書と必要書類
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "事業計画書と必要書類",
    icon: "📋",
    description: "融資審査で通る事業計画書の書き方と必要書類を学ぶ",
    modules: [
        {
            id: 301,
            title: "事業計画書の書き方",
            duration: "20分",
            content: `
<h2>融資審査で通る事業計画書の構成</h2>
<table>
<thead><tr><th>項目</th><th>ページ数</th><th>重要度</th></tr></thead>
<tbody>
<tr><td>1. 会社概要・事業概要</td><td>1ページ</td><td></td></tr>
<tr><td>2. 経営理念・ビジョン</td><td>1ページ</td><td></td></tr>
<tr><td>3. 事業内容の詳細</td><td>2〜3ページ</td><td></td></tr>
<tr><td>4. 市場分析・競合分析</td><td>1〜2ページ</td><td></td></tr>
<tr><td>5. 自社の強み・差別化要因</td><td>1ページ</td><td></td></tr>
<tr><td>6. 営業戦略・販売計画</td><td>1〜2ページ</td><td></td></tr>
<tr><td>7. 組織体制・人員計画</td><td>1ページ</td><td></td></tr>
<tr><td>8. 資金計画（調達と使途）</td><td>1ページ</td><td>★ 特に重視</td></tr>
<tr><td>9. 売上・利益計画（5年分）</td><td>2〜3ページ</td><td>★ 特に重視</td></tr>
<tr><td>10. 返済計画</td><td>1ページ</td><td>★ 特に重視</td></tr>
</tbody>
</table>
<p>合計12〜16ページ程度が適切です。</p>

<h2>資金計画の書き方</h2>
<div class="info-box tip">
<div class="info-box-title">資金計画書のポイント</div>
<table>
<thead><tr><th>資金の使いみち</th><th>金額</th><th>資金の調達方法</th><th>金額</th></tr></thead>
<tbody>
<tr><td>設備資金（店舗内装）</td><td>300万円</td><td>自己資金（預金）</td><td>500万円</td></tr>
<tr><td>設備資金（厨房設備）</td><td>200万円</td><td>銀行融資</td><td>800万円</td></tr>
<tr><td>設備資金（什器備品）</td><td>100万円</td><td>公庫融資</td><td>500万円</td></tr>
<tr><td>運転資金（仕入代金）</td><td>400万円</td><td></td><td></td></tr>
<tr><td>運転資金（人件費）</td><td>200万円</td><td></td><td></td></tr>
<tr><td>運転資金（広告宣伝）</td><td>100万円</td><td></td><td></td></tr>
<tr><td><strong>合計</strong></td><td><strong>1,300万円</strong></td><td><strong>合計</strong></td><td><strong>1,300万円</strong></td></tr>
</tbody>
</table>
<p>使いみちと調達が必ず一致すること。自己資金は最低でも総額の1/3は欲しい。</p>
</div>

<h2>売上計画の作り方</h2>
<p>売上計画には<strong>具体的な根拠</strong>が必要です。</p>
<table>
<thead><tr><th>悪い例</th><th>良い例</th></tr></thead>
<tbody>
<tr><td>「売上目標 月500万円」（根拠なし）</td><td>売上 = 客単価 x 客数 x 営業日数<br>ランチ: 1,000円 x 30人 x 25日 = 750,000円<br>ディナー: 3,000円 x 15人 x 25日 = 1,125,000円<br><strong>月間売上合計: 2,175,000円</strong></td></tr>
</tbody>
</table>

<h2>事業計画書のNG集</h2>
<div class="info-box warning">
<div class="info-box-title">絶対にやってはいけないこと</div>
<ul>
<li>売上計画に根拠がない（希望的観測）</li>
<li>初年度から急成長の計画（非現実的）</li>
<li>競合分析がない（市場を理解していない）</li>
<li>リスクへの対策が書かれていない</li>
<li>返済原資の説明がない</li>
<li>数字の整合性が取れていない</li>
<li>分厚すぎる（50ページ超は読まれない）</li>
<li>経営者自身が内容を説明できない</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>銀行が特に重視するのは資金計画・売上利益計画・返済計画の3つ</li>
<li>売上計画には必ず積み上げ根拠を記載する</li>
<li>返済原資（税引後利益+減価償却費）が年間返済額を上回ることを示す</li>
</ul>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "事業計画書で銀行が特に重視する部分はどれですか？", options: ["経営理念・ビジョン", "組織体制・人員計画", "資金計画・売上利益計画・返済計画", "会社概要"], answer: 2, explanation: "銀行は資金計画（調達と使途）、売上・利益計画（5年分）、返済計画を特に重視します。" },
                { id: "q301_2", type: "choice", question: "自己資金は総投資額の最低どのくらいが望ましいですか？", options: ["1/10", "1/5", "1/3", "1/2"], answer: 2, explanation: "自己資金は総投資額の最低1/3が望ましいとされています。" },
                { id: "q301_3", type: "choice", question: "事業計画書のNGに該当しないものはどれですか？", options: ["根拠のない売上計画", "競合分析を含めること", "初年度から急成長の計画", "50ページ超の分厚い計画書"], answer: 1, explanation: "競合分析を含めることはNGではなく、むしろ必須です。競合分析がないことがNGに該当します。" }
            ]
        },
        {
            id: 302,
            title: "必要書類チェックリスト",
            duration: "15分",
            content: `
<h2>法人の融資申込時に必要な書類</h2>

<h3>基本書類</h3>
<table>
<thead><tr><th>書類</th><th>備考</th></tr></thead>
<tbody>
<tr><td>決算書（直近3期分）</td><td>勘定科目明細付き</td></tr>
<tr><td>確定申告書</td><td>税務署受付印付き or 電子申告の受信通知</td></tr>
<tr><td>試算表（直近月）</td><td>月次で作成していることが望ましい</td></tr>
<tr><td>法人税納税証明書</td><td>その1・その3の3</td></tr>
<tr><td>会社の登記簿謄本</td><td>履歴事項全部証明書</td></tr>
<tr><td>定款の写し</td><td></td></tr>
<tr><td>会社案内・パンフレット</td><td></td></tr>
</tbody>
</table>

<h3>資金関連書類</h3>
<table>
<thead><tr><th>書類</th><th>備考</th></tr></thead>
<tbody>
<tr><td>事業計画書（資金計画含む）</td><td>必須</td></tr>
<tr><td>資金繰り表</td><td>過去6ヶ月＋今後6ヶ月</td></tr>
<tr><td>設備資金の見積書・契約書</td><td>設備資金の場合</td></tr>
<tr><td>既存の借入金一覧表</td><td>全金融機関分</td></tr>
</tbody>
</table>

<h3>代表者関連書類</h3>
<table>
<thead><tr><th>書類</th></tr></thead>
<tbody>
<tr><td>代表者の本人確認書類（運転免許証等）</td></tr>
<tr><td>代表者の個人資産・負債一覧</td></tr>
<tr><td>代表者の確定申告書（個人分）</td></tr>
<tr><td>実印・印鑑証明書</td></tr>
</tbody>
</table>

<h2>個人事業主の必要書類</h2>
<table>
<thead><tr><th>書類</th><th>備考</th></tr></thead>
<tbody>
<tr><td>確定申告書（直近3期分）</td><td>控え＋受付印</td></tr>
<tr><td>青色申告決算書 or 収支内訳書</td><td>直近3期分</td></tr>
<tr><td>所得税の納税証明書</td><td>その1・その2</td></tr>
<tr><td>開業届の控え</td><td></td></tr>
<tr><td>事業計画書</td><td></td></tr>
<tr><td>通帳のコピー</td><td>事業用口座・直近6ヶ月</td></tr>
</tbody>
</table>

<h2>創業融資で追加的に必要な書類</h2>
<div class="info-box tip">
<div class="info-box-title">創業融資の追加書類</div>
<ul>
<li>創業計画書（公庫所定フォーマット）</li>
<li>自己資金の確認書類（通帳6ヶ月分のコピー）</li>
<li>職務経歴書（業界経験を証明）</li>
<li>資格・免許の証明書</li>
<li>店舗の賃貸借契約書（または仮契約書）</li>
<li>既存取引先からの受注見込み書</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">重要</div>
<p>自己資金は通帳で<strong>コツコツ貯めた履歴</strong>が大事です。「見せ金」（一時的な入金）は通帳履歴でバレます。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>法人は決算書3期分・試算表・事業計画書が基本セット</li>
<li>創業融資では自己資金の蓄積履歴と業界経験が重要</li>
<li>書類は事前に全て揃えてから申し込むとスムーズ</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "法人の融資申込で必要な決算書は何期分ですか？", options: ["1期分", "2期分", "3期分", "5期分"], answer: 2, explanation: "法人の融資申込では直近3期分の決算書（勘定科目明細付き）が必要です。" },
                { id: "q302_2", type: "choice", question: "創業融資で「見せ金」がバレる理由はどれですか？", options: ["銀行が調査するから", "通帳の入金履歴で分かるから", "税務署に聞くから", "保証協会が調べるから"], answer: 1, explanation: "通帳6ヶ月分のコピーを提出するため、一時的な大きな入金（見せ金）は履歴で簡単にバレます。" },
                { id: "q302_3", type: "choice", question: "資金繰り表はどの期間分が必要ですか？", options: ["過去1ヶ月分", "過去3ヶ月分", "過去6ヶ月＋今後6ヶ月", "過去1年分"], answer: 2, explanation: "資金繰り表は過去6ヶ月＋今後6ヶ月の分が必要です。" }
            ]
        },
        {
            id: 303,
            title: "5年間の収支計画と返済計画",
            duration: "15分",
            content: `
<h2>5年間の収支計画（テンプレート）</h2>
<table>
<thead><tr><th>項目</th><th>1年目</th><th>2年目</th><th>3年目</th><th>4年目</th><th>5年目</th></tr></thead>
<tbody>
<tr><td>売上高</td><td>2,400万</td><td>2,800万</td><td>3,200万</td><td>3,500万</td><td>3,800万</td></tr>
<tr><td>売上原価</td><td>960万</td><td>1,120万</td><td>1,280万</td><td>1,400万</td><td>1,520万</td></tr>
<tr><td>粗利益（粗利率60%）</td><td>1,440万</td><td>1,680万</td><td>1,920万</td><td>2,100万</td><td>2,280万</td></tr>
<tr><td>販管費計</td><td>1,140万</td><td>1,260万</td><td>1,380万</td><td>1,450万</td><td>1,520万</td></tr>
<tr><td>営業利益</td><td>300万</td><td>420万</td><td>540万</td><td>650万</td><td>760万</td></tr>
<tr><td>経常利益</td><td>260万</td><td>385万</td><td>510万</td><td>625万</td><td>740万</td></tr>
<tr><td>税引後利益</td><td>182万</td><td>269万</td><td>357万</td><td>437万</td><td>518万</td></tr>
<tr><td>減価償却費</td><td>100万</td><td>100万</td><td>100万</td><td>100万</td><td>100万</td></tr>
<tr><td><strong>返済原資</strong></td><td><strong>282万</strong></td><td><strong>369万</strong></td><td><strong>457万</strong></td><td><strong>537万</strong></td><td><strong>618万</strong></td></tr>
<tr><td>年間返済額</td><td>260万</td><td>260万</td><td>260万</td><td>260万</td><td>260万</td></tr>
<tr><td>返済余力</td><td>22万</td><td>109万</td><td>197万</td><td>277万</td><td>358万</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">最重要チェックポイント</div>
<p><strong>返済原資（税引後利益＋減価償却費）が年間返済額を上回っていること！</strong></p>
<p>返済原資 > 年間返済額 → 返済可能（融資OK）</p>
<p>返済原資 < 年間返済額 → 返済不能（融資NG）</p>
</div>

<h2>返済計画のポイント</h2>
<table>
<thead><tr><th>ポイント</th><th>内容</th></tr></thead>
<tbody>
<tr><td>返済原資の計算</td><td>税引後利益 + 減価償却費</td></tr>
<tr><td>返済余力の確保</td><td>返済原資の最低110%以上が返済額をカバー</td></tr>
<tr><td>据置期間の活用</td><td>創業初期は元金据置を活用して資金繰りを安定化</td></tr>
<tr><td>借入期間の設定</td><td>設備の耐用年数を超えない期間に設定</td></tr>
</tbody>
</table>

<h2>収支計画作成の注意点</h2>
<table>
<thead><tr><th>注意点</th><th>対策</th></tr></thead>
<tbody>
<tr><td>売上を過大に見積もらない</td><td>保守的な計画で作成し、上振れ要因は別途説明</td></tr>
<tr><td>経費を過小に見積もらない</td><td>見落としがちな経費（社会保険料等）を漏れなく計上</td></tr>
<tr><td>成長率は現実的に</td><td>年間成長率は業界平均を参考に、10-20%程度が現実的</td></tr>
<tr><td>リスクシナリオも用意</td><td>売上が計画の80%だった場合のシミュレーションも準備</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>返済原資 = 税引後利益 + 減価償却費 > 年間返済額が絶対条件</li>
<li>売上計画は保守的に作成し、根拠を明確にする</li>
<li>リスクシナリオ（売上80%の場合）も準備しておくと評価が上がる</li>
</ul>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "返済原資の計算式として正しいのはどれですか？", options: ["売上高 - 売上原価", "営業利益 - 支払利息", "税引後利益 + 減価償却費", "経常利益 - 法人税"], answer: 2, explanation: "返済原資 = 税引後利益 + 減価償却費です。この金額が年間返済額を上回る必要があります。" },
                { id: "q303_2", type: "choice", question: "収支計画の売上予測で適切な姿勢はどれですか？", options: ["楽観的に大きく見積もる", "保守的に作成し根拠を明確にする", "他社の計画をコピーする", "売上は記載しない"], answer: 1, explanation: "売上計画は保守的に作成し、積み上げ根拠を明確にすることが銀行から信頼される計画書のポイントです。" },
                { id: "q303_3", type: "choice", question: "銀行の評価を高める追加準備はどれですか？", options: ["計画書を50ページ以上にする", "売上が計画の80%の場合のリスクシナリオを用意する", "他社の成功事例を大量に添付する", "競合分析を省略する"], answer: 1, explanation: "リスクシナリオ（売上80%の場合のシミュレーション）を準備しておくと、リスク管理能力が評価されます。" }
            ]
        }
    ]
};
