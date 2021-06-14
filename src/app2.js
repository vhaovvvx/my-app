const [showPerson, setShowPerson] = useState(true);

const [persons, SetPersons] = useState([
  { name: "Anhdeptrai", age: 21 },
  { name: "DoVanHung", age: 21 },
  { name: "DoDucHuy", age: 26 },
]);

const changeHandler = (e) => {
  setShowPerson(!showPerson);
};
const deletePerson = (personsIndex) => {
  let newPerson = [...persons];
  newPerson.splice(personsIndex, 1);
  SetPersons(newPerson);
};

const style = {
  backgroundColor: "green",
  font: "inherit",
  border: "1px solid blue",
  margin: "8px",
  cursor: "pointer",
};
let personss = null;
if (showPerson === true) {
  personss = (
    <>
      {persons.map((item, index) => {
        return (
          <Person
            key={index}
            click={() => deletePerson(index)}
            name={item.name}
            age={item.age}
          ></Person>
        );
      })}
    </>
  );
  style.backgroundColor = "red";
}
// set class dong theo dieu kien cua du lieu
let classes = [];
if (persons.length <= 2) {
  classes.push("red");
}
if (persons.length <= 1) {
  classes.push("bold");
}
