/* ============================================
   Bank Loan Academy - Level 4: 金利・担保・保証
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "金利・担保・保証",
    icon: "💰",
    description: "金利の仕組み、担保・保証人の基礎知識を学ぶ",
    modules: [
        {
            id: 401,
            title: "金利の仕組みと交渉のコツ",
            duration: "20分",
            content: `
<h2>金利の基本構造</h2>
<p>融資金利は4つの要素で構成されています。</p>
<table>
<thead><tr><th>要素</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td>調達コスト</td><td>銀行が資金を調達するコスト</td><td>0.3%</td></tr>
<tr><td>経費率</td><td>銀行の運営コスト</td><td>0.5%</td></tr>
<tr><td>信用コスト（リスクプレミアム）</td><td>貸倒リスクに備えるコスト</td><td>0.7%</td></tr>
<tr><td>利益</td><td>銀行の利益</td><td>0.5%</td></tr>
<tr><td><strong>合計（適用金利）</strong></td><td></td><td><strong>2.0%</strong></td></tr>
</tbody>
</table>
<p>信用コストは企業の格付けで大きく変動します。格付けが高いほど信用コストが低くなり、適用金利も下がります。</p>

<h2>金利の種類</h2>
<table>
<thead><tr><th>金利タイプ</th><th>内容</th><th>メリット</th><th>デメリット</th></tr></thead>
<tbody>
<tr><td><strong>固定金利</strong></td><td>借入期間中ずっと同じ金利</td><td>返済計画が立てやすい</td><td>市場金利低下の恩恵なし</td></tr>
<tr><td><strong>変動金利</strong></td><td>一定期間ごとに金利見直し</td><td>金利低下時にメリット</td><td>金利上昇リスクあり</td></tr>
</tbody>
</table>

<h2>金利水準の目安</h2>
<table>
<thead><tr><th>融資タイプ</th><th>金利範囲</th></tr></thead>
<tbody>
<tr><td>日本政策金融公庫</td><td>1.0% 〜 2.5%</td></tr>
<tr><td>都市銀行（プロパー）</td><td>1.0% 〜 3.0%</td></tr>
<tr><td>地方銀行（プロパー）</td><td>1.5% 〜 3.5%</td></tr>
<tr><td>信用金庫（プロパー）</td><td>1.5% 〜 4.0%</td></tr>
<tr><td>保証協会付き（+保証料0.45〜1.90%）</td><td>1.5% 〜 3.0%</td></tr>
<tr><td>制度融資</td><td>0.5% 〜 2.5%</td></tr>
<tr><td>ビジネスローン</td><td>5.0% 〜 15.0%</td></tr>
</tbody>
</table>

<h2>金利引き下げ交渉 7つのコツ</h2>
<ol>
<li><strong>複数の銀行から見積もりを取る</strong> →「A銀行では○%の提示がありました」</li>
<li><strong>決算内容の改善をアピール</strong> →「自己資本比率が○%改善しました」</li>
<li><strong>預金取引・給与振込の集約を提案</strong> →「メイン口座をそちらに移します」</li>
<li><strong>借り換えを検討していることを伝える</strong> → 銀行は既存融資を他行に奪われたくない</li>
<li><strong>保証料負担の交渉</strong> → 銀行のリスクを下げる提案</li>
<li><strong>融資期間を短くする提案</strong> → 期間が短い＝リスクが低い＝金利を下げやすい</li>
<li><strong>銀行の期末（3月・9月）を狙う</strong> → 銀行も融資実績を作りたい時期</li>
</ol>

<div class="info-box warning">
<div class="info-box-title">金利交渉で言ってはいけないこと</div>
<ul>
<li>「金利が高いから借りない」（感情的な交渉）</li>
<li>「○○銀行が○%と言っていた」（嘘の情報。バレると信用失墜）</li>
<li>「金利が下がらないなら全額返済する」（脅し交渉）</li>
</ul>
<p><strong>正しいアプローチ：</strong>事実に基づいた冷静な交渉、銀行との長期的な関係構築を前提とした対話</p>
</div>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>金利は調達コスト＋経費率＋信用コスト＋利益で構成される</li>
<li>格付けが高いほど信用コストが低くなり、金利も下がる</li>
<li>複数行の見積もりと決算改善のアピールが交渉の基本</li>
</ul>
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "融資金利の構成要素で、企業の格付けにより大きく変動するのはどれですか？", options: ["調達コスト", "経費率", "信用コスト（リスクプレミアム）", "利益"], answer: 2, explanation: "信用コスト（リスクプレミアム）は企業の格付けで大きく変動します。格付けが高いほど低くなります。" },
                { id: "q401_2", type: "choice", question: "金利交渉で効果的なタイミングはいつですか？", options: ["年初（1月）", "GW前（5月）", "お盆前（8月）", "銀行の期末（3月・9月）"], answer: 3, explanation: "銀行の期末（3月・9月）は融資実績を作りたい時期なので、金利交渉に応じやすくなります。" },
                { id: "q401_3", type: "choice", question: "金利が最も高い融資タイプはどれですか？", options: ["日本政策金融公庫", "地方銀行プロパー", "制度融資", "ビジネスローン"], answer: 3, explanation: "ビジネスローンは5.0%〜15.0%と最も金利が高いです。審査が速い反面、高コストです。" }
            ]
        },
        {
            id: 402,
            title: "担保・保証人の基礎知識",
            duration: "20分",
            content: `
<h2>担保の種類</h2>
<table>
<thead><tr><th>分類</th><th>種類</th><th>例</th></tr></thead>
<tbody>
<tr><td rowspan="4"><strong>物的担保</strong>（モノで保証）</td><td>不動産担保</td><td>土地・建物</td></tr>
<tr><td>動産担保</td><td>在庫・機械等</td></tr>
<tr><td>有価証券担保</td><td>株式・国債等</td></tr>
<tr><td>預金担保</td><td>定期預金等</td></tr>
<tr><td rowspan="2"><strong>人的担保</strong>（ヒトで保証）</td><td>連帯保証人</td><td>第三者保証</td></tr>
<tr><td>経営者保証</td><td>代表者個人</td></tr>
</tbody>
</table>

<h2>不動産担保の評価方法</h2>
<table>
<thead><tr><th>ステップ</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td>1. 時価（実勢価格）</td><td>不動産の市場価値</td><td>5,000万円</td></tr>
<tr><td>2. 掛け目を適用</td><td>70%程度</td><td>3,500万円</td></tr>
<tr><td>3. 先順位の抵当権を控除</td><td>既存ローン残</td><td>-2,000万円</td></tr>
<tr><td><strong>正味担保余力</strong></td><td><strong>融資可能額の上限目安</strong></td><td><strong>1,500万円</strong></td></tr>
</tbody>
</table>

<h3>不動産種別ごとの掛け目</h3>
<table>
<thead><tr><th>種別</th><th>掛け目の目安</th><th>理由</th></tr></thead>
<tbody>
<tr><td>住宅地（更地）</td><td>70〜80%</td><td>流動性が高い</td></tr>
<tr><td>商業地</td><td>60〜70%</td><td>市況変動が大きい</td></tr>
<tr><td>建物</td><td>50〜60%</td><td>経年劣化で目減り</td></tr>
<tr><td>工場・倉庫</td><td>40〜60%</td><td>用途が限定的</td></tr>
<tr><td>農地・山林</td><td>20〜40%</td><td>流動性が低い</td></tr>
</tbody>
</table>

<h2>保証人と連帯保証人の違い</h2>
<table>
<thead><tr><th>権利</th><th>保証人</th><th>連帯保証人</th></tr></thead>
<tbody>
<tr><td><strong>催告の抗弁権</strong>（先に借主に請求せよ）</td><td>あり（主張できる）</td><td>なし（主張できない）</td></tr>
<tr><td><strong>検索の抗弁権</strong>（先に借主の財産を差し押さえよ）</td><td>あり（主張できる）</td><td>なし（主張できない）</td></tr>
<tr><td><strong>分別の利益</strong>（保証人の数で割る）</td><td>あり（頭割りでOK）</td><td>なし（全額の責任）</td></tr>
<tr><td><strong>実質的な責任</strong></td><td>補充的</td><td>借主と同等</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">重要</div>
<p>銀行融資ではほぼ100%「連帯保証人」を求められます。連帯保証人は借主と全く同じ責任を負う、非常に重い保証です。</p>
</div>

<h2>経営者保証ガイドライン</h2>
<p>以下の3つの要件を満たせば、経営者保証なしで融資を受けられる可能性があります。</p>
<ol>
<li><strong>法人と経営者の資産が明確に分離</strong> - 役員貸付金がない、個人資産との混同がない</li>
<li><strong>財務基盤が強固</strong> - 十分な自己資本、安定的なキャッシュフロー</li>
<li><strong>財務情報の適切な開示</strong> - 定期的に試算表を提出、外部専門家の検証</li>
</ol>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>担保は物的担保（不動産等）と人的担保（保証人）に分かれる</li>
<li>不動産担保は時価の70%程度が評価額</li>
<li>連帯保証人は借主と同等の責任を負う非常に重い保証</li>
<li>経営者保証ガイドラインの要件を満たせば保証なし融資も可能</li>
</ul>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "連帯保証人と保証人の最大の違いはどれですか？", options: ["保証する金額が異なる", "連帯保証人は催告・検索の抗弁権がない", "連帯保証人は保証料が発生する", "保証人のほうが責任が重い"], answer: 1, explanation: "連帯保証人は催告の抗弁権・検索の抗弁権・分別の利益がなく、借主と全く同等の責任を負います。" },
                { id: "q402_2", type: "choice", question: "住宅地（更地）の不動産担保の掛け目はどの程度ですか？", options: ["20〜40%", "40〜60%", "60〜70%", "70〜80%"], answer: 3, explanation: "住宅地（更地）は流動性が高いため、掛け目は70〜80%と最も高い水準です。" },
                { id: "q402_3", type: "choice", question: "経営者保証ガイドラインの要件に含まれないものはどれですか？", options: ["法人と経営者の資産分離", "財務基盤が強固", "売上が10億円以上", "財務情報の適切な開示"], answer: 2, explanation: "経営者保証ガイドラインの要件は資産分離・財務基盤・情報開示の3つです。売上規模の要件はありません。" }
            ]
        },
        {
            id: 403,
            title: "銀行との付き合い方",
            duration: "15分",
            content: `
<h2>メインバンクとは</h2>
<p>メインバンクとは「最も取引が深く、経営に最も理解のある銀行」のことです。</p>

<h3>メインバンクの判断基準</h3>
<ul>
<li>融資シェアが最も大きい</li>
<li>売上入金口座がある</li>
<li>給与振込口座として利用</li>
<li>最も長い取引歴がある</li>
<li>経営相談ができる関係性</li>
</ul>

<h3>理想的な取引銀行の数</h3>
<table>
<thead><tr><th>年商</th><th>推奨銀行数</th></tr></thead>
<tbody>
<tr><td>1億円未満</td><td>2〜3行</td></tr>
<tr><td>1〜5億円</td><td>3〜4行</td></tr>
<tr><td>5〜10億円</td><td>4〜5行</td></tr>
<tr><td>10億円以上</td><td>5行以上</td></tr>
</tbody>
</table>

<h2>銀行選びのポイント</h2>
<table>
<thead><tr><th>銀行タイプ</th><th>特徴</th><th>向いている企業</th></tr></thead>
<tbody>
<tr><td><strong>都市銀行（メガバンク）</strong></td><td>規模大・金利低い・審査厳しい</td><td>年商10億円以上</td></tr>
<tr><td><strong>地方銀行</strong></td><td>地域密着・バランス良い</td><td>年商1〜10億円の地域企業</td></tr>
<tr><td><strong>信用金庫</strong></td><td>地域密着・親身・融通が利く</td><td>年商1億円以下の小規模企業</td></tr>
<tr><td><strong>日本政策金融公庫</strong></td><td>政府系・創業に強い</td><td>創業者、小規模事業者</td></tr>
</tbody>
</table>

<h2>銀行担当者と良好な関係を築くコツ</h2>

<h3>定期的な情報共有</h3>
<ul>
<li><strong>月次試算表を毎月提出</strong>（最重要！）</li>
<li>決算書は確定後すぐに持参して説明</li>
<li>事業の進捗を定期報告（良いニュースも悪いニュースも）</li>
</ul>

<h3>信頼関係の構築</h3>
<ul>
<li>質問には正直に即座に回答</li>
<li>融資の使途は申告通りに使用</li>
<li>担当者の訪問を歓迎する（工場見学等）</li>
<li>経営課題を率直に相談</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">やってはいけないこと</div>
<ul>
<li>担当者が来ても会わない</li>
<li>決算書の提出を遅らせる</li>
<li>悪い情報を隠す</li>
<li>「銀行はお金を貸すのが仕事だろう」という態度</li>
<li>複数行に同時に同じ融資を申し込む</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>メインバンクは融資シェア・入金口座・取引歴で決まる</li>
<li>月次試算表の毎月提出が信頼関係構築の最重要ポイント</li>
<li>悪い情報ほど早く正直に共有することが信頼を築く</li>
</ul>
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "年商3億円の企業の推奨取引銀行数はどれですか？", options: ["1行", "2〜3行", "3〜4行", "5行以上"], answer: 2, explanation: "年商1〜5億円の企業は3〜4行の取引銀行が推奨されます。" },
                { id: "q403_2", type: "choice", question: "銀行との信頼関係構築で最も重要なのはどれですか？", options: ["接待・贈答を行う", "月次試算表を毎月提出する", "融資額を増やし続ける", "預金残高を多く見せる"], answer: 1, explanation: "月次試算表を毎月提出することが、銀行との信頼関係構築で最重要のポイントです。" },
                { id: "q403_3", type: "choice", question: "年商1億円以下の小規模企業に最も向いている銀行はどれですか？", options: ["都市銀行（メガバンク）", "地方銀行", "信用金庫", "外資系銀行"], answer: 2, explanation: "信用金庫は地域密着で親身な対応が特徴で、年商1億円以下の小規模企業に最も向いています。" }
            ]
        }
    ]
};
