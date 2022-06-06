import React from 'react'

const FAQ = ({ title, answer, border }) => {
    const [show, setShow] = React.useState(false);
    const accordionBody = React.useRef();

  const handler = () => {
    setShow(!show);
  };


  return (
    <>
    <div className={`bg-transparent transition text-white w-full overflow-hidden ${border}`}>
      <div
        className={` py-[28px] transition flex items-center justify-between cursor-pointer ${show ? "active" : ""}`}
        onClick={handler}
      >
        <p className="mr-[2rem] transition font-[700] text-[19px] md:text-[22px]">{title}</p>{" "}
        <div className="transition">
          {show ? <img src="/images/minus.svg" alt="minus" /> : <img src="/images/plus.svg" alt="plus" />}
        </div>
      </div>
      <div
        className="h-0"
        style={{
          height: show ? accordionBody?.current?.scrollHeight + "px" : 0,
          transition: "0.2s"
        }}
        ref={accordionBody}
      >
        <div className="transition pb-6">
          <p className="opacity-60 leading-loose">
            {answer}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQ