import { DocumentArrowDownIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Nav() {
    return (
        <div className=" w-fit h-fit">
            <div className='p-2'>

                <div className=" px-4 py-2 bg-background/90 rounded-xl flex items-center gap-3">
                    <Button asChild className="p-2 hover:bg-accent/50 rounded-lg transition-colors">


                        <Link href={""}>
                            <DocumentArrowDownIcon className="size-6" />
                        </Link>

                    </Button>
                    <Button asChild className="p-2 hover:bg-accent/50 rounded-lg transition-colors">

                        <Link href="/">

                            <PlusIcon className="size-6 " />
                        </Link>

                    </Button>
                </div>
            </div>

        </div>
    )
}