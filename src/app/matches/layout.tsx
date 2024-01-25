'use client'
import SearchInput from "@/components/SearchInputInHeader/SearchInput"
import HeaderTitleInMatches from "./(components)/HeaderTitleInMatches/HeaderTitleInMatches"
import DateTabs from "./(components)/TabsSection/Tabs"

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="p-4 pb-0 bg-white">
                <HeaderTitleInMatches />
                <SearchInput />
                <DateTabs />
            </div>
            {children}
        </section>
    )
}