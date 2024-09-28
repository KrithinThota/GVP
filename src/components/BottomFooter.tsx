export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-300 py-6 text-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <img
            src="/zoirw.png"
            alt="GVP College of Engineering Logo"
            className="h-16 mx-auto md:mx-0"
          />
        </div>

        <div className="text-neutral-700 text-sm">
          <h3 className="font-bold text-lg text-neutral-900">
            Gayatri Vidya Parishad College of Engineering
          </h3>
          <p className="italic">(Autonomous)</p>
          <p className="mt-2">
            Approved by AICTE & Affiliated to Andhra University, Visakhapatnam
            from 2022-23 <br />
            (Affiliated to JNTUK, Kakinada up to 2021-22)
          </p>
          <p className="mt-2">
            Accredited twice by NAAC with 'A' Grade with a CGPA of 3.47/4.00
          </p>
          <p className="mt-2">Madhurawada, Visakhapatnam - 530048</p>
        </div>
      </div>
    </footer>
  );
}
