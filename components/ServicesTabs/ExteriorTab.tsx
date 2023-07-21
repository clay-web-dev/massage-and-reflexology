import Link from "next/link";

const ExteriorTab: React.FC = () => {
  return (
    <div className="con active" id="residential-tab">
      <div className="pb-5">
        <p>
          Painting the outside of a building is quite different from painting
          the inside. Exteriors, exposed to rain and harsh elements means the
          exteriors have to be more durable. We always use top quality paints,
          tough fillers and materials to make sure the paint job will last as
          long as possible.
        </p>
        <br />
        <p>
          We can undertake all types of commercial painting and decorating, and
          our experience and expertise are second to none.
        </p>
      </div>

      <button className="get-a-quote bg-blue-900 text-white p-3 text-xs rounded font-bold uppercase border-2  border-blue-900 mr-2">
        <Link href="/exterior"> Read more</Link>
      </button>
    </div>
  );
}

export default ExteriorTab;
