'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useLayoutEffect } from 'react'

function DateTabs() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const date = searchParams.get('date')
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    function getFormattedDate(offset = 0) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + offset);

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const today = getFormattedDate(); // Today
    const yesterday = getFormattedDate(-1); // Yesterday
    const nextDay = getFormattedDate(1); // Next day
    console.log('date', date)
    console.log('today', today)
    useLayoutEffect(() => {
        router.push(pathname + '?' + createQueryString('date', today))
    }, [])

    return (
        <div className='w-full text-TextGray mt-4'>
            <a onClick={() => {
                router.push(pathname + '?' + createQueryString('date', yesterday))
            }} className={`font-IranSans text-lg ml-10 ${date === yesterday && 'border-b-4'} border-TextGreen pb-3`}
            >دیروز</a>
            <a
                onClick={() => {
                    router.push(pathname + '?' + createQueryString('date', today))
                }}
                className={`font-IranSans text-lg ml-10 ${date === today && 'border-b-4'} border-TextGreen pb-3`}
            >امروز</a>
            <a className={`font-IranSans text-lg ml-10 ${date === nextDay && 'border-b-4'} border-TextGreen pb-3`}
                onClick={() => {
                    router.push(pathname + '?' + createQueryString('date', nextDay))
                }}
            >فردا</a>
            <a className='font-IranSans text-lg ml-10' >۲۱ شهریور</a>
        </div>
    )
}

export default DateTabs