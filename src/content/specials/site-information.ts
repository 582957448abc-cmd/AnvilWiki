export const siteInformation = {
  '/privacy/': {
    title: 'Privacy Policy',
    description:
      'How DrinktheOceanSteam.shop and its embedded services handle information when you visit or play.',
    sections: [
      [
        'This website',
        'You can browse the guides and open the game page without creating an account with us. Our hosting provider, Cloudflare, processes technical information such as IP addresses and browser details to deliver and protect the site. Cloudflare Web Analytics may also measure visits and page performance.',
      ],
      [
        'Embedded game',
        'The game page loads a Playgama player. Playgama and its service providers may receive your IP address, browser details, and information about game activity. The player may use cookies or browser storage for settings, progress, analytics, or advertising. See Playgama’s privacy policy for details.',
        'Playgama Privacy Policy',
        'https://playgama.com/confidential',
      ],
      [
        'Advertising',
        'The main guide includes a separate ad frame below the FAQ. When that frame loads, an outside advertising service may receive network and device information. The service may use cookies or similar technologies to deliver and measure ads, subject to your browser settings. The game player may also show its own ads.',
      ],
      [
        'Sharing and browser settings',
        'Opening the share panel shows a link to this site. If you choose a social platform, that platform handles the link and any information you provide there. You can block third-party cookies or clear site data in your browser. Clearing game storage may delete saved progress.',
      ],
    ],
  },
  '/terms/': {
    title: 'Terms of Use',
    description: 'Terms for using the Drink the Ocean guides and embedded browser player.',
    sections: [
      [
        'Using the site',
        'DrinktheOceanSteam.shop publishes independent game guides and links to an embedded browser player. Use the site lawfully and avoid interfering with its operation or other visitors.',
      ],
      [
        'Game and third-party services',
        'Playgama hosts the embedded browser game. Its own terms apply when you use the player. Game names, artwork, and logos belong to their respective owners.',
        'Playgama Terms of Use',
        'https://playgama.com/termsofuse',
      ],
      [
        'Game availability and information',
        'Game controls, features, and availability can change. Guides reflect the browser edition described on the site. The player and advertisements are provided by third parties, and availability may vary by device, location, or browser.',
      ],
      [
        'Changes to these terms',
        'We may update these terms as the site and its services change. The date shown on this page identifies the latest revision.',
      ],
    ],
  },
  '/about-this-site/': {
    title: 'About This Site',
    description: 'About this independent Drink the Ocean guide and browser play site.',
    sections: [
      [
        'What you can find here',
        'Find the Steam release status, learn the controls, and get help choosing your first upgrades. The game page includes a playable browser edition hosted by Playgama.',
      ],
      [
        'Who runs the game',
        'DrinktheOceanSteam.shop is an independent guide site. The game and its assets belong to their respective owners. Our guides describe the browser edition embedded here.',
      ],
    ],
  },
} as const;
