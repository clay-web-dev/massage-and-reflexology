import Link from "next/link";

const CommercialTab = () => {
  return (
    <div className="con active" id="residential-tab">
      <div className="pb-5">
        <p>
          Repairs and maintenance of all types of commercial properties. From
          shops to offices we can help with all types of commercial painting and
          decorating.
        </p>
        <br />
        <p>
          We use the same eye for detail and attention to care on all of our
          jobs.
        </p>
        <br />

        <p> Customer satisfaction is our priority. </p>
        <p> Please get in touch to find out more.</p>
      </div>

      <button className="get-a-quote bg-blue-900 text-white p-3 text-xs rounded font-bold uppercase border-2  border-blue-900 mr-2">
        <Link href="/commercial"> Read more</Link>
      </button>
    </div>
  );
};

export default CommercialTab;
