const CommonLanding: React.FC<{heading: string}> = (props) => {
  return (
    <section className="flex items-center justify-center bg-gray-200 h-[350px] max-sm:h-[300px] max-sm:text-center">
      <div className="max-w-screen-lg m-auto">
        <h3 className="text-blue-900 letter-spacing-1 text-5xl font-bold max-sm:text-3xl">
          {props.heading}
        </h3>
      </div>
    </section>
  );
}

export default CommonLanding;
