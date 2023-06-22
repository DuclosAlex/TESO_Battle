import styles from './campaing.module.css'

export default function campaignLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={`h-full ${styles.layoutStyles}`}>
            
            {children}
        </section>
    )
}