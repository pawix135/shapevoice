import trustedLogos from "../../../assets/trusted_logos.png";

const TrustedSection: React.FunctionComponent = () => {
  return (
    <section className="flex flex-col container mx-auto gap-5 px-5 my-14 md:my-24 lg:my-36">
      <h3 className="font-bold text-base text-center">
        Trusted By Over 100+ Startups and freelance business
      </h3>
      <img
        className="object-scale-down"
        src={trustedLogos}
        alt="business logos"
      />
    </section>
  );
};

export default TrustedSection;
