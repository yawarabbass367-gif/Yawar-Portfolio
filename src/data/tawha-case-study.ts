export const tawhaBrand = {
  green: "#1a7a4c",
  greenDeep: "#0f5c38",
  greenBright: "#2ea55c",
  greenText: "#1a7a4c",
  mint: "#f0f9f4",
  ink: "#0f172a",
  muted: "#64748b",
  line: "#e2e8f0",
  white: "#ffffff",
} as const;

type Img = { src: string; width: number; height: number; alt: string };

export const tawhaAssets = {
  heroWordmark: {
    src: "/case-studies/tawha/assets/hero-tawhapay-wordmark.png",
    width: 2400,
    height: 259,
    alt: "",
  } satisfies Img,
  heroPhoneHand: {
    src: "/case-studies/tawha/assets/hero-phone-hand.png",
    width: 863,
    height: 1056,
    alt: "Tawha Pay dashboard on a phone held in hand",
  } satisfies Img,
  notificationPhone: {
    src: "/case-studies/tawha/assets/notification-phone.png",
    width: 998,
    height: 522,
    alt: "Tawha Pay payment successful notification on iPhone lock screen",
  } satisfies Img,
  appIconPhone: {
    src: "/case-studies/tawha/assets/app-icon-phone.jpg",
    width: 1024,
    height: 522,
    alt: "Tawha Pay app icon on iPhone home screen",
  } satisfies Img,
  platformAndroid: {
    src: "/case-studies/tawha/assets/platform-android.png",
    width: 43,
    height: 43,
    alt: "Android",
  } satisfies Img,
  platformIos: {
    src: "/case-studies/tawha/assets/platform-ios.png",
    width: 43,
    height: 43,
    alt: "iOS",
  } satisfies Img,
  coreProblemsHub: {
    src: "/case-studies/tawha/assets/core-problems-hub.png",
    width: 489,
    height: 500,
    alt: "",
  } satisfies Img,
  featureBand: {
    src: "/case-studies/tawha/assets/design-opportunity.jpg.png",
    width: 2055,
    height: 1370,
    alt: "3D fintech icons — wallet, pay logo, analytics, growth, and cloud on pedestals",
  } satisfies Img,
  designTarget: {
    src: "/case-studies/tawha/assets/design-target.png",
    width: 550,
    height: 550,
    alt: "3D green target with arrow in the bullseye",
  } satisfies Img,
  segmentLogo: {
    src: "/case-studies/tawha/assets/segment-logo.png",
    width: 245,
    height: 247,
    alt: "Tawha Pay app icon",
  } satisfies Img,
  segmentUsers: {
    src: "/case-studies/tawha/assets/segment-users.png",
    width: 320,
    height: 320,
    alt: "Personal user 3D icon",
  } satisfies Img,
  segmentBusiness: {
    src: "/case-studies/tawha/assets/segment-business.png",
    width: 320,
    height: 320,
    alt: "Business user 3D icon",
  } satisfies Img,
  whoUsesBg: {
    src: "/case-studies/tawha/assets/who-uses-bg.jpg",
    width: 2718,
    height: 1336,
    alt: "",
  } satisfies Img,
  module1AccountsBg: {
    src: "/case-studies/tawha/assets/module1-deep-dive-bg-v3.jpg",
    width: 1024,
    height: 1020,
    alt: "",
  } satisfies Img,
  module1AccountsPhones: [
    {
      src: "/case-studies/tawha/assets/module1-phone-01-dashboard.png",
      width: 304,
      height: 633,
      alt: "Accounts dashboard with balance card, quick actions, and pending approvals",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-02-accounts-list.png",
      width: 304,
      height: 633,
      alt: "Account switcher listing linked bank accounts across multiple banks",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-03-statement.png",
      width: 306,
      height: 635,
      alt: "Account statement with debit and credit chart and transaction list",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-04-account-detail.png",
      width: 306,
      height: 635,
      alt: "Current account detail with balance and more options sheet",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-05-statement-filter.png",
      width: 303,
      height: 630,
      alt: "Statement screen with from and to date filter options",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-06-settings.png",
      width: 303,
      height: 630,
      alt: "Account settings with transfer, primary, and sync toggles",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-07-limit-select.png",
      width: 301,
      height: 626,
      alt: "Limit management type selection for RAAST and transfers",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-08-limit-raast.png",
      width: 300,
      height: 626,
      alt: "RAAST limit management with daily amount and count sliders",
    },
    {
      src: "/case-studies/tawha/assets/module1-phone-09-limit-transfer.png",
      width: 300,
      height: 626,
      alt: "Transfer and payments limit management with category sliders",
    },
  ] as const satisfies readonly Img[],
  module2PaymentsBg: {
    src: "/case-studies/tawha/assets/module2-payments-bg.jpg",
    width: 754,
    height: 1024,
    alt: "",
  } satisfies Img,
  module2SinglePhones: [
    {
      src: "/case-studies/tawha/assets/module2-phone-01-choose-type.png",
      width: 303,
      height: 630,
      alt: "Payment and transfer screen choosing single payment or bulk transfer",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-02-select-bank.png",
      width: 303,
      height: 630,
      alt: "Select bank screen with beneficiaries and receiver details",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-03-raast.png",
      width: 295,
      height: 615,
      alt: "RAAST transfer form with ID amount and purpose fields",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-04-details.png",
      width: 303,
      height: 630,
      alt: "Payment details entry with sender recipient and summary",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-05-success.png",
      width: 303,
      height: 630,
      alt: "Successful single payment confirmation with share and done actions",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-06-beneficiaries.png",
      width: 303,
      height: 630,
      alt: "Beneficiaries list with search across accounts and transfers",
    },
  ] as const satisfies readonly Img[],
  module2BulkPhones: [
    {
      src: "/case-studies/tawha/assets/module2-phone-07-bulk-choose.png",
      width: 303,
      height: 630,
      alt: "Payment and transfer screen highlighting bulk transfer option",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-08-bulk-upload.png",
      width: 303,
      height: 630,
      alt: "Bulk transfer upload with CSV and Excel template options",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-09-bulk-preview.png",
      width: 303,
      height: 630,
      alt: "Preview bulk payment summary with authorization required",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-10-add-beneficiary.png",
      width: 303,
      height: 630,
      alt: "Add beneficiary sheet for bulk recipient details",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-11-edit-payment.png",
      width: 303,
      height: 630,
      alt: "Edit payment modal on bulk payment list preview",
    },
    {
      src: "/case-studies/tawha/assets/module2-phone-12-bulk-complete.png",
      width: 303,
      height: 630,
      alt: "Bulk payment completed with success failed and error details",
    },
  ] as const satisfies readonly Img[],
  module3CollectionsBg: {
    src: "/case-studies/tawha/assets/module3-collections-bg.jpg",
    width: 1024,
    height: 1020,
    alt: "",
  } satisfies Img,
  module3CollectionsPhones: [
    {
      src: "/case-studies/tawha/assets/module3-phone-01-collections-list.png",
      width: 295,
      height: 615,
      alt: "Collections list with active corporate and school fee collections",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-02-create-collection.png",
      width: 295,
      height: 615,
      alt: "Create collection sheet over collections list",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-03-invoice-type.png",
      width: 295,
      height: 615,
      alt: "Choose invoice method with upload status cards",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-04-invoice-customer.png",
      width: 295,
      height: 615,
      alt: "Create manual invoice with customer and collection account details",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-05-invoice-products.png",
      width: 295,
      height: 615,
      alt: "Create manual invoice product list with quantities and amounts",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-06-preview-invoice.png",
      width: 295,
      height: 615,
      alt: "Preview invoice with customer information and line items",
    },
    {
      src: "/case-studies/tawha/assets/module3-phone-07-payment-timeline.png",
      width: 295,
      height: 615,
      alt: "Payment timeline from invoice generated to receipt sent",
    },
  ] as const satisfies readonly Img[],
  module4ReportsBg: {
    src: "/case-studies/tawha/assets/module4-reports-bg.jpg",
    width: 1024,
    height: 1020,
    alt: "",
  } satisfies Img,
  module4ReportsPhones: [
    {
      src: "/case-studies/tawha/assets/module4-phone-01-reports-home.png",
      width: 295,
      height: 615,
      alt: "Reports home with summary metrics and report categories",
    },
    {
      src: "/case-studies/tawha/assets/module4-phone-02-transaction-reports.png",
      width: 295,
      height: 615,
      alt: "Transaction reports list with download actions",
    },
    {
      src: "/case-studies/tawha/assets/module4-phone-03-custom-configure.png",
      width: 295,
      height: 615,
      alt: "Custom reports configure step with filters and columns",
    },
    {
      src: "/case-studies/tawha/assets/module4-phone-04-preview-chart.png",
      width: 295,
      height: 615,
      alt: "Report preview in chart view with volume metrics",
    },
    {
      src: "/case-studies/tawha/assets/module4-phone-05-preview-table.png",
      width: 295,
      height: 615,
      alt: "Report preview in table view with transaction rows",
    },
    {
      src: "/case-studies/tawha/assets/module4-phone-06-download.png",
      width: 295,
      height: 615,
      alt: "Custom report ready with PDF Excel and CSV download options",
    },
  ] as const satisfies readonly Img[],
  module5UsersBg: {
    src: "/case-studies/tawha/assets/module5-users-bg.jpg",
    width: 1024,
    height: 1020,
    alt: "",
  } satisfies Img,
  module5UserPhones: [
    {
      src: "/case-studies/tawha/assets/module5-phone-01-manage-users.png",
      width: 295,
      height: 615,
      alt: "Manage users list with role filters and add user action",
    },
    {
      src: "/case-studies/tawha/assets/module5-phone-02-roles.png",
      width: 295,
      height: 615,
      alt: "User management role descriptions for maker checker and viewer",
    },
    {
      src: "/case-studies/tawha/assets/module5-phone-03-user-form.png",
      width: 295,
      height: 615,
      alt: "Create user form with name contact designation and role",
    },
    {
      src: "/case-studies/tawha/assets/module5-phone-04-permissions.png",
      width: 295,
      height: 615,
      alt: "User permissions with transaction and daily limits",
    },
  ] as const satisfies readonly Img[],
  module5WorkflowPhones: [
    {
      src: "/case-studies/tawha/assets/module5-phone-05-create-payment.png",
      width: 295,
      height: 615,
      alt: "Maker create payment form submitted for checker review",
    },
    {
      src: "/case-studies/tawha/assets/module5-phone-06-review-payment.png",
      width: 295,
      height: 615,
      alt: "Checker review payment with reject and approve actions",
    },
    {
      src: "/case-studies/tawha/assets/module5-phone-07-pending.png",
      width: 295,
      height: 615,
      alt: "Checker pending approvals list with review actions",
    },
  ] as const satisfies readonly Img[],
  personalBenchmarkRows: [
    {
      id: "home",
      title: "01 Home & Financial Visibility",
      phones: [
        {
          app: "Revolut",
          src: "/case-studies/tawha/assets/benchmark-home-revolut.png",
          width: 275,
          height: 650,
          alt: "Revolut home showing total balance and quick actions",
          observation:
            "Balance-first dark home with quick actions keeps orientation fast, while recent FX activity surfaces money movement immediately.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/benchmark-home-wise.png",
          width: 275,
          height: 663,
          alt: "Wise home with currency balance cards and send actions",
          observation:
            "Currency balances as cards make multi-currency holdings scannable, with Send / Add / Request as clear primary paths.",
        },
        {
          app: "NayaPay",
          src: "/case-studies/tawha/assets/benchmark-home-nayapay.png",
          width: 275,
          height: 650,
          alt: "NayaPay home with PKR balance and service grid",
          observation:
            "A large PKR balance plus a dense service grid prioritizes everyday local payments over deep account analytics.",
        },
        {
          app: "SadaPay",
          src: "/case-studies/tawha/assets/benchmark-home-sadapay.png",
          width: 275,
          height: 656,
          alt: "SadaPay home with color-blocked balance and action tiles",
          observation:
            "Color-blocked tiles put Load and Send front and center, trading data density for immediate action clarity.",
        },
      ],
    },
    {
      id: "accounts",
      title: "02 Accounts",
      phones: [
        {
          app: "Revolut",
          src: "/case-studies/tawha/assets/benchmark-accounts-revolut.png",
          width: 275,
          height: 650,
          alt: "Revolut add new account currency list",
          observation:
            "Adding an account is framed as picking a currency from a searchable list—fast for multi-currency users.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/benchmark-accounts-wise.png",
          width: 299,
          height: 662,
          alt: "Wise enter recipient account details form",
          observation:
            "Recipient setup is a clean form (name + IBAN), reducing ambiguity when sending to external banks.",
        },
        {
          app: "NayaPay",
          src: "/case-studies/tawha/assets/benchmark-accounts-nayapay.png",
          width: 275,
          height: 648,
          alt: "NayaPay send money with bank shortcuts and recipients",
          observation:
            "Bank and wallet shortcuts plus saved recipients shorten repeat transfers in a local payments context.",
        },
        {
          app: "SadaPay",
          src: "/case-studies/tawha/assets/benchmark-accounts-sadapay.png",
          width: 275,
          height: 653,
          alt: "SadaPay send money with IBAN and recipients list",
          observation:
            "One field accepts IBAN, Raast ID, account, or name—flexible entry with recent recipients underneath.",
        },
      ],
    },
    {
      id: "payments",
      title: "03 Payments",
      phones: [
        {
          app: "Revolut",
          src: "/case-studies/tawha/assets/benchmark-payments-revolut.png",
          width: 275,
          height: 650,
          alt: "Revolut bank account details payment form",
          observation:
            "Bank transfers are structured fields (country, currency, account codes)—precise, but heavier for casual users.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/benchmark-payments-wise.png",
          width: 284,
          height: 662,
          alt: "Wise physical card management screen",
          observation:
            "The card itself is the payment surface, with PIN, details, freeze, and wallet add as adjacent controls.",
        },
        {
          app: "NayaPay",
          src: "/case-studies/tawha/assets/benchmark-payments-nayapay.png",
          width: 275,
          height: 648,
          alt: "NayaPay virtual Visa card activation screen",
          observation:
            "A bold virtual Visa card with slide-to-activate makes card issuance feel tangible and low-friction.",
        },
        {
          app: "SadaPay",
          src: "/case-studies/tawha/assets/benchmark-payments-sadapay.png",
          width: 275,
          height: 654,
          alt: "SadaPay virtual card with freeze control",
          observation:
            "Virtual/Physical tabs plus View/Copy and Freeze keep card security controls one step from the card face.",
        },
      ],
    },
    {
      id: "transactions",
      title: "04 Transactions",
      phones: [
        {
          app: "Revolut",
          src: "/case-studies/tawha/assets/benchmark-transactions-revolut.png",
          width: 275,
          height: 650,
          alt: "Revolut transactions list with search and filters",
          observation:
            "Search and account filters sit above a chronological list—strong for finding a specific movement quickly.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/benchmark-transactions-wise.png",
          width: 284,
          height: 662,
          alt: "Wise transactions list with filter chips",
          observation:
            "Filter chips (type, balance, direction) help slice history without burying the chronological feed.",
        },
        {
          app: "NayaPay",
          src: "/case-studies/tawha/assets/benchmark-transactions-nayapay.png",
          width: 275,
          height: 648,
          alt: "NayaPay transaction details with fee breakdown",
          observation:
            "Fee and tax breakdown on the receipt builds transparency for local and international charges.",
        },
        {
          app: "SadaPay",
          src: "/case-studies/tawha/assets/benchmark-transactions-sadapay.png",
          width: 275,
          height: 654,
          alt: "SadaPay transaction history with declined states",
          observation:
            "Date-grouped history with clear declined states makes failures and reasons easy to scan.",
        },
      ],
    },
  ] as const,
  businessBenchmarkRows: [
    {
      id: "dashboard",
      title: "01 Dashboard & Finance Visibility",
      screens: [
        {
          app: "Mercury",
          src: "/case-studies/tawha/assets/biz-bench-dash-mercury.png",
          width: 844,
          height: 601,
          alt: "Mercury business home with balance chart and bill pay widgets",
          observation:
            "Balance chart plus Bill Pay and Invoicing widgets make cash position and payables visible in one glance.",
        },
        {
          app: "Revolut Business",
          src: "/case-studies/tawha/assets/biz-bench-dash-revolut.png",
          width: 843,
          height: 611,
          alt: "Revolut Business home with balance, transactions, and spending chart",
          observation:
            "Total balance leads the home, with recent transactions and spending analytics kept in parallel panels.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/biz-bench-dash-wise.png",
          width: 843,
          height: 657,
          alt: "Wise Business home with group balance and currency accounts",
          observation:
            "Group-level balance sits above currency account cards, with approval tasks surfaced before the activity feed.",
        },
        {
          app: "Airwallex",
          src: "/case-studies/tawha/assets/biz-bench-dash-airwallex.png",
          width: 858,
          height: 569,
          alt: "Airwallex payments dashboard with KPI cards and trend charts",
          observation:
            "KPI cards with trend charts turn payment performance into a finance-first dashboard rather than a simple wallet view.",
        },
      ],
    },
    {
      id: "transfers",
      title: "02 Transfers",
      screens: [
        {
          app: "Revolut Business",
          src: "/case-studies/tawha/assets/biz-bench-xfer-revolut.png",
          width: 843,
          height: 677,
          alt: "Revolut Business counterparties grid for repeat payments",
          observation:
            "Saved counterparties as a scannable grid cut friction for repeat business payments.",
        },
        {
          app: "Mercury",
          src: "/case-studies/tawha/assets/biz-bench-xfer-mercury.png",
          width: 843,
          height: 680,
          alt: "Mercury dashboard with Move Money action menu open",
          observation:
            "A single Move Money menu routes pay, receive, request, and internal transfer without leaving the home context.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/biz-bench-xfer-wise.png",
          width: 843,
          height: 681,
          alt: "Wise receive EUR account details with speed and fees facts",
          observation:
            "Receive flows pair account details with speed, fees, and limits so inbound transfers are self-explanatory.",
        },
        {
          app: "Airwallex",
          src: "/case-studies/tawha/assets/biz-bench-xfer-airwallex.png",
          width: 843,
          height: 659,
          alt: "Airwallex settlements summary with pending payment chart",
          observation:
            "Settlement charts and currency breakdowns clarify when transferred funds become available.",
        },
      ],
    },
    {
      id: "transaction",
      title: "03 Transaction",
      screens: [
        {
          app: "Mercury",
          src: "/case-studies/tawha/assets/biz-bench-txn-mercury.png",
          width: 843,
          height: 638,
          alt: "Mercury transactions list with detail side panel",
          observation:
            "A dense ledger plus selected-row detail panel supports both scanning and investigation.",
        },
        {
          app: "Mercury",
          src: "/case-studies/tawha/assets/biz-bench-txn-mercury-detail.png",
          width: 843,
          height: 690,
          alt: "Mercury transaction detail with category, notes, and dispute actions",
          observation:
            "Category, notes, attachments, and dispute actions keep expense context on the transaction itself.",
        },
        {
          app: "Airwallex",
          src: "/case-studies/tawha/assets/biz-bench-txn-airwallex.png",
          width: 843,
          height: 639,
          alt: "Airwallex payment timeline with attempt details",
          observation:
            "An event timeline with attempt metadata helps teams diagnose failed or expired payments.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/biz-bench-txn-wise.png",
          width: 843,
          height: 650,
          alt: "Wise statement download with date range and CSV options",
          observation:
            "Statement export with period presets and fee display options supports accounting handoff.",
        },
      ],
    },
    {
      id: "cards",
      title: "04 Cards",
      screens: [
        {
          app: "Airwallex",
          src: "/case-studies/tawha/assets/biz-bench-cards-airwallex.png",
          width: 843,
          height: 645,
          alt: "Airwallex virtual card details with manage actions",
          observation:
            "Card visual, masked details, and Manage actions stay together so controls remain contextual.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/biz-bench-cards-wise.png",
          width: 843,
          height: 654,
          alt: "Wise digital card with freeze and manage card actions",
          observation:
            "Freeze and card details sit beside the card graphic, with secondary management in a clear list below.",
        },
        {
          app: "Revolut Business",
          src: "/case-studies/tawha/assets/biz-bench-cards-revolut.png",
          width: 843,
          height: 666,
          alt: "Revolut Business cards table with spend limits and status",
          observation:
            "A team card table with status, spend programs, and limits scales card control for multiple holders.",
        },
        {
          app: "Revolut",
          src: "/case-studies/tawha/assets/biz-bench-cards-revolut-accounts.png",
          width: 843,
          height: 645,
          alt: "Revolut accounts view with card order promo and spending chart",
          observation:
            "Card ordering and spending analytics sit alongside accounts, reinforcing cards as part of money management.",
        },
      ],
    },
    {
      id: "accounts",
      title: "05 Accounts",
      screens: [
        {
          app: "Airwallex",
          src: "/case-studies/tawha/assets/biz-bench-acct-airwallex.png",
          width: 843,
          height: 650,
          alt: "Airwallex global accounts table with location and status",
          observation:
            "Global accounts as a filterable table make multi-country receive accounts easy to compare and manage.",
        },
        {
          app: "Revolut Business",
          src: "/case-studies/tawha/assets/biz-bench-acct-revolut.png",
          width: 843,
          height: 656,
          alt: "Revolut Business manage accounts sync selection screen",
          observation:
            "Checkbox account selection with currency flags clarifies which balances sync into the workspace.",
        },
        {
          app: "Mercury",
          src: "/case-studies/tawha/assets/biz-bench-acct-mercury.png",
          width: 843,
          height: 657,
          alt: "Mercury balance chart beside named business accounts list",
          observation:
            "Named operating accounts beside the total balance chart keep purpose-driven accounts scannable.",
        },
        {
          app: "Wise",
          src: "/case-studies/tawha/assets/biz-bench-acct-wise.png",
          width: 844,
          height: 586,
          alt: "Wise account view with multi-currency balance cards",
          observation:
            "Currency cards as the primary account model make multi-currency holdings immediately understandable.",
        },
      ],
    },
  ] as const,
} as const;

export const tawhaCopy = {
  brand: "Tawha Pay",
  heroTagline: "A Financial Operating System For Businesses And Consumers",
  intro: {
    headlineBefore: "A financial operating system that combines ",
    headlineHighlight:
      "banking, payments, collections, reporting, user management and embedded lending",
    headlineAfter: " into a single platform.",
    subheadline:
      "Intuitive workflows, seamless financial operations, and a modern interface empower individuals and businesses to manage payments, banking, and finances with confidence.",
    stats: [
      { value: "175", label: "hours of work" },
      { value: "200+", label: "screens" },
      { value: "100", label: "components" },
    ],
    appIconBadge: "app icon",
    appIconBody:
      "The app icon reflects Tawha’s core values: clarity, stability, and trust. Its minimal form and balanced proportions ensure strong recognition across all devices.",
  },
  problemDiscovery: {
    title: "Problem Discovery",
    lead:
      "Modern businesses rely on multiple financial tools for banking, payments, collections, payroll, reporting, and lending. As these functions operate across separate platforms, financial workflows become fragmented, increasing complexity and limiting visibility for finance teams.",
    businessTools: [
      "Banking Portals",
      "Payroll Systems",
      "ERP Systems",
      "Lending Platforms",
      "Reporting Tools",
    ],
    consumerIntro: "Meanwhile consumers use separate apps for:",
    consumerTools: ["Transfers", "Bill Payments", "Cards", "Lending"],
    closing: "This fragmentation creates operational complexity and poor visibility.",
    understanding: {
      title: "Initial Understanding",
      lead:
        "Based on the product requirements and discussions with internal Product Managers, several initial challenges were identified:",
      items: [
        {
          icon: "🏦",
          title: "Multiple Platforms:",
          body:
            "Finance teams switched between banking portals, ERP systems, and reporting tools for routine tasks.",
        },
        {
          icon: "⏳",
          title: "Slow Approvals:",
          body: "Disconnected payment workflows delayed business operations.",
        },
        {
          icon: "👁️",
          title: "Limited Visibility:",
          body: "Financial data was scattered across platforms, reducing transparency.",
        },
        {
          icon: "📱",
          title: "Fragmented Experience:",
          body: "Consumers relied on separate apps for payments, transfers, cards, and lending.",
        },
      ],
    },
  },
  coreProblems: {
    title: "Core Problems",
    items: [
      {
        position: "top",
        title: "Different User Needs",
        body:
          "Consumers needed simplicity, while businesses required control—making a unified experience challenging.",
      },
      {
        position: "left",
        title: "Fragmented Financial Ecosystem",
        body:
          "Financial operations were spread across multiple platforms, forcing users to constantly switch contexts.",
      },
      {
        position: "right",
        title: "Limited Financial Visibility",
        body:
          "Businesses struggled to gain a complete view of their accounts, payments, reports, and collections in one place.",
      },
      {
        position: "bottom",
        title: "Complex Approval Processes",
        body:
          "Enterprise payment approvals involved multiple stakeholders, making transactions slower and harder to track.",
      },
    ],
  },
  designOpportunity: {
    opportunity: {
      title: "Design Opportunity",
      body:
        "The challenge wasn't to create another banking application it was to design a unified financial operating system capable of supporting both consumers and businesses without compromising usability. The opportunity was to simplify complex financial operations by bringing banking, payments, collections, reporting, user management, and embedded lending into a single platform while tailoring the experience to the unique goals and workflows of each user type.",
    },
    objectives: {
      title: "Design Objectives",
      items: [
        {
          icon: "🎯",
          title: "Unified Experience :",
          body:
            "Bring financial activities together while maintaining clear context across accounts, transactions and services.",
        },
        {
          icon: "🔗",
          title: "Reduce Operational Friction:",
          body:
            "Minimise unnecessary steps, repetitive tasks and context switching across financial workflows.",
        },
        {
          icon: "🛡️",
          title: "Enable Control Without Complexity:",
          body:
            "Support permissions, approvals and multi-account operations without overwhelming business users.",
        },
        {
          icon: "⚖️",
          title: "Balance Simplicity and Capability:",
          body:
            "Keep everyday financial activities simple for Personal users while supporting advanced operational needs for Business users.",
        },
      ],
    },
  },
  userSegmentation: {
    title: "User Segmentation",
    personal: {
      label: "Personal",
      context: "Every Day Finance",
      user: "Individual User",
    },
    business: {
      label: "Business",
      context: "Financial operations",
      user: "Business Users",
      userTypes: {
        title: "Users Types",
        items: ["Business Owner", "Finance Manager", "Finance team"],
      },
      systemTypes: {
        title: "System Types",
        items: ["Maker", "Checker", "Approver"],
      },
    },
    note: {
      title: "Designing for Two Different Financial Contexts",
      body:
        "During product discovery, the requirements revealed two fundamentally different financial contexts within Tawha Pay: Personal and Business. Personal users primarily need quick access to everyday financial activities, while Business users operate within more complex financial workflows involving visibility, collaboration, approvals, and operational controls. Treating both contexts as a single experience would introduce unnecessary complexity. This led us to structure Tawha Pay around two tailored experiences while maintaining a consistent product ecosystem.",
    },
  },
  whoUses: {
    title: "Who Uses Tawha Pay?",
    roles: [
      {
        id: "cfo",
        title: "CFO",
        needs: ["Visibility", "Controls", "Reports"],
      },
      {
        id: "business-owner",
        title: "Business Owner",
        needs: ["Payments", "Collections", "Reports"],
      },
      {
        id: "consumer",
        title: "Consumer",
        needs: ["Transfer Money", "Pay Bills", "Manage Bills"],
      },
      {
        id: "finance-manager",
        title: "Finance Manager",
        needs: ["Bulk Transfers", "Payroll"],
      },
      {
        id: "approver",
        title: "Approver",
        needs: ["Review Transactions"],
      },
    ],
  },
  personalBenchmark: {
    title: "Personal Benchmark",
    observationLabel: "Observation",
  },
  businessBenchmark: {
    title: "Business Benchmark",
    observationLabel: "Observation",
  },
  businessBenchmarkFindings: {
    title: "Business Benchmark - Key Findings",
    subtitle: "4 products • 5 UX areas • 20+ screens analysed",
    findingLabel: "Findings:-",
    insightLabel: "Insights:-",
    blocks: [
      {
        id: "dashboard-nav",
        title: "01 Intuitive dashboard and navigation",
        finding:
          "Leading business platforms open on a finance-first home that surfaces balance, recent activity, and primary money actions together.",
        insight:
          "Design the Business home so operators understand cash position and next actions without hunting through secondary modules.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-bench-dash-mercury.png",
            width: 844,
            height: 601,
            alt: "Mercury business dashboard with balance and bill pay widgets",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-dash-revolut.png",
            width: 843,
            height: 611,
            alt: "Revolut Business home with transactions and spending chart",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-dash-wise.png",
            width: 843,
            height: 657,
            alt: "Wise Business home with currency accounts and tasks",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-dash-airwallex.png",
            width: 858,
            height: 569,
            alt: "Airwallex payments dashboard with KPI charts",
          },
        ],
      },
      {
        id: "multiple-accounts",
        title: "02 Ability to manage multiple accounts",
        finding:
          "Business banking UIs treat accounts as first-class objects—currency wallets, operating accounts, and global receive accounts are listed, compared, and selectable.",
        insight:
          "Give Tawha Pay Business clear multi-account visibility so teams can switch context without losing orientation.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-bench-acct-airwallex.png",
            width: 843,
            height: 650,
            alt: "Airwallex global accounts table",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-acct-revolut.png",
            width: 843,
            height: 656,
            alt: "Revolut Business manage accounts selection",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-acct-wise.png",
            width: 844,
            height: 586,
            alt: "Wise multi-currency account cards",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-acct-mercury.png",
            width: 843,
            height: 657,
            alt: "Mercury named accounts beside balance chart",
          },
        ],
      },
      {
        id: "transfers",
        title: "03 Streamlined transfers and payments",
        finding:
          "Repeat payments are accelerated through saved counterparties, a single move-money entry point, clear receive details, and settlement visibility.",
        insight:
          "Reduce payment friction for Business users with reusable recipients and an obvious path to send, receive, and track funds.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-bench-xfer-mercury.png",
            width: 843,
            height: 680,
            alt: "Mercury Move Money menu",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-xfer-revolut.png",
            width: 843,
            height: 677,
            alt: "Revolut Business counterparties grid",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-xfer-wise.png",
            width: 843,
            height: 681,
            alt: "Wise receive EUR account details",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-xfer-airwallex.png",
            width: 843,
            height: 659,
            alt: "Airwallex settlements summary",
          },
        ],
      },
      {
        id: "cards",
        title: "04 Easy card issuing and management",
        finding:
          "Card controls stay contextual—freeze, reveal, spend limits, and team card tables sit next to the card rather than in disconnected settings.",
        insight:
          "Keep Business card management beside the card itself so issuing and day-to-day controls remain clear for finance teams.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-bench-cards-airwallex.png",
            width: 843,
            height: 645,
            alt: "Airwallex virtual card details",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-cards-revolut.png",
            width: 843,
            height: 666,
            alt: "Revolut Business cards table with spend limits",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-cards-wise.png",
            width: 843,
            height: 654,
            alt: "Wise digital card with freeze action",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-txn-mercury-detail.png",
            width: 843,
            height: 690,
            alt: "Mercury card expense detail with category and dispute",
          },
        ],
      },
      {
        id: "transactions-expenses",
        title: "05 Seamless bill pay and expense workflow",
        finding:
          "Transaction and expense flows support investigation—timelines, categorization, notes, attachments, and exportable statements help teams close the loop.",
        insight:
          "Design Business activity as both an audit trail and an expense workflow, with enough detail to resolve issues without leaving the product.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-bench-txn-airwallex.png",
            width: 843,
            height: 639,
            alt: "Airwallex payment timeline",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-txn-mercury.png",
            width: 843,
            height: 638,
            alt: "Mercury transactions list with detail panel",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-txn-wise.png",
            width: 843,
            height: 650,
            alt: "Wise statement download options",
          },
          {
            src: "/case-studies/tawha/assets/biz-bench-cards-revolut-accounts.png",
            width: 843,
            height: 645,
            alt: "Revolut accounts with spending analytics",
          },
        ],
      },
    ],
  },
  personalBenchmarkFindings: {
    title: "Personal Benchmark- Key Findings",
    subtitle: "4 products • 5 UX areas • 20+ screens analysed",
    findingLabel: "Findings:-",
    insightLabel: "Insights:-",
    blocks: [
      {
        id: "financial-position",
        title: "01 Financial position comes first",
        finding:
          "Consumer financial products commonly establish the user's financial position before surfacing secondary services.",
        insight:
          "Make the user's available balance and financial status immediately understandable on the Personal home experience.",
        phones: [
          {
            src: "/case-studies/tawha/assets/findings-01-revolut.png",
            width: 275,
            height: 389,
            alt: "Revolut home with balance-first layout",
          },
          {
            src: "/case-studies/tawha/assets/findings-01-wise.png",
            width: 296,
            height: 401,
            alt: "Wise home with currency balance cards",
          },
          {
            src: "/case-studies/tawha/assets/findings-01-nayapay.png",
            width: 275,
            height: 386,
            alt: "NayaPay home with large PKR balance",
          },
          {
            src: "/case-studies/tawha/assets/findings-01-sadapay.png",
            width: 275,
            height: 392,
            alt: "SadaPay home with balance and action tiles",
          },
        ],
      },
      {
        id: "repeat-transfers",
        title: "02 Repeat transfer are optimized",
        finding:
          "Saved recipients and frequently used contacts reduce repetitive data entry when making recurring transfers.",
        insight:
          "Make repeat transfers faster through recent recipients, saved beneficiaries, and contextual transaction history.",
        phones: [
          {
            src: "/case-studies/tawha/assets/findings-02-nayapay.png",
            width: 275,
            height: 318,
            alt: "NayaPay send money with frequently paid contacts",
          },
          {
            src: "/case-studies/tawha/assets/findings-02-sadapay.png",
            width: 275,
            height: 329,
            alt: "SadaPay send money with recipients list",
          },
        ],
      },
      {
        id: "card-controls",
        title: "03 Card controls stay contextual",
        finding:
          "Card-related actions such as viewing details, freezing, activating, and managing the card are presented alongside the card itself.",
        insight:
          "Keep Tawha Pay card management contextual rather than scattering controls across general settings.",
        phones: [
          {
            src: "/case-studies/tawha/assets/findings-03-revolut.png",
            width: 275,
            height: 456,
            alt: "Revolut card selection with contextual details",
          },
          {
            src: "/case-studies/tawha/assets/findings-03-wise.png",
            width: 273,
            height: 473,
            alt: "Wise cards screen with PIN and freeze actions",
          },
          {
            src: "/case-studies/tawha/assets/findings-03-nayapay.png",
            width: 275,
            height: 446,
            alt: "NayaPay virtual card with activation prompt",
          },
          {
            src: "/case-studies/tawha/assets/findings-03-sadapay.png",
            width: 275,
            height: 456,
            alt: "SadaPay virtual card with view and copy controls",
          },
        ],
      },
      {
        id: "transaction-history",
        title: "04 Transaction history is more than a record",
        finding:
          "Activity views support quick scanning, while transaction details and failure reasons help users investigate individual transactions when something needs attention.",
        insight:
          "Design transaction history as both an activity overview and a path to investigation, with deeper details available when required.",
        phones: [
          {
            src: "/case-studies/tawha/assets/findings-04-revolut.png",
            width: 278,
            height: 401,
            alt: "Revolut transactions list for quick scanning",
          },
          {
            src: "/case-studies/tawha/assets/findings-04-wise.png",
            width: 284,
            height: 425,
            alt: "Wise transactions list with status labels",
          },
          {
            src: "/case-studies/tawha/assets/findings-04-nayapay.png",
            width: 278,
            height: 396,
            alt: "NayaPay transaction details with fee breakdown",
          },
          {
            src: "/case-studies/tawha/assets/findings-04-sadapay.png",
            width: 299,
            height: 408,
            alt: "SadaPay transaction history with declined states",
          },
        ],
      },
    ],
  },
  personalUxOpportunities: {
    title: "Personal - UX Opportunities",
    subtitle:
      "Translating personal banking research into practical design priorities for Tawha Pay.",
    findingLabel: "Finding",
    keyFeatureLabel: "Key Feature Consideration",
    blocks: [
      {
        id: "balance-first",
        number: "1",
        title: "Financial position comes first",
        description:
          "Personal banking interfaces prioritize user financial data such as account balances and recent transactions, which users expect to check immediately after logging in.",
        keyFeatureTitle: "Balance Real-Time Focus",
        keyFeatureBody:
          "Make the user's current account balance and existing savings funds the most visible element on the home screen for quick glances and reassessment.",
        phones: [
          {
            src: "/case-studies/tawha/assets/ux-opp-01-home.png",
            width: 387,
            height: 747,
            alt: "Tawha Pay personal home with balance-first layout",
          },
        ],
      },
      {
        id: "repeat-transfers",
        number: "2",
        title: "Repeat transfers are made easier",
        description:
          "Return banking platforms make frequent transferring as painless as possible by keeping access to frequent transactions and contacts right at your fingertips.",
        keyFeatureTitle: "Quick Access Transfer",
        keyFeatureBody:
          "Surface common transfer contacts directly on the dashboard, making repeated transfers as simple as possible for users and significantly reducing payment friction.",
        phones: [
          {
            src: "/case-studies/tawha/assets/ux-opp-02-beneficiaries.png",
            width: 350,
            height: 730,
            alt: "Beneficiaries list with search and grouped contacts",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-02-select-bank.png",
            width: 350,
            height: 730,
            alt: "Select Bank transfer form with beneficiaries row",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-02-raast.png",
            width: 342,
            height: 713,
            alt: "RAAST Transfer with ID and IBAN toggle",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-02-payment-details.png",
            width: 350,
            height: 730,
            alt: "Payment details entry review before sending",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-02-success.png",
            width: 350,
            height: 730,
            alt: "Transfer success confirmation with share and done actions",
          },
        ],
      },
      {
        id: "card-controls",
        number: "3",
        title: "Card controls stay contextual",
        description:
          "Control features relevant to the cards and their activation should be accessible, visually clear, and contextually placed to make navigation a breeze.",
        keyFeatureTitle: "Contextual Card Management",
        keyFeatureBody:
          "Keep all card-specific controls near the card visualization and keep controls visible throughout the process so users always have clear context while managing their card.",
        phones: [
          {
            src: "/case-studies/tawha/assets/ux-opp-03-my-cards.png",
            width: 342,
            height: 710,
            alt: "My Cards virtual card with freeze and reveal actions",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-03-more-options.png",
            width: 342,
            height: 719,
            alt: "More Options sheet with pin and payment toggles",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-03-spending-control.png",
            width: 342,
            height: 710,
            alt: "Spending Control modal for monthly debit limits",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-03-mpin.png",
            width: 342,
            height: 710,
            alt: "Enter MPIN modal to reveal card details",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-03-apply-card.png",
            width: 342,
            height: 710,
            alt: "Apply for Card flow with physical card warning",
          },
        ],
      },
      {
        id: "transaction-investigation",
        number: "4",
        title: "Transaction history supports investigation",
        description:
          "Personal banking users require high visibility into their spending patterns through detailed transaction history, filters, search, and categorization to help them manage their money.",
        keyFeatureTitle: "Quick-Search Activity Detail",
        keyFeatureBody:
          "Design a powerful activity and reporting experience with rich search and filtering so users can quickly find a specific transaction or group of transactions.",
        phones: [
          {
            src: "/case-studies/tawha/assets/ux-opp-04-reports.png",
            width: 342,
            height: 710,
            alt: "Reports overview with period filters and categories",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-04-transaction-reports.png",
            width: 342,
            height: 710,
            alt: "Transaction reports list with download actions",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-04-custom-configure.png",
            width: 342,
            height: 710,
            alt: "Custom reports configure step with filters and columns",
          },
          {
            src: "/case-studies/tawha/assets/ux-opp-04-custom-preview.png",
            width: 342,
            height: 710,
            alt: "Custom reports preview with transaction table view",
          },
        ],
      },
    ],
  },
  businessUxOpportunities: {
    title: "Business - UX Opportunities",
    subtitle:
      "Translating business banking research into practical design priorities for Tawha Pay.",
    findingLabel: "Finding",
    keyFeatureLabel: "Key Feature Consideration",
    blocks: [
      {
        id: "command-center",
        number: "1",
        title: "Make the business home a daily financial command center",
        description:
          "Business operators need a home that consolidates cash position, quick actions, pending approvals, and recent activity so daily work starts from one place.",
        keyFeatureTitle: "Finance Command Home",
        keyFeatureBody:
          "Lead with total balance, primary money actions, and recent activity so finance teams can orient and act without opening multiple modules.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-ux-01-dashboard.png",
            width: 969,
            height: 693,
            alt: "Tawha Pay business dashboard with balance, actions, and activity",
          },
        ],
      },
      {
        id: "account-workspace",
        number: "2",
        title: "The money account as an operational workspace",
        description:
          "Accounts should feel like working spaces—balance, account type, and next steps stay visible so operators can manage funds in context.",
        keyFeatureTitle: "Account Operations Hub",
        keyFeatureBody:
          "Present each account with clear available balance and a direct path to details so multi-account operations stay scannable and actionable.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-ux-02-accounts.png",
            width: 969,
            height: 693,
            alt: "Tawha Pay user account view with total balance and account cards",
          },
        ],
      },
      {
        id: "transaction-investigation",
        number: "3",
        title: "Support scanning and investigation in one transaction view",
        description:
          "Business users need to move from overview metrics to filtered lists, charts, and custom exports without losing the investigative thread.",
        keyFeatureTitle: "Unified Report Investigation",
        keyFeatureBody:
          "Connect report categories, collection overviews, table/chart views, and custom report setup so teams can scan, drill down, and export in one workflow.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-ux-03-reports.png",
            width: 822,
            height: 711,
            alt: "Reports overview with categories and collection metrics",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-03-collection-table.png",
            width: 834,
            height: 723,
            alt: "Report collection details in table view",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-03-collection-chart.png",
            width: 837,
            height: 702,
            alt: "Report collection details in chart view",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-03-create-report.png",
            width: 811,
            height: 702,
            alt: "Create report setup with columns and filters",
          },
        ],
      },
      {
        id: "card-controls",
        number: "4",
        title: "Keep card controls contextually close to the selected card",
        description:
          "Virtual card management should keep spend metrics, live activity, and issue/export actions beside the cards overview—not buried in settings.",
        keyFeatureTitle: "Contextual Card Control Center",
        keyFeatureBody:
          "Surface wallet balance, spend, settlements, and a live transaction feed next to card navigation so issuing and monitoring stay in one context.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-ux-04-virtual-cards.png",
            width: 969,
            height: 803,
            alt: "Virtual cards overview with metrics and live transaction feed",
          },
        ],
      },
      {
        id: "payroll-journey",
        number: "5",
        title: "Build a flow through the payroll journey from creation to completion",
        description:
          "Bulk and single payments need a clear path from upload or entry through validation, edit, and confirmation so payroll can finish without dead ends.",
        keyFeatureTitle: "End-to-End Payment Journey",
        keyFeatureBody:
          "Guide operators from bulk upload and review to error fixing and single-payment confirmation so salary and supplier runs complete with confidence.",
        screens: [
          {
            src: "/case-studies/tawha/assets/biz-ux-05-bulk-upload.png",
            width: 924,
            height: 727,
            alt: "Bulk payment upload with template and validation",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-05-bulk-review.png",
            width: 927,
            height: 731,
            alt: "Bulk payment list review with account and beneficiaries",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-05-bulk-edit.png",
            width: 921,
            height: 726,
            alt: "Bulk payment edit with validation errors",
          },
          {
            src: "/case-studies/tawha/assets/biz-ux-05-single-payment.png",
            width: 921,
            height: 725,
            alt: "Single payment bank transfer with summary and pay now",
          },
        ],
      },
    ],
  },
  module1Accounts: {
    badge: "Module 1",
    title: "Accounts",
    problemLabel: "Problem:",
    problem:
      "Businesses use multiple bank accounts to manage their day to day transactions.",
    solutionLabel: "Solution:",
    solution: "TawhaPay provides Unified account visibility.",
  },
  module2Payments: {
    badge: "Module 2",
    title: "Payments",
    problemLabel: "Problem:",
    problem:
      "Businesses had to manually enter details for each payments that they had to do for their clients.",
    solutionLabel: "Solution:",
    solution: "Unified payment solution for both consumers and individuals",
    singleTitle: "Single Payment",
    bulkTitle: "Bulk Payment",
  },
  module3Collections: {
    badge: "Module 3",
    title: "Collections",
    problemLabel: "Problem:",
    problem:
      "Businesses struggled to create, send, and track invoices across disconnected tools and channels.",
    solutionLabel: "Solution:",
    solution:
      "TawhaPay unifies collections, invoicing, and payment follow-up in one workflow.",
  },
  module4Reports: {
    badge: "Module 4",
    title: "Reports",
    problemLabel: "Problem:",
    problem:
      "Finance teams needed clearer visibility into transactions, collections, and bulk activity without stitching exports together.",
    solutionLabel: "Solution:",
    solution:
      "TawhaPay brings ready-made and custom reports into one configurable download workflow.",
  },
  module5Users: {
    badge: "Module 5",
    title: "User Management",
    problemLabel: "Problem:",
    problem:
      "Businesses often rely on different people to manage accounts and finances.",
    solutionLabel: "Solution:",
    solution:
      "Tawha Pay brings them all together on one platform with role-based access, making financial management simple and efficient.",
    workflowTitle: "Maker-checker-viewer",
  },
  closing: {
    title: "Thank you for reading.",
    body: "I hope this case study gave you a clear look into my design thinking, process, and the decisions behind Tawha Pay.",
    emoji: "🫰",
  },
} as const;
