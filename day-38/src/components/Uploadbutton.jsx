import ChildButton from "./Childbutton"

export default function UploadButton(){
    return (
        <ChildButton onClick={()=> alert('Uploading!')}>
        Uploading Image
        </ChildButton>
    )
}