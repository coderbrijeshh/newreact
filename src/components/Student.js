 
let name="Mukesh";
function Student(props) {
  return (
   <div>
    {props.sname}

    <p>{props.children}</p>
    </div>
  );
}

export default Student;
