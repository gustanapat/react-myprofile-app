const fields = [
  { label: 'Email', name: 'email', type: 'email', autoComplete: 'email' },
  { label: 'Phone', name: 'phone', type: 'tel', autoComplete: 'tel' },
  { label: 'Name', name: 'name', type: 'text', autoComplete: 'name' },
  { label: 'Address', name: 'address', type: 'text', autoComplete: 'street-address' },
]

export default function ContactMe() {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title">Contact <span>Me</span></h1>
      <p className="contact-intro">Let’s get in touch!</p>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        {fields.map(({ label, name, type, autoComplete }) => (
          <label className="contact-field" key={name}>
            {label}
            <input name={name} type={type} autoComplete={autoComplete} />
          </label>
        ))}
        <label className="contact-field message-field">
          Content
          <textarea name="content" rows="4" />
        </label>
        <label className="newsletter">
          <input type="checkbox" name="newsletter" />
          <span>I would like to receive the newsletter.</span>
        </label>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </section>
  )
}
