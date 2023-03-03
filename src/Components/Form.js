export default function Form({ hornsFilter, setHornsFilter }) {
  function handleFilter(event) {
    setHornsFilter(event.target.value);
  }

  return (
    <form className="dropdown">
      <select name="hornsFilter" onChange={handleFilter}>
        <option value="" selected>
          # Of Horns
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </select>
      {hornsFilter && <p>Filtering by {hornsFilter} Horns</p>}
    </form>
  );
}
