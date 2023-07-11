export default function campaignLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-full">
            {children}
        </section>
    )
}