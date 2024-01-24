import SearchInput from "@/components/SearchInputInHeader/SearchInput"
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle"
import DateTabs from "./(components)/TabsSection/Tabs"
import Dock from "@/components/Dock/Dock"
import HeaderTitleInMatches from "./(components)/HeaderTitleInMatches/HeaderTitleInMatches"

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="p-4 bg-white">
                <HeaderTitleInMatches />
                <SearchInput />
                <DateTabs />
            </div>
            {children}
        </section>
    )
}