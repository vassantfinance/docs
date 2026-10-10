---
description: Connect your brokerage and sync your positions.
sidebar_custom_props:
  icon: link
---

# Upgrading

- **Connecting Institutions**: When upgrading to paid, users gain the ability to connect one or more financial institutions to sync investments from multiple accounts to their portfolio. Users are not forced to sync an account when upgrading. To first connect an account, users may go to the sidebar located at the top left of the screen, press “Account Information,” scroll down, then press “Connect your brokerage account.” Users must follow the prompts from Plaid to connect their institutions to Vassant. Users may connect more than one financial institution, up to 5 maximum. Additional requests to connect more should be sent to support@vassantfinance.com.
- **Syncing Accounts**: After connecting institutions to Vassant, users must then connect individual accounts to different areas of the Vassant platform. To then sync an account, users may go to the “Invest” tab → select desired investment account subtype → “Connect account” button in green next to the "Portfolio" headline.
  - After tapping "Connect account," the user may select an account then press “Continue” to associate your account with the Plaid-linked brokerage. If nothing is selected, the “Connect account” remains at the top of the invest account screen, and it may be matched with another account from any financial institution at any time, or remain in “Manual Mode” indefinitely.
  - After connecting accounts, additional accounts from other financial institutions can be synced at any time by selecting “Connect account” at the top of the account tab.
  - After syncing, investment information collected and used by Vassant includes positions, position sizes, new purchases, and total account values.
  - Note: Connecting an account via the “Invest” tab automatically syncs accounts that match those within the “Allocations” subtab in “Model.” You may unsync either individually at either time.

- **Investment Data Conversion During Sync**: When applicable, all positions in the “Portfolio” section created from manual recordings that match found positions via synced connection in labeled accounts are automatically updated (overriding the existing manual contributions) to reflect current portfolio percentages.
  - All positions currently found are automatically updated (and transitioned from the “Watchlist” section, if applicable) in the “Portfolio” section.
  - All positions which are not matched to a portfolio remain in “Manual” mode and are not affected by upgrading to the paid plan.
  - You may add “Manual” contributions to already established “Synced” positions. The synced amount is always the source of truth for the connected account. A manual entry never overwrites it. A manual amount on a synced position counts as "held elsewhere" and is added on top. It stays put through syncs. You edit that one manual amount to change it. New entries don't keep stacking up.
  - Each account tab can be linked to one connected institution at a time. Adding multiple of the same account type is planned for a future release.
  - **Note:** International (ex-U.S.) holdings are not currently supported by Vassant. When an account that has international holdings is matched with an existing investment account, there will be no new investment cards created for those international holdings. If there already exists a manual position of an international holding, the data will not be updated via sync.
 
- **Sync Frequency**: Vassant checks for new data every time you open the Invest tab and whenever your brokerage reports changes. Brokerages usually send updates about once a day, so recent trades can take up to a day to appear.

- **Position Models in Synced Mode**: When the percent allocation of a given position reaches the target threshold, the plan is marked as complete, regardless if the actual percent allocation drops below this value with new syncs. “Watchlist” positions and their respective models are not impacted in “Sync” mode.

- **Live Market Data**: Users gain access to public market data for automatic price checks given a position’s next purchase price, as well as automatic price calculations for determining the “Next Purchase Price.”

- **The “Vault”:** Users now get access to an editable Vassant “Vault” for every desired investment position, where it was limited to 6 under the Free Plan. In addition, users gain access to “Use Spotlight Profile” as an option to initiate a “Vault” for a unique investable security, if that profile is now released and accessible to the paid user.
