import Picture from "./Picture";
 
function Student(props) {

    return (
        <div>
            {props.sname}

            <p>{props.children}</p>
            
<Picture imagepath="logo192.png"></Picture>

        </div>
    );
}

export default Student;
