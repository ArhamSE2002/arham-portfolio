import type { Metadata } from 'next';
import '@/styles/globals.css';
import { contactDetails, bioSummary } from '@/data/portfolioData';

export const metadata: Metadata = {
  metadataBase: new URL('https://arham-portfolio.vercel.app'),
  title: 'M. Arham | Expert Flutter Developer & Software Engineer',
  description:
    'Portfolio of M. Arham — an Expert Flutter Developer and Software Engineer (CGPA 3.58). Specializing in high-performance cross-platform mobile apps, Supabase, clean architecture, and full-stack web solutions.',
  keywords: [
    'Arham Flutter Developer',
    'Arham Software Engineer',
    'M. Arham',
    'ArhamSE2002',
    'Flutter Developer Pakistan',
    'Flutter Architect',
    'Dart Developer',
    'Mobile Application Engineer',
    'Cross-Platform App Development',
    'Supabase Developer',
    'Next.js Developer',
    'Bahawalpur Software Engineer',
  ],
  authors: [{ name: 'M. Arham', url: 'https://github.com/ArhamSE2002' }],
  creator: 'M. Arham',
  publisher: 'M. Arham',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://arham-portfolio.vercel.app',
    title: 'M. Arham | Expert Flutter Developer & Software Engineer',
    description:
      'High-performance cross-platform mobile applications, clean architecture, and full-stack systems by M. Arham.',
    siteName: 'M. Arham Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'M. Arham - Expert Flutter Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Arham | Expert Flutter Developer & Software Engineer',
    description:
      'Specialized in Flutter, Dart, Clean Architecture, and Full-Stack Engineering.',
    images: ['/avatar.jpg'],
  },
  alternates: {
    canonical: 'https://arham-portfolio.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://arham-portfolio.vercel.app/#person',
        name: 'M. Arham',
        alternateName: ['Arham', 'ArhamSE2002', 'Muhammad Arham'],
        jobTitle: 'Expert Flutter Developer & Software Engineer',
        description: bioSummary.tagline,
        url: 'https://arham-portfolio.vercel.app',
        image: 'https://arham-portfolio.vercel.app/avatar.jpg',
        email: contactDetails.email,
        telephone: contactDetails.phone,
        sameAs: [
          contactDetails.githubUrl,
          contactDetails.linkedinUrl,
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'The Islamia University of Bahawalpur',
        },
        knowsAbout: [
          'Flutter Framework',
          'Dart Programming',
          'Cross-Platform Mobile Development',
          'Clean Architecture',
          'GetX State Management',
          'Supabase',
          'Firebase',
          'REST APIs',
          'Next.js',
          'TypeScript',
          'Python',
          'Data Analysis (EDA)',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://arham-portfolio.vercel.app/#website',
        url: 'https://arham-portfolio.vercel.app',
        name: 'M. Arham | Flutter Developer & Software Engineer Portfolio',
        publisher: {
          '@id': 'https://arham-portfolio.vercel.app/#person',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
