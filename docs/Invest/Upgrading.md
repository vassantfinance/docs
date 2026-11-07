---
description: Connect your brokerage and sync your positions.
sidebar_custom_props:
  icon: link
---

# Upgrading

- **Connecting Institutions**: When upgrading to paid, users gain the ability to connect one or more financial institutions to sync investments from multiple accounts to their portfolio. Users are not forced to sync an account when upgrading. To connect, tap “Connect account” on any Invest tab, or open the sidebar at the top left, press “Account and Connections,” then press “Connect your brokerage account” (“Connect another institution” if you already have one connected). Follow the prompts from Plaid. You can connect up to 5 accounts in total across all your institutions. To request more, email support@vassantfinance.com.
- **Adding or Removing Accounts**: To change which accounts you share from a bank you've already connected, open “Account and Connections” and tap “Add or remove accounts” under that bank. Your current accounts are already checked, so check new ones or uncheck ones you don't want. Removed accounts keep their positions as manual entries. “Account and Connections” lists every account you've shared from each bank. Any account that isn't linked to a tab or fund says so, so you can link it or remove it with “Add or remove accounts.”
- **Syncing Accounts**: After connecting an institution, choose which account feeds each tab. Go to the “Invest” tab, select the account subtype, and tap the green “Connect account” button next to the “Portfolio” headline. If you have no institution connected yet, this takes you through Plaid first.
  - Pick an account and press “Link account.” Only accounts that hold investments are listed, and an account already feeding another tab shows as unavailable. If yours isn't listed, follow the “Account and Connections” link at the bottom of the picker to connect it.
  - Once a tab is linked, the button turns blue and reads “Manage connection.” Use it to switch accounts or unlink.
  - A tab you don't link stays in “Manual Mode” for as long as you like.
  - After syncing, investment information collected and used by Vassant includes positions, position sizes, cost basis, and total account values. Stocks, ETFs, and mutual funds with a ticker sync as positions, and mutual funds are treated as ETFs. Cash and money market funds don't sync as positions, but they still count toward the account's total value.
  - *Note*: The “Invest” tab and the “Allocations” subtab in “Model” connect separately, even for the same investment account. For example, connecting a Roth IRA on the Invest tab syncs that tab's holdings, but it doesn't sync contributions for the Roth IRA in the “Model” tab. To track those too, connect the fund in “Model” as well. Unlinking one leaves the other alone.
- **Unlinking**: To stop syncing a tab, tap “Manage connection” on that tab and press “Unlink.” Its positions switch to Manual Mode and keep their values from the last sync. Your plan isn't affected.
- **Reconnecting**: If a connection stops working, open “Account and Connections” and tap “Reconnect account.” Your Invest tab links carry over automatically, so there's nothing to set up again.

  There are two cases where you'll need to choose the account for a tab again:
  - Your brokerage gives the account a new account number. Vassant matches accounts by their last four digits, so it can't tell it's the same account.
  - Vassant disconnected your accounts because you downgraded or were away for a long time. The links are removed along with the connection.

- **Tracking Positions by Shares**: On any plan, you can size a position by entering the number of shares you own. Vassant values them once, at the current price, when you save, and that value doesn't follow the market. To keep position sizes current automatically, connect the account with VassantPRO. 

- **Investment Data Conversion During Sync**: When applicable, all positions in the “Portfolio” section created from manual recordings that match found positions via synced connection in labeled accounts are automatically updated (overriding the existing manual contributions) to reflect current portfolio percentages.
  - All positions currently found are automatically updated (and transitioned from the “Watchlist” section, if applicable) in the “Portfolio” section.
  - All positions which are not matched to a portfolio remain in “Manual” mode and are not affected by upgrading to the paid plan.
  - You may add “Manual” contributions to already established “Synced” positions. The synced amount is always the source of truth for the connected account. A manual entry never overwrites it. A manual amount on a synced position counts as "held elsewhere" and is added on top. It stays put through syncs. You edit that one manual amount to change it. New entries don't keep stacking up.
  - Each account tab can be linked to one connected account at a time, and each connected account can feed one tab. Adding multiple of the same account type is planned for a future release.
  - **Note:** International (ex-U.S.) holdings are not currently supported by Vassant. When an account that has international holdings is matched with an existing investment account, there will be no new investment cards created for those international holdings. If there already exists a manual position of an international holding, the data will not be updated via sync.
 
- **Sync Frequency**: Vassant pulls new data every time you open the Invest tab, but it's pulling Plaid's copy, which Plaid refreshes from the brokerage about once a day. So recent trades can take up to a day to show.

  A newly connected account can take longer. Until its holdings arrive, the tab says “Connected to [your brokerage]. New holdings can take up to two days to show up in Vassant.”

- **Long Absences**: Vassant pauses syncing if you haven't opened the app in 60 days, and picks back up when you return. After 90 days away we send a notification, and if you still haven't come back 7 days later, your connections are removed. Your positions and contributions stay as manual entries, and your subscription isn't affected. The Invest tab tells you when this happens so you can reconnect.

- **Position Models in Synced Mode**: A position's percent allocation refreshes on every sync, so a plan marked complete shows incomplete again if the allocation drops below target. “Watchlist” positions and their respective models are not impacted in “Sync” mode.

- **Live Market Data**: Users gain access to public market data for automatic price checks given a position’s next purchase price, as well as automatic price calculations for determining the “Next Purchase Price.”

- **The “Vault”:** Users now get access to an editable Vassant “Vault” for every desired investment position, where it was limited to 6 under the Free Plan. In addition, “Use a Deep Dive” can start a “Vault” for any position that has a “Deep Dive,” since the paid plan unlocks all of them.
