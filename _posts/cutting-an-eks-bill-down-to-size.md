---
title: "Cutting an EKS bill back down to something sensible"
excerpt: "For the team that just got handed a scary cloud bill and a quiet 'please make this smaller — without breaking anything,' this will be an honest walkthrough of how to do exactly that."
date: "2026-06-14T00:00:00.000Z"
author:
  name: "Sayed Haque"
  picture: "/assets/blog/authors/sayed.jpg"
focusArea: "AWS"
status: "exploring"
---

There's a particular kind of quiet stress that comes with opening the cloud bill and seeing a number nobody expected. Usually someone gets pulled aside and asked to "look into it" — to make it smaller, soon, and without taking anything down. That person didn't build the whole system, doesn't have weeks to spare, and really just wants to keep the team running and get the worry off everyone's plate.

This post is for them. It's a plain, honest account of taking one EKS bill from sticker-shock to sensible — what was actually driving the cost, what we changed, and what the bill looked like before and after. No heroics, no magic. Just the steady work of finding the waste and trimming it carefully.

## What this will cover

- The first calm look: where the money was really going, and how to find that out without guessing
- The safe wins first — the changes that lower cost with almost no risk to what's running
- The judgment calls — right-sizing and scaling decisions, and how we decided what was safe to touch
- Real numbers: the before and after, including the parts that were harder to move than expected
- How to keep the bill honest over time, so it doesn't quietly creep back up

*This one is still coming together — I'm working through the real figures so the before/after is accurate rather than impressive. More soon.*
