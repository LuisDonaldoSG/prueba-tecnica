


export const metadata = {
    title: 'Carousel',
    description: 'Carrusel de practica claroshop',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
