import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"}`}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
};

export const Overlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I am Daria
          </h1>
          <p className="text-gray-500">Welcome to my first Three.js job</p>
        </Section>
        <Section right>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets:
          </h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>- React</li>
            <li>- Tailwind</li>
            <li>- Three.js</li>
          </ul>
        </Section>
        <Section>
          <h1 className="font-semibold font-serif text-2xl">
            Nice to meet you!
          </h1>
        </Section>
      </div>
    </Scroll>
  )
};