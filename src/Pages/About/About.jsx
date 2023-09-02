import mahmud from "../../assets/img/mahmud.jpg";

const About = () => {
  return (
    <>
      <div className="max-w-lg mx-auto py-7">
        <h1 className="text-5xl font-bold mb-5 text-center">About me</h1>
        <img src={mahmud} alt="" />
        <p className="mt-5">
          Hello there! I'm Mahmud Husssain, a passionate and dedicated full
          stack developer with a keen eye for detail and a deep love for
          crafting innovative digital solutions. With 3 years of experience in
          the world of web development, My journey began with a fascination for
          coding during my early years, and that curiosity has led me to become
          proficient in both front-end and back-end technologies. On the
          front-end, I excel at translating user needs and design concepts into
          responsive, visually appealing interfaces. I'm well-versed in HTML,
          CSS, and JavaScript, and I have hands-on experience with popular
          libraries and frameworks like React, I'm always up for the next
          adventure that allows me to blend creativity, logic, and technology.
          Thank you for taking the time to learn a bit about me. If you're
          interested in discussing a project, sharing ideas, or simply geeking
          out about technology, feel free to reach out. Let's embark on a
          journey to turn ideas into reality! Feel free to personalize and
          tailor this content to your own experiences, skills, and style.
        </p>
      </div>
    </>
  );
};

export default About;
