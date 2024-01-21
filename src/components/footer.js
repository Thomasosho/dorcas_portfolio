import { Marcellus } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Marcell = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        // Email sent successfully
        setSuccess(true);
        setError(null);
        console.log("Email sent successfully");
      } else {
        // Email sending failed
        setSuccess(false);
        setError(data.error || "Unknown error occurred");
        console.error("Email sending failed:", data.error);
      }
    } catch (error) {
      // Network or other errors
      setSuccess(false);
      setError("An unexpected error occurred. Please try again later.");
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div
      id="footer"
      className="w-screen h-[auto] bg-[#595959] lg:flex lg:flex-col justify-center items-center text-center"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-1 items-center reveal fade-bottom">
        <div className="col-auto lg:p-32 p-10 w-auto justify-self-center">
          <Image
            src="/purpleGirl.png"
            alt="Dorcas Charles"
            width={157}
            height={251}
            priority
          />
        </div>
        <div className="col-auto text-center w-auto text-wrap text-xl text-white justify-self-center mx-auto fix">
          <div className="text-[#B464A3] uppercase mt-6 flex items-center text-[normal] mb-5 bg-white w-[100%] justify-center">
            work with me
          </div>
          <p className={`text-white mb-5 ${Marcell.style.fontFamily}`}>
            Let’s create amazing projects
          </p>
          <div className="flex grid grid-cols-5 mt-6">
            <Link
              target="_blank"
              href={"mailto:charlesdorcas01@gmail.com"}
              className={`mt-2`}
            >
              <Image
                src="/email.png"
                alt="Dorcas Charles"
                width={30}
                height={30}
                priority
              />
            </Link>

            <Link target="_blank" href={"tel:+447442885430"} className={`mt-2`}>
              <Image
                src="/call.png"
                alt="Dorcas Charles"
                width={30}
                height={30}
                priority
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://behance.net/charlesdorcas"}
              className={`mt-2`}
            >
              <Image
                src="/be.png"
                alt="Dorcas Charles"
                width={38}
                height={38}
                priority
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://dribble.com/charlesdorcas01"}
              className={`mt-2`}
            >
              <Image
                src="/ball.png"
                alt="Dorcas Charles"
                width={30}
                height={30}
                priority
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://linkedin.com/in/dorcas-charles"}
              className={`mt-2`}
            >
              <Image
                src="/in.png"
                alt="Dorcas Charles"
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="col-auto p-10">
          <div className="text-[#fff] uppercase mt-6 flex items-center text-left mb-5 w-[100%] justify-left">
            Let’s connect!
          </div>
          <div className="max-w-md mx-auto mt-10 rounded-md">
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[1/3] float-left bg-[#B464A3] text-white px-4 py-2 rounded-md focus:outline-none"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && (
                <p className="text-green-500">Email sent successfully!</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-white p-10">
        Copyright {currentYear} - All rights reserved
      </div>
    </div>
  );
}
