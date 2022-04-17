import React, {FC, useEffect} from 'react';

const isBrowser = typeof window !== "undefined"

const ContactForm: FC = () => {
   if (isBrowser) {
      useEffect(() => {
      const handleSubmit = (e) => {
         e.preventDefault();
         let myForm = document.getElementById("contactForm");
         let formData = new FormData(myForm);
         fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
         })
         .then(() => console.log("Form successfully submitted"))
         .catch((error) => alert(error));
         }
          
       document
            .querySelector("form")
            .addEventListener("submit", handleSubmit);
         }),[];
   }
   
    return (
        <section id="contact" className='container mx-auto bg-teal-500 rounded-xl mb-24'>
            <div className='p-8 py-16'>
            <h2 className="text-center text-6xl text-white mb-8">Contact Us</h2>
            <form id="contactForm" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-6">
                    <label className="text-white" htmlFor="contact-name">Name: </label>
                     <input
                        required
                        name="contact-name"
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div className="mb-6">
                  <label className="text-white" htmlFor="contact-email">Email: </label>
                     <input
                        required
                        name="contact-email"
                        id="contact-email"
                        type="email"
                        placeholder="Your Email"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div className="mb-6">
                  <label className="text-white" htmlFor="contact-message">Message: </label>
                     <textarea
                        required
                        name="contact-message"
                        id="contact-message"
                        rows={4}
                        placeholder="Your Message"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-f
                        focus-visible:shadow-f
                        focus:border-primary
                        "
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Send Message
                     </button>
                  </div>
               </form>
            </div>
        </section>
    )
}

export default ContactForm