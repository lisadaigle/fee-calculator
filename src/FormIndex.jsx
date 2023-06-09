export function FormIndex() {
  return (
    <div>
      <form>
        <h3> Type of Permit </h3>
        <label>
          <input type="radio" name="permitType" value="comercial"></input>
          Commercial
        </label>
        <label>
          <input type="radio" name="permitType" value="residential"></input>
          Residential
        </label>
        <p></p>
        <label>
          Please enter the estimated value of this project:
          <p></p>
          <input type="number" pattern="[0-9]" name="permitAmount"></input>
        </label>
        <p>
          Note: In this context, value refers to the total cost of the project- materials and labor. Please include
          labor costs in your estimate, even if you are performing the work yourself.
        </p>
        <p>
          If the estimate is too low, the Building Official may request documentation, adjust the value to a reasonable
          amount, and charge additional fees accordingly.
        </p>
        <label>
          {" "}
          <input type="submit" name="submit button" value="Calculate" />{" "}
        </label>
      </form>
    </div>
  );
}
