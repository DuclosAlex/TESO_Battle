export default function campaignLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-full flex items-center">
            {children}
        </section>
    )
}