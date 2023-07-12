import { NextPage } from "next";
import styles from './slug.module.css';
import StageBox from "./components/stageBox/StageBox";

export default async function Stage({params}: {params: {slug: string}}) {

    const {slug} = params;

    const res = await fetch(`http://localhost:8000/api/stages/findWithEnnemies/${slug}`, { cache : "no-cache"});
    const result = await res.json();


    console.log(params);
    return (
        <div className={`${styles.stagePageContainer} flex flex-col items-center justify-center m-auto
        ${slug === 'pact' ? 'bg-red-400' : slug === 'domain' ? 'bg-yellow-400' : slug === 'alliance' ? 'bg-blue-400' : ''}`}>
            <div id="modal-root"></div> 
            {result.map((stage: any) => (
                <StageBox key={stage.id} {...stage} />
            ))} 
        </div>
    )
}