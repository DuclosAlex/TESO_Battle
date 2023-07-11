import styles from './gameHome.module.css'

export default function GameHomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={`h-full ${styles.gameHomelayoutStyles}`}>
            
            {children}
        </section>
    )
}