import Link from "next/link";

async function getCampaign() {
    const res = await fetch('http:localhost:8000/api/campaigns/findAll');
    return res.json()
}

const CampaignMenu: React.FC = async () => {

    const campaingsData = await getCampaign();
    console.log(campaingsData)

    return (
        <div className="flex flex-row justify-around pt-6">
            {campaingsData.map((campaign: any) => (
                    <Link className="p-4 bg-blue-300/30 rounded-lg hover:bg-blue-400/40 hover:scale-110" href={`gameHome/campaign/${campaign.slug}`}>{campaign.name}</Link>

            ))}
        </div>
    )
}

export default CampaignMenu;