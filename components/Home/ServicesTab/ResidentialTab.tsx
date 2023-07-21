import Link from "next/link";
import Image from 'next/image';
import Check from "../../../assets/check.svg";

const ResidentialTab: React.FC = () => {
  return (
    <div id="residential-tab">
      <p>
        Specialising in interior and exterior painting, we are fully equipped
        and trained to finish the job at the highest standard.
      </p>
      <br />
      <ul className="pb-5">
        <li>
          <div className="flex center-left pb-1">
            <Image
              src={Check}
              alt=""
              className="pr-3"
            />
            <p>Painting of walls and doors,</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1">
            <Image
              src={Check}
              alt=""
              className="pr-3"
            />
            <p>Repair and painting of window frames and sills,</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1">
            <Image
              src={Check}
              alt=""
              className="pr-3"
            />
            <p>General small carpentry jobs,</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1">
            <Image
              src={Check}
              alt=""
              className="pr-3"
            />
            <p>Tiling, etc.</p>
          </div>
        </li>
      </ul>

      <button className=" bg-blue-900 text-white p-3 text-xs rounded font-bold uppercase border-2  border-blue-900 mr-2">
        <Link href="/residential"> Read more</Link>
      </button>
    </div>
  );
};

export default ResidentialTab;
