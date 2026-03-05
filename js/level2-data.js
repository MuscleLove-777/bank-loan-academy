/* ============================================
   Bank Loan Academy - Level 2: 審査基準と格付け
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "審査基準と格付け",
    icon: "🔍",
    description: "銀行がどのように審査し格付けするかを理解する",
    modules: [
        {
            id: 201,
            title: "銀行の審査基準",
            duration: "20分",
            content: `
<h2>審査の二本柱</h2>
<p>銀行の融資審査は<strong>定量評価（約70〜80%）</strong>と<strong>定性評価（約20〜30%）</strong>の二本柱で行われます。</p>

<table>
<thead><tr><th>評価</th><th>内容</th><th>配点</th></tr></thead>
<tbody>
<tr><td><strong>定量評価</strong>（数字で判断）</td><td>財務分析・収益性・安全性・成長性・返済能力</td><td>約70〜80%</td></tr>
<tr><td><strong>定性評価</strong>（数字以外で判断）</td><td>経営者の資質・事業の将来性・業界動向・技術力</td><td>約20〜30%</td></tr>
</tbody>
</table>

<h2>定量評価：収益性の指標</h2>
<table>
<thead><tr><th>指標</th><th>計算式</th><th>目安（良好）</th><th>銀行の見方</th></tr></thead>
<tbody>
<tr><td>売上高経常利益率</td><td>経常利益 / 売上高 x 100</td><td>5%以上</td><td>本業の稼ぐ力</td></tr>
<tr><td>総資本経常利益率(ROA)</td><td>経常利益 / 総資産 x 100</td><td>3%以上</td><td>資産効率</td></tr>
<tr><td>売上高営業利益率</td><td>営業利益 / 売上高 x 100</td><td>3%以上</td><td>本業の収益力</td></tr>
</tbody>
</table>

<h2>定量評価：安全性の指標</h2>
<table>
<thead><tr><th>指標</th><th>計算式</th><th>目安（良好）</th><th>銀行の見方</th></tr></thead>
<tbody>
<tr><td>自己資本比率</td><td>純資産 / 総資産 x 100</td><td>30%以上</td><td>財務の安定性</td></tr>
<tr><td>流動比率</td><td>流動資産 / 流動負債 x 100</td><td>150%以上</td><td>短期の支払能力</td></tr>
<tr><td>当座比率</td><td>当座資産 / 流動負債 x 100</td><td>100%以上</td><td>厳密な支払能力</td></tr>
</tbody>
</table>

<h2>定量評価：返済能力の指標</h2>
<table>
<thead><tr><th>指標</th><th>計算式</th><th>目安（良好）</th><th>銀行の見方</th></tr></thead>
<tbody>
<tr><td>債務償還年数</td><td>有利子負債 / (税引後利益+減価償却費)</td><td>10年以内</td><td>借入金の返済力</td></tr>
<tr><td>インタレスト・カバレッジ・レシオ</td><td>営業利益 / 支払利息</td><td>2倍以上</td><td>利息の支払余力</td></tr>
<tr><td>キャッシュフロー</td><td>税引後利益 + 減価償却費</td><td>プラス</td><td>返済原資の有無</td></tr>
</tbody>
</table>

<h2>定性評価の主な項目</h2>
<table>
<thead><tr><th>カテゴリ</th><th>評価項目</th></tr></thead>
<tbody>
<tr><td><strong>経営者</strong></td><td>経営能力、業界経験、経営ビジョン、人柄・誠実さ、後継者の有無</td></tr>
<tr><td><strong>事業</strong></td><td>市場の成長性、競合状況、技術力、取引先の分散度、参入障壁</td></tr>
<tr><td><strong>管理体制</strong></td><td>経理体制、内部管理、従業員の定着率、コンプライアンス</td></tr>
</tbody>
</table>

<h2>銀行が嫌う企業の特徴</h2>
<div class="info-box warning">
<div class="info-box-title">マイナス評価される項目</div>
<ul>
<li>税金・社会保険の滞納</li>
<li>粉飾決算の疑い</li>
<li>決算書の提出遅延</li>
<li>経営者の個人借入が多い</li>
<li>売掛金の回収遅延が多い</li>
<li>特定取引先への依存度が高い</li>
<li>在庫が過大（不良在庫の疑い）</li>
<li>役員貸付金が多い</li>
<li>資金使途が不明確</li>
<li>面談時に数字を把握していない</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>定量評価（70-80%）と定性評価（20-30%）の二本柱で審査される</li>
<li>債務償還年数10年以内、自己資本比率30%以上が重要な基準</li>
<li>税金滞納や粉飾決算は致命的なマイナス評価</li>
</ul>
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "銀行の融資審査で定量評価の配点は全体の何%ですか？", options: ["約20〜30%", "約40〜50%", "約60〜70%", "約70〜80%"], answer: 3, explanation: "定量評価（財務分析）は全体の約70〜80%を占めます。残りの20〜30%が定性評価です。" },
                { id: "q201_2", type: "choice", question: "債務償還年数の良好な目安はどれですか？", options: ["5年以内", "10年以内", "20年以内", "30年以内"], answer: 1, explanation: "債務償還年数は10年以内が目安です。20年超になると融資が困難になります。" },
                { id: "q201_3", type: "choice", question: "銀行が最もマイナスに評価する事項はどれですか？", options: ["売上が横ばい", "営業利益率が3%", "税金・社会保険の滞納", "従業員が5名以下"], answer: 2, explanation: "税金・社会保険の滞納は銀行にとって最もマイナスな評価項目の一つです。" }
            ]
        },
        {
            id: 202,
            title: "格付け（スコアリング）の仕組み",
            duration: "20分",
            content: `
<h2>信用格付けとは</h2>
<p>銀行は融資先企業を独自の基準で「格付け」しています。この格付けが融資の可否・金利・限度額を大きく左右します。</p>

<table>
<thead><tr><th>格付け</th><th>債務者区分</th><th>融資姿勢</th></tr></thead>
<tbody>
<tr><td>1〜2</td><td rowspan="2">正常先</td><td>積極的に融資拡大 / 前向きに対応</td></tr>
<tr><td>3〜4</td><td>通常対応 / やや慎重</td></tr>
<tr><td>5</td><td>要注意先</td><td>慎重に判断</td></tr>
<tr><td>6</td><td>要注意先（要管理先）</td><td>原則新規融資困難</td></tr>
<tr><td>7</td><td>破綻懸念先</td><td>融資不可</td></tr>
<tr><td>8</td><td>実質破綻先</td><td>融資不可・回収方針</td></tr>
<tr><td>9</td><td>破綻先</td><td>法的整理・回収</td></tr>
</tbody>
</table>

<h2>スコアリングの配点例（100点満点）</h2>
<table>
<thead><tr><th>評価項目</th><th>配点</th><th>内訳</th></tr></thead>
<tbody>
<tr><td><strong>定量評価（財務指標）</strong></td><td>70〜80点</td><td></td></tr>
<tr><td>　安全性指標</td><td>20点</td><td>自己資本比率、流動比率 等</td></tr>
<tr><td>　収益性指標</td><td>20点</td><td>売上高経常利益率 等</td></tr>
<tr><td>　返済能力指標</td><td>20点</td><td>債務償還年数 等</td></tr>
<tr><td>　成長性・効率性指標</td><td>10〜20点</td><td>売上成長率、回転率 等</td></tr>
<tr><td><strong>定性評価</strong></td><td>20〜30点</td><td></td></tr>
<tr><td>　経営者</td><td>10点</td><td>資質・経験・ビジョン</td></tr>
<tr><td>　市場・業界</td><td>5点</td><td>成長性・規模</td></tr>
<tr><td>　競争力</td><td>5点</td><td>差別化要因</td></tr>
<tr><td>　管理体制</td><td>5〜10点</td><td>経理・内部管理</td></tr>
</tbody>
</table>

<h3>スコアと格付けの対応</h3>
<table>
<thead><tr><th>合計スコア</th><th>格付け</th></tr></thead>
<tbody>
<tr><td>80点以上</td><td>格付1〜2（正常先上位）</td></tr>
<tr><td>65〜79点</td><td>格付3〜4（正常先下位）</td></tr>
<tr><td>50〜64点</td><td>格付5（要注意先）</td></tr>
<tr><td>50点未満</td><td>格付6以下</td></tr>
</tbody>
</table>

<h2>格付けが融資条件に与える影響</h2>
<table>
<thead><tr><th>格付け</th><th>金利水準</th><th>融資限度額</th><th>担保・保証</th><th>審査スピード</th></tr></thead>
<tbody>
<tr><td>1〜2（正常先上位）</td><td>最優遇（1%台〜）</td><td>大きい</td><td>不要の場合あり</td><td>速い</td></tr>
<tr><td>3〜4（正常先下位）</td><td>標準（2〜3%）</td><td>中程度</td><td>必要な場合あり</td><td>標準</td></tr>
<tr><td>5（要注意先）</td><td>高め（3〜5%）</td><td>小さい</td><td>ほぼ必須</td><td>遅い</td></tr>
<tr><td>6以下</td><td colspan="4">新規融資困難</td></tr>
</tbody>
</table>

<h2>格付けを上げるためのポイント</h2>
<div class="info-box tip">
<div class="info-box-title">即効性あり（決算前に対応可能）</div>
<ol>
<li>不要資産の売却 → 総資産圧縮</li>
<li>不良在庫の処分 → 在庫回転率改善</li>
<li>売掛金の早期回収 → 流動性改善</li>
<li>役員貸付金の解消 → 資産の健全性向上</li>
<li>仮払金・立替金の整理</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>格付けは融資の可否・金利・限度額を決定する最重要指標</li>
<li>80点以上で正常先上位、50点未満で新規融資困難</li>
<li>決算前の資産整理で即効性のある格付け改善が可能</li>
</ul>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "銀行の格付けで「正常先」に該当するのはどの格付けですか？", options: ["格付1〜2のみ", "格付1〜4", "格付1〜5", "格付1〜6"], answer: 1, explanation: "格付1〜4が「正常先」に該当します。格付5は「要注意先」です。" },
                { id: "q202_2", type: "choice", question: "スコアリングで80点以上の企業はどの格付けになりますか？", options: ["格付3〜4", "格付1〜2", "格付5", "格付6以下"], answer: 1, explanation: "80点以上は格付1〜2（正常先上位）となり、最も良い融資条件が適用されます。" },
                { id: "q202_3", type: "choice", question: "格付け改善で即効性のある施策はどれですか？", options: ["売上を増やす", "従業員を増やす", "役員貸付金を解消する", "新規事業を始める"], answer: 2, explanation: "役員貸付金の解消は決算前に対応可能で、資産の健全性向上に即効性があります。" }
            ]
        },
        {
            id: 203,
            title: "決算書の何を見られるか",
            duration: "20分",
            content: `
<h2>決算書の全体像</h2>
<table>
<thead><tr><th>書類</th><th>別名</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>貸借対照表（B/S）</strong></td><td>企業の「体力」</td><td>財産と借金の状況（ある時点のストック）</td></tr>
<tr><td><strong>損益計算書（P/L）</strong></td><td>企業の「成績」</td><td>売上と利益の状況（一定期間のフロー）</td></tr>
<tr><td><strong>キャッシュフロー計算書（C/F）</strong></td><td>企業の「血液の流れ」</td><td>実際のお金の動き</td></tr>
</tbody>
</table>

<h2>貸借対照表（B/S）で見られるポイント</h2>
<table>
<thead><tr><th>項目</th><th>銀行のチェックポイント</th><th>注意点</th></tr></thead>
<tbody>
<tr><td><strong>現金預金</strong></td><td>月商の何ヶ月分あるか</td><td>最低1ヶ月分は欲しい</td></tr>
<tr><td><strong>売掛金</strong></td><td>回収サイトは適正か</td><td>長期滞留は減額評価</td></tr>
<tr><td><strong>棚卸資産</strong></td><td>不良在庫はないか</td><td>過大在庫は減額評価</td></tr>
<tr><td><strong>役員貸付金</strong></td><td>公私混同の疑い</td><td>大きなマイナス評価</td></tr>
<tr><td><strong>純資産</strong></td><td>債務超過ではないか</td><td>債務超過は融資困難</td></tr>
</tbody>
</table>

<h2>銀行による「実態バランスシート」の修正</h2>
<div class="info-box warning">
<div class="info-box-title">銀行は決算書をそのまま信じない</div>
<p>銀行は決算書の数字を「実態」に修正して評価します。</p>
<table>
<thead><tr><th>項目</th><th>決算書上</th><th>銀行の実態評価</th></tr></thead>
<tbody>
<tr><td>売掛金</td><td>5,000万円</td><td>4,000万円（回収不能1,000万を控除）</td></tr>
<tr><td>棚卸資産</td><td>3,000万円</td><td>2,000万円（不良在庫1,000万を控除）</td></tr>
<tr><td>役員貸付金</td><td>500万円</td><td>0円（資産性なしと判断）</td></tr>
<tr><td>土地</td><td>1,000万円</td><td>800万円（時価評価に修正）</td></tr>
</tbody>
</table>
<p>→ 決算書上は債務超過でなくても、実態修正後に債務超過になる場合があります。</p>
</div>

<h2>損益計算書（P/L）で見られるポイント</h2>
<table>
<thead><tr><th>チェック項目</th><th>内容</th><th>銀行の判断</th></tr></thead>
<tbody>
<tr><td><strong>売上の推移</strong></td><td>3期分の増減トレンド</td><td>減少続きはマイナス</td></tr>
<tr><td><strong>粗利率の変動</strong></td><td>原価構造の変化</td><td>急変は要因を確認</td></tr>
<tr><td><strong>営業利益</strong></td><td>本業で稼げているか</td><td>赤字なら本業に問題あり</td></tr>
<tr><td><strong>経常利益</strong></td><td>継続的な稼ぐ力</td><td>最も重視される利益</td></tr>
<tr><td><strong>減価償却費</strong></td><td>適正に計上しているか</td><td>未計上は粉飾の疑い</td></tr>
<tr><td><strong>役員報酬</strong></td><td>過大または過少でないか</td><td>利益調整の疑い</td></tr>
</tbody>
</table>

<h2>融資審査で最も重視される3つの指標</h2>
<div class="info-box tip">
<div class="info-box-title">最重要3指標</div>
<ol>
<li><strong>債務償還年数</strong>：有利子負債 / (税引後利益+減価償却費) → 10年以内が目安</li>
<li><strong>自己資本比率</strong>：純資産 / 総資産 x 100 → 30%以上が目安</li>
<li><strong>経常利益</strong>：2期連続黒字が望ましい</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>銀行はB/S・P/L・C/Fの3つの書類を総合的に分析する</li>
<li>銀行は「実態バランスシート」に修正して評価する</li>
<li>最も重視されるのは債務償還年数・自己資本比率・経常利益の3指標</li>
</ul>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "銀行がP/Lで最も重視する利益はどれですか？", options: ["売上総利益", "営業利益", "経常利益", "当期純利益"], answer: 2, explanation: "経常利益は企業の継続的な稼ぐ力を示すため、銀行が最も重視する利益段階です。" },
                { id: "q203_2", type: "choice", question: "銀行が役員貸付金500万円を実態評価するとどうなりますか？", options: ["500万円のまま", "250万円に減額", "0円（資産性なし）", "750万円に増額"], answer: 2, explanation: "銀行は役員貸付金を資産性なしと判断し、0円として評価します。経営と個人の公私混同と見なされます。" },
                { id: "q203_3", type: "choice", question: "自己資本比率の良好な目安はどれですか？", options: ["10%以上", "20%以上", "30%以上", "50%以上"], answer: 2, explanation: "自己資本比率は30%以上が良好の目安です。マイナスの場合は債務超過となり融資が困難です。" }
            ]
        }
    ]
};
