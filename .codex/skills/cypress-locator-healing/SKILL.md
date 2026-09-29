---
name: cypress-locator-healing
description: Diagnose and safely repair broken Cypress selectors after a UI or locator change. Use for flaky or failing Cypress UI tests; do not use for unrelated test failures.
---

# Cypress Locator Healing

Repair locator breakage without broadening the test's intent or hiding a real product defect.

## Diagnose before editing

- Read the failing test, its feature/spec, relevant support code, and the full failure output.
- Distinguish selector failure from application failure, authentication, browser-launch, network, test-data, or configuration failure.
- Inspect the current rendered UI or trusted DOM evidence before proposing a new locator. Do not guess selectors from an older page structure.
- Identify whether the interaction targets a specific entity, an ordered list item, or a semantic control. Preserve that requirement in the repaired test.

## Prefer resilient locators

Choose selectors in this order when the UI supports them:

1. Application-owned `data-testid` or equivalent test hooks.
2. Semantic queries scoped to a relevant container, with visible labels or accessible names.
3. Stable semantic attributes such as a named input or a meaningful `aria-*` value.
4. Text only when the copy is deliberately stable and the query is narrowly scoped.

Avoid broad class selectors, global `.contains()`, arbitrary `.eq()` calls, fixed waits, and forced clicks unless the test explicitly verifies an ordered result and the reason is documented. Replace a time wait with an assertion for the expected loading, visibility, enabled, or navigation state.

## Make the smallest safe repair

- Change only the locator, its scope, and directly related assertions unless the evidence identifies another cause.
- Add an assertion that proves the selected element is the intended target before or after interaction.
- Keep browser coverage and existing test scenario language intact.
- Do not silently skip, quarantine, or mark a failing test pending merely to make CI green.

## Verify and report

- Run the narrowest affected test first, then the relevant browser commands when practical.
- If a third-party site is volatile, state that explicitly and preserve screenshots/videos on failure.
- Summarize the old failure, the locator strategy selected, files changed, and what was verified.
- Stop for user direction before publishing or retrying a live workflow when that action is outside the requested scope.
