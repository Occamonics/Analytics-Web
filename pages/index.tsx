import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                {/*<h2 className={utilStyles.headingLg}>Data</h2>*/}
                <ul className={utilStyles.list}>
                    {/*<li className={utilStyles.listItem}>*/}
                    {/*    <Link href={`/insights/dailySessions`}>Daily Sessions</Link>*/}
                    {/*</li>*/}
                    {/*<li className={utilStyles.listItem}>*/}
                    {/*    <Link href={`/insights/topIntents`}>Top Intents</Link>*/}
                    {/*</li>*/}
                    {/*<li className={utilStyles.listItem}>*/}
                    {/*    <Link href={`/insights/sessionsPerCountry`}>Sessions Per Country</Link>*/}
                    {/*</li>*/}
                    {/*<li className={utilStyles.listItem}>*/}
                    {/*    <Link href={`/insights/percentagePerCountry`}>Percentage Per Country</Link>*/}
                    {/*</li>*/}
                    <li className={utilStyles.listItem}>
                        <Link href={`/conversations`}>Analytics</Link>
                    </li>
                </ul>
            </section>
        </div>
    )
};
