---
slug: FAQ
title: FAQ
sidebar_position: 5
---

### Invest

<details id="separate-tracking-tabs">
  <summary>1. Can I create separate tracking tabs if I have two Brokerage accounts?</summary>

No. Vassant groups all accounts of the same subtype under a single unified tab (e.g., one "Brokerage" tab or one "Roth IRA" tab), even if they span different financial institutions.

</details>

<details id="next-purchase-price-missing">
  <summary>2. Why is my "Next Purchase Price" suddenly missing?</summary>

Once a position's current allocation fully meets your Position Model target, the next purchase price is nullified. To set a new target price, you must choose "Plan Another Purchase" and increase your allocation goal.

</details>

<details id="position-model-target">
  <summary>3. What is a "Position Model" target allocation?</summary>

The Position Model is your personalized percentage target for a specific stock or ETF within an investment account. It serves as a visual benchmark to help you track your actual portfolio weight against your long-term goal. You can modify this target at any time.

</details>

<details id="next-purchase-price">
  <summary>4. What is the "Next Purchase Price" and how is the price difference calculated?</summary>

The Next Purchase Price is a field where you can set your desired entry price for a stock or ETF. Once a target price is entered, Vassant automatically displays the percentage difference between the equity's current market price (from the latest data sync) and your intended purchase price.

**Note:** Paid users receive automatic notifications when a position hits their target price and gain access to automatic price drawdown calculations. Free users must manually check, input, and track these prices individually.

</details>

<details id="record-feature-free">
  <summary>5. How does the "Record" feature work in the free version of Vassant?</summary>

In Manual Mode, you track your investment progress by clicking the Record button within a unique investment card. Each time you make a purchase, you must enter your new total position value and your total portfolio value. The app then calculates a new % of Portfolio value to update your current investment plan and track your progress toward your target Position Model.

</details>

<details id="vault-save-template">
  <summary>6. In the Vault, what happens to my written data when I save a custom template?</summary>

Saving a custom template copies the structural layout (all pages, sections, checklist criteria, and titles) so you can standardize your research across other stocks. However, any descriptive text inside the body boxes is erased so you start with a clean slate. This allows users to standardize an investment philosophy and quickly apply it to various potential investments.

</details>

<details id="vault-limit-downgrade">
  <summary>7. What happens to my research Vaults if I hit the limit or downgrade from VassantPRO?</summary>

Free users can create a maximum of 6 unique research Vaults. If you try to create a new one beyond this limit, a VassantPRO upgrade popup will appear. Note that once you hit the 6-Vault limit, deleting existing content does not immediately free up space to add a new one.

If you upgrade to PRO, create more than 6 Vaults, and later downgrade back to the Free Plan, you will not lose any data. Your workspace simply enters a "Read and Edit" state where creation limits are re-enforced.

All Vaults you created while on the paid plan remain fully accessible and visible, and you can still edit, organize, and update them even if you are over the limit; you just cannot create any new ones.

</details>

<details id="record-and-plaid">
  <summary>8. Can I use the manual "Record" feature and Plaid automatic updates at the same time?</summary>

Yes, you can combine both modes. Even after syncing an account via Plaid, you can still add manual cash inflow contributions to those synced positions. This is particularly helpful if you own the exact same asset in another un-synced account or an institution not supported by Vassant.

</details>

<details id="data-migrate-plaid">
  <summary>9. How does my investment data migrate when I connect my accounts via Plaid?</summary>

When you sync an account, Vassant automatically pulls your positions, position sizes, purchase history, and total account values.

- **Matched Positions:** Any existing manual recordings that match positions found via the Plaid connection are automatically updated and overridden to reflect your actual current portfolio percentages.
- **Unmatched Positions:** Any positions not found via the synced connection remain entirely unaffected and stay in Manual Mode.
</details>

### Budget

<details id="investable-cash-flow">
  <summary>1. Why do I need to make a budget before my Financial Framework?</summary>

Vassant has constructed an end-to-end workflow which creates an "Investable Cash Flow" value (generated from the *output* of "Budget") and uses this value as the *input* for your Financial Framework.

</details>

<details id="investable-cash-flow">
  <summary>2. What exactly is "Investable Cash Flow"?</summary>

It is the remaining monthly dollar value from your take-home pay after all your listed expenses are subtracted. This is the exact amount available for you to deploy in your Financial Framework (within the "Allocations" subtab in "Model").

</details>

<details id="expense-category-missing">
  <summary>3. Where did my expense category go? It is missing from the main breakdown.</summary>

If an expense category makes up less than 1% of your total take-home pay, the app automatically clusters it into the Other category. Tap the ellipsis (...) next to "Other" to view the hidden details.

</details>

### Financial Framework & Allocations

<details id="framework-duration">
  <summary>1. How long does a Financial Framework model last?</summary>

By default, the framework models a full calendar year (January 1st – December 31st) and repeats infinitely until you manually change or cancel it. Using a calendar-year framework ensures your accounts stay synchronized with annual IRS adjustments.

</details>

<details id="framework-mid-year">
  <summary>2. What happens if I build my Financial Framework in the middle of the year?</summary>

The platform implements your plan for the remaining months of the current calendar year (e.g., April through December). It will automatically refresh to a full calendar year when the next year begins.

</details>

<details id="framework-skipped-allocations">
  <summary>3. In the Financial Framework, why did the setup wizard suddenly skip the rest of my planned allocations?</summary>

If you fully deplete your "Investable Cash Flow" before completing the questionnaire, the platform triggers a warning. Proceeding skips any remaining unallocated accounts and takes you straight to your final overview.

</details>

<details id="take-home-pay-lower">
  <summary>4. Why is my actual take-home pay lower than what the platform suggests for the Financial Framework?</summary>

For simplicity, Vassant calculates all allocations using post-tax dollars. If you allocate funds to pre-tax accounts like a Traditional 401(k) or HSA, your real-world take-home pay will be impacted differently than estimated in Vassant. You must estimate this tax discrepancy on your own.

</details>

<details id="estimated-contributions-graph">
  <summary>5. On the Allocations dashboard, how are estimated future contributions calculated in the visual graph?</summary>

The chart estimates future progress by dividing your total planned yearly investment allocation by 12. Future month bars automatically increment by this static monthly average, even if you make extra manual contributions.

</details>

<details id="extra-contributions-progress">
  <summary>6. On the Allocations dashboard, why aren't my "Extra Contributions" speeding up my total plan progress?</summary>

The overall plan progress bar tracks completion toward your planned yearly goals. Excess capital added on top of a goal is recorded separately as "Extra Contributions" on individual cards so it doesn't skew your primary baseline target.

</details>

### Discover

<details id="mastery-points">
  <summary>1. How exactly are Mastery Points calculated on quizzes?</summary>

Mastery points measure your track comprehension, and they can never drop below zero:

- 3/3 correct: +3 Mastery Points (Marks the track as "Complete")
- 2/3 correct: +1 Mastery Point (Marks the track as "Complete").
- 1/3 or 0/3 correct: 0 Mastery Points.

**Note:** Retaking a quiz and scoring lower will never lose you points; the app always saves your best score.

</details>

<details id="unlock-spotlights">
  <summary>2. How do I unlock locked "Spotlight" profiles without upgrading?</summary>

Free users start with 2 unlocked Spotlights. You can unlock 3 more by earning Mastery Points through Knowledge Base quizzes: the milestones unlock at 12, 24, and 36 total Mastery Points. The rest require VassantPRO.

</details>

### Upgrading/Downgrading

<details id="interactive-brokers">
  <summary>1. How do I connect an Interactive Brokers brokerage account to Vassant?</summary>

1. Go to your Interactive Brokers dashboard on the web interface, and log in
2. Go to "Performance and Reports" and click on "Third-Party Reports"
3. Click the Gear Icon next to "Third-Party Services" and find the "Plaid" option, and save your selection
4. Note the 24 digit token and the Query ID, both of which will be used in the Vassant connection process
5. Go to Vassant and open the Plaid connection tool by going to "Account information" in Vassant and pressing the "Connect institution" button at the bottom of the screen.
6. Search for the "Interactive Brokers - US" institution, and follow the prompts. Enter the 24 digit token and Query ID when asked.

</details>

### Data Retention & Privacy

<details id="store-credentials">
  <summary>1. Does Vassant see or store my bank login credentials or credit card numbers?</summary>

No. Vassant prioritizes data minimization and never handles your raw security credentials:

- **Bank Logins:** Bank credentials are processed securely by Plaid. Vassant does not store your bank credentials beyond what is technically required to establish the initial connection.
- **Credit Cards:** Credit card information is sent directly to Stripe. Vassant cannot access or store your full credit card number or CVV; the app only retains a secure "token" and limited billing metadata (like the last four digits and expiration date) to track your subscription.
</details>

<details id="disconnect-delete-data">
  <summary>2. What happens to my financial data if I disconnect an account or delete my Vassant profile?</summary>

Your data is securely and permanently scrubbed from the platform:

- **Production Databases:** Upon receiving a verified deletion request, your data is permanently deleted from the production database within 30 days.
- **Backup Snapshot Expire:** Any residual data remaining in encrypted backup snapshots automatically expires and clears out within 7 days.
- **Plaid Offboarding:** When you disconnect a bank account or delete your profile, Vassant triggers Plaid's /item/remove endpoint, which immediately revokes the digital access token and instructs Plaid to delete your corresponding financial data on their end as well.
</details>

<details id="data-sold-shared">
  <summary>3. Is my personal financial information ever sold or shared with advertisers?</summary>

Absolutely not. Vassant does not sell or rent your personal data, nor any End User Data collected through Plaid, to marketers or any third party. Any financial data processed for product improvement, research, or analytics is strictly anonymized and de-identified, meaning it contains no personally identifiable information and cannot be linked back to you.

</details>
