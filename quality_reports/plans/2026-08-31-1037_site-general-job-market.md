# tianawangty.github.io — 面向 general job market 的改版

**Repo:** `tianawangty.github.io`
**Date:** 2026-08-31 10:37
**Status:** APPROVED — EXECUTED, with the deviations recorded below

---

## Context

上一轮会话把站点从三份手抄 HTML 改成 Jekyll 模板，并重写了首页与 research 页，但**从未提交**（仓库只有一个 commit `1658d81`）。Tiana 起初想全部回退，逐项审阅后决定在现有改动上继续修正。

三个驱动因素：

1. **架构**：三份独立 HTML 的重复已造成实际 bug（邮箱 `href="#"` 失效、`<a>` 未闭合、`<<!-- Menu -->` 拼错）。
2. **定位**：站点服务 **general job market**——业界 data scientist、econ consulting、国际组织 economist、学术，四类读者。现稿是纯学术腔。
3. **内容准确性**：核对 `Career/GradHat/private/materials.md`（E07/E08）与 `~/Projects/PriceEffectOfAgLabor/SteeringShift.md` 后发现 research 页两处实质错误——E08 超出实际进度，E07 反映的是**已被推翻的旧设计**。

**语言基调（Tiana 指定）**：简洁明了、通俗易懂、专业而不失谦逊。

---

## 1. 架构

**改 `_config.yml`、新增 `Gemfile`：**

- 保留 `_layouts/default.html`、`_includes/nav.html`、`_includes/sidebar.html` 与三页的 front matter 写法，不动
- **新增 `Gemfile`**，锁 `github-pages` gem——让本地构建与 GitHub Pages 实际运行的 Jekyll 3.10.x 对齐。现在本地依赖全局装的 Jekyll 4.4.1，版本不一致且换机器不可复现。提交 `Gemfile.lock`，`.gitignore` 补 `vendor/`
- `_config.yml` 的 `exclude` 补 `elements.html`、`generic.html`、`Gemfile`、`Gemfile.lock`、`vendor`
  - 前两个是 HTML5 UP 原始 demo，既未转模板也未 exclude，**当前会随站点发布上线**。只从构建产物排除，**不删文件**

## 2. 首页 `index.html`

**副标题**：`Economic Research and Big Data Enthusiast` → `Applied economist · Evidence at scale`

**section 标题**：`Research Areas` → `Focus Areas`（不再暗示只有学术产出）

**两张卡片**：

| 卡片 | 标题 | 子条目 |
|---|---|---|
| 1 | Food Prices and Policy | Cost Pass-Through · Supply-Chain Evidence |
| 2 | Data Enthusiast | Terabyte-Scale Pipelines · Machine Learning and Text as Data |

图标从已加载的 FontAwesome / Academicons 集里选，不引新依赖。

**bio 三段重写**——本轮定位改动的主要落点。现稿以 `I am a Ph.D. candidate…` 开头，业界与国际组织读者第一眼看到的是学位而非能力。

- **段 1 — 先说做什么，再说身份。** 开头讲她做的事：用大规模微观数据（数以亿计的交易记录、行政数据）回答价格与政策问题。之后才交代 UGA 农业与应用经济学博士候选人 + 统计学硕士在读
- **段 2 — 方法路径，讲人话。** 保留现稿"自下而上、总量是许多地方市场的平均、平均会抹掉识别所需的变异"这个内核（它本身已经通俗），把学术措辞降一档，并让因果推断以可读方式出现一次，供 consulting 与业界读者识别
- **段 3 — 履历。** IMF 三年（南部非洲国家组 + 危机预警、气候政策评估等独立项目）、JHU Government Analytics 硕士、HKBU 应用经济学学士。这段已服务国际组织读者，基本保留，只调与前两段的衔接

## 3. `research.html`

### E07 · JMP —— 按**新设计**重写，不写任何结果

依据 `SteeringShift.md`（2026-08-26），非 `README.md`（8-20，已过期）。

**写：**

- 标题改为 *The Food-Price Effect of Agricultural Minimum Wage*（原 *H-2A Wage Mandates*）
- 署名：Tianyuan Wang、Michael Adjemian、Genti Kostandini
- **三段供应链框架**——新设计的核心，也比旧稿好讲：一项农业工资地板如何沿供应链一步步走到货架
  - 上游 农业劳动市场（QCEW 县×月农业就业与工资）
  - 中游 农场出场价（NASS 州×商品×月）与进口替代（Census 分 HS 码进口）
  - 下游 零售价格（Nielsen 县×品类×月）
- 识别：LP-DiD 连续处理强度；剂量内核为 2002 年农业普查移民工用工发生率 × 州级 premium 冲击
- 政策相关性：为 **2025 年 AEWR 设定方法改革**（DOL IFR，90 FR 47914）提供改革前基准
- 状态：Prospectus 2026-04-24 通过；AAEA 2026（Kansas City）报告

**不写：**

- ❌ 超额转嫁、只在生效日响应——两条均出自**旧的县级设计**，而该设计正因 AAEA 反馈指出的**地理错配**（AEWR 冲击发生地 ≠ 零售价变化地）在被替换。新设计下游改用品类级 dose，识别变异来源完全不同。公开发布等于对一份正在重做的设计的读数作出对外承诺
- ❌ `the reverse of what the minimum-wage literature finds`——materials 与项目文件均无依据，属解释性主张
- ❌ `Draft available on request`——materials 明文"不写已完成或已投稿"。改为会议报告记录
- ❌ 任何系数、弹性、传导倍数

**⚠ 正文措辞留待 `/grill-me` 会话逐句确认。本轮只落一版符合上述口径的草稿，不算定稿。**

### E08 · 食品通胀分解 —— 只写研究问题与数据

**写：**

- 问题：把美国食品价格通胀拆成供给驱动与需求驱动，做到县一级——全国一个数字掩盖了各地不同的成因
- 数据：Circana 零售扫描数据，3,000+ 县
- 合著：Michael Adjemian（UGA）、Qingxiao Li（LSU）；NIFA 资助
- 报告：SAEA 2026（Louisville）

**不写：**

- ❌ 方法（符号约束 / VAR / Shapiro 分解）
- ❌ 任何分解结果——materials 2026-08-17：实现已建成、模拟数据验证通过、全国 PCE 复制完成，但**真实县级数据尚未跑出结果**（仅 3 个测试县）
- ❌ `We build county-by-month price and quantity series`——县级 GEKS 价格指数的构建是合著者的工作，materials 明文"永不写 constructing county-level price indices"

### Publications

保留现状（IMF 书章节一条），位置维持在 Working Papers 之后。

## 4. 明确不做

- **不提交、不推送**
- **不新增任何页面**
- **HPC / 管线工程（8 TB、SLURM、Parquet、断点续跑）本轮跳过**——素材已从 materials 备齐，怎么展示另开一轮讨论
- 不删除 `quality_reports/`、`SESSION_REPORT.md`（已 exclude，不会发布）
- 不动 `cv.html` 正文（仍是 "Coming Soon" + 下载链接）
- 不动 `pdf/Resume_TW.pdf`
- 不删除任何现有文件

## 5. 待办与依赖

1. **`~/.claude/rules/` 整个目录读不到**（`Operation not permitted`）。`job-search-privacy.md` 与 `plan-first-workflow.md` 均无法读取。本轮不再写 HPC 内容，公开页涉及私密求职材料的风险已大幅下降，但 bio 重写仍触及自我定位表述——如该规则有相关红线，请贴出
2. **计划归档**：hook 要求存到 `quality_reports/plans/`。退出 plan mode 后按仓库既有命名 `YYYY-MM-DD-HHMM_slug.md` 写入
3. 卡片二的 `Machine Learning and Text as Data` 依据在 materials E04/E05，本轮未细读——该条目是你自述的领域，措辞已经你确认，不阻塞

## 6. 验证

1. `bundle exec jekyll build` 无 warning；`bundle exec jekyll serve` 后 index / research / cv 三页均返回 200
2. 三页都渲染出完整 header + sidebar + footer
3. `_site/` 内不含 `quality_reports/`、`SESSION_REPORT.md`、`elements.html`、`generic.html`
4. research 页逐句对照 materials.md 的"诚实边界"清单；确认不含任何系数、弹性或结果性表述，不含"构建县级价格指数"的认领
5. `grep -riE "cloud|AWS|GCP|Azure|API development|Data Engineer|Globus" _site/` 零命中
6. 375px 窄屏下 sidebar 折叠正常，两张卡片不溢出

---

## 执行中的偏离（2026-08-31 12:39 补记）

计划是快照，实际执行中有六处偏离，均经用户当场确认。完整经过见
`quality_reports/session_logs/2026-08-31-1037_site-general-job-market.md`。

| 计划写的 | 实际做的 | 原因 |
|---|---|---|
| `Gemfile` 锁 `github-pages` | 锁 `jekyll ~> 4.4` | `github-pages` 解析到 Jekyll 3.9，在 Ruby 4.0.6 上加载失败（`csv` 自 Ruby 3.4 起不再是默认 gem）。构建实测报错 |
| 不新增页面 | 仍未新增页面，但首页加了 "Working at Scale" section | 卡片二承诺 Terabyte-Scale Pipelines，站上无任何内容兑现 |
| 不动 `cv.html` | 重写并改名 `resume.html` | 用户后续指示；原页是无人链接的 "Coming Soon" 占位页 |
| 保持 `index.html` | 改名 `home.html`，`permalink: /home.html`，根地址由插件生成跳转 | 用户指定网址为 `/home.html` 且源码不留 `index.html` |
| HPC 部分本轮跳过 | 本轮已做 | 用户后续改为要求处理 |
| E04/E05 未读 | 已读并核实卡片二 | 拷问 JMP 正文需要底料 |

## 已知偏差与未竟事项

- **JMP 正文有三处系我写错**，已按 `SteeringShift.md` 与 causal-chain handoff §2 更正：下游识别是品类级而非县级、估计窗口受剂量限制止于 2022、QCEW 工资总额为季度而非月度。
- **卡片二的 "Text as Data" 依据在 E05 支柱 IV 与 E12，不在 E04**——E04 的十个情感指数是预计算送达的，仓库无任何 NLP 库。文案按用户指示未改，此处备案以免面试时答错方向。
- JMP 正文仍为草稿，措辞待定。
- `~/.claude/rules/` 与 `~/.claude/skills/` 全程不可读（`Operation not permitted`），`job-search-privacy.md`、`plan-first-workflow.md` 未能查阅，22 个自定义 skill 未加载。
