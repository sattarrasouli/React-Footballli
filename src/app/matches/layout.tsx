import SearchInput from "@/components/SearchInputInHeader/SearchInput"
import HeaderTitle from "./(components)/HeaderTitle/HeaderTitle"
import MatchTabs from "./(components)/TabsSection/Tabs"

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="p-4">
                <HeaderTitle />
                <SearchInput />
            </div>

            <MatchTabs />
            {children}
        </section>
    )
}