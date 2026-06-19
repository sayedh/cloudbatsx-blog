---
title: "When the network gear had no Terraform path — so we made one"
excerpt: "For small teams who manage their network by clicking through dashboards by hand: how a team got off the manual treadmill and into a calm, repeatable way to change their infrastructure with confidence."
date: "2026-06-17T00:00:00.000Z"
author:
  name: "Sayed Haque"
  picture: "/assets/blog/authors/sayed.jpg"
focusArea: "Cisco"
status: "shipped"
---

A small team was running their network the way a lot of small teams do: one person, logged into a dashboard, clicking through screens to add a device, change a port, or fix a setting. It worked — until it didn't. Nobody could say for sure what the current setup actually was, changes made on a Friday were a mystery by Monday, and the person who knew the most was the person everyone had to wait on. The goal was never to "do infrastructure-as-code." The goal was to stop being nervous every time something needed to change.

The catch: the tooling teams normally reach for to make changes safe and repeatable didn't exist for this particular gear. So I built the missing piece — a Terraform provider for their UniFi network — so the team could describe their setup in plain, reviewable files instead of holding it in one person's head. It's shipped and in use — not just by this team, but by others who'd hit the same wall.

## What this post will cover

- The day-to-day pain of click-managing a network by hand, and why settings quietly drift out of sync
- Why the usual reach-for-it tooling didn't exist here — and the decision to build the missing piece
- What the team can do now: review changes before they happen, repeat them safely, and recover faster
- What it freed up for the people involved — less waiting on one person, fewer Friday-night surprises
- The honest trade-offs, and who this approach is and isn't a good fit for

*This one's still coming together — the full write-up, with the real before-and-after, is on the way. Check back soon.*

---

If your team is changing infrastructure by hand and it's making you nervous, that's a solvable problem. [Work with cloudbats](https://cloudbats.com/#contact).
