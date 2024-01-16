'use client';

const Project = ({ params }) => {
  console.log(params);
  return <div>Project {params.all}</div>;
};
export default Project;
