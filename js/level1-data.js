/* ============================================
   Bank Loan Academy - Level 1: 銀行融資の基礎
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "銀行融資の基礎",
    icon: "📚",
    description: "銀行融資の全体像と融資の種類を理解する",
    modules: [
        {
            id: 101,
            title: "銀行融資の全体像",
            duration: "15分",
            content: `
<h2>なぜ銀行融資が重要か</h2>
<p>中小企業の資金調達において、銀行融資は最も基本的かつ重要な手段です。</p>

<h3>中小企業の資金調達マップ</h3>
<table>
<thead><tr><th>調達方法</th><th>特徴</th><th>返済</th><th>希薄化</th></tr></thead>
<tbody>
<tr><td><strong>自己資金（内部留保）</strong></td><td>最も安全だが限界あり</td><td>不要</td><td>なし</td></tr>
<tr><td><strong>銀行融資（デット）</strong></td><td>レバレッジが可能</td><td>必要</td><td>なし</td></tr>
<tr><td><strong>出資（エクイティ）</strong></td><td>審査が厳しい</td><td>不要</td><td>あり</td></tr>
<tr><td><strong>補助金・助成金</strong></td><td>返済不要だが手続きが煩雑</td><td>不要</td><td>なし</td></tr>
<tr><td><strong>社債発行・私募債</strong></td><td>一定規模以上の企業向け</td><td>必要</td><td>なし</td></tr>
<tr><td><strong>クラウドファンディング</strong></td><td>新しい調達手段</td><td>種類による</td><td>種類による</td></tr>
</tbody>
</table>

<h2>銀行融資の基本構造</h2>
<p>企業が銀行に融資を申し込み、銀行が資金を提供し、企業が毎月元金＋利息を返済する仕組みです。</p>

<h3>融資の3要素</h3>
<table>
<thead><tr><th>要素</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>元金</strong></td><td>借りた金額そのもの</td><td>1,000万円</td></tr>
<tr><td><strong>利息</strong></td><td>資金を借りるコスト</td><td>年利2.0% → 年20万円</td></tr>
<tr><td><strong>期間</strong></td><td>返済までの期間</td><td>5年（60回払い）</td></tr>
</tbody>
</table>

<h2>融資の返済方法</h2>
<table>
<thead><tr><th>返済方式</th><th>メリット</th><th>デメリット</th><th>向いているケース</th></tr></thead>
<tbody>
<tr><td><strong>元金均等</strong></td><td>総返済額が少ない</td><td>初期の返済負担が大きい</td><td>安定収益がある企業</td></tr>
<tr><td><strong>元利均等</strong></td><td>毎月の返済額が一定</td><td>総返済額がやや多い</td><td>資金繰り管理を重視</td></tr>
<tr><td><strong>一括返済</strong></td><td>期中は利息のみ</td><td>期日に全額返済が必要</td><td>つなぎ融資・短期資金</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>銀行融資は中小企業にとって最も基本的な資金調達手段</li>
<li>融資の3要素は「元金」「利息」「期間」</li>
<li>返済方法は元金均等・元利均等・一括返済の3種類</li>
</ul>
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "銀行融資（デット）の特徴として正しいものはどれですか？", options: ["返済不要・希薄化なし", "返済必要・希薄化なし", "返済不要・希薄化あり", "返済必要・希薄化あり"], answer: 1, explanation: "銀行融資（デット）は返済が必要ですが、株式の希薄化（持分の減少）は起こりません。" },
                { id: "q101_2", type: "choice", question: "毎月の返済額が一定になる返済方式はどれですか？", options: ["元金均等返済", "元利均等返済", "一括返済", "据置返済"], answer: 1, explanation: "元利均等返済は元金と利息の合計額が毎月一定になる方式です。" },
                { id: "q101_3", type: "choice", question: "融資の3要素に含まれないものはどれですか？", options: ["元金", "利息", "期間", "担保"], answer: 3, explanation: "融資の3要素は元金・利息・期間です。担保は融資条件の一つですが3要素には含まれません。" }
            ]
        },
        {
            id: 102,
            title: "融資の種類と比較",
            duration: "20分",
            content: `
<h2>融資の種類一覧</h2>
<table>
<thead><tr><th>融資タイプ</th><th>審査難易度</th><th>金利</th></tr></thead>
<tbody>
<tr><td><strong>プロパー融資</strong>（銀行独自判断）</td><td>★★★★★</td><td>低め</td></tr>
<tr><td><strong>信用保証協会付き融資</strong>（保証協会が保証）</td><td>★★★</td><td>中程度＋保証料</td></tr>
<tr><td><strong>日本政策金融公庫</strong>（政府系金融機関）</td><td>★★★</td><td>低い</td></tr>
<tr><td><strong>制度融資</strong>（自治体＋銀行＋保証）</td><td>★★★</td><td>低い</td></tr>
<tr><td><strong>ビジネスローン</strong>（ノンバンク含む）</td><td>★★</td><td>高い</td></tr>
</tbody>
</table>

<h2>融資タイプ詳細比較</h2>
<table>
<thead><tr><th>項目</th><th>プロパー融資</th><th>保証協会付き</th><th>日本政策金融公庫</th><th>ビジネスローン</th></tr></thead>
<tbody>
<tr><td><strong>金利目安</strong></td><td>1.0〜3.0%</td><td>1.5〜3.0%＋保証料</td><td>1.0〜2.5%</td><td>5.0〜15.0%</td></tr>
<tr><td><strong>融資上限</strong></td><td>数億円〜</td><td>8,000万円</td><td>4,800万〜7,200万円</td><td>500〜1,000万円</td></tr>
<tr><td><strong>審査期間</strong></td><td>2〜4週間</td><td>3〜6週間</td><td>3〜4週間</td><td>最短即日〜1週間</td></tr>
<tr><td><strong>担保</strong></td><td>必要な場合あり</td><td>原則不要</td><td>原則不要</td><td>原則不要</td></tr>
<tr><td><strong>実績</strong></td><td>2期以上必要</td><td>創業時も可</td><td>創業時も可</td><td>決算1期〜</td></tr>
</tbody>
</table>

<h2>プロパー融資</h2>
<p>銀行が自らのリスクで直接融資する形態。銀行が100%リスクを負担するため、審査は最も厳格です。</p>
<div class="info-box tip">
<div class="info-box-title">プロパー融資を受けるための条件（目安）</div>
<ul>
<li>業歴3年以上（最低でも2期の決算）</li>
<li>直近2期連続で黒字</li>
<li>債務超過でないこと</li>
<li>税金・社会保険の滞納がないこと</li>
<li>銀行との取引実績があること</li>
</ul>
</div>

<h2>信用保証協会付き融資</h2>
<p>企業が返済不能になった場合、保証協会が銀行に代位弁済（80%）する仕組みです。残り20%は銀行のリスクです（責任共有制度）。</p>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>保証料の目安</td><td>年0.45%〜1.90%（信用力による9段階）</td></tr>
<tr><td>一般保証の限度額（無担保）</td><td>8,000万円</td></tr>
<tr><td>一般保証の限度額（有担保）</td><td>2億円</td></tr>
</tbody>
</table>

<h2>融資タイプの選び方</h2>
<div class="info-box tip">
<div class="info-box-title">選び方フローチャート</div>
<ol>
<li><strong>創業前・創業直後？</strong> → YES → 公庫の創業融資を検討</li>
<li><strong>業歴2期以上？</strong> → NO → 保証協会付き融資を検討</li>
<li><strong>決算内容良好？</strong> → YES → プロパー融資を交渉 / NO → 保証協会付き or 制度融資</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>融資タイプは審査難易度・金利・限度額がそれぞれ異なる</li>
<li>プロパー融資は金利が低いが審査が最も厳しい</li>
<li>創業時は日本政策金融公庫や保証協会付き融資が利用しやすい</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "金利が最も低い傾向にある融資タイプはどれですか？", options: ["ビジネスローン", "信用保証協会付き融資", "プロパー融資", "制度融資"], answer: 2, explanation: "プロパー融資は銀行が直接リスクを取る代わりに、信用力の高い企業に対して最も低い金利で融資します。" },
                { id: "q102_2", type: "choice", question: "信用保証協会の責任共有制度で、保証協会が負担する割合はどれですか？", options: ["50%", "70%", "80%", "100%"], answer: 2, explanation: "責任共有制度では保証協会が80%、銀行が20%のリスクを負担します。" },
                { id: "q102_3", type: "choice", question: "創業前の起業家が最も利用しやすい融資はどれですか？", options: ["プロパー融資", "日本政策金融公庫の創業融資", "ビジネスローン", "社債発行"], answer: 1, explanation: "日本政策金融公庫は創業者向けの融資制度が充実しており、業歴がなくても利用できます。" }
            ]
        },
        {
            id: 103,
            title: "日本政策金融公庫と制度融資",
            duration: "15分",
            content: `
<h2>日本政策金融公庫</h2>
<p>政府が100%出資する政策金融機関で、民間銀行の補完的役割を担います。</p>

<h3>公庫の融資制度（主なもの）</h3>
<table>
<thead><tr><th>区分</th><th>制度名</th><th>融資上限</th></tr></thead>
<tbody>
<tr><td rowspan="3"><strong>国民生活事業</strong>（小規模向け）</td><td>一般貸付</td><td>4,800万円</td></tr>
<tr><td>新規開業資金</td><td>7,200万円</td></tr>
<tr><td>新創業融資制度</td><td>3,000万円（無担保）</td></tr>
<tr><td rowspan="2"><strong>中小企業事業</strong>（中規模向け）</td><td>一般貸付</td><td>4億8,000万円</td></tr>
<tr><td>新事業育成資金</td><td>7億2,000万円</td></tr>
</tbody>
</table>

<h2>制度融資</h2>
<p>制度融資は<strong>自治体・銀行・信用保証協会の三者</strong>が連携する融資制度です。</p>

<table>
<thead><tr><th>関係者</th><th>役割</th></tr></thead>
<tbody>
<tr><td><strong>自治体</strong>（都道府県・市区町村）</td><td>利子補給・保証料補助・斡旋</td></tr>
<tr><td><strong>銀行</strong></td><td>融資の実行</td></tr>
<tr><td><strong>信用保証協会</strong></td><td>保証の提供</td></tr>
</tbody>
</table>

<h3>制度融資のメリットとデメリット</h3>
<table>
<thead><tr><th>メリット</th><th>デメリット</th></tr></thead>
<tbody>
<tr><td>自治体が金利の一部を補助 → 実質金利が非常に低い</td><td>手続きに時間がかかる（1〜2ヶ月）</td></tr>
<tr><td>保証料の補助がある自治体も多い</td><td>自治体ごとに制度が異なり複雑</td></tr>
<tr><td>創業者でも利用しやすい</td><td>融資額に上限がある</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ベストプラクティス</div>
<p>公庫＋制度融資の<strong>併用</strong>が最も効果的な調達方法です。公庫で基本的な資金を確保し、制度融資で低金利の追加資金を調達する組み合わせがおすすめです。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>日本政策金融公庫は創業者や小規模事業者に強い政府系金融機関</li>
<li>制度融資は自治体・銀行・保証協会の三者連携で低金利を実現</li>
<li>公庫＋制度融資の併用がベストプラクティス</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "制度融資に関わる三者として正しい組み合わせはどれですか？", options: ["企業・銀行・税理士", "自治体・銀行・信用保証協会", "公庫・銀行・保証協会", "自治体・公庫・銀行"], answer: 1, explanation: "制度融資は自治体・銀行・信用保証協会の三者が連携する融資制度です。" },
                { id: "q103_2", type: "choice", question: "日本政策金融公庫の新規開業資金の融資上限はいくらですか？", options: ["3,000万円", "4,800万円", "7,200万円", "1億円"], answer: 2, explanation: "新規開業資金の融資上限は7,200万円です。" },
                { id: "q103_3", type: "choice", question: "制度融資の最大のデメリットはどれですか？", options: ["金利が高い", "創業者は使えない", "手続きに時間がかかる", "担保が必須"], answer: 2, explanation: "制度融資は金利が低い反面、三者の手続きが必要なため1〜2ヶ月かかることがデメリットです。" }
            ]
        }
    ]
};
