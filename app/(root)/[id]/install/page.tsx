import ChannelInstallationPageView from "@/components/component/channel-installation-page-view";












export default function Page({ params }: { params: { id: string } }) {
    return <ChannelInstallationPageView id={params.id} />
}