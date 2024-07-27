function GeneralInfoForm() {
  return (
    <div id="gen-info">
      <form action="">
        <legend>General Information</legend>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfoForm;
