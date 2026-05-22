# Invest Feature & Data Changes: Upgrading to VassantPRO

- **Connecting Institutions**: When upgrading to paid, users gain the ability to connect one or more financial institutions to sync investments from multiple accounts to their portfolio. Users are not forced to sync an account when upgrading. To first connect an account, users may go to the sidebar located at the top left of the screen, press “Account Information,” scroll to the bottom, then press “Connect an Institution.” Users must follow the prompts from Plaid to connect their institutions to Vassant. Users may connect more than one financial institution, up to 5 maximum. Additional requests to connect more should be sent to support@vassantfinance.com.
  
- **Syncing Accounts**: After connecting institutions to Vassant, users must then connect individual accounts to different areas of the Vassant platform. To then sync an account, users may go to the “Invest” tab → select desired investment account subtype → “Connect account here”. A prompt to connect an account via Plaid will follow.
  - After selecting “Connect account here,” Vassant automatically categorizes all accounts from all connected institutions via account subtype (Roth IRA, Brokerage, Traditional IRA, etc.). Vassant will only show the account subtypes which match the account subtype of the specific investment tab in the “Invest” section.
  - The user may select an account then press “Continue” to associate the account(s) with the specific investment subtype (if multiple accounts of the same subtype are selected, they can be combined into a singular account overview). If nothing is selected, the “Connect an Account” remains at the bottom of the invest page, and it may be matched with another account from any financial institution at any time, or remain in “Manual Mode” indefinitely.
  - After connecting accounts, additional accounts from other financial institutions can be synced at any time by selecting “Connect account here” at the bottom of the subtype tab.
  - After syncing, investment information collected and used by Vassant includes positions, position sizes, purchase history, and total account values.
  - Note: Connecting an account via the “Invest” tab does not automatically match accounts within the “Allocations” subtab within “Model.”

- **Investment Data Conversion During Sync**: When applicable, all positions in the “Portfolio” section created from manual recordings that match found positions via synced connection in labeled accounts are automatically updated (overriding the existing manual contributions) to reflect current portfolio percentages.
  - All positions currently found are automatically updated (and transitioned from the “Watchlist” section, if applicable) in the “Portfolio” section.
  - All positions which are not matched to a portfolio remain in “Manual” mode and are not affected by upgrading to the paid plan. You may still add “Manual” contributions to already established “Synced” positions, potentially to reflect identical holdings of the same position held in other un-synced accounts.
  - If the same position is present in the same account type originating from two or more different financial institutions, the position size and value is combined, and the percent allocation is merged and calculated relative to the combined portfolio dollar value present on the dashboard. In other words, synced accounts of the same subtype are also combined into one single account tracking tab. As an example: you own 1 brokerage account with Fidelity and 1 brokerage account with Interactive Brokers, both of which you connect to Vassant; positions from both accounts are morphed into a single “Brokerage” account tab in the “Invest” tab.

- **Position Models in Synced Mode**: When the percent allocation of a given position reaches the target threshold, the plan is marked as complete, regardless if the actual percent allocation drops below this value with new syncs. “Watchlist” positions and their respective models are not impacted in “Sync” mode.

- **Live Market Data**: Users gain access to public market data for automatic price checks given a position’s next purchase price, as well as automatic price calculations for determining the “Next Purchase Price.”

- **“Spotlight” Profiles**: All “Spotlight” profiles immediately become available to users upon upgrading.

- **The “Vault”:** Users now get access to an editable Vassant “Vault” for every desired investment position, where it was limited to 6 under the Free Plan. In addition, users gain access to “Use Spotlight Profile” as an option to initiate a “Vault” for a unique investable security, if that profile is now released and accessible to the paid user.



