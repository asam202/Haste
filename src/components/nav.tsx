import { FaSave } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import {ModeToggle} from "@/components/mode-toggle";
export default function Nav() {
    return (
        <div className="bg-black/80 rounded-bl-lg flex flex-col w-fit gap-2">
            <div className="text-2xl font-bold text-violet-300 bg-accent/10 w-full h-full p-6">
                Karppa Haste
            </div>
            <div className="w-full h-fit flex justify-center items-center gap-8 p-2">
                <Button variant="outline">
                    <FaSave className="size-6" />
                </Button>
                <Button variant="outline">

                    <CiCirclePlus className="size-6" />
                </Button>
                <ModeToggle/>
            </div>
        </div>
    )
}