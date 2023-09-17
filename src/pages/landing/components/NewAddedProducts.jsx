import {Card} from "../../../components";

export function NewAddedProducts () {
    return(
        <div className="flex flex-col min-h-screen pt-16 max-w-[1200px] mx-auto gap-6" >
            <div className="px-20 flex justify-between items-center">
                <h1 className="text-2xl font-bold">ახალი დამატებული</h1>
                <a href='#' className="text-sm">მეტის ნახვა</a>
            </div>
            <div className="flex flex-wrap gap-4 justify-between px-20">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}