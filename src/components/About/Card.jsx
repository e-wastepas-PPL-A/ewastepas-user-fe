import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imageCompression from "browser-image-compression";

const Card = ({ title, description, teamMembers }) => {
  const [compressedImages, setCompressedImages] = useState([]);

  useEffect(() => {
    const compressImages = async () => {
      const options = {
        maxSizeMB: 0.5, // Maksimal ukuran file 0.5 MB
        maxWidthOrHeight: 800, // Dimensi maksimal 800px
        useWebWorker: true,
      };

      try {
        const compressed = await Promise.all(
          teamMembers.map(async (member) => {
            const originalImage = await fetch(member.image).then((res) =>
              res.blob()
            );
            console.log(
              `Original image (${member.name}) size: ${(
                originalImage.size / 1024
              ).toFixed(2)} KB`
            );

            const compressedImage = await imageCompression(
              originalImage,
              options
            );
            console.log(
              `Compressed image (${member.name}) size: ${(
                compressedImage.size / 1024
              ).toFixed(2)} KB`
            );

            return {
              ...member,
              image: URL.createObjectURL(compressedImage),
            };
          })
        );
        setCompressedImages(compressed);
      } catch (error) {
        console.error("Error compressing images:", error);
      }
    };

    compressImages();
  }, [teamMembers]);

  return (
    <div className="container mx-auto text-center">
      {/* Title Section */}
      <Title role={title} description={description} />

      {/* Team Members Section */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {compressedImages.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <LazyLoadImage
                className="mx-auto object-cover w-24 h-24 rounded-full"
                src={member.image}
                alt={member.name}
                effect="blur"
                width={96}
                height={96}
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
