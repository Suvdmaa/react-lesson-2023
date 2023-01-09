import PlayButton from "./Playbutton";
import UploadButton from "./Uploadbutton";

export default function ToolBarNext(){
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    )
}