const Contact = () => {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <fieldset style={styles.fieldset}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formState.firstName}
          onChange={handleFormChange}
          onBlur={handleBlur}
          style={
            formState.touched.firstName && !formState.firstName
              ? { ...styles.input, borderColor: "red" }
              : styles.input
          }
        />
        {formState.touched.firstName && !formState.firstName && (
          <div style={{ color: "red" }}>Required</div>
        )}

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
          onBlur={handleBlur}
          style={
            formState.touched.email &&
            (!formState.email || !/\S+@\S+\.\S+/.test(formState.email))
              ? { ...styles.input, borderColor: "red" }
              : styles.input
          }
        />
        {formState.touched.email && !formState.email && (
          <div style={{ color: "red" }}>Required</div>
        )}
        {formState.touched.email &&
          formState.email &&
          !/\S+@\S+\.\S+/.test(formState.email) && (
            <div style={{ color: "red" }}>Invalid email address</div>
          )}

        <label htmlFor="inquiryType">Type of Inquiry:</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formState.inquiryType}
          onChange={handleFormChange}
          style={styles.select}
        >
          <option value="">Select an option</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleFormChange}
          onBlur={handleBlur}
          rows={10}
          cols={50}
          style={
            formState.touched.message &&
            (!formState.message || formState.message.length < 25)
              ? { ...styles.textarea, borderColor: "red" }
              : styles.textarea
          }
        />
        {formState.touched.message && !formState.message && (
          <div style={{ color: "red" }}>Required</div>
        )}
        {formState.touched.message &&
          formState.message &&
          formState.message.length < 25 && (
            <div style={{ color: "red" }}>Must be at least 25 characters</div>
          )}

        <button type="submit" style={styles.submitBtn}>
          Submit <i className="fas fa-paper-plane"></i>
        </button>
      </fieldset>
    </form>
  );
};

export default Contact;
