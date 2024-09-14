const Location = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Ubicación</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.8376596732202!2d-77.10216924193004!3d-12.071262840523667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c977a6e3c26d%3A0xf168c43ae9ecfbfe!2sAcademia%20de%20F%C3%BAtbol%20Dieka%20-%20Sede%20San%20Miguel!5e1!3m2!1sen!2spe!4v1726279711679!5m2!1sen!2spe"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        allowFullScreen
        className="w-full max-w-4xl h-96 border-0"
      ></iframe>
    </div>
  );
};

export default Location;
