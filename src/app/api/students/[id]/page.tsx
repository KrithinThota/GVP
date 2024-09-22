import { Sidebars } from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Home({ params }: { params: { id: string } }) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:profile");
  if (!permission?.isGranted) {
    return <div>Access Denied</div>;
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/5 h-screen flox-shrink-0 overflow-hidden">
          <Sidebars />
        </div>
        <div className="flex-grow h-full overflow-y-auto items-center justify-center py-2 ">
          <div className="container mx-auto py-10 px-5">
            <h1 className="text-5xl font-bold text-center mb-6">About Us </h1>
            <h1 className="text-5xl font-bold text-center mb-6">{params.id}</h1>

            <p className="mb-4">
              The Gayatri Vidya Parishad College of Engineering [GVPCE] had its
              humble beginning in December 1996 with 4 branches and 200 intake
              established under the parent society ‘Gayatri Vidya Parishad’
              (GVP), a non-profitable organization comprising of noted
              educationists and eminent philanthropists who have a missionary
              zeal to provide quality technical education. From that point on,
              the college has very quickly established itself as one of the
              most-preferred self-financing engineering colleges in Andhra
              Pradesh offering 10 B.Tech. Programs, 5 M.Tech. and one MCA
              Program approved by AICTE with an intake of 1260.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Accreditations</h2>
            <ul className="list-disc ml-8 mt-2">
              <li>NAAC: Accredited twice with “A” grade, CGPA of 3.47/4.00</li>
              <li>NBA: All B.Tech. programs accredited at least twice.</li>
              <li>
                UGC: Autonomous status since 2009, under UGC 2(f) and 12(B).
              </li>
              <li>
                NIRF: Ranked for 6 consecutive years, in the Band of 151-300 in
                the Innovation Category (2023).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Programs Offered</h2>

            {/* Table for UG programs */}
            <h3 className="text-xl font-semibold mt-4">
              Under-Graduate Programs
            </h3>
            <table className="min-w-full bg-white border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Branch</th>
                  <th className="py-2 px-4 border-b">Year of Inception</th>
                  <th className="py-2 px-4 border-b">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Chemical Engineering</td>
                  <td className="py-2 px-4 border-b">1996</td>
                  <td className="py-2 px-4 border-b">60</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Computer Science and Engineering
                  </td>
                  <td className="py-2 px-4 border-b">1996</td>
                  <td className="py-2 px-4 border-b">240</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Artificial Intelligence and Machine Learning
                  </td>
                  <td className="py-2 px-4 border-b">2020</td>
                  <td className="py-2 px-4 border-b">60</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Data Science</td>
                  <td className="py-2 px-4 border-b">2020</td>
                  <td className="py-2 px-4 border-b">60</td>
                </tr>
                {/* Add other branches similarly */}
              </tbody>
            </table>

            {/* Table for PG programs */}
            <h3 className="text-xl font-semibold mt-8">
              Post-Graduate Programs
            </h3>
            <table className="min-w-full bg-white border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Program</th>
                  <th className="py-2 px-4 border-b">Year of Inception</th>
                  <th className="py-2 px-4 border-b">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">
                    M.Tech. (Computer Science and Engineering)
                  </td>
                  <td className="py-2 px-4 border-b">2004</td>
                  <td className="py-2 px-4 border-b">12</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    M.Tech. (Power Electronics and Drives)
                  </td>
                  <td className="py-2 px-4 border-b">2012</td>
                  <td className="py-2 px-4 border-b">12</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">M.Tech. (CAD/CAM)</td>
                  <td className="py-2 px-4 border-b">2004</td>
                  <td className="py-2 px-4 border-b">12</td>
                </tr>
                {/* Add other programs similarly */}
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-6">
              Highlights (Infrastructure)
            </h2>
            <p className="mb-4">
              Sprawl over an area of 21 acres with a total built-up area of
              44,000 m², the college offers a serene and eco-friendly learning
              environment. Specialized labs, collaborations with industries, and
              a well-equipped library enhance the student learning experience.
            </p>

            {/* Add other sections similarly */}
          </div>
        </div>
      </div>
    </>
  );
}
