# cloudbatsX — content plan

*The writing queue: meticulous, market-researched placeholder posts. Built 2026-06-18 from current
(2025-2026) demand research cross-referenced with the AI-demand data in Sayed's job search and his
real, claimable expertise. Edit freely — pick one, research it, and to start writing copy
`_posts/_TEMPLATE.md` to `_posts/<slug>.md`. Status tags are honesty-first: only `shipped` means it
exists today.*

---

This blog does double duty: it proves what Sayed can already do (verifiable senior network/DevOps/cloud work) while documenting an honest pivot into AI engineering. Every post leads with the human outcome — who had the problem, what got built, what it let them do — and treats the stack as evidence, not the headline. The five AI-reinvention builds are the spine: each ships as a flagship writeup framed honestly as "building." Around that spine sits an evergreen base written from real, claimable strength (AWS, Terraform/networking, Splunk, Oracle) that earns search traffic and passes a technical screen, plus a market-frontier layer (AI security, AI cost/FinOps, the "cloud engineer learning AI" narrative) tied to what June-2026 job postings are actually paying for. Honesty governs every claim: shipped work is claimed, in-progress work is "building," and nothing production-LLM is asserted until it's public.

---

## 1. Flagship — the AI-reinvention build writeups

- **Giving an on-call engineer a plain-English read on any AWS account in 30 seconds**
  - *Focus area:* AI-agentic
  - *For:* solo operators and small platform teams who inherit an unfamiliar AWS account and need to understand it fast
  - *Why now:* "AI-tool fluency" is the one market category claimable today; a Claude-API CLI over real cloud data is the cleanest proof that you can wire an LLM to a production system, not just chat with it
  - *Covers:* the problem (auditing an unknown account by hand is slow and error-prone) -> design of a Claude-API CLI that pulls live AWS state and summarizes risk/cost/posture -> the actual tool-call loop and prompt structure, with code -> example output on a real account -> honest limits and what's next
  - *Proves:* AWS depth + Python + Claude API tool-use orchestration (AI-tool fluency, claimable now)
  - *Status:* building
  - *Effort:* M

- **Letting the blog answer questions about itself: retrieval over my own writing**
  - *Focus area:* AI-agentic
  - *For:* engineers who want a working RAG pattern grounded in a small, real corpus rather than a toy demo
  - *Why now:* RAG retrieval quality on pgvector is a named in-demand topic; building it over your own content is honest, self-contained, and shows the full ingestion-to-answer path
  - *Covers:* the problem (search alone misses intent across a growing blog) -> chunking + embeddings + pgvector schema -> the retrieval/answer pipeline with code -> what good vs bad retrieval actually looked like -> why an eval harness (next post) became necessary
  - *Proves:* RAG, embeddings, Postgres/pgvector, retrieval design (LLM app building — the frontier category)
  - *Status:* building
  - *Effort:* M

- **Letting a teammate explore Terraform state in plain language, safely**
  - *Focus area:* AI-agentic
  - *For:* platform engineers who want an AI assistant to reason over infrastructure state without handing it write access
  - *Why now:* MCP servers are a top-named 2025-2026 AI-engineering topic, and an MCP server over Terraform state is a rare flex that fuses claimable IaC depth with the new protocol
  - *Covers:* the problem (state is the source of truth but opaque and dangerous to expose) -> MCP server design: read-only tools over state, scoping, guardrails -> the server implementation with code -> a walkthrough query session -> security boundaries and what it deliberately can't do
  - *Proves:* Terraform/IaC mastery + MCP server authoring + safe tool design (LLM app building + AI security)
  - *Status:* building
  - *Effort:* L

- **Trusting AI output enough to ship it: an evals harness with a golden dataset**
  - *Focus area:* AI-agentic
  - *For:* anyone moving an LLM feature from "looks good in the demo" to "safe to merge"
  - *Why now:* evals-as-CI is the single highest-signal AI-engineering skill for an infra pivoter — it reframes LLM quality as a testing/CI problem, exactly the discipline a DevOps background already owns
  - *Covers:* the problem (no way to know a prompt/RAG change made things better or worse) -> building a golden dataset from real RAG questions -> the eval harness, metrics, and CI gating with code -> a real regression the harness caught -> how this turns prompt changes into reviewable PRs
  - *Proves:* evals, retrieval-quality measurement, CI gating, test discipline applied to AI (the top hireable AI-ops skill)
  - *Status:* building
  - *Effort:* M

- **Putting an AI service into production without a surprise bill: deploy, cost, and latency in one view**
  - *Focus area:* AI-agentic
  - *For:* teams taking a first LLM service to production who need to defend its cost and reliability to leadership
  - *Why now:* AI cost/FinOps and AI infrastructure are both paying market categories; closing the loop from build to a monitored, budgeted production deploy proves you connect every layer, not one tool in isolation
  - *Covers:* the problem (a working prototype with no cost ceiling or latency visibility) -> AWS deploy architecture for the RAG/agent service -> token-cost + latency dashboards and budget alerts, with config -> before/after numbers -> what the dashboards changed about how it's run
  - *Proves:* AWS production deploy + observability + token-FinOps over the full lifecycle (AI infrastructure + AI cost)
  - *Status:* building
  - *Effort:* L

---

## 2. Areas-of-focus evergreen (claimable now — the SEO + credibility base)

- **Cutting an EKS bill from sticker shock to sensible, with the actual diffs**
  - *Focus area:* AWS
  - *For:* engineers handed an over-provisioned EKS cluster and a mandate to cut spend
  - *Why now:* AWS/EKS cost optimization with real before/after numbers is the single richest source of "case-study with dollar figures" traffic and a top hiring-screen differentiator
  - *Covers:* the problem (a cluster bleeding money on idle and on-demand capacity) -> rightsizing + Karpenter + Spot + Savings Plans approach -> the real config changes and manifests -> before/after dollar figures and % saved -> the trade-offs and what broke
  - *Proves:* AWS (Solutions Architect Pro), Kubernetes day-2 ops, FinOps as engineering
  - *Status:* exploring
  - *Effort:* M

- **Managing the gear nobody had a Terraform provider for — so I wrote one**
  - *Focus area:* Cisco
  - *For:* engineers stuck click-managing an appliance or internal API with no IaC path
  - *Why now:* a from-scratch custom Terraform provider is a rare, senior-signal topic with high search intent and almost no honest competition — and Sayed already publishes and maintains one
  - *Covers:* the problem (config drift on a device with no provider) -> Plugin Framework + Go + CRUD against the API -> provider code and a real resource -> publishing to the registry -> lessons from maintaining a downloaded provider in the wild
  - *Proves:* Terraform internals, Go, published provider (cloudbatsx/unifi, 5,000+ downloads) — the senior IaC flex
  - *Status:* shipped
  - *Effort:* M

- **Keeping a multi-vendor network honest: drift detection that actually self-reports**
  - *Focus area:* Cisco
  - *For:* network engineers moving from push-config scripts to intent-based automation across mixed vendors
  - *Why now:* network automation's shift from push-config to intent-based (Ansible vs Nornir/Python-at-scale, source-of-truth + drift detection) is a named in-demand topic and a direct fit for Meta-scale routing experience
  - *Covers:* the problem (silent config drift across Cisco/Juniper/UniFi) -> source-of-truth + validation loop design -> Nornir/Python (vs Ansible) with playbook/code -> detecting and reporting drift -> what intent-based bought over push-config
  - *Proves:* multi-vendor networking (Cisco/Juniper/UniFi, BGP/OSPF at scale), Python automation
  - *Status:* exploring
  - *Effort:* M

- **Turning alert fatigue into signal: an OpenTelemetry-to-Splunk migration**
  - *Focus area:* Splunk
  - *For:* teams drowning in false alerts and tool sprawl who are adopting OpenTelemetry
  - *Why now:* OTel is now the industry standard and migrating to it (taming the 59% tool-sprawl and 52% false-alert pains) is a high-intent search and a strong Splunk Core Power User play
  - *Covers:* the problem (noisy dashboards, alert fatigue, fragmented tooling) -> OTel instrumentation feeding Splunk -> the pipeline config and a real dashboard -> alert tuning that cut the noise -> tying telemetry to an outcome people care about
  - *Proves:* Splunk (Core Power User), OpenTelemetry, observability engineering
  - *Status:* exploring
  - *Effort:* M

- **Picking generative-AI infrastructure on Oracle Cloud without the hype**
  - *Focus area:* Oracle
  - *For:* practitioners evaluating OCI Generative AI against the obvious cloud defaults
  - *Why now:* honest, hands-on comparisons grounded in real testing rank and pass screens; OCI Generative AI is under-covered and Sayed holds the Professional + AI Foundations certs to write it credibly
  - *Covers:* the problem (choosing a GenAI platform when everyone defaults to one vendor) -> what OCI Generative AI actually offers -> a small hands-on build with config -> honest trade-offs vs alternatives -> who it genuinely fits
  - *Proves:* Oracle Cloud Generative AI (Professional + AI Foundations Associate), platform evaluation judgment
  - *Status:* exploring
  - *Effort:* S

- **Onboarding people in minutes, not days: automating identity with Microsoft Graph**
  - *Focus area:* General IT
  - *For:* small-team admins doing joiner/mover/leaver work by hand in Azure AD
  - *Why now:* practical, working-code automation of a universal IT chore ranks well and proves the unglamorous reliability that hiring managers screen for
  - *Covers:* the problem (manual, error-prone account lifecycle) -> Microsoft Graph + Azure AD automation design -> the script and least-privilege auth, with code -> what got faster and safer -> guardrails against the obvious foot-guns
  - *Proves:* Microsoft Graph + Azure AD automation, Python/PowerShell, identity hygiene
  - *Status:* exploring
  - *Effort:* S

---

## 3. Market-frontier & perspective

- **Rolling out Claude to a whole company without leaking secrets: guardrails as code**
  - *Focus area:* AI-agentic
  - *For:* platform/security teams enabling enterprise AI while staying compliant
  - *Why now:* AI security & governance (guardrails, policy-as-code, PII handling) is a named paying market category and squarely an infra-engineer's home turf
  - *Covers:* the problem (employees pasting sensitive data into AI tools) -> a guardrail architecture: policy-as-code, PII handling, prompt-injection defense -> OPA-style policy + gateway config, with examples -> what the policies actually blocked -> the governance trade-offs
  - *Proves:* AI security & governance, policy-as-code, gateway/RBAC design (enterprise AI rollout)
  - *Status:* exploring
  - *Effort:* M

- **Knowing your AI spend before finance does: token budgeting as an engineering discipline**
  - *Focus area:* AI-agentic
  - *For:* engineers and leads who own an LLM feature's budget and have to forecast it
  - *Why now:* 98% of FinOps practitioners now manage AI spend — token/spend modeling is an emerging, well-paid category and a natural extension of cloud FinOps
  - *Covers:* the problem (unpredictable token costs with no unit economics) -> a model for per-request and per-feature cost attribution -> instrumentation + anomaly alerting, with code -> a real spend breakdown -> the budgeting decisions it enabled
  - *Proves:* AI cost/FinOps, cost attribution, unit economics applied to LLMs
  - *Status:* exploring
  - *Effort:* S

- **What a network engineer actually learns when he pivots into AI**
  - *Focus area:* General IT
  - *For:* mid/senior infra engineers weighing the same pivot, and hiring managers assessing whether infra skills transfer
  - *Why now:* AI-engineering in 2025-2026 rewards operational skill (evals, gateways, governance, cost) over modeling — the honest career-pivot narrative is both shareable and a real recruiting signal
  - *Covers:* the starting point (7 years of network/DevOps) -> which infra instincts transferred cleanly (CI, observability, cost, guardrails) and which didn't -> the concrete build path taken -> what was harder than expected -> honest advice for the same move
  - *Proves:* self-aware seniority, the operational framing that makes infra-to-AI pivots hireable
  - *Status:* exploring
  - *Effort:* S

- **The day the tunnel went dark: a small-scale outage post-mortem**
  - *Focus area:* Cisco
  - *For:* anyone who runs their own infrastructure and wants a real reliability-reasoning example
  - *Why now:* the incident post-mortem is the format most likely to earn front-page traction and prove the core SRE competency — operating production systems and reasoning about failure
  - *Covers:* the timeline (a WireGuard site-to-site tunnel dropping on an IP rotation) -> blast radius and the detection gap -> root cause -> the durable fix (dynamic DNS + monitoring) -> what would change next time
  - *Proves:* networking + reliability/SRE reasoning, honest decision records, operational maturity
  - *Status:* shipped
  - *Effort:* S

---

## Suggested order

Write these four first:

1. **"Managing the gear nobody had a Terraform provider for"** — it's *shipped* and the rarest senior-signal piece you can publish today; it anchors the blog's credibility immediately with a real registry artifact.
2. **"Giving an on-call engineer a plain-English read on any AWS account"** (Build #1) — the first flagship, claimable as AI-tool fluency now, and it sets the "building" cadence the rest of the spine follows.
3. **"Cutting an EKS bill from sticker shock to sensible"** — the highest-traffic evergreen format (real dollar figures), proving AWS + Kubernetes + FinOps in one screen-passing case study.
4. **"What a network engineer actually learns when he pivots into AI"** — low effort, high shareability, and it frames the whole roadmap honestly so every later build post lands in context.

This sequence opens with undeniable proof (shipped provider), starts the AI spine, banks an SEO-heavy cost case study, and plants the narrative thread that ties the flagship builds together as they ship.
