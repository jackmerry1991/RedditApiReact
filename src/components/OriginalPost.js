import SidePanel from './SidePanel';
import PanelFooter from './PanelFooter';
import './Posts.css'

const OriginalPost = (props) => {

    const isImage = (image) => {
        if(image.indexOf('png') !== -1 || image.indexOf('jpg') !== -1){
            return true;
        }else{
            return false;
        }
    }

    return(
        <div className="mainPanel" id="originalPostPanel">
                <h1>{props.heading}</h1>
            <div className="panelCenter">
                <div className="leftPanel">
                    <SidePanel votes={props.votes} />
                    {/* <img src={props.image} onError={(e) => e.target.style.display = "none"} alt="preview"/> */}
                </div>
                <div className = "preview">
                    {isImage(props.image) ? <img id="preview-image" src={props.image} alt="thumbnail" onError={(e) => e.target.style.display = "none"}/> : <p id="preview-text">{props.selfText}</p>}
                </div>
            </div>
        <div className="panelFooter">
            <PanelFooter poster={props.author} time={props.time} responses={props.responses}/>       
            </div>
        </div>
    )
}

export default OriginalPost;