
 
function Picture(props) {

    return (
        <div>
            <img src={props.imagepath}></img>

            <p>{props.children}</p>


        </div>
    );
}

export default Picture;
