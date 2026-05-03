import profile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div className="mt-16 w-[300px] h-[300px] overflow-hidden rounded-full shadow-lg">
        <img
            src= {profile}
            alt={"Profile"}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
      </div>
    </>
  );
}
export default About;