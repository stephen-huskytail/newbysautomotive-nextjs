# Newby's Automotive — October 1 publication-delay incident

Status: **publication recovered; recurrence reliability remains unproven**.
Owner: Hermes executive control plane. Requested by Myla following the missed October 1 slot.
Timezone: `America/Los_Angeles`.

## Impact and verified outcome

The scheduled publisher began at 09:00 Pacific but did not publish during that run. The requester had to escalate repeatedly while internal routing and editorial acceptance were incomplete. This was an internal execution failure, not missing client approval.

Independent canonical checks succeeded at **2026-10-01 12:26:43 Pacific**. This is the recorded verification time, not a claim about the exact second the deployment first became public. The article was verified during Newby's posted weekday business hours.

- Article: [What Does a Car A/C Recharge Cost in Henderson?](https://www.newbysautomotive.com/car-care-tips/car-ac-recharge-cost)
- Production source commit: `0d2ff070cfc17ceccf37b49cf3a7b8291c201e88`.
- Production deployment: `dpl_9yLBR2xZ749QoUBs3UL6usXtc9qv`; provider inspection reported `READY` and the canonical custom-domain aliases.
- Article, clean Car Care Tips archive, complete raw sitemap, featured WebP, and six editorial link destinations returned HTTP 200. The exact article URL was present in the parsed sitemap, and its slug was present in the clean archive.
- Independent browser inspection confirmed the requested title, description and canonical, one H1, BlogPosting/BreadcrumbList/FAQPage data, and the mapped illustration.
- Desktop geometry: actual viewport 1440, document client width 1425 and scroll width 1425. Mobile: actual viewport 390, client and scroll widths 390; featured image decoded successfully.
- A mobile screenshot was inspected. Subsequent attempts to save persistent screenshots hit a browser-harness timeout. Do not represent that partial screenshot evidence as a complete independently archived desktop/mobile screenshot package.

## Root cause

The scheduled execution and the authorized specialist messaging path did not match. A fresh cron session could not invoke the canonical Bot Chat-only `message_agent` handoff. Direct fallback attempts encountered `SESSION_NOT_OWNED` because the shared canonical sender was owned by another assignment.

Native scheduler delivery correctly preserved queued requests, but **durable admission was not work execution**. Canonical CLI owners without live-mailbox consumption serialized other assignments ahead of the recovery. Completed specialist artifacts also failed to return promptly because the executive Bot Chat was busy. The control plane did not retrieve and advance those artifacts quickly enough.

## Contributing failures

1. **Preparation was not finished before publication time.** Drafting, image work and several editorial correction rounds occurred after the due slot instead of being accepted before release.
2. **Repeated recovery coordination displaced execution.** Additional senders, wait attempts and continuation packets did not publish anything. A redundant never-started packet was ultimately suppressed, while the authoritative recovery identity was preserved.
3. **Acceptance defects were discovered incrementally.** Packages contained unrelated-client dedupe wording, public date placeholders, unsupported review attribution, repeated citation/contact anchors, location-specific synthetic-image alt wording, a wrong alt character count, and unsupported technical/marketing absolutes. Actual artifact review, not passing checklists, identified the discrepancies. The original image and topic were retained through corrections.
4. **Return-message transport became a critical-path dependency.** Finished Scribe files existed while callbacks returned `target_busy`. The executive needed to read those exact task-specific files and hashes rather than wait for another summary or redraft.
5. **Green outer status was misleading.** Cron `ok`, script exit 0, queued receipts and delivery settlement did not independently prove editorial acceptance, publisher execution, deployment or live publication.
6. **A recovery helper used an incomplete import path.** It failed with `ModuleNotFoundError: No module named 'hermes_yaml'` before transport admission. Explicitly adding the installed Hermes source root fixed the import, and the same-runtime preflight passed. This was a secondary helper error, not a content or image-credential failure. A later audit helper also lacked `bs4`; verification used a standard-library alternative rather than making an unnecessary installation a release dependency.
7. **Requester updates described coordination too often.** Repeated explanations and queue updates were not delivered milestones. The requester should not have had to repeatedly restate publication authority or urgency.

## What actually recovered the publication

- Retained the exact original slot/topic and existing mapped image; did not rerun the ordinary publisher or create a second post.
- Used the native deduplicated canonical-chat adapter without stealing active ownership or weakening authentication.
- Reconciled real specialist artifacts despite callback failures, consolidated the remaining concrete corrections, and independently accepted the immutable v4 package.
- Issued an explicit bounded production-release packet to the sole BlogPublisher. It committed and pushed the canonical source, and the production deployment became Ready.
- Independently checked the custom-domain article, archive, raw sitemap, metadata/schema, media, editorial links and viewport geometry before notifying Myla.

## Prevention and recovery obligations

The revised [publishing SOP](../PUBLISHING-SOP.md) now requires preparation before preflight, one consolidated editorial review, verified executable handoff, bounded queue escalation, artifact-based continuation, an explicit sole publishing owner, business-hours limits, and canonical proof before completion claims.

Documentation is not installed automation. The following remain acceptance obligations for the control-plane owner:

- Prove the preparation stage completes before the next 08:30 readiness check; do not assume the three existing jobs create prepared artifacts in that order.
- Prove queue admission reaches a visible specialist assignment and a terminal task-specific result without holding the sender for unrelated worker lifetimes.
- Test silent deduplication, missing package, busy sender/recipient, failed callback with valid artifacts, uncertain transport, and business-hours cutoff paths.
- Confirm the next ordinary October 15 run produces the same end-to-end public evidence. October 1 recovery is not proof of a healthy ordinary cadence.

## Evidence index (privacy-safe)

- Original publisher: `7ad086aeb2c7`; readiness: `b1c56adfabb7`; public proof: `6a53cadf7947`.
- Preserved recovery key: `NEWBYS-20261001-RECOVERY`.
- Accepted v4 article SHA-256: `1b59b584906561f84be2f41def408ffa68b361cd215a440d04dc332dceb7f81d`.
- Accepted v4 manifest SHA-256: `49c37dc118ef576addac1b6979a479e57e78f09e0a58209c3dfc3ce716c92fc1`.
- Original JPEG SHA-256: `cb233d622e1c0ab10d2697a22a08f4a769e9d2b902dcc46db07b2465b2530343`.

This record contains no credentials, raw provider/CRM payloads, direct contact details or customer submissions. Operational trace files remain internal; the article above is the client-visible result.
