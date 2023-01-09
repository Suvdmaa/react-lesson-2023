import AlertButton from "./alertbutton";

export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing">Play Movie</AlertButton>
            <AlertButton message="Uploading">Upload Image</AlertButton>
        </div>
    )
}