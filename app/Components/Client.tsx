import React from "react";
import { motion } from "framer-motion";

const Client = () => {
  const clients = [
    {
      id: 1,
      name: "Spazio",
      logo: "https://static.wixstatic.com/media/c837a6_eee981d6e5314522abf72095136c74be~mv2.png/v1/fill/w_211,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eee981d6e5314522abf72095136c74be~mv2.png",
    },
    {
      id: 5,
      logo: "https://static.wixstatic.com/media/c837a6_0b38254265324ec795dbde5e40f36a40~mv2.png/v1/fill/w_224,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pjx_log.png",
      name: "PJX",
    },
    {
      id: 6,
      logo: "https://static.wixstatic.com/media/c837a6_d487752f58274f02a3b4a3846ef8946d~mv2.png/v1/fill/w_223,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/motorks_log.png",
      name: "motorxs",
    },
    {
      id: 10,
      name: "natura",
      logo: "https://static.wixstatic.com/media/c837a6_318fc5d9088a454d948bbe1bb5b6f8b4~mv2.png/v1/fill/w_211,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/natura_logo.png",
    },
    {
      id: 25,
      name: "drivilux",
      logo: "https://static.wixstatic.com/media/84770f_85c01069f145488cb0691d22499ae74f~mv2.png/v1/fill/w_224,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/drivilux.png",
    },
    {
      id: 8,
      name: "image",
      logo: "https://static.wixstatic.com/media/c837a6_227980bf0d1347f485eb5c00f9145652~mv2.png/v1/fill/w_224,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image_logo.png",
    },
  ];
  return (
    <div className="bg-[#2C2713] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-white text-sm font-semibold tracking-wider uppercase">
            Our Happy Clients
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight">
            We Treat Every Client Like Family
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16">
            {clients.map((client) => (
              <motion.div key={client.id} className="">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
