export const metadata = {
    title: 'EASY DIET | Login',
    description: 'EASY DIET Login',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'EASY DIET | Login',
        url: process.env.WEBSITE_URL,
        description: 'EASY DIET Login',
        images: ['/logo.png'],
        ttl: 604800
    },
    icons: {
        icon: '/logo.png'
    }
};

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">{children}</div>
        </div>
    );
}
