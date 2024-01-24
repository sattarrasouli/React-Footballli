'use client'
import LoaderCss from '@/components/LoaderCss/LoaderCss';
import useFetch from '@/hook/FetchApi/FetchApi';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

interface Match {
    home: {
        logo: string;
        name: string;
    };
    away: {
        logo: string;
        name: string;
    };
    id: string;
    start_time: string;
}

interface Leagues {
    fixtures: Match[];
    logo: string;
    id: string;
    name: string;
    season: string;
}

const GameSectionDropDown: React.FC = () => {``
    const [openLeagues, setOpenLeagues] = useState<string[]>([]);
    const searchParams = useSearchParams()
    const date = searchParams.get('date')

    const { data, error, loading } = useFetch(
        `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`
    );

    const handleDropDown = (leagueId: string) => {
        setOpenLeagues((prevOpenLeagues) =>
            prevOpenLeagues.includes(leagueId)
                ? prevOpenLeagues.filter((id) => id !== leagueId)
                : [...prevOpenLeagues, leagueId]
        );
    };
    console.log('data', data)
    console.log('loading', loading)
    return (
        <div className="flex flex-col w-full pb-14">
            {loading && <div className='w-full mt-20 flex justify-center'><LoaderCss /></div>}
            {data &&
                data?.all?.map((league: Leagues) => (
                    <div
                        key={league.id}
                        className={`flex flex-col my-3 text-left w-full bg-white shadow-md rounded-md overflow-hidden transition-max-height duration-500 ease-in-out ${openLeagues.includes(league.id) ? '' : 'max-h-14'
                            }`}
                    >
                        <button
                            onClick={() => handleDropDown(league.id)}
                            className="flex flex-row justify-between w-full border-b p-3 border-DefaultGray"
                        >
                            <div className="flex">
                                <img
                                    alt="team-logo"
                                    src={league.logo}
                                    loading="lazy"
                                    width={25}
                                    height={20}
                                    className="rounded-full"
                                />
                                <span className="font-IranSans text-lg mx-2 text-blue">{league.name}</span>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-6 h-6 transition transform duration-300 ${openLeagues.includes(league.id) ? '' : 'rotate-180'
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        </button>
                        {openLeagues.includes(league.id) && (
                            <div className="flex flex-col p-2">
                                {league.fixtures.map((match: Match) => (
                                    <MatchItem key={match.id} match={match} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default GameSectionDropDown;

interface Match {
    home: {
        logo: string;
        name: string;
    };
    away: {
        logo: string;
        name: string;
    };
    id: string;
    start_time: string;
}

interface MatchItemProps {
    match: Match;
}

const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
    const startTime = new Date(match.start_time);
    const formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false, });

    return (
        <div className="flex flex-row justify-around p-2 my-2 border-b border-DefaultGray">
            <div className="flex flex-row items-center">
                <span className="font-IranSansLight mx-2 max-w-[100px] truncate" >{match.home.name}</span>
                <img src={match.home.logo} width={25} height={20} alt="team-a-logo" className="rounded-full" />
            </div>
            <p className="font-IranSansLight">{formattedTime}</p>
            <div className="flex flex-row items-center">
                <img src={match.away.logo} width={25} height={20} alt="team-b-logo" className="rounded-full" />
                <span className="font-IranSansLight mx-2 max-w-[100px] truncate">{match.away.name}</span>
            </div>
        </div>
    );
};
