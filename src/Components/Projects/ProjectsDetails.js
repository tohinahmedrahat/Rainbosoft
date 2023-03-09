import React from "react";
import business from "../../assets/img/business.jpg";
import mainImage from "../../assets/img/projectmainImage.jpg";

const ProjectsDetails = () => {
  const project = {
    projectName: "Rainbosoft",
    projectCategory: "Business",
    image: business,
    carouselImage: mainImage,
    aboutProject: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

      Where can I get some?

      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

      This is a Text`,
    ClientName: "Razibul Islam",
    Category: "Business",
    Date: "20 September, 2021",
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto max-h-[500px]">
        <img src={project.carouselImage} alt="" className="" />
      </div>
      <div className="my-5 flex">
        <div className="mr-8">
          <h1 className="text-3xl font-semibold">{project.projectName}</h1>
          <p className="text-[#6A6A74] text-lg whitespace-pre-line">
            {project.aboutProject}
          </p>
        </div>
        <div>
          <div className="w-[350px] rounded-lg bg-[#f6f4f9] pt-[52px] px-[60px] pb-[58px]">
            <h3 className="text-[#04000b] text-xl uppercase font-medium mb-2">
              Clients:
            </h3>
            <p className="mb-7 text-lg text-[#726d7b]">{project.ClientName}</p>
            <h3 className="text-[#04000b] text-xl uppercase font-medium mb-2">
              CATEGORY:
            </h3>
            <p className="mb-7 text-lg text-[#726d7b]">
              {project.projectCategory}
            </p>
            <h3 className="text-[#04000b] text-xl uppercase font-medium mb-2">
              Date:
            </h3>
            <p className="mb-7 text-lg text-[#726d7b]">{project.Date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
