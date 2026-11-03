---
description: Sync accounts to track contributions for you.
sidebar_custom_props:
  icon: refresh-cw
---

# Upgrading

**Connecting Accounts:** When upgrading to paid, users gain the ability to connect one or more financial institutions to sync investment allocations from multiple accounts. Users are not forced to sync an account when upgrading. To connect, open the sidebar at the top left, press “Account and Connections,” then press “Connect your brokerage account” (“Connect another institution” if you already have one connected). Follow the prompts from Plaid. You can connect up to 5 accounts in total across all your institutions. To request more, email support@vassantfinance.com.

**Syncing Accounts:** To then sync an account, users may go to the “Model” tab → select desired investment account card → “Connect account”. A prompt to match accounts will follow. Users may only match 1 synced account with 1 fund. Funds in the “Investing Allocations” section that aren't matched while on VassantPRO remain in “Manual” mode. Connecting a fund ends any recurring investment on it, because the sync picks up those deposits from then on. Contributions it already added stay.

- **Note**: The “Model” tab and the “Invest” tab connect separately, even for the same investment account. Connecting a fund on the “Model” tab only tracks its contributions. It doesn't sync holdings on the “Invest” tab, and unlinking the fund leaves the Invest tab alone.

- **Data Migration During Sync:** When connected, no data from previously manual contributions will be lost. Starting from the time of connection and sync, that account will update as the amount you've invested grows. Vassant measures this from the rise in the account's cost basis, so a deposit counts as a contribution once it's invested in a position.

  Cash only matters for the account's total value, which is what each position's percentage is measured against. For example, if a $1,000 account holds one position, that position is 100% of the account. Add $1,000 in cash and it drops to 50%. Contributions made before syncing the account to Vassant will not update.
  - You may add “Manual” cash inflow contributions to already established “Synced” accounts. The synced amount is always the source of truth for the connected account. A manual entry never overwrites it. A manual cash deposit amount on a synced account counts as "held elsewhere" and is added on top. It stays put through syncs. You edit that one manual amount to change it. New entries don't keep stacking up.
  - *Note:* Vassant does not pull previous contributions made before the time of connection. If tracking calendar year contributions, ensure you manually add any cash deposits so that the cost basis is equal to your true deposit amount before connection.
  - **Example:** A user individually deposits $1000 into their Roth IRA before joining Vassant. This user established an account with Vassant and manually enters a $1000 deposit to the Roth IRA in Vassant. Then, they upgrade to VassantPRO and link their account to Vassant via Plaid. The $1000 manual contribution stays in Vassant (we do not pick up contributions made before connection), and now all future deposits will be automatically tracked in the "Allocations" tab for the Roth IRA. While synced, “Add contribution” becomes “Held elsewhere this year,” a single amount the user can edit at any time.
 
- **Sync Frequency**: Vassant pulls new data every time you open the Invest tab, and on its own when Plaid reports new holdings. It's pulling Plaid's copy, which Plaid refreshes from the brokerage about once a day. So recent contributions can take up to a day to show.

**Unsyncing:** Synced funds may be unsynced at any time by opening the fund's card in the “Allocations” subtab and tapping “Manage connection.” The fund converts to “Manual Mode,” and all data is maintained from the last available sync. The Invest tab keeps syncing if it's linked. All future contributions must be made via manual contributions. The account may be resynced at any time.

**Reconnecting**: If a connection stops working, open “Account and Connections” and tap “Reconnect account.” Your plan links carry over automatically, and contributions keep counting from the same starting point. Each link moves to the account with the same last four digits. If there's no match, that link is removed and the fund's contributions become manual.

**Tracking Activity History:** At any time, you may track the activity history of deposits and synced allocations in the "View activity history" button on the investment account card in "Model." Contributions will be distinguished between manual and synced. 
