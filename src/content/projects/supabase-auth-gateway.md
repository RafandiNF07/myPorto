---
title: "Supabase Auth Gateway"
description: "A high-throughput routing layer with token-bucket rate limiting, built in Go to sit in front of a Supabase backend."
tags: ["Go", "Redis", "Supabase"]
githubLink: "#"
liveLink: "#"
pubDate: "2026-06-30"
featured: true
---

## Overview

Supabase Auth Gateway is a routing layer that sits in front of a Supabase
backend, written in Go. It shields the backend from traffic spikes by rate
limiting incoming requests with a **token-bucket** algorithm, using Redis to
hold the per-client counters.

## Architecture

```text
          Client
            │  HTTPS
            ▼
  ┌──────────────────────┐
  │  Auth Gateway (Go)    │
  │  • request routing    │
  │  • token-bucket    ───┼──▶  Redis
  │    rate limiting      │     (counters / TTL)
  └──────────────────────┘
            │
            ▼
   Supabase  (Postgres + Auth)
```

The gateway is the only public entry point. Every request passes the
rate-limit check before it is forwarded, so bursts are absorbed at the edge
instead of reaching the database.

## Stack

- **Go** — the gateway process and rate-limit logic
- **Redis** — token-bucket counters, expired with TTL
- **Supabase** — Postgres database and auth backend
