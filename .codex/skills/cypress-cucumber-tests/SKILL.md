---
name: cypress-cucumber-tests
description: Write or extend Cypress tests that use Cucumber/Gherkin feature files and JavaScript step definitions. Use for executable acceptance tests; not for plain Cypress specs without Cucumber.
---

# Cypress Cucumber Tests

Create readable, executable acceptance tests without turning feature files into a copy of implementation details.

## Start with the project convention

- Inspect the Cypress configuration, existing feature files, support imports, and step-definition layout before creating files.
- Follow the repository's installed Cucumber preprocessor and naming conventions; do not add a second test framework or duplicate configuration.
- Reuse an existing step only when its wording and behavior mean exactly the same thing. Avoid generic steps that conceal important business intent.

## Feature files

- Write scenarios in Given/When/Then language that describes user behavior and observable outcomes, not selectors, CSS classes, or implementation steps.
- Keep each scenario independent. Set up the needed state explicitly and do not rely on execution order.
- Use Scenario Outline and Examples only for genuine variations of the same rule. Keep examples small and meaningful.
- Cover the successful path, the most relevant failure or empty state, and a boundary case when the product behavior requires one.

## Step definitions

- Map each step to focused Cypress commands and assertions. Keep navigation, action, and verification distinct where it improves diagnosis.
- Prefer application-owned `data-testid` hooks. Otherwise use scoped semantic selectors, accessible names, or stable attributes.
- Assert a relevant visible, enabled, loaded, or navigated state rather than using fixed waits. Do not use `force: true` to bypass an interaction problem.
- Keep test data explicit and deterministic. For APIs, assert response status and only the response fields needed by the scenario.
- Avoid global mutable state. Use hooks only for repeated setup that does not hide scenario intent.

## Verification

- Run the narrowest affected feature or spec first, then the relevant browser or CI command when practical.
- If a third-party site blocks automated traffic, report it as an environment constraint; do not make a test pass by ignoring a 403 or removing its assertions.
- Report the feature file, step-definition files, coverage added, and commands run.
